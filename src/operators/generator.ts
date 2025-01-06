import { AbstractSigner, BigNumberish, BytesLike, ContractTransactionResponse, Overrides } from "ethers";
import {
  ERC20,
  ERC20__factory,
  ProverManager,
  ProverManager__factory,
  ProofMarketplace,
  ProofMarketplace__factory,
} from "../typechain-types";
import BigNumber from "bignumber.js";
import { KalspsoConfig } from "../types";
import { GeneratorHttpClient } from "../enclaves/generatorHttpClient";

const exp = new BigNumber(10).pow(18);
export class Generator {
  private signer: AbstractSigner;
  private generatorRegistry: ProverManager;
  private stakingToken: ERC20;
  private proofMarketplace: ProofMarketplace;

  private generatorhttpClient!: GeneratorHttpClient;

  constructor(signer: AbstractSigner, config: KalspsoConfig) {
    this.signer = signer;
    this.generatorRegistry = ProverManager__factory.connect(config.generator_registry, this.signer);
    this.stakingToken = ERC20__factory.connect(config.staking_token, this.signer);
    this.proofMarketplace = ProofMarketplace__factory.connect(config.proof_market_place, this.signer);

    if (config.generatorEnclave) {
      this.generatorhttpClient = new GeneratorHttpClient(
        config.generatorEnclave.url,
        config.generatorEnclave.utilityUrl,
        config,
        config.generatorEnclave.enclavePubkey,
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
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    const result = await this.generatorRegistry.proverManager(await this.signer.getAddress());
    if (result.rewardAddress != "0x0000000000000000000000000000000000000000") {
      throw new Error("Generator is already registered");
    }
    return this.generatorRegistry.register(rewardAddress, declaredCompute, generatorData, { ...options });
  }

  /**
   * @param refundAddress address to which the generator receives the refund
   * @param options
   * @returns
   */
  public async deregister(options?: Overrides): Promise<ContractTransactionResponse> {
    return this.generatorRegistry.deregister({ ...options });
  }

  /**
   *
   * @returns Returns the total compute of the generator in ecosystem
   */
  public async getCompute(): Promise<BigNumberish> {
    return (await this.generatorRegistry.proverManager(await this.signer.getAddress())).declaredCompute;
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
    commission: BigNumberish,
    attestationData: BytesLike,
    enclaveSignature: BytesLike,
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    const data = await this.generatorRegistry.proverInfoPerMarket(await this.signer.getAddress(), marketId);
    if (!new BigNumber(data.proposedTime.toString()).eq(0)) {
      throw new Error("Already part of this market");
    }

    return await this.generatorRegistry.joinMarketplace(
      marketId,
      computeAllocation.toString(),
      proofGeneratorCost.toString(),
      proposedTime.toString(),
      commission,
      true,
      attestationData,
      enclaveSignature,
      { ...options },
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
    commission: BigNumberish,
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    const data = await this.generatorRegistry.proverInfoPerMarket(await this.signer.getAddress(), marketId);
    if (!new BigNumber(data.proposedTime.toString()).eq(0)) {
      throw new Error("Already part of this market");
    }

    return await this.generatorRegistry.joinMarketplace(
      marketId,
      computeAllocation.toString(),
      proofGeneratorCost.toString(),
      proposedTime.toString(),
      commission,
      false,
      "0x",
      "0x",
      { ...options },
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
    options?: Overrides,
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
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    return this.generatorRegistry.addIvsKey(marketId, attestationData, enclaveSignature, { ...options });
  }
}
