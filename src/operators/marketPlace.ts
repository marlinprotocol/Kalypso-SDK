import { AbstractSigner, AddressLike, BigNumberish, BytesLike, ContractTransactionResponse, Overrides, ethers } from "ethers";
import {
  ERC20,
  ERC20__factory,
  ProofMarketplace,
  ProofMarketplace__factory,
  EntityKeyRegistry,
  EntityKeyRegistry__factory,
  Tee_verifier_wrapper_factory__factory,
  Tee_verifier_wrapper__factory,
} from "../typechain-types";
import BigNumber from "bignumber.js";
import { encryptDataWithECIESandAesGcm } from "../helper/secretInputOperation";
import { bigNumberishToBuffer } from "../helper/helpers";
import * as pako from "pako";
import { AskState, KalspsoConfig, PublicAndSecretInputPair } from "../types";
import { MatchingEngineHttpClient } from "../enclaves/matchingEngineHttpClient";
import { IvsHttpClient } from "../enclaves/ivsHttpClient";
import fetch from "node-fetch";
import { PublicKey } from "eciesjs";

type getProofWithAskIdResponse = {
  proof_generated: Boolean;
  proof: BytesLike;
  message: string;
};

const NO_ENCLAVE_ID_1 = "0x99FF0D9125E1FC9531A11262E15AEB2C60509A078C4CC4C64CEFDFB06FF68647".toLowerCase();
const NO_ENCLAVE_ID_2 = "0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase();

export class MarketPlace {
  private signer: AbstractSigner;
  private proofMarketPlace: ProofMarketplace;
  private paymentToken: ERC20;
  private platformToken: ERC20;
  private entityKeyRegistry: EntityKeyRegistry;

  private exponent = new BigNumber(10).pow(18);

  private matchingEngineHttpClient!: MatchingEngineHttpClient;

  private ivsHttpClient!: IvsHttpClient;

  private checkInputUrl: string;

