import { AbstractSigner, BytesLike, TransactionReceipt, ethers } from "ethers";
import { KalspsoConfig, SecretInputOperations } from "./types";
import { Admin } from "./operators/admin";
import { Generator } from "./operators/generator";
import { MarketPlace } from "./operators/marketPlace";

import { helpers, secretInputOperations } from "./helper";

export class KalypsoSdk {
  private signer: AbstractSigner;
  private config: KalspsoConfig;

  constructor(signer: AbstractSigner, config: KalspsoConfig) {
    this.signer = signer;
    this.config = config;
  }

  static SecretInputOperations(): SecretInputOperations {
    return secretInputOperations;
  }

  Admin(): Admin {
    return new Admin(this.signer, this.config.proof_market_place, this.config.entity_registry);
  }

  Generator(): Generator {
    return new Generator(this.signer, this.config);
  }

  MarketPlace(): MarketPlace {
    return new MarketPlace(this.signer, this.config);
  }

  public static getPubKeyAndAddressFromAttestation = helpers.getPubKeyAndAddressFromAttestation;

  public static getImageIdFromAttestation = helpers.getImageIdFromAttestation;

  public static getRlpedPcrsFromAttestation = helpers.getRlpedPcrsFromAttestation;
}
