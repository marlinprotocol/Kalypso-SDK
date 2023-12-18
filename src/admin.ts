import { AbstractSigner, BytesLike, ContractTransactionResponse, Overrides } from "ethers";
import { ProofMarketPlace__factory, ProofMarketPlace, EntityKeyRegistry, EntityKeyRegistry__factory } from "./typechain-types";

export class Admin {
  private signer: AbstractSigner;
  private proofMarketPlace: ProofMarketPlace;
  private entityRegistry: EntityKeyRegistry;

  constructor(signer: AbstractSigner, proofMarketPlaceAddress: string, entityKeyRegistry: string) {
    this.signer = signer;
    this.proofMarketPlace = ProofMarketPlace__factory.connect(proofMarketPlaceAddress, this.signer);
    this.entityRegistry = EntityKeyRegistry__factory.connect(entityKeyRegistry, this.signer);
  }

  public async grantRoleToMatchingEngine(
    matchingEngineAddress: string,
    addressAttestationBytes: string,
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    const role = await this.proofMarketPlace.MATCHING_ENGINE_ROLE();
    return this.proofMarketPlace["grantRole(bytes32,address,bytes)"](role, matchingEngineAddress, addressAttestationBytes, { ...options });
  }

  public async updateEncryptionKey(
    pubKey: BytesLike,
    attestationBytes: BytesLike,
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    return this.proofMarketPlace.updateEncryptionKey(pubKey, attestationBytes, { ...options });
  }

  public async readMatchingEngineKey(): Promise<string> {
    console.log(await this.proofMarketPlace.getAddress());
    return this.entityRegistry.pub_key(await this.proofMarketPlace.getAddress());
  }
}
