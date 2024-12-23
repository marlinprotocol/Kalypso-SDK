import { AttestationResponse, EnclaveResponse } from "../types";
import fetch from "node-fetch";
import { ethers, BytesLike } from "ethers";
import BigNumber from "bignumber.js";
import { SignAddressResponse } from "../types";
import { HeaderInit } from "node-fetch";
import { helpers } from "../helper";
import { SCHResponse, SecureCommunicationHandler } from "./SecureCommunicationHandler";
import { randomUUID } from "crypto";
const AttestationVerifier = require('./../attestation/attestation_verifier');

/**
 * @description Contains common features for all types of derived enclaves
 */
export abstract class BaseEnclaveClient {
  // URL to fetch enclave's attestation from
  protected attestation_utility_endpoint: string;

  // URL to verify the fetched attestation. The root source of trust
  protected attestation_verifier_endpoint: string;

  private sch?: SecureCommunicationHandler;

  private enclavePubkey?: BytesLike;

  constructor(attestation_utility_endpoint: string, attestation_verifier_endpoint: string, enclavePubkey?: string) {
    this.attestation_utility_endpoint = attestation_utility_endpoint;
    this.attestation_verifier_endpoint = attestation_verifier_endpoint;

    this.enclavePubkey = enclavePubkey;
  }

  /**
   *
   * @returns Enclave key of the connected enclave
   */
  public async getEnclaveKey(): Promise<BytesLike> {
    return this.enclavePubkey ?? (this.enclavePubkey = (await this.getAttestation(false)).secp_key);
  }

  protected async getSch(): Promise<SecureCommunicationHandler> {
    return this.sch ?? (this.sch = new SecureCommunicationHandler((await this.getEnclaveKey()).toString()));
  }

  protected utilityUrl(api: string): string {
    return `${this.attestation_utility_endpoint}${api}`;
  }

  protected headers(): HeaderInit {
    return { "Content-Type": "application/json", "API-Key": randomUUID() };
  }

  protected baseUrl(url: string, api: string): string {
    return `${url}${api}`;
  }
  protected abstract url(api: string): string;

  /**
   *
   * @param attestation_verifier_endpoint URL at which the attestation verifier is hosted
   * @returns Attestation
   */
  public async getAttestation(printLogs: boolean = true): Promise<AttestationResponse> {
    //Fetching the attestation document
    const attestation_build_data = await this.buildAttestation(printLogs);
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

  public async getAttestationLocal(printLogs: boolean = true): Promise<AttestationResponse> {
    //Fetching the attestation document
    const attestation_build_data = await this.buildAttestation(printLogs);
    if (printLogs) {
      console.log("fetched attestation successfully");
      console.log({ attestation_build_data });
    }

    const arrayBuffer = await AttestationVerifier.streamToArrayBuffer(attestation_build_data);
    const attestation_verifier_response_data = await AttestationVerifier.get_attestation(arrayBuffer);

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
      ],
    );

    if (printLogs) {
      console.log({ encodedData });
    }

