import { AbstractSigner, BytesLike, ContractTransactionResponse, Overrides } from "ethers";
import { ProofMarketplace__factory, ProofMarketplace, EntityKeyRegistry, EntityKeyRegistry__factory } from "./typechain-types";

export class Admin {
  private signer: AbstractSigner;
  private proofMarketPlace: ProofMarketplace;
  private entityRegistry: EntityKeyRegistry;

  constructor(signer: AbstractSigner, proofMarketPlaceAddress: string, entityKeyRegistry: string) {
    this.signer = signer;
    this.proofMarketPlace = ProofMarketplace__factory.connect(proofMarketPlaceAddress, this.signer);
    this.entityRegistry = EntityKeyRegistry__factory.connect(entityKeyRegistry, this.signer);
  }

  public async updateMeEciesKeyAndSigner(
    attestationBytes: BytesLike,
    meSignature: BytesLike,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    return this.proofMarketPlace.verifyMatchingEngine(attestationBytes, meSignature, { ...options });
  }

  public async readMatchingEngineKey(): Promise<string> {
    console.log(await this.proofMarketPlace.getAddress());
    return this.entityRegistry.pub_key(await this.proofMarketPlace.getAddress(), 0);
  }

  public async grantKeyRegistryRoleForEntityKeyRegistry(to: string, options?: Overrides): Promise<ContractTransactionResponse> {
    const role = await this.entityRegistry.KEY_REGISTER_ROLE();
    return this.entityRegistry.grantRole(role, to, { ...options });
  }

  public async setMatchingEngineImage(mePcrs: BytesLike, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.proofMarketPlace.setMatchingEngineImage(mePcrs, { ...options });
  }
}
