export interface KalspsoConfig {
  proofMarketPlace: string;
  generatorRegistry: string;
  rsaRegistryAddress: string;
  paymentTokenAddress: string;
  platformTokenAddress: string;
}

export interface SecretData {
  encryptedData: Buffer;
  aclData: Buffer;
}

export interface SecretInputOperations {
  encryptDataWithECIESandAES(data: Buffer, publicKey: string): Promise<SecretData>;
  decryptDataWithECIESandAES(encryptedData: Buffer, aclData: Buffer, privateKey: Buffer): Promise<Buffer>;
}
