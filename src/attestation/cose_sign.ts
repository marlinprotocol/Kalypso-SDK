const { X509Certificate } = require("crypto");
const { createHash } = require("node:crypto");

// const cose = require('cose-js');
const EMPTY_BUFFER = Buffer.alloc(0);
const cbor = require("cbor");

interface Signature {
  r: Buffer; // or Uint8Array if that's what you're using
  s: Buffer; // or Uint8Array
}

interface SigningPublicKey {
  verify: (digest: Buffer, signature: Signature) => boolean; // Adjust types as needed
}

class COSE_Sign1 {
  protectedHeader: Buffer; // Ensure properties are defined
  unprotected: object;
  payload: Buffer;
  signature: Buffer;

  constructor(protectedHeader: Buffer, unprotected: object, payload: Buffer, signature: Buffer) {
    this.protectedHeader = protectedHeader; // Protected header
    this.unprotected = unprotected; // Unprotected header
    this.payload = payload; // Payload
    this.signature = signature; // Signature
  }
  static async decodeCBOR(data: Uint8Array) {
    return await cbor.decodeFirst(data);
  }

  // Get protected header as a map
  async getProtectedHeader() {
    try {
      return await COSE_Sign1.decodeCBOR(this.protectedHeader);
    } catch (err) {
      throw new Error("SerializationError : Failed to decode protected header");
    }
  }

  private getAllCerts(cert: typeof X509Certificate, cabundle: Buffer[]) {
    let allCerts: (typeof X509Certificate)[] = [cert];

    // Iterate over cabundle and process each buffer to create X509 certificates
    for (const certBuffer of cabundle) {
      try {
        // Check if certBuffer is actually a Buffer, and then process it
        if (Buffer.isBuffer(certBuffer)) {
          const cert = new X509Certificate(certBuffer); // Create X509Certificate from buffer
          allCerts.push(cert); // Add certificate to the allCerts array
        } else {
          throw new Error("Invalid certificate format. Expected Buffer.");
        }
      } catch (error) {
        throw new Error(`Failed to parse certificate: ${error}`);
      }
    }
    return allCerts;
  }

  // Core verification function
  public async verifySignature(key: SigningPublicKey) {
    // Retrieve algorithm and digest from the key
    // const { algorithm, digest } = key.getParameters();

    // Decode protected header
    const protectedHeaderMap = await this.getProtectedHeader();

    // Extract and validate the signature algorithm from the protected header
    const protectedAlgVal = protectedHeaderMap.get(1);
    if (!protectedAlgVal) {
      throw new Error("SpecificationError : Protected Header does not contain a valid Signature Algorithm specification");
    }

    if (protectedAlgVal !== -35) {
      // Signature algorithm mismatch
      return false;
    }

    // Construct the signature structure based on protected header and payload
    // const sigStructure = this.createSigStructure();
    const sigStructure = ["Signature1", this.protectedHeader, EMPTY_BUFFER, this.payload];
    const ToBeSigned = cbor.encode(sigStructure);
    // const byteArray = Buffer.from(sigStructure.toString('hex'), 'hex');
    // Compute the digest
    const hash = createHash("sha384");
    hash.update(ToBeSigned);
    const structDigest = hash.digest();

    const sigs = { r: this.signature.slice(0, 48), s: this.signature.slice(48) };

    return key.verify(structDigest, sigs);
  }

  public verifyCertificates(cert: typeof X509Certificate, cablundle: Buffer[], rootCert: typeof X509Certificate) {
    const certs = this.getAllCerts(cert, cablundle);

    console.log(certs.length);
    try {
      for (let i = 0; i < certs.length - 1; i++) {
        // Get public key from the next certificate in the chain
        const pubkey = certs[i + 1].publicKey;

        // Verify the current certificate against the next certificate's public key
        if (!certs[i].verify(pubkey)) {
          throw new Error(`Certificate signature verification failed at index ${i}`);
        }

        // Check if the next certificate issued the current certificate
        if (certs[i + 1].subject !== certs[i].issuer) {
          throw new Error(`Issuer mismatch at index ${i}`);
        }

        // Check current time validity of the certificate
        const currentTime = new Date();
        if (certs[i].validTo < currentTime || certs[i].validFrom > currentTime) {
          throw new Error(`Certificate time validity failed at index ${i}`);
        }
      }
    } catch (error) {
      console.log(error);
      return false; // Verification failed
    }

    // Compare the rootCert with the cert ( don't know how to compare it in entirety yet)
    if (rootCert.fingerprint != certs[certs.length - 1].fingerprint) {
      console.log("root cert not equal to attestation cert");
      return false;
    }
    return true;
  }

  // Create SigStructure
  createSigStructure() {
    const sig = Buffer.from("Signature1", "utf-8");
    const SigStructure = Buffer.concat([sig, this.protectedHeader, EMPTY_BUFFER, this.payload]);
    return SigStructure;
  }
}
// Export the class
module.exports = COSE_Sign1;
