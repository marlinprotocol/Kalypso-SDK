import { BytesLike, ethers, Provider, Signer } from "ethers";
import { BigNumber } from "bignumber.js";
import { MockToken__factory, ProofMarketPlace__factory, InputAndProofFormatRegistry__factory } from "./generated/typechain-types";
import { PrivateInputRegistry__factory } from "./generated/typechain-types/factories/contracts/PrivateInputRegistry__factory";

type askParameters = {
  marketId: string;
  reward: number;
  timeTakenForProofGeneration: number;
  deadline: number;
  expiry: number;
  proverData: any;
  proofMarketPlaceAddress: string;
  inputAndProofFormatContractAddress: string;
  wallet: Signer;
};

type getInputTypeParameters = {
  marketId: string;
  inputAndProofFormatContractAddress: string;
  wallet: any;
};

type approveRewardTokensParameters = {
  proofMarketPlaceAddress: string;
  tokenContractAddress: string;
  reward: number;
  wallet: any;
};

/**
 * GET the input type for a marketId
 *
 * @param getInputTypeParameters
 * @returns the input type for the marketId used for encoding the inputs
 */

export const getInputType = async (getInputTypeParameters: getInputTypeParameters) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};

/**
 * Approve Rewards tokens
 *
 * @param approveRewardTokensParameters
 * @returns The transaction hash of the token approval
 */

export const approveRewardTokens = async (approveRewardTokensParameters: approveRewardTokensParameters) => {
  try {
    if (!approveRewardTokensParameters.tokenContractAddress) {
      throw new Error("Please provide a valid token contract address");
    }

    if (approveRewardTokensParameters.reward <= 0) {
      throw new Error("Please provide a valid reward value.");
    }

    if (!approveRewardTokensParameters.proofMarketPlaceAddress) {
      throw new Error("Please provide a valid proof market place contract address");
    }

    const wallet = approveRewardTokensParameters.wallet;
    const reward = new BigNumber(10).pow(18).multipliedBy(approveRewardTokensParameters.reward);

    const proofMarketplaceContract = ProofMarketPlace__factory.connect(
      approveRewardTokensParameters.proofMarketPlaceAddress,
      approveRewardTokensParameters.wallet
    );

    const tokenContract = MockToken__factory.connect(
      approveRewardTokensParameters.tokenContractAddress,
      approveRewardTokensParameters.wallet
    );

    console.log("Approving reward tokens...");
    const allowance = await tokenContract.connect(wallet).allowance(await wallet.getAddress(), await proofMarketplaceContract.getAddress());
    if (new BigNumber(allowance.toString()).lt(reward)) {
      const approvalTransaction = await tokenContract
        .connect(wallet)
        .approve(await proofMarketplaceContract.getAddress(), reward.toString());
      const approvalReceipt = await approvalTransaction.wait();
      return approvalReceipt?.hash;
    } else {
      return "Sufficient approval available";
    }
  } catch (err) {
    console.log(err);
  }
};

/**
 * Create ASK
 *
 * @param askParameters
 * @returns The transaction hash for the createAsk SC call
 */
export const createAsk = async (askParameters: askParameters) => {
  try {
    if (!askParameters.marketId) {
      throw new Error("Please provide a valid marketId.");
    }

    if (askParameters.reward <= 0) {
      throw new Error("Please provide a valid reward value.");
    }

    if (askParameters.timeTakenForProofGeneration <= 0) {
      throw new Error("Please provide a valid timeTakenForProofGeneration value.");
    }

    if (askParameters.expiry <= 0) {
      throw new Error("Please provide a valid expiry value.");
    }

    if (askParameters.deadline <= 0) {
      throw new Error("Please provide a valid deadline value.");
    }

    if (!askParameters.proverData) {
      throw new Error("proverData cannot be empty.");
    }

    if (!askParameters.proofMarketPlaceAddress) {
      throw new Error("Please provide a valid proof market place contract address");
    }

    const proofMarketPlaceAddress = askParameters.proofMarketPlaceAddress;
    const wallet = askParameters.wallet;

    const proofMarketplaceContract = ProofMarketPlace__factory.connect(proofMarketPlaceAddress, wallet);

    let prover_data = askParameters.proverData;

    let abiCoder = new ethers.AbiCoder();

    let inputType = await getInputType({
      inputAndProofFormatContractAddress: askParameters.inputAndProofFormatContractAddress,
      marketId: askParameters.marketId,
      wallet: wallet,
    });

    let inputBytes = abiCoder.encode(inputType!, [prover_data]);

    const extractedProvider = wallet.provider as Provider;
    const latestBlock = await extractedProvider.getBlockNumber();

    let assignmentExpiry = askParameters.expiry;
    let timeTakenForProofGeneration = askParameters.timeTakenForProofGeneration;
    let maxTimeForProofGeneration = askParameters.deadline;
    let marketId = askParameters.marketId;
    let expiry = assignmentExpiry + latestBlock;
    let deadline = latestBlock + maxTimeForProofGeneration;
    let proverRefundAddress = await wallet.getAddress();
    let reward = new BigNumber(10).pow(18).multipliedBy(askParameters.reward);

    console.log("Creating ASK...");
    const createAskFunctionTransaction = await proofMarketplaceContract.createAsk({
      marketId,
      reward: reward.toFixed(),
      timeTakenForProofGeneration,
      deadline,
      proverRefundAddress,
      proverData: inputBytes,
      expiry,
    });

    const receipt = await createAskFunctionTransaction.wait();
    console.log("ASk created");
    return `${receipt?.hash}`;
  } catch (err) {
    console.log(err);
  }
};

export const addPrivateInputs = async (privateInputRegistryAddress: string, askId: string, privateInputs: BytesLike, wallet: Signer) => {
  const privateInputRegistry = PrivateInputRegistry__factory.connect(privateInputRegistryAddress, wallet);
  const tx = await privateInputRegistry.addPrivateInputs(askId, privateInputs);
  const receipt = await tx.wait();
  console.log(`added private inputs to askId: ${askId}, tx: ${receipt?.hash}`);
};
