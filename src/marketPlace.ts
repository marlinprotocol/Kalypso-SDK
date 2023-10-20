import { AbstractSigner, BigNumberish, BytesLike, ContractTransactionResponse, Overrides, ethers } from "ethers";
import {
  ERC20,
  ERC20__factory,
  ProofMarketPlace,
  ProofMarketPlace__factory,
  EntityKeyRegistry,
  EntityKeyRegistry__factory,
  IProofMarketPlace,
} from "./typechain-types";
import BigNumber from "bignumber.js";
import { encryptDataWithECIESandAesGcm } from "./secretInputOperation";
import * as pako from "pako";
import { AskState } from "./types";

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

  constructor(
    signer: AbstractSigner,
    proofMarketPlaceAddress: string,
    paymentTokenAddress: string,
    platformTokenAddress: string,
    entityKeyRegistryAddress: string
  ) {
    this.signer = signer;
    this.proofMarketPlace = ProofMarketPlace__factory.connect(proofMarketPlaceAddress, this.signer);
    this.paymentToken = ERC20__factory.connect(paymentTokenAddress, this.signer);
    this.platformToken = ERC20__factory.connect(platformTokenAddress, this.signer);
    this.entityKeyRegistry = EntityKeyRegistry__factory.connect(entityKeyRegistryAddress, this.signer);
  }

  public async approvePaymentTokenToMarketPlace(amount: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.paymentToken.approve(await this.proofMarketPlace.getAddress(), amount.toString(), { ...options });
  }

  public async approvePlatformTokenToMarketPlace(amount: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.platformToken.approve(await this.proofMarketPlace.getAddress(), amount.toString(), { ...options });
  }

  public async getPlatformFee(ask: IProofMarketPlace.AskStruct, encryptedSecret: BytesLike, aclData: BytesLike): Promise<BigNumberish> {
    return this.proofMarketPlace.getPlatformFee(ask, encryptedSecret, aclData);
  }
  public async createAskWithEncryptedSecretAndAcl(
    marketId: BytesLike,
    proverData: BytesLike,
    reward: BigNumberish,
    assignmentDeadline: BigNumberish,
    blocksForProofGeneration: BigNumberish,
    refundAddress: string,
    secret: Buffer,
    acl: Buffer,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    const askRequest: IProofMarketPlace.AskStruct = {
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

    const platformFee = await this.getPlatformFee(askRequest, result.encryptedData, result.aclData);
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
      true,
      0,
      secret,
      acl,
      { ...options }
    );
  }

  public async createAsk(
    marketId: BytesLike,
    proverData: BytesLike,
    reward: BigNumberish,
    assignmentDeadline: BigNumberish,
    blocksForProofGeneration: BigNumberish,
    refundAddress: string,
    secretBuffer: Buffer,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    //deflate the secret buffer to reduce tx cost
    secretBuffer = Buffer.from(pako.deflate(secretBuffer));

    const askRequest: IProofMarketPlace.AskStruct = {
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
    const result = await encryptDataWithECIESandAesGcm(secretBuffer, pubKey);
    console.log({ encrypted_secret: result.encryptedData.length, acl: result.aclData.length });

    const platformFee = await this.getPlatformFee(askRequest, result.encryptedData, result.aclData);
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

    return this.proofMarketPlace.createAsk(askRequest, true, 0, result.encryptedData, result.aclData, { ...options });
  }

  public async createNewMarket(
    marketMetaData: BytesLike,
    verifier: string,
    minStakeForGenerator: BigNumberish,
    slashingPenalty: BigNumberish,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    if (new BigNumber(slashingPenalty.toString()).gt(this.exponent)) {
      throw new Error("Slashing penalty can't be more than " + this.exponent.toFixed(0));
    }

    const marketId = ethers.keccak256(marketMetaData);
    console.log("trying to create market", marketId);

    if (this.exponent.gt(minStakeForGenerator.toString())) {
      throw new Error("min staking for generator is " + this.exponent.toFixed(0));
    }

    const marketCreationCost = await this.proofMarketPlace.marketCreationCost();

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

    return await this.proofMarketPlace.createMarketPlace(marketMetaData, verifier, slashingPenalty.toString(), { ...options });
  }

  public async getProofByAskId(askId: string): Promise<getProofWithAskIdResponse> {
    const proof_created_filter = this.proofMarketPlace.filters.ProofCreated(askId);
    const topics = await proof_created_filter.getTopicFilter();

    const logs = await this.signer.provider?.getLogs({
      fromBlock: 0,
      toBlock: "latest",
      address: await this.proofMarketPlace.getAddress(),
      topics,
    });

    if (logs && logs.length != 0) {
      let decoded_event = this.proofMarketPlace.interface.decodeEventLog("ProofCreated", logs[0].data, logs[0].topics);
      return { proof_generated: true, proof: decoded_event[2], message: "Proof fetched." };
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
    let blockNumber = receipt.blockNumber;
    const ask_created_filter = this.proofMarketPlace.filters.AskCreated();
    const ask_id = await this.proofMarketPlace.queryFilter(ask_created_filter, blockNumber, blockNumber);

    if (ask_id[0].args[0]) {
      return ask_id[0].args[0].toString();
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
