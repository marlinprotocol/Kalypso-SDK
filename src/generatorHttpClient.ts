import { PublicKeyResponse, AttestationResponse } from "./types";
import fetch from "node-fetch";
import { ethers } from "ethers";

export class GeneratorHttpClient {
  private generatorEndPoint: string;
  constructor(generatorEndPoint: string) {
    this.generatorEndPoint = generatorEndPoint;
  }

  public async generateApiKey(): Promise<any> {
    // /api/generateApiKey
    throw new Error("todo");
  }

  public async getGeneratorStatus(): Promise<any> {
    // /api/getGeneratorStatus
    throw new Error("todo");
  }

  // New methods based on your list
  public async startGenerator(): Promise<any> {
    // /api/startGenerator
    throw new Error("todo");
  }

  public async restartGenerator(): Promise<any> {
    // /api/restartGenerator
    throw new Error("todo");
  }

  public async stopGenerator(): Promise<any> {
    // /api/stopGenerator
    throw new Error("todo");
  }

  public async generatorConfigSetup(): Promise<any> {
    // /api/generatorConfigSetup
    throw new Error("todo");
  }

  public async updateRuntimeConfig(): Promise<any> {
    // /api/updateRuntimeConfig
    throw new Error("todo");
  }

  public async addNewGenerator(): Promise<any> {
    // /api/addNewGenerator
    throw new Error("todo");
  }

  public async removeGenerator(): Promise<any> {
    // /api/removeGenerator
    throw new Error("todo");
  }

  public async updateGeneratorConfig(): Promise<any> {
    // /api/updateGeneratorConfig
    throw new Error("todo");
  }

  public async buildAttestation(): Promise<any> {
    // /build/attestation
    throw new Error("todo");
  }

  public async verifyAttestation(): Promise<any> {
    // /verify/attestation
    throw new Error("todo");
  }

  public async getGeneratorPublicKeys(generator_client_api_key: string, generator_address: string): Promise<PublicKeyResponse> {
    let data = JSON.stringify({
      generator_address: generator_address,
    });

    let public_key_config = {
      method: "POST",
      headers: {
        "api-key": generator_client_api_key,
        "Content-Type": "application/json",
      },
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

  public async getAttestation(
    generator_attestation_utility_endpoint: string,
    attestation_verifier_endpoint: string
  ): Promise<AttestationResponse> {
    //Fetching the attestation document
    let attestation_build_config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };

    let attestation_server_response = await fetch(`${generator_attestation_utility_endpoint}/build/attestation`, attestation_build_config);
    let attestation_build_data = await attestation_server_response.json();

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
