export class IvsHttpClient {
  private ivsEndPoint: string;
  private apikey?: string;

  constructor(ivsEndPoint: string, apikey?: string) {
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
