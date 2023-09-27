import { AbstractSigner, BigNumberish, BytesLike, ContractTransactionResponse, Overrides } from "ethers";
import {
  ERC20,
  ERC20__factory,
  GeneratorRegistry,
  GeneratorRegistry__factory,
  ProofMarketPlace,
  ProofMarketPlace__factory,
  RsaRegistry,
  RsaRegistry__factory,
} from "./generated/typechain-types";
import BigNumber from "bignumber.js";
import { KalspsoConfig } from "./types";

export class Generator {
  private signer: AbstractSigner;
  private generatorRegistry: GeneratorRegistry;
  private stakingToken: ERC20;
  private rsaRegistry: RsaRegistry;
  private proofMarketplace: ProofMarketPlace;

  constructor(signer: AbstractSigner, config: KalspsoConfig) {
    this.signer = signer;
    this.generatorRegistry = GeneratorRegistry__factory.connect(config.generatorRegistry, this.signer);
    this.stakingToken = ERC20__factory.connect(config.stakingTokenAddress, this.signer);
    this.rsaRegistry = RsaRegistry__factory.connect(config.rsaRegistryAddress, this.signer);
    this.proofMarketplace = ProofMarketPlace__factory.connect(config.proofMarketPlace, this.signer);
  }

  public async register(rewardAddress: string, generatorData: BytesLike, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.generatorRegistry.register(rewardAddress, generatorData, { ...options });
  }

  public async deregister(refundAddress: string, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.generatorRegistry.deregister(refundAddress, { ...options });
  }

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

  public async approveGeneratorRegistry(amount: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return await this.stakingToken.approve(await this.generatorRegistry.getAddress(), amount.toString(), { ...options });
  }

  public async joinMarketPlace(
    marketId: BytesLike,
    proofGeneratorCost: BigNumberish,
    proposedTime: BigNumberish,
    maxParallelRequestsSupported: BigNumberish,
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    return await this.generatorRegistry.joinMarketPlace(
      marketId,
      proofGeneratorCost.toString(),
      proposedTime.toString(),
      maxParallelRequestsSupported.toString(),
      { ...options },
    );
  }

  public async leaveMarketPlace(marketId: BytesLike, options?: Overrides): Promise<ContractTransactionResponse> {
    return await this.generatorRegistry.leaveMarketPlace(marketId, { ...options });
  }

  /**
   * @deprecated Will be replaced with updateEcisKey
   */
  public async updateRsaKey(rsaPub: BytesLike, attestationBytes: BytesLike, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.rsaRegistry.updatePubkey(rsaPub, attestationBytes, { ...options });
  }

  public async slashExistingRequest(taskId: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.proofMarketplace.discardRequest(taskId);
  }
}
