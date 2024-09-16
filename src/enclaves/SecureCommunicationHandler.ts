import { PrivateKey, PublicKey } from "eciesjs";
import { secretInputOperations } from "../helper";
import { ethers } from "ethers";

interface SCHPayload {
  request: Uint8Array;
  response_key: Uint8Array;
  signature: Uint8Array;
}

interface SCHPayloadArrayified {
  request: number[];
  response_key: number[];
  signature: number[];
}

export interface SCHResponse {
  message: string;
  data: {
    response: number[];
  };
}

export class SecureCommunicationHandler {
  private selfPrivateKey: Buffer;
  public selfPublicKey: string;

  public serverPubKey: string;

  private abicode = new ethers.AbiCoder();

  private signer: ethers.Wallet;

  constructor(serverPubkey: string, selfPrivateKey?: string) {
    this.serverPubKey = PublicKey.fromHex(serverPubkey).uncompressed.toString("hex");

    let key: PrivateKey;
    if (selfPrivateKey) {
      key = PrivateKey.fromHex(selfPrivateKey);
      this.selfPrivateKey = key.secret;
    } else {
      key = new PrivateKey();
      this.selfPrivateKey = key.secret;
    }

    this.selfPublicKey = key.publicKey.uncompressed.toString("hex");
    this.signer = new ethers.Wallet(key.secret.toString("hex"));
  }

  public async preparePayload<T>(data: T): Promise<SCHPayload> {
    const str = JSON.stringify(data);
    const utf8Buffer = Buffer.from(str, "utf-8");
    let encryptedData = secretInputOperations.encryptECIES(this.serverPubKey, utf8Buffer);

    let request = Uint8Array.from(encryptedData);
    let response_key = hexStringToUint8Array(this.selfPublicKey);

    let types = ["bytes", "bytes"];
    let values = [encryptedData, "0x" + this.selfPublicKey];

    let encoded = this.abicode.encode(types, values);
    let digest = ethers.keccak256(encoded);
    let sigString = await this.signer.signMessage(ethers.getBytes(digest));

    let signature = hexStringToUint8Array(sigString);

    let schPayload: SCHPayload = {
      request,
      response_key,
      signature,
    };

    return schPayload;
  }

  public decodeResponse<T>(data: SCHResponse): T {
    let response = new Uint8Array(Object.values(data.data.response || {}).map(Number));
    let info = Buffer.from(response);
    let decrypted_data = secretInputOperations.decryptECIES(this.selfPrivateKey, info);

    const dataString = decrypted_data.toString("utf-8");
    return JSON.parse(dataString) as T;
  }

  public static arrayifySchPayload(schPayload: SCHPayload): string {
    let data: SCHPayloadArrayified = {
      request: Array.from(schPayload.request),
      response_key: Array.from(schPayload.response_key),
      signature: Array.from(schPayload.signature),
    };

    return JSON.stringify(data);
  }
}

function hexStringToUint8Array(hexString: string): Uint8Array {
  if (hexString.startsWith("0x")) {
    hexString = hexString.slice(2);
  }

  const buffer = Buffer.from(hexString, "hex");

  return new Uint8Array(buffer);
}
