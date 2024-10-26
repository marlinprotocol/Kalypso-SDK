import { AbstractSigner, BigNumberish, BytesLike, ContractTransactionResponse, Overrides } from "ethers";
import {
  ERC20,
  ERC20__factory,
  GeneratorRegistry,
  GeneratorRegistry__factory,
  ProofMarketplace,
  ProofMarketplace__factory,
} from "../typechain-types";
import BigNumber from "bignumber.js";
import { KalspsoConfig } from "../types";
import { GeneratorHttpClient } from "../enclaves/generatorHttpClient";

const exp = new BigNumber(10).pow(18);
export class Generator {
  private signer: AbstractSigner;
  private generatorRegistry: GeneratorRegistry;
  private stakingToken: ERC20;
  private proofMarketplace: ProofMarketplace;

  private generatorhttpClient!: GeneratorHttpClient;

  constructor(signer: AbstractSigner, config: KalspsoConfig) {
    this.signer = signer;
    this.generatorRegistry = GeneratorRegistry__factory.connect(config.generator_registry, this.signer);
    this.stakingToken = ERC20__factory.connect(config.staking_token, this.signer);
    this.proofMarketplace = ProofMarketplace__factory.connect(config.proof_market_place, this.signer);

    if (config.generatorEnclave) {
      this.generatorhttpClient = new GeneratorHttpClient(
        config.generatorEnclave.url,
        config.generatorEnclave.utilityUrl,
        config,
        config.generatorEnclave.enclavePubkey
      );
    }
  }

  public GeneratorEnclaveConnector(): GeneratorHttpClient {
    if (!this.generatorhttpClient) {
      throw new Error("Generator Enclave URL is not provided");
    }

    return this.generatorhttpClient;
  }

  /**
   *
   * @param rewardAddress Reward Address on which generator will accrue all this rewards
   * @param declaredCompute Total compute of the generator\
   * @param generatorData Additional meta data of the generator
   * @param options
   * @returns
   */
  public async register(
    rewardAddress: string,
    declaredCompute: BigNumberish,
    generatorData: BytesLike,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    const result = await this.generatorRegistry.generatorRegistry(await this.signer.getAddress());
    if (result.rewardAddress != "0x0000000000000000000000000000000000000000") {
      throw new Error("Generator is already registered");
    }
    return this.generatorRegistry.register(rewardAddress, declaredCompute, 0, generatorData, { ...options });
  }

  /**
   * @param refundAddress address to which the generator receives the refund
   * @param options
   * @returns
   */
  public async deregister(refundAddress: string, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.generatorRegistry.deregister(refundAddress, { ...options });
  }

  /**
   *
   * @returns The total stake of the generator in the ecosystem
   */
  public async getStake(): Promise<BigNumberish> {
    return (await this.generatorRegistry.generatorRegistry(await this.signer.getAddress())).totalStake;
  }

  /**
   *
   * @returns Returns the total compute of the generator in ecosystem
   */
  public async getCompute(): Promise<BigNumberish> {
    return (await this.generatorRegistry.generatorRegistry(await this.signer.getAddress())).declaredCompute;
  }

  /**
   *
   * @param generatorAddress Address to which you want to stake
   * @param amount Amount to stake
   * @param options
   * @returns
   */
  public async stake(generatorAddress: string, amount: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    const currentBalance = await this.stakingToken.balanceOf(await this.signer.getAddress());

    if (new BigNumber(amount.toString()).gt(currentBalance.toString())) {
      throw new Error("Insufficient balance in current account to stake");
    }

    const currentAllowance = await this.stakingToken.allowance(await this.signer.getAddress(), await this.generatorRegistry.getAddress());

    if (new BigNumber(currentAllowance.toString()).lt(amount.toString())) {
      const approvalTx = await this.approveGeneratorRegistry(amount);
      const approvalReceipt = await approvalTx.wait();
      console.log("Approval Tx: ", approvalReceipt?.hash);
    }

    return this.generatorRegistry.stake(generatorAddress, amount.toString(), { ...options });
  }

  /**
   *
   * @param to Amount to which you should reduce the stake
   * @param options
   * @returns
   */
  public async requestToReduceStake(to: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    const currentStake = await this.getStake();
    let _to = new BigNumber(to.toString());
    if (_to.gte(currentStake.toString())) {
      throw new Error("stake to reduce to must be smaller than current stake");
    }

    let newUtilization = _to.multipliedBy(exp).dividedBy(currentStake.toString());

    return this.generatorRegistry.intendToReduceStake(newUtilization.toFixed(0), { ...options });
  }

