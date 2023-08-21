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
