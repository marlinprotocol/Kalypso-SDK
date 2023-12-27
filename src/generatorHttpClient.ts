import { PublicKeyResponse, AttestationResponse, KalspsoConfig, EnclaveResponse, EnclaveAttestationData } from "./types";
import fetch from "node-fetch";
import { HeaderInit } from "node-fetch";
import { ethers } from "ethers";
import { GeneratorConfigPayload, GeneratorConfig, UpdateRuntimeConfig } from "./types";

export class GeneratorHttpClient {
  private generatorEndPoint: string;
  private generator_attestation_utility_endpoint: string;
  private config: KalspsoConfig;
  private apikey?: string;

  constructor(generatorEndPoint: string, generator_attestation_utility_endpoint: string, config: KalspsoConfig, apikey?: string) {
    this.generatorEndPoint = generatorEndPoint;
    this.generator_attestation_utility_endpoint = generator_attestation_utility_endpoint;
    this.config = config;

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
    return `${this.generatorEndPoint}${api}`;
  }

  public async getGeneratorStatus(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/getGeneratorStatus"), { method: "GET", headers: this.headers() });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async generateApiKey(): Promise<any> {
    if (this.apikey) {
      throw new Error("apikey is already provided");
    }

    const response = await fetch(this.url("/api/generateApiKey"), { method: "POST" });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  // New methods based on your list
  public async startGenerator(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/startGenerator"), { method: "POST", headers: this.headers() });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async restartGenerator(): Promise<EnclaveResponse<null>> {
    const response = await fetch(this.url("/api/restartGenerator"), { method: "POST", headers: this.headers() });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async stopGenerator(): Promise<EnclaveResponse<string>> {
    const response = await fetch(this.url("/api/stopGenerator"), { method: "POST", headers: this.headers() });
    if (!response.ok) {
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
    transfer_verifier_wrapper: string,
    zkb_verifier_wrapper: string,
    priority_list: string,
    input_and_proof_format: string
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
        transfer_verifier_wrapper,
        zkb_verifier_wrapper,
        priority_list,
        input_and_proof_format,
        staking_token: this.config.staking_token,
      },
    };

    const response = await fetch(this.url("/api/generatorConfigSetup"), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(generatorConfigData),
    });
    if (!response.ok) {
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
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async buildAttestation(): Promise<EnclaveAttestationData> {
    let attestation_build_config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };

    let attestation_server_response = await fetch(
      `${this.generator_attestation_utility_endpoint}/build/attestation`,
      attestation_build_config
    );
    return await attestation_server_response.json();
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
    let generator_public_keys = await generator_public_keys_response.json();
    if (generator_public_keys_response.status != 200) {
      throw new Error(
        generator_public_keys.message ? generator_public_keys.message : "There was an error in fetching generator public keys"
      );
    }
    return {
      generator_ecies_public_key: generator_public_keys.data.generator_ecies_public_key,
      generator_public_key: generator_public_keys.data.generator_public_key,
    };
  }

  public async verifyAttestation(): Promise<any> {
    // /verify/attestation
    throw new Error("if not required separately, remove this function");
  }

  public async getAttestation(attestation_verifier_endpoint: string): Promise<AttestationResponse> {
    //Fetching the attestation document
    let attestation_build_data = await this.buildAttestation();

    //Verifying the attestation document with whitelisted enclave
    let verify_attestation_config = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attestation_build_data),
    };

    let attestation_verifier_response = await fetch(`${attestation_verifier_endpoint}/verify/attestation`, verify_attestation_config);
    let attestation_verifier_response_data = await attestation_verifier_response.json();

    let verifier_address = "0x" + ethers.keccak256("0x" + attestation_verifier_response_data.secp_key).slice(-40);
    let generator_address = "0x" + ethers.keccak256("0x" + attestation_build_data.secp_key).slice(-40);

    let abiCoder = new ethers.AbiCoder();
    let encodedData = abiCoder.encode(
      ["bytes", "address", "address", "bytes", "bytes", "bytes", "uint256", "uint256"],
      [
        "0x" + attestation_verifier_response_data.sig,
        verifier_address,
        generator_address,
        "0x" + attestation_build_data.pcrs[0],
        "0x" + attestation_build_data.pcrs[1],
        "0x" + attestation_build_data.pcrs[2],
        attestation_build_data.min_cpus,
        attestation_build_data.min_mem,
      ]
    );

    return {
      attestation_document: encodedData,
      secp_key: attestation_build_data.secp_key,
    };
  }
}
