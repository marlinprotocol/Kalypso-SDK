const COSE_Sign1 = require("./cose_sign");
const { X509Certificate } = require("crypto");
const { ec } = require("elliptic");
import * as fs from "fs";
import * as path from "path";
import { keccak256 } from "ethers";
// import { keccak256, arrayify } from 'ethers/lib/utils';
// import * as ether from 'ethers' ;
import { randomBytes } from "crypto";
import * as secp256k1 from "secp256k1";

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

class AttestationVerifier {
  private utilityUrl(path: string): string {
    // Your logic to construct the URL
    return `http://13.201.131.193:1500${path}`;
  }

  // The method that does the fetch
  // public async buildAttestation(printLogs: boolean = true): Promise<NodeJS.ReadableStream> {
  //   const attestation_end_point = this.utilityUrl("/attestation/raw");
  //   const { default: fetch } = await import('node-fetch');

  //   if (printLogs) {
  //     console.log("build attestation", attestation_end_point);
  //   }

  //   let attestation_build_config = {
  //     method: "GET",
  //   };

  //   // Fetch the attestation
  //   let attestation_server_response = await fetch(attestation_end_point, attestation_build_config);

  //   if (!attestation_server_response.ok) {
  //     console.log({ statusCode: attestation_server_response.status });
  //     throw new Error("failed building the attestation");
  //   }

  //   // Return the body of the response (which is a ReadableStream in Node.js 18+)
  //   let result = await attestation_server_response.body;
  //   if (!result) {
  //     throw new Error("No body in the response");
  //   }
  //   return result;
  // }

  public async streamToArrayBuffer(stream: NodeJS.ReadableStream): Promise<ArrayBuffer> {
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
  public static base64UrlDecode(base64Url: string) {
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

  public static public_key(public_key: ECKey) {
    const xBuffer = this.base64UrlDecode(public_key.x);
    const yBuffer = this.base64UrlDecode(public_key.y);

    const ecKey = new ec("p384");
    // Create the public key object
    const publicKey = Buffer.concat([Buffer.from([0x04]), xBuffer, yBuffer]).toString("hex");
    const publicKeyBuffer2 = Buffer.from(publicKey, "hex");
    const publicKey2 = ecKey.keyFromPublic(publicKeyBuffer2);

    return publicKey2;
  }

  public static async attestation_verifier(arrayBuffer: ArrayBuffer) {
    const attestationDoc = new Uint8Array(arrayBuffer);
    const parsedData = await COSE_Sign1.decodeCBOR(attestationDoc);
    const verifier = new COSE_Sign1(parsedData[0], parsedData[1], parsedData[2], parsedData[3]);

    const attestation_payload_decoded = await COSE_Sign1.decodeCBOR(verifier.payload);

    console.log(attestation_payload_decoded);
    const enclave_certificate = new X509Certificate(attestation_payload_decoded.certificate);

    const pub_key = enclave_certificate.publicKey;

    const key_jwk = pub_key.export({
      format: "jwk", // JWK format (ignores other options like type)
      type: "spki",
    });

    const public_key = this.public_key(key_jwk);
    // return public_key;
    const sig_verification = await verifier.verifySignature(public_key);
    // console.log(val);
    if (!sig_verification) {
      return false;
    }

    const cabundle = attestation_payload_decoded.cabundle;

    const reversed = cabundle.reverse();

    // Read the certificate file as bytes
    const rootCertPem = fs.readFileSync("./aws.cert");

    const root_cert = new X509Certificate(rootCertPem);

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
    const attestation_payload_decoded = await COSE_Sign1.decodeCBOR(verifier.payload);

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
    encodedStruct.set(this.hexToBytes(keccak256(enclavePubKey)), 32); // Add hashed enclavePubkey
    encodedStruct.set(this.hexToBytes(keccak256(pcr0)), 64); // Add hashed pcr0
    encodedStruct.set(this.hexToBytes(keccak256(pcr1)), 96); // Add hashed pcr1
    encodedStruct.set(this.hexToBytes(keccak256(pcr2)), 128); // Add hashed pcr2

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
    console.log(encodedMessage);
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

  public static async get_attestation(arrayBuffer: ArrayBuffer) {
    const verified = await this.attestation_verifier(arrayBuffer);
    console.log(verified);
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
      verifier_secp256k1_public: privateKey.toString("hex"),
    };
    console.log(response);
    return response;
  }
}

module.exports = AttestationVerifier;
