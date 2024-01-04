import { AbstractSigner, BigNumberish, BytesLike, ContractTransactionResponse, Overrides, ethers } from "ethers";
import {
  ERC20,
  ERC20__factory,
  ProofMarketPlace,
  ProofMarketPlace__factory,
  EntityKeyRegistry,
  EntityKeyRegistry__factory,
} from "./typechain-types";
import BigNumber from "bignumber.js";
import { encryptDataWithECIESandAesGcm } from "./secretInputOperation";
import * as pako from "pako";
import { AskState, KalspsoConfig, PublicAndSecretInputPair } from "./types";
import { MatchingEngineHttpClient } from "./matchingEngineHttpClient";
import { IvsHttpClient } from "./ivsHttpClient";
import fetch from "node-fetch";
import { PublicKey } from "eciesjs";

type getProofWithAskIdResponse = {
  proof_generated: Boolean;
  proof: BytesLike;
  message: string;
};

export class MarketPlace {
  private signer: AbstractSigner;
  private proofMarketPlace: ProofMarketPlace;
  private paymentToken: ERC20;
  private platformToken: ERC20;
  private entityKeyRegistry: EntityKeyRegistry;

  private exponent = new BigNumber(10).pow(18);

  private matchingEngineHttpClient!: MatchingEngineHttpClient;

  private ivsHttpClient!: IvsHttpClient;

  constructor(signer: AbstractSigner, config: KalspsoConfig) {
    this.signer = signer;
    this.proofMarketPlace = ProofMarketPlace__factory.connect(config.proof_market_place, this.signer);
    this.paymentToken = ERC20__factory.connect(config.payment_token, this.signer);
    this.platformToken = ERC20__factory.connect(config.staking_token, this.signer);
    this.entityKeyRegistry = EntityKeyRegistry__factory.connect(config.entity_registry, this.signer);

    if (config.matchingEngineEnclave) {
      this.matchingEngineHttpClient = new MatchingEngineHttpClient(
        config.matchingEngineEnclave.url,
        config.matchingEngineEnclave.utilityUrl,
        config,
        config.matchingEngineEnclave.apikey
      );
    }

    if (config.ivsEnclave) {
      this.ivsHttpClient = new IvsHttpClient(config.ivsEnclave.url, config.ivsEnclave.utilityUrl, config.ivsEnclave.apikey);
    }
  }

  public MatchingEngineEnclaveConnector(): MatchingEngineHttpClient {
    if (!this.matchingEngineHttpClient) {
      throw new Error("matching enclave url is not defined");
    }
    return this.matchingEngineHttpClient;
  }

  public IvsEnclaveConnector(): IvsHttpClient {
    if (!this.ivsHttpClient) {
      throw new Error("IVS enclave url is not defined");
    }

    return this.ivsHttpClient;
  }

  public async approvePaymentTokenToMarketPlace(amount: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.paymentToken.approve(await this.proofMarketPlace.getAddress(), amount.toString(), { ...options });
  }

  public async approvePlatformTokenToMarketPlace(amount: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.platformToken.approve(await this.proofMarketPlace.getAddress(), amount.toString(), { ...options });
  }

