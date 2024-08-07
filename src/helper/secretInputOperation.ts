import { encrypt, decrypt } from "eciesjs";
import crypto from "crypto";
import {
  randombytes_buf,
  crypto_aead_chacha20poly1305_ietf_encrypt,
  crypto_aead_chacha20poly1305_IETF_KEYBYTES,
  crypto_aead_chacha20poly1305_IETF_NPUBBYTES,
} from "libsodium-wrappers";
import * as sodium from "libsodium-wrappers";
import { SecretData } from "../types";

export function encryptECIES(publicKey: string, data: Buffer): Buffer {
  return encrypt(publicKey, data);
}

export function decryptECIES(privateKey: Buffer, encryptedData: Buffer): Buffer {
  return decrypt(privateKey, encryptedData);
}

export function encryptAES(data: Buffer, secretKey: Buffer): Buffer {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  return Buffer.concat([iv, encrypted]);
}

// export function encryptAesGcm(data: Buffer, secretKey: Buffer): Buffer {
//   const iv = crypto.randomBytes(12); // 12 bytes for GCM
//   const cipher = crypto.createCipheriv("aes-256-gcm", secretKey, iv);

//   const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
//   const authTag = cipher.getAuthTag(); // Get the authentication tag

//   return Buffer.concat([iv, encrypted, authTag]);
// }

export function encryptAesGcm(data: Buffer, secretKey: Buffer, associatedData: Buffer): Buffer {
  const iv = crypto.randomBytes(12); // 12 bytes for GCM
  const cipher = crypto.createCipheriv("aes-256-gcm", secretKey, iv);

  if (associatedData) {
    cipher.setAAD(associatedData);
  }

  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  const authTag = cipher.getAuthTag(); // Get the authentication tag

  return Buffer.concat([iv, encrypted, authTag]);
}

export function decryptAesGcm(encryptedData: Buffer, secretKey: Buffer, associatedData: Buffer): Buffer {
  const ivLength = 12; // 12 bytes for GCM
  const authTagLength = 16; // 16 bytes for GCM

  if (encryptedData.length <= ivLength + authTagLength) {
    throw new Error("Invalid encrypted data format.");
  }

  const iv = encryptedData.slice(0, ivLength);
  const authTag = encryptedData.slice(encryptedData.length - authTagLength);
  const encryptedText = encryptedData.slice(ivLength, encryptedData.length - authTagLength);

  const decipher = crypto.createDecipheriv("aes-256-gcm", secretKey, iv);
  decipher.setAuthTag(authTag);

  // Set the associated data if it was used during encryption
  if (associatedData) {
    decipher.setAAD(associatedData);
  }

  try {
    return Buffer.concat([decipher.update(encryptedText), decipher.final()]);
  } catch (err) {
    throw new Error("Decryption failed - possibly tampered data.");
  }
}

export function decryptAES(encryptedData: Buffer, secretKey: Buffer): Buffer {
  if (encryptedData.length <= 16) {
    throw new Error("Invalid encrypted data format.");
  }

  const iv = encryptedData.slice(0, 16);
  const encryptedText = encryptedData.slice(16);

  const decipher = crypto.createDecipheriv("aes-256-cbc", secretKey, iv);
  return Buffer.concat([decipher.update(encryptedText), decipher.final()]);
}

// export function decryptAesGcm(encryptedData: Buffer, secretKey: Buffer): Buffer {
//   const ivLength = 12; // 12 bytes for GCM
//   const authTagLength = 16; // 16 bytes for GCM

//   if (encryptedData.length <= ivLength + authTagLength) {
//     throw new Error("Invalid encrypted data format.");
//   }

//   const iv = encryptedData.slice(0, ivLength);
//   const authTag = encryptedData.slice(encryptedData.length - authTagLength);
//   const encryptedText = encryptedData.slice(ivLength, encryptedData.length - authTagLength);

//   const decipher = crypto.createDecipheriv("aes-256-gcm", secretKey, iv);
//   decipher.setAuthTag(authTag);

//   try {
//     return Buffer.concat([decipher.update(encryptedText), decipher.final()]);
//   } catch (err) {
//     throw new Error("Decryption failed - possibly tampered data.");
//   }
// }

export async function encryptDataWithECIESandAES(data: Buffer, publicKey: string): Promise<SecretData> {
  // Generate a random secret key for AES encryption
  const cipher = crypto.randomBytes(32);

  // Encrypt the data using the secret key
  const encryptedData = encryptAES(data, cipher);

  // Encrypt the secret key using ECIES
  const encryptedSecretKey = encryptECIES(publicKey, cipher);

  return {
    encryptedData,
    aclData: encryptedSecretKey,
  };
}

export async function encryptDataWithECIESandAesGcm(data: Buffer, publicKey: string, associatedData: Buffer): Promise<SecretData> {
  // Generate a random secret key for AES encryption
  const cipher = crypto.randomBytes(32);
  // Encrypt the data using the secret key
  const encryptedData = encryptAesGcm(data, cipher, associatedData);

  // Encrypt the secret key using ECIES
  const encryptedSecretKey = encryptECIES(publicKey, cipher);

  return {
    encryptedData,
    aclData: encryptedSecretKey,
  };
}

export async function decryptDataWithECIESandAES(
  encryptedData: Buffer,
  aclData: Buffer,
  privateKey: Buffer,
  associatedData: Buffer,
): Promise<Buffer> {
  // Decrypt the secret key using ECIES private key
  const decryptedSecretKey = decryptECIES(privateKey, aclData);

  // Decrypt the actual data using the decrypted AES secret key
  try {
    return decryptAesGcm(encryptedData, decryptedSecretKey, associatedData);
  } catch (ex) {
    return decryptAES(encryptedData, decryptedSecretKey);
  }
}

export async function encryptWithLibsodium(data: Buffer, secretKey: Buffer, marketId?: Buffer): Promise<Buffer> {
  await sodium.ready;

  if (secretKey.length !== crypto_aead_chacha20poly1305_IETF_KEYBYTES) {
    throw new Error(`Invalid secret key length: expected ${crypto_aead_chacha20poly1305_IETF_KEYBYTES} bytes.`);
  }

  // Generate a random nonce (similar to an IV in AES-GCM), if market is not provided as IV
  const nonce = marketId || randombytes_buf(crypto_aead_chacha20poly1305_IETF_NPUBBYTES);

  // Encrypt the data (note: libsodium's encryption functions return the ciphertext combined with the auth tag)
  const encryptedData = crypto_aead_chacha20poly1305_ietf_encrypt(
    data,
    null, // Additional data (not used here, but could be for additional authentication)
    null, // nsec parameter (not used in this context)
    nonce,
    secretKey,
  );

  // Return a Buffer that concatenates the nonce and the encrypted data (ciphertext + auth tag)
  return Buffer.concat([Buffer.from(nonce), Buffer.from(encryptedData)]);
  // return Buffer.from(encryptedData);
}
