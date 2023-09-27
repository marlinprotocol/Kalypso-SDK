export interface KalspsoConfig {
  proofMarketPlace: string;
  generatorRegistry: string;
  stakingTokenAddress: string;
  rsaRegistryAddress: string;
  paymentTokenAddress: string;
  platformTokenAddress: string;
}

export interface SecretData {
  encryptedData: string;
  aclData: string;
}

export interface SecretInputOperations {
  encryptDataWithRSAandAES(data: string, publicKey: string): Promise<SecretData>;
  decryptDataWithRSAandAES(encryptedData: string, aclData: string, privateKey: string): Promise<string>;
  base64ToHex(base64String: string): string;
  hexToBase64(hexString: string): string;
}