  public async getPlatformFee(
    secretType: BigNumberish,
    ask: ProofMarketPlace.AskStruct,
    encryptedSecret: BytesLike,
    aclData: BytesLike
  ): Promise<BigNumberish> {
    return this.proofMarketPlace.getPlatformFee(secretType, ask, encryptedSecret, aclData);
  }
  public async createAskWithEncryptedSecretAndAcl(
    marketId: BigNumberish,
    proverData: BytesLike,
    reward: BigNumberish,
    assignmentDeadline: BigNumberish,
    blocksForProofGeneration: BigNumberish,
    refundAddress: string,
    secretType: BigNumberish,
    secret: Buffer,
    acl: Buffer,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    const askRequest: ProofMarketPlace.AskStruct = {
      marketId,
      proverData,
      reward,
      expiry: assignmentDeadline,
      timeTakenForProofGeneration: blocksForProofGeneration,
      deadline: 0,
      refundAddress: refundAddress,
    };

    const matchingEnginePubKey = await this.entityKeyRegistry.pub_key(await this.proofMarketPlace.getAddress());
    // if key is rightly updated, it should 68 chars (33 bytes in length)
    if (matchingEnginePubKey.length !== 68) {
      throw new Error("matching engine pub key is not updated in the registry");
    }

    const pubKey = matchingEnginePubKey.split("x")[1]; // this is hex string
    const result = await encryptDataWithECIESandAesGcm(secret, pubKey);

    const platformFee = await this.getPlatformFee(secretType, askRequest, result.encryptedData, result.aclData);
    const platformTokenBalance = await this.platformToken.balanceOf(this.signer.getAddress());

    if (new BigNumber(platformTokenBalance.toString()).lt(platformFee.toString())) {
      throw new Error("Ensure sufficient platform token balance");
    }

    const paymentTokenBalance = await this.paymentToken.balanceOf(await this.signer.getAddress());
    if (new BigNumber(paymentTokenBalance.toString()).lt(reward.toString())) {
      throw new Error("Ensure sufficient payment token balance");
    }

    const platformTokenAllowance = await this.platformToken.allowance(
      await this.signer.getAddress(),
      await this.proofMarketPlace.getAddress()
    );
    if (new BigNumber(platformTokenAllowance.toString()).lt(platformFee.toString())) {
      const approvalTx = await this.platformToken.approve(await this.proofMarketPlace.getAddress(), platformFee.toString());
      const approvalReceipt = await approvalTx.wait();
      console.log("Approval Tx: ", approvalReceipt?.hash);
    }

    const paymentTokenAllowance = await this.paymentToken.allowance(
      await this.signer.getAddress(),
      await this.proofMarketPlace.getAddress()
    );
    if (new BigNumber(paymentTokenAllowance.toString()).lt(reward.toString())) {
      const approvalTx = await this.paymentToken.approve(await this.proofMarketPlace.getAddress(), reward.toString());
      const approvalReceipt = await approvalTx.wait();
      console.log("Approval Tx: ", approvalReceipt?.hash);
    }

    return this.proofMarketPlace.createAsk(
      {
        marketId,
        proverData,
        reward,
        expiry: assignmentDeadline,
        timeTakenForProofGeneration: blocksForProofGeneration,
        deadline: 0,
        refundAddress: refundAddress,
      },
      secretType,
      secret,
      acl,
      { ...options }
    );
  }

