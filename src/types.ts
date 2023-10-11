export interface KalspsoConfig {
  paymentToken: string;
  platformToken: string;
  generatorRegistry: string;
  attestationVerifier: string;
  EntityRegistry: string;
  proofMarketPlace: string;
  transferVerifierWrapper: string;
  zkbVerifierWrapper: string;
  priorityList: string;
  inputAndProofFormat: string;
}

export interface SecretData {
  encryptedData: Buffer;
  aclData: Buffer;
}

export interface SecretInputOperations {
  encryptDataWithECIESandAES(data: Buffer, publicKey: string): Promise<SecretData>;
  decryptDataWithECIESandAES(encryptedData: Buffer, aclData: Buffer, privateKey: Buffer): Promise<Buffer>;
  encryptECIES(publicKey: string, data: Buffer): Buffer;
  decryptECIES(privateKey: Buffer, encryptedData: Buffer): Buffer;
  encryptAES(data: Buffer, secretKey: Buffer): Buffer;
  decryptAES(encryptedData: Buffer, secretKey: Buffer): Buffer;
}
