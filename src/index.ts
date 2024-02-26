import { AbstractSigner, BytesLike, ethers } from "ethers";
import { KalspsoConfig, SecretInputOperations } from "./types";
import { Admin } from "./operators/admin";
import { Generator } from "./operators/generator";
import { MarketPlace } from "./operators/marketPlace";

import * as secretInputOperation from "./helper/secretInputOperation";

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

    let decoded = abicode.decode(["bytes", "bytes", "bytes", "bytes", "bytes", "uint256", "uint256", "uint256"], attesationData);
    let pubkey = decoded[2];
    let hash = ethers.keccak256(pubkey);

    const address = "0x" + hash.slice(-40);

    return [pubkey, address];
  }

  public static getImageIdFromAttestation(attesationData: BytesLike): BytesLike {
    let abicode = new ethers.AbiCoder();

    let decoded = abicode.decode(["bytes", "bytes", "bytes", "bytes", "bytes", "uint256", "uint256", "uint256"], attesationData);
    let encoded = ethers.solidityPacked(["bytes", "bytes", "bytes"], [decoded[2], decoded[3], decoded[4]]);
    let digest = ethers.keccak256(encoded);
    return digest;
  }

  public static getRlpedPcrsFromAttestation(attesationData: BytesLike): BytesLike {
    let abicode = new ethers.AbiCoder();

    let decoded = abicode.decode(["bytes", "bytes", "bytes", "bytes", "bytes", "uint256", "uint256", "uint256"], attesationData);
    console.log("pcrs", decoded[2], decoded[3], decoded[4]);
    let encoded = abicode.encode(["bytes", "bytes", "bytes"], [decoded[2], decoded[3], decoded[4]]);

    return encoded;
  }
}
