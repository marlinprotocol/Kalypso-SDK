import crypto from "crypto";

// 1. Encrypt a string using AES-256

function encryptAES(data: string, secretKey: Buffer): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", secretKey, iv);
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");
  return `${iv.toString("hex")}:${encrypted}`;
}

// 2. Asymmetrically encrypt the secret key using RSA-2048

async function encryptRSA(publicKey: string, data: Buffer): Promise<string> {
  const encryptedBuffer = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha1",
    },
    data
  );
  return encryptedBuffer.toString("base64");
}

export async function encryptDataWithRSAandAES(data: string, publicKey: string) {
  // Generate a random secret key for AES encryption
  const secretKey = crypto.randomBytes(32);

  // Encrypt the data using the secret key
  const encryptedData = encryptAES(data, secretKey);

  // Encrypt the secret key using RSA
  const encryptedSecretKey = await encryptRSA(publicKey, secretKey);

  // Return the encrypted data and encrypted secret key
  return {
    encryptedData,
    aclData: encryptedSecretKey,
  };
}

// 1. Decrypt a string using AES-256
function decryptAES(encryptedData: string, secretKey: Buffer): string {
  const parts = encryptedData.split(":");
  if (parts.length < 2) {
    throw new Error("Invalid encrypted data format.");
  }

  const iv = Buffer.from(parts[0], "hex");
  const encryptedText = Buffer.from(parts[1], "hex");

  const decipher = crypto.createDecipheriv("aes-256-cbc", secretKey, iv);
  const decryptedBuffer = Buffer.concat([decipher.update(encryptedText), decipher.final()]);

  return decryptedBuffer.toString("utf8");
}

// 2. Asymmetrically decrypt the secret key using RSA-2048

async function decryptRSA(privateKey: string, encryptedData: string): Promise<Buffer> {
  const buffer = Buffer.from(encryptedData, "base64");
  const decryptedBuffer = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha1",
    },
    buffer
  );
  return decryptedBuffer;
}

export async function decryptDataWithRSAandAES(encryptedData: string, aclData: string, privateKey: string): Promise<string> {
  // Decrypt the secret key using RSA private key
  const decryptedSecretKey = await decryptRSA(privateKey, aclData);

  // Decrypt the actual data using the decrypted AES secret key
  const data = decryptAES(encryptedData, decryptedSecretKey);

  return data;
}
