import { AttestationResponse, EnclaveAttestationData } from "./types";
import fetch from "node-fetch";
import { ethers } from "ethers";
import BigNumber from "bignumber.js";

interface SignAddressResponse {
  message: string;
  data: {
    r: string;
    s: string;
    v: number;
  };
}
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

  public async getAddressSignature(address: string): Promise<String> {
    let addressPayload = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
    };

    let attestation_server_response = await fetch(`${this.attestation_utility_endpoint}/signAddress`, addressPayload);
    let response: SignAddressResponse = await attestation_server_response.json();

    const _v = response.data.v == 27 ? "1b" : "1c";
    let signature = response.data.r + response.data.s.split("x")[1] + _v;
    return signature;
  }

  public async getAttestation(attestation_verifier_endpoint: string): Promise<AttestationResponse> {
    //Fetching the attestation document
    let attestation_build_data = await this.buildAttestation();
    // console.log({attestation_build_data});

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
    let ecies_pubkey = "0x" + attestation_build_data.secp_key.toString().substring(2);
    // console.log({ ecies_pubkey });
    // console.log({ verifier_address });

    // assuming it to be string,
    // should be 64 bytes
    if (ecies_pubkey.length != 130) {
      throw new Error("secp pub key length incorrect");
    }

    let abiCoder = new ethers.AbiCoder();
    let encodedData = abiCoder.encode(
      ["bytes", "address", "bytes", "bytes", "bytes", "bytes", "uint256", "uint256"],
      [
        "0x" + attestation_verifier_response_data.sig,
        verifier_address,
        ecies_pubkey,
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

  public async buildAttestation(): Promise<EnclaveAttestationData> {
    let attestation_build_config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };

    let attestation_server_response = await fetch(`${this.attestation_utility_endpoint}/build/attestation`, attestation_build_config);
    return await attestation_server_response.json();
  }

  public async getMockAttestation(ecies_pubkey: string): Promise<AttestationResponse> {
    if (ecies_pubkey.length != 130) {
      throw new Error("ecies key length wrong");
    }

    let abiCoder = new ethers.AbiCoder();
    let encodedData = abiCoder.encode(
      ["bytes", "address", "bytes", "bytes", "bytes", "bytes", "uint256", "uint256"],
      ["0x00", "0x0011001100110011001100110011001100110011", ecies_pubkey, "0x00", "0x00", "0x00", 1, 1]
    );

    return {
      attestation_document: encodedData,
      secp_key: ecies_pubkey,
    };
  }
}
