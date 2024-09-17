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
    salt: number[];
    signature: number[];
  };
}

export class SecureCommunicationHandler {
  private selfPrivateKey: Buffer;
  public selfPublicKey: string;

  public serverPubKey: string;

  private serverSigningAddres: ethers.AddressLike;
  private abicode = new ethers.AbiCoder();
  private signer: ethers.Wallet;

  constructor(serverPubkey: string, selfPrivateKey?: string) {
    this.serverPubKey = PublicKey.fromHex(serverPubkey).uncompressed.toString("hex");
    this.serverSigningAddres = ethers.computeAddress("0x" + this.serverPubKey);

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

  public async decodeResponse<T>(data: SCHResponse): Promise<T> {
    let response = new Uint8Array(Object.values(data.data.response || {}).map(Number));
    let info = Buffer.from(response);
    let salt = Buffer.from(new Uint8Array(Object.values(data.data.salt || {}).map(Number)));
    let signature = Buffer.from(new Uint8Array(Object.values(data.data.signature || {}).map(Number)));

    let recoverAddress = SecureCommunicationHandler.RECOVER_ADDRESS(info, salt, signature);

    if (recoverAddress.toString().toLowerCase() !== this.serverSigningAddres.toString().toLowerCase()) {
      throw new Error("Incorrect signature from the signing enclave");
    }

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

  public static RECOVER_ADDRESS(info: Buffer, salt: Buffer, signature: Buffer): ethers.AddressLike {
    let types = ["bytes", "bytes"];
    let values = [info, salt];

    let abicode = new ethers.AbiCoder();
    let encoded = abicode.encode(types, values);
    let digest = ethers.keccak256(ethers.getBytes(encoded));

    const prefix = "\x19Ethereum Signed Message:\n32";
    const prefixBytes = ethers.toUtf8Bytes(prefix);
    const ethMessage = ethers.concat([prefixBytes, ethers.getBytes(digest)]);
    const ethDigest = ethers.keccak256(ethers.getBytes(ethMessage));

    let recoveredAddress = ethers.recoverAddress(ethers.getBytes(ethDigest), ethers.Signature.from("0x" + signature.toString("hex")));
    return recoveredAddress;
  }
}

function hexStringToUint8Array(hexString: string): Uint8Array {
  if (hexString.startsWith("0x")) {
    hexString = hexString.slice(2);
  }

  const buffer = Buffer.from(hexString, "hex");

  return new Uint8Array(buffer);
}
