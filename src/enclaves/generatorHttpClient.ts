import { PublicKeyResponse, KalspsoConfig, EnclaveResponse, PortAndIvsUrl } from "../types";
import fetch from "node-fetch";
import { HeaderInit } from "node-fetch";
import { GeneratorConfigPayload, GeneratorConfig, UpdateRuntimeConfig, SignAddressResponse } from "../types";
import { BaseEnclaveClient } from "./baseEnclaveClient";
import { BytesLike } from "ethers";

export class GeneratorHttpClient extends BaseEnclaveClient {
  private generatorEndPoint: string;
  private config: KalspsoConfig;

  constructor(generatorEndPoint: string, generator_attestation_utility_endpoint: string, config: KalspsoConfig, apikey?: string) {
    super(generator_attestation_utility_endpoint, config.attestationVerifierEndPoint, apikey);

    this.generatorEndPoint = generatorEndPoint;
    this.config = config;
  }

  protected override url(api: string): string {
    return `${this.generatorEndPoint}${api}`;
  }

  public async getGeneratorStatus(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/getGeneratorStatus"), { method: "GET", headers: this.headers() });
    if (!response.ok) {
      console.log({ response });
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async generatorConfigSetup(
    generator_config: GeneratorConfig[],
    ws_url: string,
    http_url: string,
    gas_key: string,
    start_block: number,
    chain_id: number,
    ivs_url: string,
    markets: {
      [key: string]: PortAndIvsUrl;
    }
  ): Promise<EnclaveResponse<string>> {
    const generatorConfigData: GeneratorConfigPayload = {
      generator_config,
      runtime_config: {
        ws_url,
        http_url,
        private_key: gas_key,
        start_block,
        chain_id,
        payment_token: this.config.payment_token,
        generator_registry: this.config.generator_registry,
        attestation_verifier: this.config.attestation_verifier,
        entity_registry: this.config.entity_registry,
        proof_market_place: this.config.proof_market_place,
        staking_token: this.config.staking_token,
        ivs_url,
        markets,
      },
    };

    const response = await fetch(this.url("/api/generatorConfigSetup"), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(generatorConfigData),
    });

    if (!response.ok) {
      console.log(await response.json());
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async updateRuntimeConfig(config: UpdateRuntimeConfig): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/updateRuntimeConfig"), {
      method: "PUT",
      headers: this.headers(),
      body: JSON.stringify(config),
    });
    if (!response.ok) {
      console.log(JSON.stringify(response, null, 4));
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async addNewGenerator(generatorConfig: GeneratorConfig): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/addNewGenerator"), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(generatorConfig),
    });
    if (!response.ok) {
      console.log({ response });
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async removeGenerator(address: string): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/removeGenerator"), {
      method: "DELETE",
      headers: this.headers(),
      body: JSON.stringify({ address }),
    });
    if (!response.ok) {
      console.log({ response });
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async updateGeneratorConfig(generator: GeneratorConfig): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/updateGeneratorConfig"), {
      method: "PUT",
      headers: this.headers(),
      body: JSON.stringify(generator),
    });
    if (!response.ok) {
      console.log({ response });
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async getGeneratorPublicKeys(generator_address: string): Promise<PublicKeyResponse> {
    let data = JSON.stringify({
      generator_address: generator_address,
    });

    let public_key_config = {
      method: "POST",
      headers: this.headers(),
      body: data,
    };

    let generator_public_keys_response = await fetch(`${this.generatorEndPoint}/api/fetchGeneratorPublicKeys`, public_key_config);
    if (!generator_public_keys_response.ok) {
      console.log({ generator_public_keys_response });
    }
    let generator_public_keys = await generator_public_keys_response.json();
    if (generator_public_keys_response.status != 200) {
      console.log(generator_public_keys_response);
      throw new Error(
        generator_public_keys.message ? generator_public_keys.message : "There was an error in fetching generator public keys"
      );
    }
    return {
      ecies_public_key: generator_public_keys.data.generator_ecies_public_key,
      public_key: generator_public_keys.data.generator_public_key,
    };
  }

  public async programStatus(programName: string): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url(`/api/getProgramStatus?program_name=${programName}`), { method: "GET", headers: this.headers() });
    if (!response.ok) {
      console.log({ response });
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async startListener(): Promise<EnclaveResponse<string>> {
    return this.startProgram("listener");
  }

  public async stopListener(): Promise<EnclaveResponse<string>> {
    return this.stopProgram("listener");
  }

  public async restartListener(): Promise<EnclaveResponse<string>> {
    return this.restartProgram("listener");
  }

  public async startProgram(program_name: string, printLogs: boolean = true): Promise<EnclaveResponse<string>> {
    if (printLogs) {
      console.log("calling", this.url("/api/startProgram"), program_name);
    }
    const response = await fetch(this.url("/api/startProgram"), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({ program_name }),
    });

    if (!response.ok) {
      console.log({ response: await response.json() });
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async restartProgram(program_name: string, printLogs: boolean = true): Promise<EnclaveResponse<string>> {
    if (printLogs) {
      console.log("calling", this.url("/api/restartProgram"), { program_name });
    }
    const response = await fetch(this.url("/api/restartProgram"), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({ program_name }),
    });

    if (!response.ok) {
      console.log({ response });
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async stopProgram(program_name: string, printLogs: boolean = true): Promise<EnclaveResponse<string>> {
    if (printLogs) {
      console.log("calling", this.url("/api/stopProgram"));
    }
    const response = await fetch(this.url("/api/stopProgram"), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({ program_name }),
    });

    if (!response.ok) {
      console.log({ response });
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }
}
