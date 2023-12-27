export class IvsHttpClient {
  private ivsEndPoint: string;

  constructor(ivsEndPoint: string) {
    this.ivsEndPoint = ivsEndPoint;
  }

  public async getIvsStatus(): Promise<any> {
    // /api/getIvsStatus
    throw new Error("todo");
  }
}
