import { BytesLike } from "ethers";
import { BaseEnclaveClient } from "./baseEnclaveClient";
import { EnclaveResponse, PublicKeyResponse, SignAddressResponse } from "../types";
import { HeaderInit } from "node-fetch";
import fetch from "node-fetch";

export class IvsHttpClient extends BaseEnclaveClient {
  private ivsEndPoint: string;
  private _checkInputUrl: string;

  constructor(
    attestationVerifierEndpoint: string,
    ivsEndPoint: string,
    ivs_attestation_utility_endpoint: string,
    checkInputUrl: string,
    apikey?: string,
  ) {
    super(ivs_attestation_utility_endpoint, attestationVerifierEndpoint, apikey);
    this.ivsEndPoint = ivsEndPoint;
    this._checkInputUrl = checkInputUrl;
  }

  protected override url(api: string): string {
    return `${this.ivsEndPoint}${api}`;
  }

  public async getIvsStatus(): Promise<any> {
    // /api/getIvsStatus
    throw new Error("todo");
  }

  public checkInputUrl(): string {
    return `${this._checkInputUrl}/checkInput`;
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
      console.log(response);
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async fetchInputVerifierPublicKeys(): Promise<EnclaveResponse<PublicKeyResponse>> {
    const response = await fetch(this.url("/api/fetchInputVerifierPublicKeys"), { method: "POST", headers: this.headers() });
    if (!response.ok) {
      console.log(response);
      throw new Error(`Error: ${response.status}`);
    }
    const returnData = await response.json();
    console.log({ returnData });
    return {
      status: returnData.status,
      message: returnData.message,
      data: { ecies_public_key: returnData.data.ivs_ecies_public_key, public_key: returnData.data.ivs_public_key },
    };
  }

  public async generateConfigSetup(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/generateConfigSetup"), { method: "POST", headers: this.headers() });
    if (!response.ok) {
      console.log(response);
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  }
}
