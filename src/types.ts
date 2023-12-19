import { BytesLike } from "ethers";

export interface KalspsoConfig {
  payment_token: string;
  staking_token: string;
  generator_registry: string;
  attestation_verifier: string;
  entity_registry: string;
  proof_market_place: string;
}

export interface SecretData {
  encryptedData: Buffer;
  aclData: Buffer;
}

export interface SecretInputOperations {
  encryptDataWithECIESandAesGcm(data: Buffer, publicKey: string): Promise<SecretData>;
  encryptDataWithECIESandAES(data: Buffer, publicKey: string): Promise<SecretData>;
  decryptDataWithECIESandAES(encryptedData: Buffer, aclData: Buffer, privateKey: Buffer): Promise<Buffer>;
  encryptECIES(publicKey: string, data: Buffer): Buffer;
  decryptECIES(privateKey: Buffer, encryptedData: Buffer): Buffer;
  encryptAES(data: Buffer, secretKey: Buffer): Buffer;
  decryptAES(encryptedData: Buffer, secretKey: Buffer): Buffer;
}

export enum AskState {
  NULL = "Ddoes not exists",
  CREATE = "create",
  UNASSIGNED = "unassigned",
  ASSIGNED = "assigned to a generator",
  COMPLETE = "complete",
  DEADLINE_CROSSED = "deadline crossed",
}

export interface PublicAndSecretInputPair {
  publicInputs: BytesLike,
  encryptedSecret: Buffer,
  acl: Buffer,
}