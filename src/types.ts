import { BytesLike } from "ethers";

export interface KalspsoConfig {
  payment_token: string;
  staking_token: string;
  generator_registry: string;
  attestation_verifier: string;
  entity_registry: string;
  proof_market_place: string;
  tee_verifier_deployer: string;
  generatorEnclave?: Enclave;
  matchingEngineEnclave?: Enclave;
  ivsEnclave?: Enclave;
  checkInputUrl: string;
  attestationVerifierEndPoint: string;
}

interface Enclave {
  url: string;
  utilityUrl: string;
  enclavePubkey?: string;
}

export interface SecretData {
  encryptedData: Buffer;
  aclData: Buffer;
}

export interface SecretInputOperations {
  encryptDataWithECIESandAesGcm(data: Buffer, publicKey: string, associatedData: Buffer): Promise<SecretData>;
  encryptDataWithECIESandAES(data: Buffer, publicKey: string): Promise<SecretData>;
  decryptDataWithECIESandAES(encryptedData: Buffer, aclData: Buffer, privateKey: Buffer, associatedData: Buffer): Promise<Buffer>;
  encryptECIES(publicKey: string, data: Buffer): Buffer;
  decryptECIES(privateKey: Buffer, encryptedData: Buffer): Buffer;
  encryptAES(data: Buffer, secretKey: Buffer): Buffer;
  decryptAES(encryptedData: Buffer, secretKey: Buffer): Buffer;
}

export interface PublicKeyResponse {
  ecies_public_key: string;
  public_key: string;
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
  publicInputs: Buffer;
  encryptedSecret: Buffer;
  acl: Buffer;
}

//   {
//     "address": "0x0469866e13cd7DF08f5482FBb127a72fF197365D",
//     "data": "Some data",
//     "supported_markets": [
//       "5"
//     ]
//   }
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
  staking_token: string;
  attestation_verifier: string;
  entity_registry: string;
  proof_market_place: string;
  generator_registry: string;
  ivs_url: string;
  markets: {
    [key: string]: PortAndIvsUrl;
  };
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

export interface MatchingEngineConfigPayload {
  rpc_url: string;
  chain_id: string;
  relayer_private_key: string;
  proof_market_place: string;
  generator_registry: string;
  start_block: string;
  payment_token: string;
  platform_token: string;
  attestation_verifier: string;
  entity_registry: string;
}

export interface EnclaveResponse<T> {
  status?: string;
  message: string;
  data: T;
}

export interface SignAddressResponse {
  message: string;
  data: {
    r: string;
    s: string;
    v: number;
  };
}

export interface MatchingEngineKeys {
  matching_engine_ecies_public_key: string;
  matching_engine_public_key: string;
}

export interface PortAndIvsUrl {
  port: string;
  ivs_url: string;
}
