import { ContractTransactionResponse, Provider, Signer } from "ethers";
import { BigNumber } from "bignumber.js";
import { MockToken__factory, ProofMarketPlace__factory } from "./generated/typechain-types";
import { PrivateInputRegistry__factory } from "./generated/typechain-types/factories/contracts/PrivateInputRegistry__factory";

type askParameters = {
  marketId: string;
  reward: number;
  timeTakenForProofGeneration: number;
  deadline: number;
  expiry: number;
  proverData: any;
  privateData?: any;
  privateInputRegistry: string;
  proofMarketPlaceAddress: string;
  inputAndProofFormatContractAddress: string;
  wallet: Signer;
};

type approveRewardTokensParameters = {
  proofMarketPlaceAddress: string;
  tokenContractAddress: string;
  reward: number;
  wallet: any;
};

/**
 * Approve Rewards tokens
 *
 * @param approveRewardTokensParameters
 * @returns The transaction hash of the token approval
 */

export const approveRewardTokens = async (approveRewardTokensParameters: approveRewardTokensParameters): Promise<string> => {
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

  // TODO: find the exact allowance number, currently just multiplying by large number
  const expectedAllowance = reward.multipliedBy(2);

  if (new BigNumber(allowance.toString()).lt(expectedAllowance)) {
    const approvalTransaction = await tokenContract
      .connect(wallet)
      // TODO: remove another approximation below
      .approve(await proofMarketplaceContract.getAddress(), expectedAllowance.multipliedBy(2).toFixed());
    const approvalReceipt = await approvalTransaction.wait();
    return `${approvalReceipt?.hash}`;
  } else {
    return "Sufficient approval available";
  }
};

/**
 * Create ASK
 *
 * @param askParameters
 * @returns The transaction hash for the createAsk SC call
 */
export const createAsk = async (askParameters: askParameters): Promise<any> => {
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

  let proverData = askParameters.proverData;

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
    proverData,
    expiry,
  });

  const receipt = await createAskFunctionTransaction.wait();
  console.log(`ask receipt hash: ${receipt?.hash}`);

  if (receipt && receipt.logs) {
    for (let index = 0; index < receipt.logs.length; index++) {
      const log = receipt.logs[index];
      if (log.address.toLowerCase() === proofMarketPlaceAddress.toLowerCase()) {
        // TODO: There should be better way to do this
        try {
          const event = proofMarketplaceContract.interface.decodeEventLog("AskCreated", log.data, log.topics);
          console.log(event);
        } catch (ex) {}
        if (askParameters.privateData) {
          const askId = log.topics[1];
          await addPrivateInputs(askParameters.privateInputRegistry, askId, askParameters.privateData, wallet);
        }
        return log.topics[1];
      }
    }
  }

  throw new Error("Could not find the given with name AskCreated");
};

export const addPrivateInputs = async (
  privateInputRegistryAddress: string,
  askId: string,
  secretString: string,
  wallet: Signer
): Promise<string> => {
  const privateInputRegistry = PrivateInputRegistry__factory.connect(privateInputRegistryAddress, wallet);

  const splitSecrets = splitHexString(secretString, 2);

  let tx: ContractTransactionResponse;
  for (let index = 0; index < splitSecrets.length; index++) {
    const element = splitSecrets[index];
    tx = await privateInputRegistry.addPrivateInputs(askId, element);
    console.log(`create private inputs ${askId}`, (await tx.wait())?.hash, `secret part ${index}`);
  }
  tx = await privateInputRegistry.completeInputs(askId);
  console.log(`complete private input for ask id ${askId}`, (await tx.wait())?.hash);

  return "Done";
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
