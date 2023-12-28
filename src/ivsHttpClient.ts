import { BaseEnclaveClient } from "./baseEnclaveClient";

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

  public async getIvsStatus(): Promise<any> {
    // /api/getIvsStatus
    throw new Error("todo");
  }
}
