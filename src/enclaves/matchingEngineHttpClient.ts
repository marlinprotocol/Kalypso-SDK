import fetch from "node-fetch";
import { KalspsoConfig, MatchingEngineConfigPayload, EnclaveResponse, MatchingEngineKeys } from "../types";
import { BaseEnclaveClient } from "./baseEnclaveClient";
import { BytesLike, ethers } from "ethers";
import { helpers } from "../helper";
import { SCHResponse, SecureCommunicationHandler } from "./SecureCommunicationHandler";

export class MatchingEngineHttpClient extends BaseEnclaveClient {
  private matchingEngineEndPoint: string;
  private config: KalspsoConfig;

  constructor(matchingEngineEndPoint: string, me_attestation_utility_endpoint: string, config: KalspsoConfig, enclavePubkeyKey?: string) {
    super(me_attestation_utility_endpoint, config.attestationVerifierEndPoint, enclavePubkeyKey);
    this.matchingEngineEndPoint = matchingEngineEndPoint;
    this.config = config;
  }

  protected override url(api: string): string {
    return `${this.matchingEngineEndPoint}${api}`;
  }

  /**
   * @deprecated Use matchingEngineConfigSetupEncrypted
   */
  public async matchingEngineConfigSetup(
    rpc_url: string,
    chain_id: number,
    relayer_private_key: string,
    start_block: number,
    printLogs: boolean = true,
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
    if (printLogs) {
      console.log({ meConfigData });
    }
    const response = await fetch(this.url("/api/matchingEngineConfigSetup"), {
      method: "POST",
      headers: this.headers(),
      body: helpers.encodePayload(meConfigData),
    });
    if (!response.ok) {
      console.log({ response });
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async matchingEngineConfigSetupEncrypted(
    rpc_url: string,
    chain_id: number,
    relayer_private_key: string,
    start_block: number,
    printLogs: boolean = true,
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
    if (printLogs) {
      console.log({ meConfigData });
    }

    let sch = await this.getSch();
    const response = await fetch(this.url("/api/matchingEngineConfigSetupEncrypted"), {
      method: "POST",
      headers: this.headers(),
      body: SecureCommunicationHandler.arrayifySchPayload(await sch.preparePayload(meConfigData)),
    });

    if (!response.ok) {
      console.log({ response });
      throw new Error(`Error: ${response.status}`);
    }
    let schResponse: SCHResponse = await response.json();
    const decodedResult = await sch.decodeResponse<{}>(schResponse);

    return { message: schResponse.message, data: JSON.stringify(decodedResult) };
  }

  /**
   *
   * @deprecated use updateMatchingEngineConfigEncrypted instead
   */
  public async updateMatchingEngineConfig(config: MEConfig): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/updateMatchingEngineConfig"), {
      method: "PUT",
      headers: this.headers(),
      body: helpers.encodePayload(config),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async updateMatchingEngineConfigEncrypted(config: MEConfig): Promise<EnclaveResponse<string>> {
    let sch = await this.getSch();
    const response = await fetch(this.url("/api/updateMatchingEngineConfigEncrypted"), {
      method: "PUT",
      headers: this.headers(),
      body: SecureCommunicationHandler.arrayifySchPayload(await sch.preparePayload(config)),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    let schResponse: SCHResponse = await response.json();
    const decodedResult = await sch.decodeResponse<{}>(schResponse);

    return { message: schResponse.message, data: JSON.stringify(decodedResult) };
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

  /**
   *
   * @deprecated use stopMatchingEngineEncrypted
   */
  public async stopMatchingEngine(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/stopMatchingEngine"), {
      method: "POST",
      headers: this.headers(),
      body: helpers.encodePayload({}),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async stopMatchingEngineEncrypted(): Promise<EnclaveResponse<string>> {
    const sch = await this.getSch();

    const response = await fetch(this.url("/api/stopMatchingEngine"), {
      method: "POST",
      headers: this.headers(),
      body: SecureCommunicationHandler.arrayifySchPayload(await sch.preparePayload({})),
    });
    if (!response.ok) {
      console.log({ response });
      throw new Error(`Error: ${response.status}`);
    }
    let schResponse: SCHResponse = await response.json();
    const decodedResult = await sch.decodeResponse<{}>(schResponse);

    return { message: schResponse.message, data: JSON.stringify(decodedResult) };
  }

  /**
   * @deprecated Use startMatchingEngineEncrypted instead
   */
  public async startMatchingEngine(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/startMatchingEngine"), {
      method: "POST",
      headers: this.headers(),
      body: helpers.encodePayload({}),
    });
    if (!response.ok) {
      console.log(response);
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async startMatchingEngineEncrypted(): Promise<EnclaveResponse<string>> {
    const sch = await this.getSch();
    const response = await fetch(this.url("/api/startMatchingEngine"), {
      method: "POST",
      headers: this.headers(),
      body: SecureCommunicationHandler.arrayifySchPayload(await sch.preparePayload({})),
    });

    if (!response.ok) {
      console.log({ response });
      throw new Error(`Error: ${response.status}`);
    }
    let schResponse: SCHResponse = await response.json();
    const decodedResult = await sch.decodeResponse<{}>(schResponse);

    return { message: schResponse.message, data: JSON.stringify(decodedResult) };
  }

  /**
   * @deprecated Use restartMatchingEngineEncrypted instead
   */
  public async restartMatchingEngine(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/restartMatchingEngine"), {
      method: "POST",
      headers: this.headers(),
      body: helpers.encodePayload({}),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async restartMatchingEngineEncrypted(): Promise<EnclaveResponse<string>> {
    const sch = await this.getSch();
    const response = await fetch(this.url("/api/restartMatchingEngine"), {
      method: "POST",
      headers: this.headers(),
      body: SecureCommunicationHandler.arrayifySchPayload(await sch.preparePayload({})),
    });
    if (!response.ok) {
      console.log({ response });
      throw new Error(`Error: ${response.status}`);
    }
    let schResponse: SCHResponse = await response.json();
    const decodedResult = await sch.decodeResponse<{}>(schResponse);

    return { message: schResponse.message, data: JSON.stringify(decodedResult) };
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

  /**
   * @deprecated Only works in dev mode
   * @param meInternalPrivateKey
   * @param address
   * @returns Address signed with the meInternalPrivateKey
   */
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
