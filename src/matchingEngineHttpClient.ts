export class MatchingEngineHttpClient {
  private matchingEngineEndPoint: string;
  private apikey?: string;

  constructor(matchingEngineEndPoint: string, apikey?: string) {
    this.matchingEngineEndPoint = matchingEngineEndPoint;
    if (apikey) {
      this.apikey = apikey;
    }
  }

  public async generateApiKey(): Promise<any> {
    if (this.apikey) {
      throw new Error("apikey is already provided");
    }
    // /api/generateApiKey
    throw new Error("todo");
  }

  public async getMatchingEngineStatus(): Promise<any> {
    // /api/getMatchingEngineStatus
    throw new Error("todo");
  }
}
