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
  utilityUrl: string;
  apikey?: string;
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

// {
//   "ws_url": "wss://arb-sepolia.g.alchemy.com/v2/zaEVsF1FaVERyTsM42WGoE4uM7wRyfqK",
//   "http_url": "https://arb-sepolia.g.alchemy.com/v2/zaEVsF1FaVERyTsM42WGoE4uM7wRyfqK",
//   "private_key": "91e60908ad659c964169211f07d7c2328ca8919d81dfd772c850bebfd67d4cdf",
//   "start_block": 16440453,
//   "chain_id": 421614,
//   "payment_token": "0x01d84D33CC8636F83d2bb771e184cE57d8356863",
//   "staking_token": "0xdb69299dDE4A00c99b885D9f8748B2AeD1Fe4Ed4",
//   "attestation_verifier": "0xDa7a2cBe0a23bb6bF4B3a6cFF0Fba7D0159967A1",
//   "entity_registry": "0x7376a8729dEEa9BF57e46123A5b74c8419a6Ab62",
//   "proof_market_place": "0x6F45cb6F85A7fc2C36b18eFA524DE23263Dc2D24",
//   "generator_registry": "0x41345DA0907ef0633ef420ae8c9D88444622cf81",
//   "ivs_url":"http://43.205.177.43:3030/checkInput",
//   "markets":{
//       "5":"6000",
//       "1":"7000"
//   }
// }
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
    [key: string]: string;
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

export interface EnclaveAttestationData {
  attestation_doc: BytesLike;
  pcrs: BytesLike[];
  min_cpus: number;
  min_mem: number;
  max_age: number;
  signature: BytesLike;
  secp256k1_public: BytesLike;
  timestamp: number;
}

export interface SignAddressResponse {
  message: string;
  data: {
    r: string;
    s: string;
    v: number;
  };
}
