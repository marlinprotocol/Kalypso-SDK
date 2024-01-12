import { AbstractSigner } from "ethers";
import { KalspsoConfig, SecretInputOperations } from "./types";
import { Admin } from "./admin";
import { Generator } from "./generator";
import { MarketPlace } from "./marketPlace";

import * as secretInputOperation from "./secretInputOperation";

export class KalypsoSdk {
  private signer: AbstractSigner;
  private config: KalspsoConfig;

  constructor(signer: AbstractSigner, config: KalspsoConfig) {
    this.signer = signer;
    this.config = config;
  }

  static SecretInputOperations(): SecretInputOperations {
    return secretInputOperation;
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
}
