import { AbstractSigner, BytesLike, ethers } from "ethers";
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

  public static getPubKeyAndAddressFromAttestation(attesationData: BytesLike): [string, string] {
    let abicode = new ethers.AbiCoder();

    let decoded = abicode.decode(["bytes", "address", "bytes", "bytes", "bytes", "bytes", "uint256", "uint256"], attesationData);
    let pubkey = decoded[2];
    let hash = ethers.keccak256(pubkey);

    const address = "0x" + hash.slice(-40);

    return [pubkey, address];
  }

  public static getImageIdFromAttestation(attesationData: BytesLike): BytesLike {
    let abicode = new ethers.AbiCoder();

    let decoded = abicode.decode(["bytes", "address", "bytes", "bytes", "bytes", "bytes", "uint256", "uint256"], attesationData);
    let encoded = ethers.solidityPacked(["bytes", "bytes", "bytes"], [decoded[3], decoded[4], decoded[5]]);
    let digest = ethers.keccak256(encoded);
    return digest;
  }
}
