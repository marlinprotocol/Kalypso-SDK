import fetch from "node-fetch";
import { HeaderInit } from "node-fetch";
import { KalspsoConfig, MatchingEngineConfigPayload, EnclaveResponse } from "./types";
import { BaseEnclaveClient } from "./baseEnclaveClient";

export class MatchingEngineHttpClient extends BaseEnclaveClient {
  private matchingEngineEndPoint: string;
  private config: KalspsoConfig;
  private apikey?: string;

  constructor(matchingEngineEndPoint: string, me_attestation_utility_endpoint: string, config: KalspsoConfig, apikey?: string) {
    super(me_attestation_utility_endpoint);
    this.matchingEngineEndPoint = matchingEngineEndPoint;
    this.config = config;

    if (apikey) {
      this.apikey = apikey;
    }
  }

  private headers(): HeaderInit {
    if (this.apikey) {
      return {
        "Content-Type": "application/json",
        "API-Key": this.apikey,
      };
    }
    throw new Error("api key not provided");
  }

  private url(api: string): string {
    return `${this.matchingEngineEndPoint}${api}`;
  }

  public async generateApiKey(): Promise<EnclaveResponse<string>> {
    if (this.apikey) {
      throw new Error("apikey is already provided");
    }

    const response = await fetch(this.url("/api/generateApiKey"), { method: "POST" });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async matchingEngineConfigSetup(
    rpc_url: string,
    chain_id: number,
    relayer_private_key: string,
    start_block: number,
    transfer_verifier_wrapper: string,
    zkb_verifier_wrapper: string,
    priority_list: string,
    input_and_proof_format: string
  ): Promise<EnclaveResponse<string>> {
    const meConfigData: MatchingEngineConfigPayload = {
      rpc_url,
      chain_id,
      relayer_private_key,
      proof_market_place: this.config.proof_market_place,
      generator_registry: this.config.generator_registry,
      start_block,
      payment_token: this.config.payment_token,
      platform_token: this.config.staking_token,
      attestation_verifier: this.config.attestation_verifier,
      entity_registry: this.config.entity_registry,
      transfer_verifier_wrapper,
      zkb_verifier_wrapper,
      priority_list,
      input_and_proof_format,
    };
    const response = await fetch(this.url("/api/matchingEngineConfigSetup"), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(meConfigData),
    });
    if (!response.ok) {
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

  public async getMatchingEnginePublicKeys(): Promise<any> {
    const response = await fetch(this.url("/api/getMatchingEnginePublicKeys"), {
      method: "GET",
      headers: this.headers(),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }
}

interface MEConfig {
  chain_id: number;
  start_block: number;
}
