import { AttestationResponse, EnclaveAttestationData } from "./types";
import fetch from "node-fetch";
import { ethers } from "ethers";
import BigNumber from "bignumber.js";

export class BaseEnclaveClient {
  protected attestation_utility_endpoint: string;

  constructor(attestation_utility_endpoint: string) {
    this.attestation_utility_endpoint = attestation_utility_endpoint;
  }

  protected utilityUrl(api: string): string {
    return `${this.attestation_utility_endpoint}${api}`;
  }

  public async verifyAttestation(): Promise<any> {
    // /verify/attestation
    throw new Error("if not required separately, remove this function");
  }

  public async getAttestation(attestation_verifier_endpoint: string): Promise<AttestationResponse> {
    //Fetching the attestation document
    let attestation_build_data = await this.buildAttestation();
    console.log({ attestation_build_data });
    //Verifying the attestation document with whitelisted enclave
    let verify_attestation_config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attestation_build_data),
    };

    let attestation_verifier_response = await fetch(`${attestation_verifier_endpoint}/verify`, verify_attestation_config);
    if (!attestation_verifier_response.ok) {
      console.log({ attestation_verifier_response });
    }
    let attestation_verifier_response_data = await attestation_verifier_response.json();
    // console.log({attestation_verifier_response_data})

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
        attestation_build_data.min_cpus,
        attestation_build_data.min_mem,
        attestation_build_data.timestamp,
      ]
    );

    return {
      attestation_document: encodedData,
      secp_key: attestation_build_data.secp256k1_public,
    };
  }

  public async buildAttestation(): Promise<EnclaveAttestationData> {
    let attestation_build_config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    let attestation_server_response = await fetch(`${this.attestation_utility_endpoint}/attestation`, attestation_build_config);
    if (!attestation_server_response.ok) {
      console.log({ attestation_server_response });
    }
    return await attestation_server_response.json();
  }

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
}

// function getTimestampInSeconds(delay: number = 0): number {
//   return new BigNumber(new BigNumber(new Date().valueOf()).div(1000).plus(delay).toFixed(0)).toNumber();
// }

function getTimestampMs(delay: number = 0): number {
  return new BigNumber(new BigNumber(new Date().valueOf()).plus(delay).toFixed(0)).toNumber();
}
