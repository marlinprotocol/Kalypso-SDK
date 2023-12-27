export class MatchingEngineHttpClient {
  private matchingEngineEndPoint: string;
  private apikey?: string;

  constructor(matchingEngineEndPoint: string, apikey?: string) {
    this.matchingEngineEndPoint = matchingEngineEndPoint;
    if (apikey) {
      this.apikey = apikey;
    }
  }

  public async getMatchingEngineStatus(): Promise<any> {
    // /api/getMatchingEngineStatus
    throw new Error("todo");
  }
}
