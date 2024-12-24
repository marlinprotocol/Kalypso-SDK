// Import specific classes/functions from the 'crypto' module
// import { X509Certificate, createHash } from "crypto";

import * as cbor from "cbor";
import * as asn1js from "asn1js";
import * as pkijs from "pkijs";

const EMPTY_BUFFER = Buffer.alloc(0);

interface Signature {
  r: Buffer; // or Uint8Array if that's what you're using
  s: Buffer; // or Uint8Array
}

interface SigningPublicKey {
  verify: (digest: Uint8Array, signature: Signature) => boolean; // Adjust types as needed
}

export class COSE_Sign1 {
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
      return await COSE_Sign1.decodeCBOR(new Uint8Array(this.protectedHeader));
    } catch (err) {
      throw new Error("SerializationError : Failed to decode protected header");
    }
  }

  private compareArrayBuffers(buffer1:ArrayBufferLike, buffer2:ArrayBufferLike) {
    // Check if the lengths are the same\
    // console.log('checking buffers');
    if (buffer1.byteLength !== buffer2.byteLength) {
        // console.log('length mismatch');
        return false; // Different lengths, therefore not equal
    }
    // console.log('length matched', buffer1.byteLength);
    // Convert ArrayBuffers to Uint8Arrays
    const view1 = new Uint8Array(buffer1);
    const view2 = new Uint8Array(buffer2);


    // Compare byte by byte
    for (let i = 0; i < view1.length; i++) {

        if (view1[i] !== view2[i]) {
            // console.log(i);
            return false; // Found a difference
        }
    }

    return true; // All bytes match
  }

  private compareCertificates(cert1: pkijs.Certificate, cert2: pkijs.Certificate) {
    // Compare serial number
    if (!this.compareArrayBuffers(cert1.serialNumber.valueBlock.valueHex, cert2.serialNumber.valueBlock.valueHex)) {
      console.log("serial mismatch");
      return false;
    }

    // Compare issuer
    if (!this.compareArrayBuffers(cert1.issuer.valueBeforeDecode, cert2.issuer.valueBeforeDecode)) {
      console.log("issuer mismatch");  
      return false;
    }

    // Compare subject
    if (!this.compareArrayBuffers(cert1.subject.valueBeforeDecode, cert2.subject.valueBeforeDecode)) {
      console.log("subject mismatch");    
      return false;
    }

    // Compare signature algorithm
    if (cert1.signatureAlgorithm.algorithmId !== cert2.signatureAlgorithm.algorithmId) {
      console.log("algo id mismatch");    
      return false;
    }

    // Compare public key
    if (!this.compareArrayBuffers(cert1.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex, cert2.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex)) {
      console.log("pb key mismatch");    
      return false;
    }

    return true;
}

// // Utility function to compare ArrayBuffers
//   private compareArrayBuffers(buf1, buf2) {
//       return buf1.byteLength === buf2.byteLength && buf1.every((value, index) => value === buf2[index]);
//   }


  private getAllCerts(cert: pkijs.Certificate, cabundle: Buffer[]) {
    // let allCerts: X509Certificate[] = [cert];
    let allCerts: pkijs.Certificate[] = [cert];

    // Iterate over cabundle and process each buffer to create X509 certificates
    for (const certBuffer of cabundle) {
      try {
        // Check if certBuffer is actually a Buffer, and then process it
        if (Buffer.isBuffer(certBuffer)) {
          // const cert = new X509Certificate(new Uint8Array(certBuffer)); // Create X509Certificate from buffer
          // allCerts.push(cert); // Add certificate to the allCerts array
          // Convert Buffer to ASN.1 format
          const asn1 = asn1js.fromBER(certBuffer); // Convert to ASN.1 format
          const pkijsCert = new pkijs.Certificate({ schema: asn1.result }); // Parse the ASN.1 data into a pkijs Certificate
          allCerts.push(pkijsCert); // Add certificate to the allCerts array
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
    // const hash = createHash("sha384");
    // hash.update(new Uint8Array(ToBeSigned));
    // const structDigest = hash.digest();

    const structDigestArrayBuffer = await crypto.subtle.digest("SHA-384", ToBeSigned);
    const structDigest = new Uint8Array(structDigestArrayBuffer); 
    const sigs = { r: this.signature.slice(0, 48), s: this.signature.slice(48) };

    return key.verify(structDigest, sigs);
  }

  public async verifyCertificates(cert: pkijs.Certificate, cablundle: Buffer[], rootCert: pkijs.Certificate) {
    const certs = this.getAllCerts(cert, cablundle);

    console.log(certs.length);
    // console.log(cert);
    try {
      for (let i = 0; i < certs.length - 1; i++) {
        // Get public key from the next certificate in the chain
        // const pubkey = certs[i + 1].publicKey;
        const currentCert = certs[i];
        const nextCert = certs[i + 1];

        // Verify the current certificate's signature using the next certificate's public key
        const verified = await currentCert.verify(nextCert);
        if (!verified) {
            throw new Error(`Certificate signature verification failed at index ${i}`);
        }
        // Verify the current certificate against the next certificate's public key
        // if (!certs[i].verify(pubkey)) {
        //   throw new Error(`Certificate signature verification failed at index ${i}`);
        // }

        // Check if the next certificate issued the current certificate
        // console.log(certs[i + 1]);

        // console.log(certs[i]);
        // console.log(certs[i + 1].subject.valueBeforeDecode);
        // console.log(certs[i].issuer.valueBeforeDecode);
        if (!(this.compareArrayBuffers(certs[i + 1].subject.valueBeforeDecode,certs[i].issuer.valueBeforeDecode))) {
          throw new Error(`Issuer mismatch at index ${i}`);
        }

        // Check current time validity of the certificate
            // Check the validity dates of the certificate
        const validFromDate = currentCert.notBefore.value;
        const validToDate = currentCert.notAfter.value;
        const currentTime = new Date();

        if (isNaN(validFromDate.getTime()) || isNaN(validToDate.getTime())) {
            throw new Error(`Invalid date format at index ${i}`);
        }

        if (validToDate < currentTime || validFromDate > currentTime) {
            throw new Error(`Certificate time validity failed at index ${i}`);
        }

        if (validToDate < currentTime || validFromDate > currentTime) {
          throw new Error(`Certificate time validity failed at index ${i}`);
        }
      }
    } catch (error) {
      console.log(error);
      return false; // Verification failed
    }

    // Compare the rootCert with the cert ( don't know how to compare it in entirety yet)
    // console.log(rootCert);
    // console.log(certs[certs.length - 1]);
    if (!this.compareCertificates(rootCert, certs[certs.length - 1])) {
      console.log("root cert not equal to attestation cert");
      return false;
    }
    return true;
  }

  // Create SigStructure
  createSigStructure() {
    const sig = Buffer.from("Signature1", "utf-8");
    const SigStructure = Buffer.concat([
      new Uint8Array(sig),
      new Uint8Array(this.protectedHeader),
      new Uint8Array(EMPTY_BUFFER),
      new Uint8Array(this.payload),
    ]);
    return SigStructure;
  }
}
