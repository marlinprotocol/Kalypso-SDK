import { AbstractSigner, BytesLike, ContractTransactionResponse, Overrides } from "ethers";
import { ProofMarketPlace__factory, ProofMarketPlace, RsaRegistry, RsaRegistry__factory } from "./generated/typechain-types";

export class Admin {
  private signer: AbstractSigner;
  private proofMarketPlace: ProofMarketPlace;
  private rsaRegistry: RsaRegistry;

  constructor(signer: AbstractSigner, proofMarketPlaceAddress: string, rsaRegistry: string) {
    this.signer = signer;
    this.proofMarketPlace = ProofMarketPlace__factory.connect(proofMarketPlaceAddress, this.signer);
    this.rsaRegistry = RsaRegistry__factory.connect(rsaRegistry, this.signer);
  }

  public async grantRoleToMatchingEngine(
    matchingEngineAddress: string,
    addressAttestationBytes: string,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    const role = await this.proofMarketPlace.MATCHING_ENGINE_ROLE();
    return this.proofMarketPlace["grantRole(bytes32,address,bytes)"](role, matchingEngineAddress, addressAttestationBytes, { ...options });
  }

  /**
   * @deprecated This function will be removed when migrated to ECIS
   */
  public async updateEncryptionKey(
    rsaPub: BytesLike,
    attestationBytes: BytesLike,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    return this.proofMarketPlace.updateEncryptionKey(rsaPub, attestationBytes, { ...options });
  }

  public async readMatchingEngineKey(): Promise<string> {
    return this.rsaRegistry.rsa_pub_key(await this.proofMarketPlace.getAddress());
  }
}