    return {
      attestation_document: encodedData,
      secp_key: ecies_pubkey,
    };
  }

  public async getAttestationLocal(printLogs: boolean = true): Promise<AttestationResponse> {
    //Fetching the attestation document
    const attestation_build_data = await this.buildAttestation(printLogs);
    if (printLogs) {
      console.log("fetched attestation successfully");
      console.log({ attestation_build_data });
    }

    const arrayBuffer = await AttestationVerifier.streamToArrayBuffer(attestation_build_data);
    const attestation_verifier_response_data = await AttestationVerifier.get_attestation(arrayBuffer);

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
      ],
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
  public async buildAttestation(printLogs: boolean = true): Promise<NodeJS.ReadableStream> {
    const attestation_end_point = this.utilityUrl("/attestation/raw");
    if (printLogs) {
      console.log("build attestation", attestation_end_point);
    }
    let attestation_build_config = {
      method: "GET",
    };

    let attestation_server_response = await fetch(attestation_end_point, attestation_build_config);
    if (!attestation_server_response.ok) {
      console.log({ statusCode: attestation_server_response.status });
      throw new Error("failed building the attestation");
    }

    let result = await attestation_server_response.body;
    return result;
  }

  /**
   * Retrieves a mock attestation for a known ECIES public key.
   *
   * @deprecated This function works only in the development network (dev net). Do not use in production.
   *
   * @param {string} ecies_pubkey - Known ECIES public key.
   * @returns {Promise<AttestationResponse>} Mock attestation for a known ECIES public key.
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
   * @deprecated Will be removed in upcoming versions. Use getAddressSignatureEncrypted
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
      body: helpers.encodePayload({ address }),
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
   * @param address Address which needs to be signed
   * @returns Returns the address signed with enclaves private keys
   */
  public async getAddressSignatureEncrypted(address: string, printLogs: boolean = true): Promise<BytesLike> {
    if (printLogs) {
      console.log(this.url("/api/signAddressEncrypted"));
    }

    let sch = await this.getSch();
    let attestation_server_response = await fetch(this.url("/api/signAddressEncrypted"), {
      method: "POST",
      headers: this.headers(),
      body: SecureCommunicationHandler.arrayifySchPayload(await sch.preparePayload({ address })),
    });

    if (!attestation_server_response.ok) {
      throw new Error(`Error: ${attestation_server_response.status}`);
    }

    let schResponse: SCHResponse = await attestation_server_response.json();
    let receivedSignature = await sch.decodeResponse<{
      r: string;
      s: string;
      v: number;
    }>(schResponse);
    const _v = receivedSignature.v == 27 ? "1b" : "1c";
    let signature = receivedSignature.r + receivedSignature.s.split("x")[1] + _v;
    return signature;
  }

  /**
   * @deprecated Will be removed in upcoming versions. Use getAttestationSignatureEncrypted
   * @param attestation Attestation
   * @param address Address
   * @returns Returns the attestation and address signed by the enclave keys
   */
  public async getAttestationSignature(attestation: string, address: string, printLogs: boolean = true): Promise<BytesLike> {
    if (printLogs) {
      console.log(this.url("/api/signAttestation"));
    }

    let attestation_server_response = await fetch(this.url("/api/signAttestation"), {
      method: "POST",
      headers: this.headers(),
      body: helpers.encodePayload({ attestation, address }),
    });

    if (!attestation_server_response.ok) {
      console.log(helpers.encodePayload({ attestation, address }));
      console.log({ attestation_server_response });
      throw new Error(`Error: ${attestation_server_response.status}`);
    }

    let response: SignAddressResponse = await attestation_server_response.json();
    const _v = response.data.v == 27 ? "1b" : "1c";
    let signature = response.data.r + response.data.s.split("x")[1] + _v;
    return signature;
  }

  /**
   * @param attestation Attestation
   * @param address Address
   * @returns Returns the attestation and address signed by the enclave keys
   */
  public async getAttestationSignatureEncrypted(attestation: string, address: string, printLogs: boolean = true): Promise<BytesLike> {
    if (printLogs) {
      console.log(this.url("/api/signAttestationEncrypted"));
    }

    let sch = await this.getSch();
    let attestation_server_response = await fetch(this.url("/api/signAttestationEncrypted"), {
      method: "POST",
      headers: this.headers(),
      body: SecureCommunicationHandler.arrayifySchPayload(await sch.preparePayload({ attestation, address })),
    });

    if (!attestation_server_response.ok) {
      throw new Error(`Error: ${attestation_server_response.status}`);
    }

    let schResponse: SCHResponse = await attestation_server_response.json();
    let receivedSignature = await sch.decodeResponse<{
      r: string;
      s: string;
      v: number;
    }>(schResponse);
    const _v = receivedSignature.v == 27 ? "1b" : "1c";
    let signature = receivedSignature.r + receivedSignature.s.split("x")[1] + _v;
    return signature;
  }

  /**
   * @description Static function to fetch the enclave key
   * @inheritdoc
   */
  public static getEnclaveKey = helpers.getEnclaveKey;
}

function getTimestampMs(delay: number = 0): number {
  return new BigNumber(new BigNumber(new Date().valueOf()).plus(delay).toFixed(0)).toNumber();
}
