import { MockToken__factory, ProofMarketPlace__factory, InputAndProofFormatRegistry__factory } from "./generated/typechain-types";
import { BigNumber } from "bignumber.js";

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

export function jsonToBytes<M>(json: M): string {
  const data = JSON.stringify(json);
  let buffer = Buffer.from(data, "utf-8");
  return "0x" + bytesToHexString(buffer);
}

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
