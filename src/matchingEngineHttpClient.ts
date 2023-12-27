export class MatchingEngineHttpClient {
  private matchingEngineEndPoint: string;

  constructor(matchingEngineEndPoint: string) {
    this.matchingEngineEndPoint = matchingEngineEndPoint;
  }

  public async getMatchingEngineStatus(): Promise<any> {
    // /api/getMatchingEngineStatus
    throw new Error("todo");
  }
}
