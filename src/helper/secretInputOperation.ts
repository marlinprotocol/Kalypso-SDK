import { encrypt, decrypt } from "eciesjs";
import crypto from "crypto";
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

export function encryptAesGcm(data: Buffer, secretKey: Buffer): Buffer {
  const iv = crypto.randomBytes(12); // 12 bytes for GCM
  const cipher = crypto.createCipheriv("aes-256-gcm", secretKey, iv);

  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  const authTag = cipher.getAuthTag(); // Get the authentication tag

  return Buffer.concat([iv, encrypted, authTag]);
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

export function decryptAesGcm(encryptedData: Buffer, secretKey: Buffer): Buffer {
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

  try {
    return Buffer.concat([decipher.update(encryptedText), decipher.final()]);
  } catch (err) {
    throw new Error("Decryption failed - possibly tampered data.");
  }
}

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

export async function encryptDataWithECIESandAesGcm(data: Buffer, publicKey: string): Promise<SecretData> {
  // Generate a random secret key for AES encryption
  const cipher = crypto.randomBytes(32);

  // Encrypt the data using the secret key
  const encryptedData = encryptAesGcm(data, cipher);

  // Encrypt the secret key using ECIES
  const encryptedSecretKey = encryptECIES(publicKey, cipher);

  return {
    encryptedData,
    aclData: encryptedSecretKey,
  };
}

export async function decryptDataWithECIESandAES(encryptedData: Buffer, aclData: Buffer, privateKey: Buffer): Promise<Buffer> {
  // Decrypt the secret key using ECIES private key
  const decryptedSecretKey = decryptECIES(privateKey, aclData);

  // Decrypt the actual data using the decrypted AES secret key
  try {
    return decryptAesGcm(encryptedData, decryptedSecretKey);
  } catch (ex) {
    return decryptAES(encryptedData, decryptedSecretKey);
  }
}
