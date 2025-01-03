import { COSE_Sign1 } from "./cose_sign";

import { ec } from "elliptic";
import { keccak256 } from "ethers";
import { randomBytes, X509Certificate } from "crypto";

// import { keccak256, arrayify } from 'ethers/lib/utils';
// import * as ether from 'ethers' ;
import * as pkijs from "pkijs";
import * as asn1js from "asn1js";
import * as secp256k1 from "secp256k1";
// import crypto from "crypto";

function isCryptoEngine(obj: any): obj is Crypto {
  return obj && typeof obj.subtle === "object";
}

// function setCryptoEngine() {
//   if (typeof window !== "undefined" && isCryptoEngine(window.crypto)) {
//     pkijs.setEngine("WebCrypto", window.crypto, window.crypto.subtle);
//   } else if (typeof global !== "undefined" && isCryptoEngine(crypto.webcrypto)) {
//     pkijs.setEngine("NodeCrypto", crypto.webcrypto, crypto.webcrypto.subtle);
//   } else {
//     throw new Error("No compatible WebCrypto engine found.");
//   }
// }
async function setCryptoEngine() {
  if (typeof window !== "undefined" && isCryptoEngine(window.crypto)) {
    // Browser environment
    pkijs.setEngine("WebCrypto", window.crypto, window.crypto.subtle);
  } else if (typeof global !== "undefined" && typeof require !== "undefined") {
    // Node.js environment
    const { webcrypto } = await import("crypto");
    if (isCryptoEngine(webcrypto)) {
      pkijs.setEngine("NodeCrypto", webcrypto, webcrypto.subtle);
    } else {
      throw new Error("No compatible NodeCrypto engine found.");
    }
  } else {
    throw new Error("No compatible WebCrypto engine found.");
  }
}

interface ECKey {
  // kty: 'EC';       // Key type, 'EC' for Elliptic Curve
  x: string; // The 'x' coordinate of the EC public key
  y: string; // The 'y' coordinate of the EC public key
  // crv: 'P-384';    // The curve used, 'P-384' in this case
}

interface AttestationDecoded {
  pcrs: Buffer[]; // 1D array of Buffer, each inner Buffer is 48 bytes
  timestamp: number; // Equivalent to usize in Rust
  publicKey: Buffer; // A Buffer for the public key
}

interface VerifyAttestationResponse {
  signature: String;
  secp256k1_public: String;
  pcr0: String;
  pcr1: String;
  pcr2: String;
  timestamp: number;
  verifier_secp256k1_public: String;
}

// The typehash for the attestation
const ATTESTATION_TYPEHASH = "0x6889df476ca38f3f4b417c17eb496682eb401b4f41a2259741a78acc481ea805";
const DOMAIN_SEPARATOR = "0x0de834feb03c214f785e75b2828ffeceb322312d4487e2fb9640ca5fc32542c7"; // Example placeholder, replace with actual domain separator

