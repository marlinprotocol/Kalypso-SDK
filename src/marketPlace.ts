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
import { encryptDataWithECIESandAES, decryptDataWithECIESandAES } from "./secretInputOperation";

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

  public async getPlatformFee(proverData: BytesLike): Promise<BigNumberish> {
    const perByte = await this.proofMarketPlace.costPerInputBytes();
    const proverDataLength = proverData.toString().length;
    return new BigNumber(perByte.toString()).multipliedBy(proverDataLength).toString();
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
    const platformFee = await this.getPlatformFee(proverData);
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

    const matchingEnginePubKey = await this.entityKeyRegistry.pub_key(await this.proofMarketPlace.getAddress());
    if (matchingEnginePubKey.length <= 2) {
      throw new Error("matching engine pub key is not updated in the registry");
    }

    const pubKey = matchingEnginePubKey.split("x")[1]; // this is hex string

    const result = await encryptDataWithECIESandAES(secretBuffer, pubKey);
    console.log({ encrypted_secret: result.encryptedData.length, acl: result.aclData.length });

    throw new Error("this will work");
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
      result.encryptedData,
      result.aclData,
      { ...options }
    );
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

  public async getProofByAskId(askId: string): Promise<BytesLike> {
    const proof_created_filter = this.proofMarketPlace.filters.ProofCreated(askId);
    const topics = await proof_created_filter.getTopicFilter();

    const logs = await this.signer.provider?.getLogs({
      fromBlock: 0,
      toBlock: "latest",
      address: await this.proofMarketPlace.getAddress(),
      topics,
    });

    // TODO: return only proof any not the whole event
    if (logs && logs.length != 0) {
      // only one such log should be available
      return logs[0].data;
    }

    throw new Error("Proof not found");
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
}