  public async unstake(to: string, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.generatorRegistry.unstake(to, { ...options });
  }

  /**
   *
   * @param by Number by which you are about to increase the compute
   * @param options
   * @returns
   */
  public async increaseCompute(by: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.generatorRegistry.increaseDeclaredCompute(by, { ...options });
  }

  /**
   *
   * @param to Number to which you want to reduce the stake
   * @param options
   * @returns
   */
  public async requestToReduceCompute(to: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    const currentCompute = await this.getCompute();
    let _to = new BigNumber(to.toString());
    if (_to.gte(currentCompute.toString())) {
      throw new Error("compute to reduce to must be smaller than current compute");
    }

    let newUtilization = _to.multipliedBy(exp).dividedBy(currentCompute.toString());

    return this.generatorRegistry.intendToReduceCompute(newUtilization.toFixed(0), { ...options });
  }

  /**
   *
   * @param options Confirm decrease compute call
   * @returns
   */
  public async decreaseCompute(options?: Overrides): Promise<ContractTransactionResponse> {
    return this.generatorRegistry.decreaseDeclaredCompute({ ...options });
  }

  /**
   *
   * @param amount Approve tokens to generator registry
   * @param options
   * @returns
   */
  public async approveGeneratorRegistry(amount: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return await this.stakingToken.approve(await this.generatorRegistry.getAddress(), amount.toString(), { ...options });
  }

  /**
   *
   * @param marketId Market ID to join
   * @param computeAllocation fraction of you allocation that you wish to allocate to this market
   * @param proofGeneratorCost Cost of generating a proof
   * @param proposedTime maximum time takes for generating a proof
   * @param attestationData Enclave attestation
   * @param enclaveSignature Enclave signature
   * @param options
   * @returns
   */
  public async joinMarketPlace(
    marketId: BigNumberish,
    computeAllocation: BigNumberish,
    proofGeneratorCost: BigNumberish,
    proposedTime: BigNumberish,
    attestationData: BytesLike,
    enclaveSignature: BytesLike,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    const data = await this.generatorRegistry.generatorInfoPerMarket(await this.signer.getAddress(), marketId);
    if (!new BigNumber(data.proposedTime.toString()).eq(0)) {
      throw new Error("Already part of this market");
    }

    return await this.generatorRegistry.joinMarketplace(
      marketId,
      computeAllocation.toString(),
      proofGeneratorCost.toString(),
      proposedTime.toString(),
      true,
      attestationData,
      enclaveSignature,
      { ...options }
    );
  }

  /**
   *
   * @param marketId Market ID to join
   * @param computeAllocation fraction of you allocation that you wish to allocate to this market
   * @param proofGeneratorCost Cost of generating a proof
   * @param proposedTime maximum time takes for generating a proof
   * @param options
   * @returns
   */
  public async joinMarketPlaceWithoutEnclave(
    marketId: BigNumberish,
    computeAllocation: BigNumberish,
    proofGeneratorCost: BigNumberish,
    proposedTime: BigNumberish,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    const data = await this.generatorRegistry.generatorInfoPerMarket(await this.signer.getAddress(), marketId);
    if (!new BigNumber(data.proposedTime.toString()).eq(0)) {
      throw new Error("Already part of this market");
    }

    return await this.generatorRegistry.joinMarketplace(
      marketId,
      computeAllocation.toString(),
      proofGeneratorCost.toString(),
      proposedTime.toString(),
      false,
      "0x",
      "0x",
      { ...options }
    );
  }

  public async leaveMarketPlace(marketId: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return await this.generatorRegistry.leaveMarketplace(marketId, { ...options });
  }

  public async requestForExitMarket(marketId: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return await this.generatorRegistry.requestForExitMarketplace(marketId, { ...options });
  }

  public async updateEcisKey(
    marketId: BigNumberish,
    attestationBytes: BytesLike,
    enclaveSignature: BytesLike,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    return this.generatorRegistry.updateEncryptionKey(marketId, attestationBytes, enclaveSignature, { ...options });
  }

  public async slashExistingRequest(taskId: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.proofMarketplace.discardRequest(taskId, { ...options });
  }

  public async discardRequest(askId: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.proofMarketplace.discardRequest(askId, { ...options });
  }

  public async addIvsKey(
    marketId: BigNumberish,
    attestationData: BytesLike,
    enclaveSignature: BytesLike,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    return this.generatorRegistry.addIvsKey(marketId, attestationData, enclaveSignature, { ...options });
  }
}
