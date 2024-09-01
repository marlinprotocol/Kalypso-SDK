import { AttestationResponse, EnclaveResponse } from "../types";
import fetch from "node-fetch";
import { ethers, BytesLike } from "ethers";
import BigNumber from "bignumber.js";
import { SignAddressResponse } from "../types";
import { HeaderInit } from "node-fetch";

export abstract class BaseEnclaveClient {
  protected attestation_utility_endpoint: string;
  protected attestation_verifier_endpoint: string;
  protected apikey?: string;

  constructor(attestation_utility_endpoint: string, attestation_verifier_endpoint: string, apikey?: string) {
    this.attestation_utility_endpoint = attestation_utility_endpoint;
    this.attestation_verifier_endpoint = attestation_verifier_endpoint;

    if (apikey) {
      this.apikey = apikey;
    }
  }

  protected utilityUrl(api: string): string {
    return `${this.attestation_utility_endpoint}${api}`;
  }

  protected headers(): HeaderInit {
    if (this.apikey) {
      return {
        "Content-Type": "application/json",
        "API-Key": this.apikey,
      };
    }

    return { "Content-Type": "application/json" };
  }

  protected baseUrl(url: string, api: string): string {
    return `${url}${api}`;
  }
  protected abstract url(api: string): string;

  public async generateApiKey(): Promise<EnclaveResponse<string>> {
    if (this.apikey) {
      throw new Error("apikey is already provided");
    }

    const response = await fetch(this.url("/api/generateApiKey"), { method: "POST" });
    if (!response.ok) {
      console.log({ response });
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  }

  public async verifyAttestation(): Promise<any> {
    throw new Error("if not required separately, remove this function");
  }

  /**
   *
   * @param attestation_verifier_endpoint URL at which the attestation verifier is hosted
   * @returns Attestation
   */
  public async getAttestation(printLogs: boolean = true): Promise<AttestationResponse> {
    //Fetching the attestation document
    const attestation_build_data = await this.buildAttestation();
    if (printLogs) {
      console.log("fetched attestation successfully");
      console.log({ attestation_build_data });
    }

    let verify_attestation_config = {
      method: "POST",
      headers: {
        "Content-Type": "application/octet-stream",
      },
      body: attestation_build_data,
    };

    let attestation_verifier_response = await fetch(
      this.baseUrl(this.attestation_verifier_endpoint, "/verify/raw"),
      verify_attestation_config
    );
    if (!attestation_verifier_response.ok) {
      console.log({ attestation_verifier_response });
    }

    let attestation_verifier_response_data = await attestation_verifier_response.json();
    if (printLogs) {
      console.log({ attestation_verifier_response_data });
    }

    let ecies_pubkey = "0x" + attestation_verifier_response_data.secp256k1_public.toString();

    if (ecies_pubkey.length != 130) {
      throw new Error("secp pub key length incorrect");
    }

    let abiCoder = new ethers.AbiCoder();
    let encodedData = abiCoder.encode(
      ["bytes", "bytes", "bytes", "bytes", "bytes", "uint256"],
      [
        "0x" + attestation_verifier_response_data.signature,
        ecies_pubkey,
        "0x" + attestation_verifier_response_data.pcr0,
        "0x" + attestation_verifier_response_data.pcr1,
        "0x" + attestation_verifier_response_data.pcr2,
        "" + attestation_verifier_response_data.timestamp,
      ]
    );

    if (printLogs) {
      console.log({ encodedData });
    }

    return {
      attestation_document: encodedData,
      secp_key: ecies_pubkey,
    };
  }

  /**
   *
   * @returns Your Enclave Attestation in required format
   */
  protected async buildAttestation(printLogs: boolean = true): Promise<any> {
    const attestation_end_point = this.utilityUrl("/attestation/raw");
    if (printLogs) {
      console.log("build attestation", attestation_end_point);
    }
    let attestation_build_config = {
      method: "GET",
    };

    let attestation_server_response = await fetch(attestation_end_point, attestation_build_config);
    if (!attestation_server_response.ok) {
      // console.log({ attestation_server_response });
      throw new Error("failed building the attestation");
    }

    let result = await attestation_server_response.body;
    return result;
  }

  /**
   *
   * @param ecies_pubkey Known ecies pubkey
   * @returns Mock Attestation for a known ecies pubkey. This attestation will work only in dev net
   */
  public async getMockAttestation(ecies_pubkey: string): Promise<AttestationResponse> {
    if (ecies_pubkey.length != 130) {
      throw new Error("ecies key length wrong");
    }

    let abiCoder = new ethers.AbiCoder();
    let encodedData = abiCoder.encode(
      ["bytes", "bytes", "bytes", "bytes", "bytes", "uint256"],
      ["0x00", ecies_pubkey, "0x00", "0x00", "0x00", getTimestampMs()]
    );

    return {
      attestation_document: encodedData,
      secp_key: ecies_pubkey,
    };
  }

  /**
   *
   * @param address Address which needs to be signed
   * @returns Returns the address signed with enclaves private keys
   */
  public async getAddressSignature(address: string, printLogs: boolean = true): Promise<BytesLike> {
    if (printLogs) {
      console.log(this.url("/api/signAddress"));
    }

    let attestation_server_response = await fetch(this.url("/api/signAddress"), {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify({ address }),
    });

    if (!attestation_server_response.ok) {
      throw new Error(`Error: ${attestation_server_response.status}`);
    }

    let response: SignAddressResponse = await attestation_server_response.json();
    const _v = response.data.v == 27 ? "1b" : "1c";
    let signature = response.data.r + response.data.s.split("x")[1] + _v;
    return signature;
  }

  /**
   *
   * @param attestation Attestation
   * @param address Address
   * @returns Returns the attestation and address signed by the enclave keys
   */
  public async getAttestationSignature(attestation: string, address: string, printLogs: boolean = true): Promise<BytesLike> {
    if (printLogs) {
      console.log(this.url("/api/signAttestation"));
    }

    const payload = JSON.stringify({ attestation, address });
    // console.log({ payload });
    let attestation_server_response = await fetch(this.url("/api/signAttestation"), {
      method: "POST",
      headers: this.headers(),
      body: payload,
    });

    if (!attestation_server_response.ok) {
      console.log({ payload });
      console.log({ attestation_server_response });
      throw new Error(`Error: ${attestation_server_response.status}`);
    }

    let response: SignAddressResponse = await attestation_server_response.json();
    const _v = response.data.v == 27 ? "1b" : "1c";
    let signature = response.data.r + response.data.s.split("x")[1] + _v;
    return signature;
  }
}

function getTimestampMs(delay: number = 0): number {
  return new BigNumber(new BigNumber(new Date().valueOf()).plus(delay).toFixed(0)).toNumber();
}
