import { BaseEnclaveClient } from "./baseEnclaveClient";
import { EnclaveResponse, PublicKeyResponse, SignAddressResponse } from "./types";
import { HeaderInit } from "node-fetch";
import fetch from "node-fetch";

export class IvsHttpClient extends BaseEnclaveClient {
  private ivsEndPoint: string;
  private apikey?: string;

  constructor(ivsEndPoint: string, ivs_attestation_utility_endpoint: string, apikey?: string) {
    super(ivs_attestation_utility_endpoint);
    this.ivsEndPoint = ivsEndPoint;
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
    return `${this.ivsEndPoint}${api}`;
  }

  public async getIvsStatus(): Promise<any> {
    // /api/getIvsStatus
    throw new Error("todo");
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

  public async startInputVerifier(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/startInputVerifier"), { method: "POST", headers: this.headers() });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async stopInputVerifier(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/stopInputVerifier"), { method: "POST", headers: this.headers() });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async restartInputVerifier(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/restartInputVerifier"), { method: "POST", headers: this.headers() });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async getInputVerifierStatus(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/getInputVerifierStatus"), { method: "GET", headers: this.headers() });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async fetchInputVerifierPublicKeys(): Promise<EnclaveResponse<PublicKeyResponse>> {
    const response = await fetch(this.url("/api/fetchInputVerifierPublicKeys"), { method: "POST", headers: this.headers() });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const returnData = await response.json();
    return {
      status: returnData.status,
      message: returnData.message,
      data: { ecies_public_key: returnData.data.ivs_ecies_public_key, public_key: returnData.data.ivs_public_key },
    };
  }

  public async getAddressSignature(address: string): Promise<String> {
    let attestation_server_response = await fetch(this.url("/api/signAddress"), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({ address }),
    });

    if (!attestation_server_response.ok) {
      throw new Error(`Error: ${attestation_server_response.status}`);
    }

    let response: SignAddressResponse = await attestation_server_response.json();

    const _v = response.data.v == 27 ? "1b" : "1c";
    let signature = response.data.r + response.data.s.split("x")[1] + _v;
    return signature;
  }
}
