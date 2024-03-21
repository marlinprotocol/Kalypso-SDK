import { AttestationResponse, EnclaveAttestationData, EnclaveResponse } from "../types";
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

    return {};
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
    // /verify/attestation
    throw new Error("if not required separately, remove this function");
  }

  /**
   *
   * @param attestation_verifier_endpoint URL at which the attestation verifier is hosted
   * @returns Attestation
   */
  public async getAttestation(printAttestation: boolean = false): Promise<AttestationResponse> {
    //Fetching the attestation document
    const attestation_build_data = await this.buildAttestation();
    console.log("fetched attestation successfully");

    if (printAttestation) {
      console.log({ attestation_build_data });
    }

    //Verifying the attestation document with whitelisted enclave
    let verify_attestation_config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attestation_build_data),
    };

    let attestation_verifier_response = await fetch(this.baseUrl(this.attestation_verifier_endpoint, "/verify"), verify_attestation_config);
    if (!attestation_verifier_response.ok) {
      console.log({ attestation_verifier_response });
    }
    let attestation_verifier_response_data = await attestation_verifier_response.json();
    if (printAttestation) {
      console.log({ attestation_verifier_response_data });
    }

    let ecies_pubkey = "0x" + attestation_build_data.secp256k1_public.toString();
    // let verifier_address = "0x" + ethers.keccak256("0x" + attestation_verifier_response_data.secp_key).slice(-40);
    // console.log({ ecies_pubkey });
    // console.log({ verifier_address });

    // assuming it to be string,
    // should be 64 bytes
    if (ecies_pubkey.length != 130) {
      throw new Error("secp pub key length incorrect");
    }

    let abiCoder = new ethers.AbiCoder();
    let encodedData = abiCoder.encode(
      ["bytes", "bytes", "bytes", "bytes", "bytes", "uint256", "uint256", "uint256"],
      [
        "0x" + attestation_verifier_response_data.signature,
        ecies_pubkey,
        "0x" + attestation_build_data.pcrs[0],
        "0x" + attestation_build_data.pcrs[1],
        "0x" + attestation_build_data.pcrs[2],
        "" + attestation_build_data.min_cpus,
        "" + attestation_build_data.min_mem,
        "" + attestation_build_data.timestamp,
      ]
    );

    if (printAttestation) {
      console.log({ encodedData });
    }

    return {
      attestation_document: encodedData,
      secp_key: attestation_build_data.secp256k1_public,
    };
  }

  /**
   *
   * @returns Your Enclave Attestation in required format
   */
  protected async buildAttestation(): Promise<EnclaveAttestationData> {
    const attestation_end_point = this.utilityUrl("/attestation");
    console.log("build attestation", attestation_end_point);
    let attestation_build_config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    let attestation_server_response = await fetch(attestation_end_point, attestation_build_config);
    if (!attestation_server_response.ok) {
      console.log({ attestation_server_response });
      throw new Error("failed building the attestation");
    }
    return await attestation_server_response.json();
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
      ["bytes", "bytes", "bytes", "bytes", "bytes", "uint256", "uint256", "uint256"],
      ["0x00", ecies_pubkey, "0x00", "0x00", "0x00", 1, 1, getTimestampMs()]
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
  public async getAddressSignature(address: string): Promise<BytesLike> {
    console.log(this.url("/api/signAddress"));
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
  public async getAttestationSignature(attestation: string, address: string): Promise<BytesLike> {
    console.log(this.url("/api/signAttestation"));

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

// me key from attestation 03c69d0ef3c5a40abd8b5a6a58a1da2706c0861afc249df2554d16fa51934a8992
// http://65.1.46.193:5000/api/signAddress
// {
//   response: {
//     status: 'success',
//     message: 'Address signed',
//     data: {
//       r: '0xd07c411d4d10bbf0699d65fc0bd73bba913545a7cb7a340e6b65adad5045f7b',
//       s: '0x374db113c4fb5a5fa81b59ffd888f5958a9265d0f50372d1ff9f4524550f995f',
//       v: 28
//     }
//   }
// }

// function getTimestampInSeconds(delay: number = 0): number {
//   return new BigNumber(new BigNumber(new Date().valueOf()).div(1000).plus(delay).toFixed(0)).toNumber();
// }
