import { InputAndProofFormatRegistry__factory } from "../typechain-types";
import { BigNumber } from "bignumber.js";
import { BigNumberish, BytesLike, ethers } from "ethers";
import { PublicAndSecretInputPair } from "../types";
import { encryptDataWithECIESandAesGcm } from "./secretInputOperation";
import pako from "pako";

type getInputTypeParameters = {
  marketId: string;
  inputAndProofFormatContractAddress: string;
  wallet: any;
};

/**
 * GET the input type for a marketId
 *
 * @param getInputTypeParameters
 * @returns the input type for the marketId used for encoding the inputs
 */
export const getInputType = async (getInputTypeParameters: getInputTypeParameters): Promise<string[]> => {
  if (!getInputTypeParameters.marketId) {
    throw new Error("Please provide a valid marketId.");
  }

  if (!getInputTypeParameters.inputAndProofFormatContractAddress) {
    throw new Error("Please provide a valid inputAndProofFormat contract address");
  }

  const marketId = getInputTypeParameters.marketId;
  const inputAndProofFormatContractAddress = getInputTypeParameters.inputAndProofFormatContractAddress;

  const wallet = getInputTypeParameters.wallet;

  const inputAndProofFormatContract = InputAndProofFormatRegistry__factory.connect(inputAndProofFormatContractAddress, wallet);

  const inputsArrayLength = await inputAndProofFormatContract.inputArrayLength(marketId);

  if (new BigNumber(inputsArrayLength.toString()).eq(0)) {
    throw new Error("Encoding Format is no defined in the contracts");
  }

  const inputFormat: string[] = [];
  for (let index = 0; index < inputsArrayLength; index++) {
    inputFormat.push(await inputAndProofFormatContract.inputs(marketId, index));
  }

  return inputFormat;
};

export function splitHexString(hexString: string, n: number): string[] {
  if (n <= 0) {
    throw new Error("The value of n should be a positive integer.");
  }

  // Remove any "0x" prefix
  const cleanHexString = hexString.startsWith("0x") ? hexString.slice(2) : hexString;

  // Check if the hexString is valid
  if (!/^([a-fA-F0-9]+)$/.test(cleanHexString)) {
    throw new Error("Invalid hex string.");
  }

  const buffer = Buffer.from(cleanHexString, "hex");
  const chunkSize = Math.ceil(buffer.length / n);

  const chunks: string[] = [];
  for (let i = 0; i < buffer.length; i += chunkSize) {
    // Slice the buffer and convert it back to a hex string with "0x" prefix
    chunks.push("0x" + buffer.slice(i, i + chunkSize).toString("hex"));
  }

  return chunks;
}

export function bytesToHexString(bytes: Buffer): string {
  return bytes.toString("hex");
}

export function bigNumberishToBuffer(value: ethers.BigNumberish): Buffer {
  // Convert BigNumberish value to a uintArray
  const uintArray = ethers.toBeArray(value);
  // Convert the string to a Buffer
  return Buffer.from(uintArray);
}

/**
 *
 * @param enclave_attestation_utility_url URL to fetch the enclave attestation from
 * @param attestation_verifier_url URL to verify the attestation
 * @returns
 */
export async function getEnclaveKey(enclave_attestation_utility_url: string, attestation_verifier_url: string): Promise<string> {
  const attestation_end_point = `${enclave_attestation_utility_url}/attestation/raw`;

  let attestation_build_config = {
    method: "GET",
  };

  let attestation_server_response = await fetch(attestation_end_point, attestation_build_config);
  if (!attestation_server_response.ok) {
    // console.log({ attestation_server_response });
    throw new Error("failed building the attestation");
  }

  let attestation_build_data = await attestation_server_response.body;

  let verify_attestation_config = {
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
    },
    body: attestation_build_data,
  };

  let attestation_verifier_response = await fetch(`${attestation_verifier_url}/verify/raw`, verify_attestation_config);

  let attestation_verifier_response_data = await attestation_verifier_response.json();

  let ecies_pubkey = "0x" + attestation_verifier_response_data.secp256k1_public.toString();

  return ecies_pubkey;
}

export async function createEncryptedRequestForIvs(
  proverData: BytesLike,
  secretBuffer: Buffer,
  marketId: BigNumberish,
  eciesPubKey: string
): Promise<PublicAndSecretInputPair> {
  const pubKey = eciesPubKey.split("x")[1]; // this is hex string
  const associatedData = bigNumberishToBuffer(marketId);
  const result = await encryptDataWithECIESandAesGcm(secretBuffer, pubKey, associatedData);

  return {
    publicInputs: Buffer.from(proverData.toString().split("0x")[1], "hex"),
    encryptedSecret: result.encryptedData,
    acl: result.aclData,
  };
}

export async function createEncryptedRequestData(
  proverData: BytesLike,
  secretBuffer: Buffer,
  marketId: BigNumberish,
  eciesPubKey: string
): Promise<PublicAndSecretInputPair> {
  //deflate the secret buffer to reduce tx cost
  secretBuffer = Buffer.from(pako.deflate(secretBuffer));

  return createEncryptedRequestForIvs(proverData, secretBuffer, marketId, eciesPubKey);
}

export function getPubKeyAndAddressFromAttestation(attesationData: BytesLike): [string, string] {
  let abicode = new ethers.AbiCoder();

  let decoded = abicode.decode(["bytes", "bytes", "bytes", "bytes", "bytes", "uint256"], attesationData);
  let pubkey = decoded[2];
  let hash = ethers.keccak256(pubkey);

  const address = "0x" + hash.slice(-40);

  return [pubkey, address];
}

export function getImageIdFromAttestation(attesationData: BytesLike): BytesLike {
  let abicode = new ethers.AbiCoder();

  let decoded = abicode.decode(["bytes", "bytes", "bytes", "bytes", "bytes", "uint256"], attesationData);
  let encoded = ethers.solidityPacked(["bytes", "bytes", "bytes"], [decoded[2], decoded[3], decoded[4]]);
  let digest = ethers.keccak256(encoded);
  return digest;
}

export function getRlpedPcrsFromAttestation(attesationData: BytesLike): BytesLike {
  let abicode = new ethers.AbiCoder();

  let decoded = abicode.decode(["bytes", "bytes", "bytes", "bytes", "bytes", "uint256"], attesationData);
  console.log("pcrs", decoded[2], decoded[3], decoded[4]);
  let encoded = abicode.encode(["bytes", "bytes", "bytes"], [decoded[2], decoded[3], decoded[4]]);

  return encoded;
}

export function encodePayload(payload: object): string {
  return JSON.stringify(payload);
}
