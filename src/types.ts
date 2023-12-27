import { BytesLike } from "ethers";

export interface KalspsoConfig {
  payment_token: string;
  staking_token: string;
  generator_registry: string;
  attestation_verifier: string;
  entity_registry: string;
  proof_market_place: string;
  generatorEnclave?: Enclave;
  matchingEngineEnclave?: Enclave;
  ivsEnclave?: Enclave;
}

interface Enclave {
  url: string;
  apikey: string;
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

export interface PublicKeyResponse {
  generator_ecies_public_key: string;
  generator_public_key: string;
}

export interface AttestationResponse {
  attestation_document: BytesLike;
  secp_key: BytesLike;
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
  publicInputs: BytesLike;
  encryptedSecret: Buffer;
  acl: Buffer;
}

export interface GeneratorConfig {
  address: string;
  data: string;
  supported_markets: string[];
}

export interface RuntimeConfig {
  ws_url: string;
  http_url: string;
  private_key: string;
  start_block: number;
  chain_id: number;
  payment_token: string;
  generator_registry: string;
  attestation_verifier: string;
  entity_registry: string;
  proof_market_place: string;
  transfer_verifier_wrapper: string;
  zkb_verifier_wrapper: string;
  priority_list: string;
  input_and_proof_format: string;
  staking_token: string;
}

export interface GeneratorConfigPayload {
  generator_config: GeneratorConfig[];
  runtime_config: RuntimeConfig;
}

export interface UpdateRuntimeConfig {
  ws_url: string;
  private_key: string;
  proof_market_place: string;
  generator_registry: string;
  start_block: number;
  chain_id: number;
}
