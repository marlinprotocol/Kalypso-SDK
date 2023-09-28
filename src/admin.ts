import { AbstractSigner, BytesLike, ContractTransactionResponse, Overrides } from "ethers";
import { ProofMarketPlace__factory, ProofMarketPlace } from "./generated/typechain-types";

export class Admin {
  private signer: AbstractSigner;
  private proofMarketPlace: ProofMarketPlace;

  constructor(signer: AbstractSigner, proofMarketPlaceAddress: string) {
    this.signer = signer;
    this.proofMarketPlace = ProofMarketPlace__factory.connect(proofMarketPlaceAddress, this.signer);
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
}