export class AttestationVerifier {
  public static async streamToArrayBuffer(stream: NodeJS.ReadableStream): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const chunks: Uint8Array[] = [];
      stream.on("data", (chunk) => {
        chunks.push(chunk); // Store each chunk
      });
      stream.on("end", () => {
        const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
        const combined = new Uint8Array(totalLength);
        let offset = 0;

        // Copy each chunk into the combined array
        for (const chunk of chunks) {
          combined.set(chunk, offset);
          offset += chunk.length;
        }

        resolve(combined.buffer); // Return as ArrayBuffer
      });
      stream.on("error", (err) => {
        reject(err); // Handle any errors
      });
    });
  }

  // Convert PEM to ArrayBuffer
  public static pemToArrayBuffer(pem: string) {
    const base64 = pem
      .replace(/-----BEGIN CERTIFICATE-----/g, "")
      .replace(/-----END CERTIFICATE-----/g, "")
      .replace(/\s+/g, "");
    return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0)).buffer;
  }

  public static base64UrlDecode(base64Url: string): Buffer {
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const padding = base64.length % 4 === 0 ? "" : "=".repeat(4 - (base64.length % 4));
    return Buffer.from(base64 + padding, "base64");
    // return base64;
  }

  // Helper function to convert a hex string to Uint8Array (without arrayify)
  public static hexToBytes(hex: string): Uint8Array {
    if (hex.startsWith("0x")) {
      hex = hex.slice(2);
    }
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
      bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return bytes;
  }

  // Helper function to convert a number to a big-endian Uint8Array
  public static numberToBytesBE(num: number, length: number): Uint8Array {
    const bytes = new Uint8Array(length);
    for (let i = length - 1; i >= 0; i--) {
      bytes[i] = num & 0xff;
      num = num >> 8;
    }
    return bytes;
  }

  public static padBytes(data: Uint8Array, length: number): Uint8Array {
    if (data.length >= length) return data;
    const padded = new Uint8Array(length);
    padded.set(data, length - data.length);
    return padded;
  }

  public static public_key(keyJwk: JsonWebKey) {
    if (!keyJwk.x || !keyJwk.y || keyJwk.kty !== "EC") {
      throw new Error("Invalid JWK: Must include x, y, and kty (EC).");
    }

    const xBuffer = this.base64UrlDecode(keyJwk.x);
    const yBuffer = this.base64UrlDecode(keyJwk.y);
    // const xBuffer = this.base64UrlDecode(public_key.x);
    // const yBuffer = this.base64UrlDecode(public_key.y);

    const ecKey = new ec("p384");
    // Create the public key object
    const publicKey = Buffer.concat([new Uint8Array(Buffer.from([0x04])), new Uint8Array(xBuffer), new Uint8Array(yBuffer)]).toString(
      "hex",
    );
    const publicKeyBuffer2 = Buffer.from(publicKey, "hex");
    const publicKey2 = ecKey.keyFromPublic(publicKeyBuffer2);

    return publicKey2;
  }

  public static async attestation_verifier(arrayBuffer: ArrayBuffer) {
    await setCryptoEngine();
    const attestationDoc = new Uint8Array(arrayBuffer);
    const parsedData = await COSE_Sign1.decodeCBOR(attestationDoc);
    const verifier = new COSE_Sign1(parsedData[0], parsedData[1], parsedData[2], parsedData[3]);

    const attestation_payload_decoded = await COSE_Sign1.decodeCBOR(new Uint8Array(verifier.payload));

    // console.log(attestation_payload_decoded);
    // const enclave_certificate = new X509Certificate(attestation_payload_decoded.certificate);
    // const rawCert = atob(attestation_payload_decoded.certificate); // Decode Base64 PEM

    const asn1 = asn1js.fromBER(attestation_payload_decoded.certificate);
    const enclave_certificate = new pkijs.Certificate({ schema: asn1.result });
    // const pub_key = enclave_certificate.publicKey;

    const publicKey = await enclave_certificate.getPublicKey();
    // const key_jwk = publicKey.export({
    //   format: "jwk", // JWK format (ignores other options like type)
    //   type: "spki",
    // });
    const keyJwk = await crypto.subtle.exportKey("jwk", publicKey);
    // console.log(keyJwk);

    const public_key = this.public_key(keyJwk);

    // return public_key;
    const sig_verification = await verifier.verifySignature(public_key);
    // console.log("sig_verified" ,sig_verification);
    if (!sig_verification) {
      return false;
    }

    const cabundle = attestation_payload_decoded.cabundle;

    const reversed = cabundle.reverse();

    const rootCertPem = `-----BEGIN CERTIFICATE-----
MIICETCCAZagAwIBAgIRAPkxdWgbkK/hHUbMtOTn+FYwCgYIKoZIzj0EAwMwSTEL
MAkGA1UEBhMCVVMxDzANBgNVBAoMBkFtYXpvbjEMMAoGA1UECwwDQVdTMRswGQYD
VQQDDBJhd3Mubml0cm8tZW5jbGF2ZXMwHhcNMTkxMDI4MTMyODA1WhcNNDkxMDI4
MTQyODA1WjBJMQswCQYDVQQGEwJVUzEPMA0GA1UECgwGQW1hem9uMQwwCgYDVQQL
DANBV1MxGzAZBgNVBAMMEmF3cy5uaXRyby1lbmNsYXZlczB2MBAGByqGSM49AgEG
BSuBBAAiA2IABPwCVOumCMHzaHDimtqQvkY4MpJzbolL//Zy2YlES1BR5TSksfbb
48C8WBoyt7F2Bw7eEtaaP+ohG2bnUs990d0JX28TcPQXCEPZ3BABIeTPYwEoCWZE
h8l5YoQwTcU/9KNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUkCW1DdkF
R+eWw5b6cp3PmanfS5YwDgYDVR0PAQH/BAQDAgGGMAoGCCqGSM49BAMDA2kAMGYC
MQCjfy+Rocm9Xue4YnwWmNJVA44fA0P5W2OpYow9OYCVRaEevL8uO1XYru5xtMPW
rfMCMQCi85sWBbJwKKXdS6BptQFuZbT73o/gBh1qUxl/nNr12UO8Yfwr6wPLb+6N
IwLz3/Y=
-----END CERTIFICATE-----`;

    // const root_cert = new X509Certificate(rootCertPem);
    const rootCertBuffer = AttestationVerifier.pemToArrayBuffer(rootCertPem);
    const asn1RootCert = asn1js.fromBER(rootCertBuffer);
    const root_cert = new pkijs.Certificate({ schema: asn1RootCert.result });

    const cert_verification = verifier.verifyCertificates(enclave_certificate, reversed, root_cert);
    if (!cert_verification) {
      return false;
    }
    return true;
  }

  public static parse_pcrs(pcrs: Map<number, Buffer>) {
    const result: Buffer[] = [Buffer.alloc(48), Buffer.alloc(48), Buffer.alloc(48)];

    for (let i = 0; i < 3; i++) {
      // Attempt to retrieve PCR by its index (i)
      const pcr = pcrs.get(i);
      if (!pcr) {
        throw new Error(`pcr${i} not found`);
      }

      // Check if the PCR is a Buffer and of the correct length (48 bytes)
      if (!(pcr instanceof Buffer)) {
        throw new Error(`pcr${i} decode failure`);
      }

      if (pcr.length !== 48) {
        throw new Error(`pcr${i} not 48 bytes`);
      }

      // Assign the PCR buffer to the result array
      result[i] = pcr;
    }

    return result;
  }

  public static async attestation_decoded(arrayBuffer: ArrayBuffer) {
    const attestationDoc = new Uint8Array(arrayBuffer);

    const parsedData = await COSE_Sign1.decodeCBOR(attestationDoc);
    const verifier = new COSE_Sign1(parsedData[0], parsedData[1], parsedData[2], parsedData[3]);
    const attestation_payload_decoded = await COSE_Sign1.decodeCBOR(new Uint8Array(verifier.payload));

    const pcrs = AttestationVerifier.parse_pcrs(attestation_payload_decoded.pcrs);

    const timestamp = attestation_payload_decoded.timestamp;

    const enclavePubKey = attestation_payload_decoded.public_key;

    const attestationDecoded: AttestationDecoded = {
      pcrs: pcrs,
      timestamp: timestamp,
      publicKey: enclavePubKey,
    };

    return attestationDecoded;
  }

  // Function to compute the digest
  public static computeDigest(enclavePubKey: Buffer, pcr0: Buffer, pcr1: Buffer, pcr2: Buffer, timestamp: number): string {
    // Create the buffer for the encoded struct
    let encodedStruct = new Uint8Array(32 * 6);

    // Fill the buffer with keccak256 hashed values
    encodedStruct.set(this.hexToBytes(ATTESTATION_TYPEHASH), 0); // Add typehash
    encodedStruct.set(this.hexToBytes(keccak256(new Uint8Array(enclavePubKey))), 32); // Add hashed enclavePubkey
    encodedStruct.set(this.hexToBytes(keccak256(new Uint8Array(pcr0))), 64); // Add hashed pcr0
    encodedStruct.set(this.hexToBytes(keccak256(new Uint8Array(pcr1))), 96); // Add hashed pcr1
    encodedStruct.set(this.hexToBytes(keccak256(new Uint8Array(pcr2))), 128); // Add hashed pcr2

    // Convert timestamp to a BigNumber, get its hex string, and convert to bytes
    const timestampBytes = this.numberToBytesBE(timestamp, 32);
    encodedStruct.set(this.padBytes(timestampBytes, 32), 160); // Add timestamp in big-endian format

    // Compute the hash of the encoded struct
    const hashStruct = keccak256(encodedStruct);

    // Create the EIP-712 message
    let encodedMessage = new Uint8Array(2 + 32 * 2);
    encodedMessage.set([0x19, 0x01], 0); // EIP-712 prefix
    encodedMessage.set(this.hexToBytes(DOMAIN_SEPARATOR), 2); // Add domain separator
    encodedMessage.set(this.hexToBytes(hashStruct), 34); // Add hashed struct
    // console.log(encodedMessage);
    // Return the final keccak256 digest
    return keccak256(encodedMessage);
  }

  public static signMessage(secretKey: Uint8Array, digest: Uint8Array) {
    const { signature, recid } = secp256k1.ecdsaSign(digest, secretKey);

    // Convert the signature Uint8Array to a hex string manually
    const sigHex = signature.reduce((hex, byte) => hex + byte.toString(16).padStart(2, "0"), "");

    // Convert the recovery id to hex manually and adjust it
    const recidHex = (recid + 27).toString(16).padStart(2, "0");

    // Concatenate the signature and the recovery id hex strings
    return sigHex + recidHex;
  }

  public static async get_attestation(arrayBuffer: ArrayBuffer): Promise<VerifyAttestationResponse> {
    const verified = await this.attestation_verifier(arrayBuffer);
    // console.log(verified);
    if (!verified) {
      throw Error("attestation verification failed");
    }

    const attestationDecoded = await this.attestation_decoded(arrayBuffer);

    const digest = this.computeDigest(
      attestationDecoded.publicKey,
      attestationDecoded.pcrs[0],
      attestationDecoded.pcrs[1],
      attestationDecoded.pcrs[2],
      attestationDecoded.timestamp,
    );
    // const uint8Array = new Uint8Array(buffer);
    const cleanedHex = digest.startsWith("0x") ? digest.slice(2) : digest;
    const message = Buffer.from(cleanedHex, "hex");
    const message2 = new Uint8Array(message);
    // console.log(message2)

    const privateKey = randomBytes(32); // Generates 32 random bytes
    // const privateKey = new Uint8Array(32); // 32 bytes for the private key
    // window.crypto.getRandomValues(privateKey); // Fills the array with random bytes
    // Convert to Uint8Array
    const privateKeyArray = new Uint8Array(privateKey);
    const signature = this.signMessage(privateKeyArray, message2);

    const response: VerifyAttestationResponse = {
      signature: signature,
      secp256k1_public: attestationDecoded.publicKey.toString("hex"),
      pcr0: attestationDecoded.pcrs[0].toString("hex"),
      pcr1: attestationDecoded.pcrs[1].toString("hex"),
      pcr2: attestationDecoded.pcrs[2].toString("hex"),
      timestamp: attestationDecoded.timestamp,
      verifier_secp256k1_public: privateKey.toString(),
    };
    // console.log(response);
    return response;
  }
}
