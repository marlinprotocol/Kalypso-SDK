import { encrypt, decrypt } from "eciesjs";
import crypto from "crypto";
import { SecretData } from "./types";

function encryptECIES(publicKey: string, data: Buffer): Buffer {
  return encrypt(publicKey, data);
}

function decryptECIES(privateKey: Buffer, encryptedData: Buffer): Buffer {
  return decrypt(privateKey, encryptedData);
}

function encryptAES(data: Buffer, secretKey: Buffer): Buffer {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  return Buffer.concat([iv, encrypted]);
}

function decryptAES(encryptedData: Buffer, secretKey: Buffer): Buffer {
  if (encryptedData.length <= 16) {
    throw new Error("Invalid encrypted data format.");
  }

  const iv = encryptedData.slice(0, 16);
  const encryptedText = encryptedData.slice(16);

  const decipher = crypto.createDecipheriv("aes-256-cbc", secretKey, iv);
  return Buffer.concat([decipher.update(encryptedText), decipher.final()]);
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

export async function decryptDataWithECIESandAES(encryptedData: Buffer, aclData: Buffer, privateKey: Buffer): Promise<Buffer> {
  // Decrypt the secret key using ECIES private key
  const decryptedSecretKey = decryptECIES(privateKey, aclData);

  // Decrypt the actual data using the decrypted AES secret key
  return decryptAES(encryptedData, decryptedSecretKey);
}
