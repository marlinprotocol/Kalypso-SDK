import fetch from "node-fetch";
import { KalspsoConfig, MatchingEngineConfigPayload, EnclaveResponse, MatchingEngineKeys } from "../types";
import { BaseEnclaveClient } from "./baseEnclaveClient";
import { BytesLike, ethers } from "ethers";

export class MatchingEngineHttpClient extends BaseEnclaveClient {
  private matchingEngineEndPoint: string;
  private config: KalspsoConfig;

  constructor(matchingEngineEndPoint: string, me_attestation_utility_endpoint: string, config: KalspsoConfig, apikey?: string) {
    super(me_attestation_utility_endpoint, config.attestationVerifierEndPoint, apikey);
    this.matchingEngineEndPoint = matchingEngineEndPoint;
    this.config = config;
  }

  protected override url(api: string): string {
    return `${this.matchingEngineEndPoint}${api}`;
  }

  public async matchingEngineConfigSetup(
    rpc_url: string,
    chain_id: number,
    relayer_private_key: string,
    start_block: number
  ): Promise<EnclaveResponse<string>> {
    const meConfigData: MatchingEngineConfigPayload = {
      rpc_url,
      chain_id: "" + chain_id,
      relayer_private_key,
      proof_market_place: this.config.proof_market_place,
      generator_registry: this.config.generator_registry,
      start_block: "" + start_block,
      payment_token: this.config.payment_token,
      platform_token: this.config.staking_token,
      attestation_verifier: this.config.attestation_verifier,
      entity_registry: this.config.entity_registry,
    };
    console.log({ meConfigData });
    const response = await fetch(this.url("/api/matchingEngineConfigSetup"), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(meConfigData),
    });
    if (!response.ok) {
      console.log({ response });
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async updateMatchingEngineConfig(config: MEConfig): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/updateMatchingEngineConfig"), {
      method: "PUT",
      headers: this.headers(),
      body: JSON.stringify(config),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async getMatchingEngineStatus(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/getMatchingEngineStatus"), {
      method: "GET",
      headers: this.headers(),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async stopMatchingEngine(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/stopMatchingEngine"), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({}),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }
  public async startMatchingEngine(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/startMatchingEngine"), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({}),
    });
    if (!response.ok) {
      console.log(response);
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }
  public async restartMatchingEngine(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/restartMatchingEngine"), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({}),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async getMatchingEnginePublicKeys(): Promise<EnclaveResponse<MatchingEngineKeys>> {
    const response = await fetch(this.url("/api/getMatchingEnginePublicKeys"), {
      method: "GET",
      headers: this.headers(),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async getMockAddressSignature(meInternalPrivateKey: string, address: string): Promise<BytesLike> {
    let matchingEngineSigner = new ethers.Wallet(meInternalPrivateKey);
    let types = ["address"];

    let values = [address];

    let abicode = new ethers.AbiCoder();
    let encoded = abicode.encode(types, values);
    let digest = ethers.keccak256(encoded);
    let signature = await matchingEngineSigner.signMessage(ethers.getBytes(digest));

    return signature;
  }
}

interface MEConfig {
  chain_id: number;
  start_block: number;
}