  public async checkInputsAndEncryptedSecretWithIvs(marketId: BigNumberish, proverData: BytesLike, secretBuffer: Buffer): Promise<boolean> {
    //this should fetched from proof market place contract
    // const ivsUrl = "http://localhost:3030/checkInput";

    const marketData = await this.proofMarketPlace.marketData(marketId);
    const ivsUrl = Buffer.from(marketData.ivsUrl.split("0x")[1], "hex").toString();

    // const eciesPubKey = "0x024813e9113562b2659f7a062c4eca19f89efb9b1c80df439d2eef3c9f0f370001";
    // const eciesPubKey = "0x044813e9113562b2659f7a062c4eca19f89efb9b1c80df439d2eef3c9f0f370001e06393ff736f11f4e4122dfe570b3823d756358b3955811ef704690dc40e6b22"

    const eciesPubKey = await this.entityKeyRegistry.pub_key(marketData.ivsSigner);
    console.log(eciesPubKey);

    if (eciesPubKey == "0x" || eciesPubKey.length != 130) {
      throw new Error(
        `MarketId: ${marketId} has not published it's IVS ecies pubkey and signer to the entity registry contract. Avoid using it or else loose funds`
      );
    }

    const result = await this.createPublicAndEncryptedSecretPair(proverData, secretBuffer, eciesPubKey);

    console.log("Checking encrypted request against ivs", ivsUrl);

    const response = await fetch(ivsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        public_inputs: result.publicInputs.toString("hex"),
        encrypted_secret: result.encryptedSecret.toString("hex"),
        acl: result.acl.toString("hex"),
      }),
    });
    if (!response.ok) {
      console.error(response);
      throw new Error(`Error: ${response.status}`);
    }

    if (response.status >= 200 && response.status < 300) {
      return true;
    }
    return false;
  }

  public async createPublicAndEncryptedSecretPair(
    proverData: BytesLike,
    secretBuffer: Buffer,
    eciesPubKey?: string
  ): Promise<PublicAndSecretInputPair> {
    //deflate the secret buffer to reduce tx cost
    secretBuffer = Buffer.from(pako.deflate(secretBuffer));

    if (!eciesPubKey) {
      const matchingEnginePubKey = await this.entityKeyRegistry.pub_key(await this.proofMarketPlace.getAddress());
      if (matchingEnginePubKey.length !== 130) {
        throw new Error("matching engine pub key is not updated in the registry");
      }
      eciesPubKey = matchingEnginePubKey;
    }

    const pubKey = eciesPubKey.split("x")[1]; // this is hex string
    const result = await encryptDataWithECIESandAesGcm(secretBuffer, pubKey);
    console.log({ encrypted_secret: result.encryptedData.length, acl: result.aclData.length });

    return {
      publicInputs: Buffer.from(proverData.toString().split("0x")[1], "hex"),
      encryptedSecret: result.encryptedData,
      acl: result.aclData,
    };
  }

  public async checkPublicAndEncryptedSecretPairWithIvs(marketId: BigNumberish, data: PublicAndSecretInputPair): Promise<boolean> {
    const marketData = await this.proofMarketPlace.marketData(marketId);
    const ivsUrl = marketData.ivsUrl; // convert from bytes to ascii

    // make http post call to ivsUrl with data payload, if status is 200 and reply is OK, return true
    throw new Error("Wip");
  }

  public async createAsk(
    marketId: BigNumberish,
    proverData: BytesLike,
    reward: BigNumberish,
    assignmentDeadline: BigNumberish,
    blocksForProofGeneration: BigNumberish,
    refundAddress: string,
    secretType: BigNumberish,
    secretBuffer: Buffer,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    //deflate the secret buffer to reduce tx cost
    secretBuffer = Buffer.from(pako.deflate(secretBuffer));

    const askRequest: ProofMarketPlace.AskStruct = {
      marketId,
      proverData,
      reward,
      expiry: assignmentDeadline,
      timeTakenForProofGeneration: blocksForProofGeneration,
      deadline: 0,
      refundAddress: refundAddress,
    };
    const matchingEnginePubKey = await this.entityKeyRegistry.pub_key(await this.proofMarketPlace.getAddress());
    // 64 bytes
    if (matchingEnginePubKey.length !== 130) {
      throw new Error("matching engine pub key is not updated in the registry or wrong");
    }

    const pubKey = matchingEnginePubKey.split("x")[1]; // this is hex string
    const marketData = await this.proofMarketPlace.marketData(marketId);

    let dataToSend = secretBuffer;
    let aclData = Buffer.from("");

    if (marketData.isEnclaveRequired) {
      const result = await encryptDataWithECIESandAesGcm(secretBuffer, pubKey);
      console.log({ encrypted_secret: result.encryptedData.length, acl: result.aclData.length });
      dataToSend = result.encryptedData;
      aclData = result.aclData;
    }

    const platformFee = await this.getPlatformFee(secretType, askRequest, dataToSend, aclData);
    const platformTokenBalance = await this.platformToken.balanceOf(this.signer.getAddress());
    if (new BigNumber(platformTokenBalance.toString()).lt(platformFee.toString())) {
      throw new Error("Ensure sufficient platform token balance");
    }

    const paymentTokenBalance = await this.paymentToken.balanceOf(await this.signer.getAddress());
    if (new BigNumber(paymentTokenBalance.toString()).lt(reward.toString())) {
      throw new Error("Ensure sufficient payment token balance");
    }

    const platformTokenAllowance = await this.platformToken.allowance(
      await this.signer.getAddress(),
      await this.proofMarketPlace.getAddress()
    );
    if (new BigNumber(platformTokenAllowance.toString()).lt(platformFee.toString())) {
      const approvalTx = await this.platformToken.approve(await this.proofMarketPlace.getAddress(), platformFee.toString());
      const approvalReceipt = await approvalTx.wait();
      console.log("Approval Tx: ", approvalReceipt?.hash);
    }

    const paymentTokenAllowance = await this.paymentToken.allowance(
      await this.signer.getAddress(),
      await this.proofMarketPlace.getAddress()
    );
    if (new BigNumber(paymentTokenAllowance.toString()).lt(reward.toString())) {
      const approvalTx = await this.paymentToken.approve(await this.proofMarketPlace.getAddress(), reward.toString());
      const approvalReceipt = await approvalTx.wait();
      console.log("Approval Tx: ", approvalReceipt?.hash);
    }

    return this.proofMarketPlace.createAsk(askRequest, secretType, dataToSend, aclData, { ...options });
  }

  public async createNewMarket(
    marketMetaData: BytesLike,
    verifier: string,
    slashingPenalty: BigNumberish,
    isEnclaveRequired: boolean,
    ivsAttestationBytes: BytesLike,
    ivsUrl: string,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    if (new BigNumber(slashingPenalty.toString()).gt(this.exponent)) {
      throw new Error("Slashing penalty can't be more than " + this.exponent.toFixed(0));
    }

    const marketId = await this.proofMarketPlace.marketCounter();
    console.log("trying to create market. Possible market id. Check transaction logs for exact market id", marketId.toString());

    const marketCreationCost = await this.proofMarketPlace.MARKET_CREATION_COST();

    const availableBalance = await this.paymentToken.balanceOf(await this.signer.getAddress());

    if (new BigNumber(availableBalance.toString()).lt(marketCreationCost.toString())) {
      throw new Error("Insufficient balance in the wallet to create market");
    }

    const allowance = await this.paymentToken.allowance(await this.signer.getAddress(), await this.proofMarketPlace.getAddress());

    if (new BigNumber(allowance.toString()).lt(marketCreationCost.toString())) {
      const approvalTx = await this.approvePaymentTokenToMarketPlace(marketCreationCost);
      const approvalReceipt = await approvalTx.wait();

      console.log("Approved Tokens: ", approvalReceipt?.hash);
    }

    return await this.proofMarketPlace.createMarketPlace(
      marketMetaData,
      verifier,
      slashingPenalty.toString(),
      isEnclaveRequired,
      ivsAttestationBytes,
      Buffer.from(ivsUrl, "ascii"),
      { ...options }
    );
  }

  public async getProofByAskId(askId: string, blockNumber: number): Promise<getProofWithAskIdResponse> {
    const proof_created_filter = this.proofMarketPlace.filters.ProofCreated(askId);

    let startBlock = blockNumber;
    const latestBlock = await this.signer.provider?.getBlockNumber();
    console.log("Latest block : ", latestBlock);
    while (startBlock <= latestBlock!) {
      const _endBlock = Math.min(startBlock + 9999, latestBlock!);
      console.log(`Looking for proof from block ${startBlock} to ${_endBlock}`);

      const topics = await proof_created_filter.getTopicFilter();

      const logs = await this.signer.provider?.getLogs({
        fromBlock: startBlock,
        toBlock: _endBlock,
        address: await this.proofMarketPlace.getAddress(),
        topics,
      });

      if (logs && logs.length != 0) {
        let decoded_event = this.proofMarketPlace.interface.decodeEventLog("ProofCreated", logs[0].data, logs[0].topics);
        return { proof_generated: true, proof: decoded_event[2], message: "Proof fetched." };
      }

      startBlock = _endBlock + 1;
    }

    return { proof_generated: false, proof: "0x", message: "Proof not submitted yet." };
  }

  public async getProofByTaskId(taskId: string): Promise<BytesLike> {
    const proof_created_filter = this.proofMarketPlace.filters.ProofCreated(undefined, taskId);
    const topics = await proof_created_filter.getTopicFilter();

    const logs = await this.signer.provider?.getLogs({
      fromBlock: 0,
      toBlock: "latest",
      address: await this.proofMarketPlace.getAddress(),
      topics,
    });

    // Todo: return only proof and not the whole event
    if (logs && logs.length != 0) {
      return logs[0].data;
    }

    throw new Error("Proof Not Found");
  }

  //Fetching the AskId
  public async getAskId(receipt: ethers.TransactionReceipt): Promise<string> {
    let ask_created_log = { topics: receipt.logs[4].topics.flat(), data: receipt.logs[4].data };
    let decoded_logs = this.proofMarketPlace.interface.parseLog(ask_created_log);
    if (decoded_logs?.args[0]) {
      return decoded_logs.args[0].toString();
    }
    throw new Error("Ask Id not found for the give receipt");
  }

  public async getAskState(askId: BigNumberish): Promise<AskState> {
    const state = await this.proofMarketPlace.getAskState(askId);
    const stateNumber = new BigNumber(state.toString()).toNumber();

    if (stateNumber == 0) {
      return AskState.NULL;
    } else if (stateNumber == 1) {
      return AskState.CREATE;
    } else if (stateNumber == 2) {
      return AskState.UNASSIGNED;
    } else if (stateNumber == 3) {
      return AskState.ASSIGNED;
    } else if (stateNumber == 4) {
      return AskState.COMPLETE;
    } else if (stateNumber == 5) {
      return AskState.DEADLINE_CROSSED;
    }

    return AskState.NULL;
  }

  public async getKeysAndAddressFromAttestation(attesationDoc: BytesLike): Promise<[string, string]> {
    return this.entityKeyRegistry.getPubkeyAndAddress(attesationDoc);
  }
}