  constructor(signer: AbstractSigner, config: KalspsoConfig) {
    this.signer = signer;
    this.proofMarketPlace = ProofMarketplace__factory.connect(config.proof_market_place, this.signer);
    this.paymentToken = ERC20__factory.connect(config.payment_token, this.signer);
    this.platformToken = ERC20__factory.connect(config.staking_token, this.signer);
    this.entityKeyRegistry = EntityKeyRegistry__factory.connect(config.entity_registry, this.signer);

    this.checkInputUrl = config.checkInputUrl;

    if (config.matchingEngineEnclave) {
      this.matchingEngineHttpClient = new MatchingEngineHttpClient(
        config.matchingEngineEnclave.url,
        config.matchingEngineEnclave.utilityUrl,
        config,
        config.matchingEngineEnclave.apikey,
      );
    }

    if (config.ivsEnclave) {
      this.ivsHttpClient = new IvsHttpClient(
        config.attestationVerifierEndPoint,
        config.ivsEnclave.url,
        config.ivsEnclave.utilityUrl,
        config.checkInputUrl,
        config.ivsEnclave.apikey,
      );
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

  public async readMePubKeyInContract(): Promise<BytesLike> {
    return await this.entityKeyRegistry.pub_key(await this.proofMarketPlace.getAddress(), 0);
  }

  public async askCounter(): Promise<number> {
    const askCounter = await this.proofMarketPlace.askCounter();
    return new BigNumber(askCounter.toString()).toNumber();
  }

  public async getPlatformFee(
    secretType: BigNumberish,
    ask: ProofMarketplace.AskStruct,
    encryptedSecret: BytesLike,
    aclData: BytesLike,
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
    encryptedData: Buffer,
    aclData: Buffer,
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    const askRequest: ProofMarketplace.AskStruct = {
      marketId,
      proverData,
      reward,
      expiry: assignmentDeadline,
      timeTakenForProofGeneration: blocksForProofGeneration,
      deadline: 0,
      refundAddress: refundAddress,
    };

    const platformFee = await this.getPlatformFee(secretType, askRequest, encryptedData, aclData);
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
      await this.proofMarketPlace.getAddress(),
    );
    if (new BigNumber(platformTokenAllowance.toString()).lt(platformFee.toString())) {
      const approvalTx = await this.platformToken.approve(await this.proofMarketPlace.getAddress(), platformFee.toString());
      const approvalReceipt = await approvalTx.wait();
      console.log("Approval Tx: ", approvalReceipt?.hash);
    }

    const paymentTokenAllowance = await this.paymentToken.allowance(
      await this.signer.getAddress(),
      await this.proofMarketPlace.getAddress(),
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
      encryptedData,
      aclData,
      { ...options },
    );
  }

  public async verifyEncryptedInputs(
    publicAndSecretInputPair: PublicAndSecretInputPair,
    me_decryption_url: string,
    market_id: String,
  ): Promise<any> {
    // pub acl: Vec<u8>,
    // pub public_inputs: Option<Vec<u8>>,
    // pub encrypted_secrets: Vec<u8>,
    // pub me_decryption_url: String,
    // pub market_id: String,

    let verify_encrypted_inputs = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        acl: Array.from(publicAndSecretInputPair.acl),
        public_inputs: Array.from(publicAndSecretInputPair.publicInputs),
        encrypted_secrets: Array.from(publicAndSecretInputPair.encryptedSecret),
        me_decryption_url,
        market_id,
      }),
    };

    let response = await fetch(this.checkInputUrl, verify_encrypted_inputs);

    if (!response.ok) {
      console.log(await response.status);
      throw new Error(`Error: ${response.status}`);
    }
    const return_data = await response.json();

    return return_data.valid || false;
  }

  public static async createEncryptedRequestForIvs(
    proverData: BytesLike,
    secretBuffer: Buffer,
    marketId: BigNumberish,
    eciesPubKey: string,
  ): Promise<PublicAndSecretInputPair> {
    const pubKey = eciesPubKey.split("x")[1]; // this is hex string
    const associatedData = bigNumberishToBuffer(marketId);
    const result = await encryptDataWithECIESandAesGcm(secretBuffer, pubKey, associatedData);

    return {
      publicInputs: Buffer.from(proverData.toString().split("0x")[1], "hex"),
      encryptedSecret: result.encryptedData,
      acl: result.aclData,
    };
  }

  public static async createEncryptedRequestData(
    proverData: BytesLike,
    secretBuffer: Buffer,
    marketId: BigNumberish,
    eciesPubKey: string,
  ): Promise<PublicAndSecretInputPair> {
    //deflate the secret buffer to reduce tx cost
    secretBuffer = Buffer.from(pako.deflate(secretBuffer));

    return MarketPlace.createEncryptedRequestForIvs(proverData, secretBuffer, marketId, eciesPubKey);
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
    checkMeKeyBeforeSendingTx: boolean = true,
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    //deflate the secret buffer to reduce tx cost
    secretBuffer = Buffer.from(pako.deflate(secretBuffer));

    const askRequest: ProofMarketplace.AskStruct = {
      marketId,
      proverData,
      reward,
      expiry: assignmentDeadline,
      timeTakenForProofGeneration: blocksForProofGeneration,
      deadline: 0,
      refundAddress: refundAddress,
    };
    const matchingEnginePubKeyAsPerContracts = await this.entityKeyRegistry.pub_key(await this.proofMarketPlace.getAddress(), 0);
    if (matchingEnginePubKeyAsPerContracts.length !== 130) {
      console.log({ matchingEnginePubKeyAsPerContracts });
      throw new Error("matching engine pub key is not updated in the registry or wrong");
    }

    if (checkMeKeyBeforeSendingTx) {
      const compressedMatchingEnginePubKeyAsPerContracts = PublicKey.fromHex(matchingEnginePubKeyAsPerContracts).compressed.toString("hex");
      const meKeyAsPerEnclave = (await this.MatchingEngineEnclaveConnector().getMatchingEnginePublicKeys()).data
        .matching_engine_ecies_public_key;

      if ("0x" + compressedMatchingEnginePubKeyAsPerContracts !== meKeyAsPerEnclave) {
        console.log({ compressedMatchingEnginePubKeyAsPerContracts, meKeyAsPerEnclave });
        throw new Error("Matching Engine keys are not likely in sync with contracts");
      }
    }

    const pubKey = matchingEnginePubKeyAsPerContracts.split("x")[1]; // this is hex string
    const marketData = await this.proofMarketPlace.marketData(marketId);

    let dataToSend = secretBuffer;
    let aclData = Buffer.from("");

    if (![NO_ENCLAVE_ID_1, NO_ENCLAVE_ID_2].includes(marketData.proverImageId.toLowerCase())) {
      const associatedData = bigNumberishToBuffer(marketId);
      const result = await encryptDataWithECIESandAesGcm(secretBuffer, pubKey, associatedData);
      console.log({ encrypted_secret: result.encryptedData.length, acl: result.aclData.length });
      dataToSend = result.encryptedData;
      aclData = result.aclData;
    }

    const paymentTokenBalance = await this.paymentToken.balanceOf(await this.signer.getAddress());
    if (new BigNumber(paymentTokenBalance.toString()).lt(reward.toString())) {
      throw new Error("Ensure sufficient payment token balance");
    }

    const paymentTokenAllowance = await this.paymentToken.allowance(
      await this.signer.getAddress(),
      await this.proofMarketPlace.getAddress(),
    );
    if (new BigNumber(paymentTokenAllowance.toString()).lt(reward.toString())) {
      const approvalTx = await this.paymentToken.approve(
        await this.proofMarketPlace.getAddress(),
        new BigNumber(reward.toString()).multipliedBy(10).toFixed(0),
      );
      const approvalReceipt = await approvalTx.wait();
      console.log("Approval Tx: ", approvalReceipt?.hash);
    }

    return this.proofMarketPlace.createAsk(askRequest, secretType, dataToSend, aclData, { ...options });
  }

  public async createPrivateMarket(
    marketMetaData: BytesLike,
    verifier: string,
    slashingPenalty: BigNumberish,
    proverPcrs: BytesLike,
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    return this.createNewMarket(marketMetaData, verifier, slashingPenalty, proverPcrs, proverPcrs, options);
  }

  public async addExtraImagesToMarket(
    marketId: BigNumberish,
    proverImages: BytesLike[],
    ivsImages: BytesLike[],
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    return this.proofMarketPlace.addExtraImages(marketId, proverImages, ivsImages, { ...options });
  }

  public async createPublicMarket(
    marketMetaData: BytesLike,
    verifier: string,
    slashingPenalty: BigNumberish,
    ivsPcrs: BytesLike,
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    const zero_pcr = "0x" + "00".repeat(48);
    let abicode = new ethers.AbiCoder();
    let noEnclavePcrs = abicode.encode(["bytes", "bytes", "bytes"], [zero_pcr, zero_pcr, zero_pcr]);

    return this.createNewMarket(marketMetaData, verifier, slashingPenalty, noEnclavePcrs, ivsPcrs, options);
  }

  public async createTeeVerifier(
    admin: AddressLike,
    teeDeployer: AddressLike,
    av: AddressLike,
    rlpedPcrs: BytesLike,
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    const tee_deployer = Tee_verifier_wrapper_factory__factory.connect(teeDeployer.toString(), this.signer);
    return tee_deployer.create_tee_verifier_wrapper(admin, av, [rlpedPcrs], { ...options });
  }

  public async addImageToTeeVerifier(
    admin: AddressLike,
    teeVerifier: AddressLike,
    rlpedPcrs: BytesLike,
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    const tee_verifier = Tee_verifier_wrapper__factory.connect(teeVerifier.toString(), this.signer);
    return tee_verifier.addEnclaveImageToFamily(rlpedPcrs, { ...options });
  }

  public async verifyTeeKey(teeVerifier: AddressLike, attestation: BytesLike): Promise<ContractTransactionResponse> {
    const teeV_verifier = Tee_verifier_wrapper__factory.connect(teeVerifier.toString(), this.signer);

    return teeV_verifier.verifyKey(attestation);
  }

  private async createNewMarket(
    marketMetaData: BytesLike,
    verifier: string,
    slashingPenalty: BigNumberish,
    proverPcrs: BytesLike,
    ivsPcrs: BytesLike,
    options?: Overrides,
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

    return await this.proofMarketPlace.createMarketplace(marketMetaData, verifier, slashingPenalty.toString(), proverPcrs, ivsPcrs, {
      ...options,
    });
  }

  public async getProofByAskId(askId: string, blockNumber: number): Promise<getProofWithAskIdResponse> {
    const proof_created_filter = this.proofMarketPlace.filters.ProofCreated(askId);
    const invalid_input_filter = this.proofMarketPlace.filters.InvalidInputsDetected(askId);

    let startBlock = blockNumber;
    let startBlock2 = blockNumber;
    const latestBlock = await this.signer.provider?.getBlockNumber();

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
        return { proof_generated: true, proof: decoded_event[1], message: "Proof fetched." };
      }

      startBlock = _endBlock + 1;
    }

    while (startBlock2 <= latestBlock!) {
      const _endBlock = Math.min(startBlock2 + 9999, latestBlock!);
      console.log(`Looking for proof from block ${startBlock2} to ${_endBlock}`);

      const topics = await invalid_input_filter.getTopicFilter();

      const logs = await this.signer.provider?.getLogs({
        fromBlock: startBlock2,
        toBlock: _endBlock,
        address: await this.proofMarketPlace.getAddress(),
        topics,
      });

      if (logs && logs.length != 0) {
        return { proof_generated: false, proof: "", message: "Proof InvalidInputsDetected." };
      }
      startBlock2 = _endBlock + 1;
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
  public async getAskId(receipt: ethers.TransactionReceipt | ethers.ContractTransactionReceipt): Promise<string> {
    for (let index = 0; index < receipt.logs.length; index++) {
      const receipt_log = receipt.logs[index];
      let log = { topics: receipt_log.topics.flat(), data: receipt_log.data };
      let decoded_log = this.proofMarketPlace.interface.parseLog(log);
      if (decoded_log && decoded_log.args[0]) {
        return decoded_log.args[0].toString();
      }
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
}
