import { BigNumberish, Provider, Signer, ethers, BytesLike } from "ethers";
import { BigNumber } from "bignumber.js";
import { MockToken__factory, ProofMarketPlace__factory } from "./generated/typechain-types";

export * from "./secretInputOperation";

type secrets = {
  secret: string | BytesLike;
  acl: string;
};

type askParameters = {
  marketId: string;
  reward: BigNumberish;
  timeTakenForProofGeneration: number;
  deadline: number;
  expiry: number;
  proverData: any;
  proofMarketPlaceAddress: string;
  inputAndProofFormatContractAddress: string;
  wallet: Signer;
  secrets?: secrets;
};

type approveRewardTokensParameters = {
  proofMarketPlaceAddress: string;
  tokenContractAddress: string;
  reward: BigNumberish;
  wallet: any;
};

type getProofParameters = {
  blockNumber: number;
  wallet:Signer;
  proofMarketPlaceAddress: string;
}

type getPlatformFeeParameters = {
  wallet:Signer;
  proofMarketPlaceAddress: string;
  inputbytes_length: number
}

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

  if (new BigNumber(approveRewardTokensParameters.reward.toString()).lte(0)) {
    throw new Error("Please provide a valid reward value.");
  }

  if (!approveRewardTokensParameters.proofMarketPlaceAddress) {
    throw new Error("Please provide a valid proof market place contract address");
  }

  const wallet = approveRewardTokensParameters.wallet;

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
  const expectedAllowance = new BigNumber(approveRewardTokensParameters.reward.toString()).multipliedBy(2);

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
 * @returns The transaction hash and the blocknumber for the createAsk SC call
 */
export const createAsk = async (askParameters: askParameters): Promise<any> => {
  if (!askParameters.marketId) {
    throw new Error("Please provide a valid marketId.");
  }

  if (new BigNumber(askParameters.reward.toString()).lte(0)) {
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
  let reward = askParameters.reward.toString();

  let hasSecrets = false;
  let secretType = 0;
  let secretData = "0x" as BytesLike;
  let acl = "0x";

  if (askParameters.secrets) {
    hasSecrets = true;
    secretType = 1; // only this is supported atm
    secretData = askParameters.secrets.secret;
    acl = askParameters.secrets.acl;
  }

  console.log("Creating ASK...");
  const createAskFunctionTransaction = await proofMarketplaceContract.createAsk(
    {
      marketId,
      reward: reward.toString(),
      timeTakenForProofGeneration,
      deadline,
      refundAddress: proverRefundAddress,
      proverData,
      expiry,
    },
    hasSecrets,
    secretType,
    secretData,
    acl
  );

  const receipt = await createAskFunctionTransaction.wait();
  return {"ask_transaction_hash":receipt?.hash,"block_number":receipt?.blockNumber};
};

/**
 * Get proof
 * 
 * @param getProofParameters
 * @returns The decoded generated proof
 */

export const getProof = async(getProofParameters:getProofParameters) => {
  try {
    let proofMarketPlaceAddress = getProofParameters.proofMarketPlaceAddress;
    let blockNumber = getProofParameters.blockNumber;
    let wallet = getProofParameters.wallet;
    let provider = wallet.provider
    const proofMarketplaceContract = ProofMarketPlace__factory.connect(proofMarketPlaceAddress, wallet);
  
    //Fetching the askID
    const ask_created_filter = proofMarketplaceContract.filters["AskCreated(uint256,bool)"];
    const ask_created_event = await proofMarketplaceContract.queryFilter(ask_created_filter,blockNumber,blockNumber);
    if(ask_created_event.length == 0){
      return {proof_generated:false,proof:[],message:"Ask not found."}
    }

    let ask_id = ask_created_event[0].args[0].toString();
  
    //Fetching the proof submitted calldata
    const proof_created_filter = proofMarketplaceContract.filters.ProofCreated(ask_id);
    const proof_created_tx_data = await proofMarketplaceContract.queryFilter(proof_created_filter);
    if(proof_created_tx_data.length>0){
      let proofCreatedTxHash = proof_created_tx_data[0].transactionHash;
      let submitProofTxData = await provider?.getTransaction(proofCreatedTxHash);
      let submitProofCallData = submitProofTxData?.data;

      //Decoding the encoded data
      let abiCoder = new ethers.AbiCoder();
      let proof = abiCoder.decode(
        ["uint256[8]"],
          submitProofCallData!,
      );
      return {proof_generated:true,proof:proof, message:"Proof fetched."};
    }
    return {proof_generated:false,proof:[], message: "Proof not submitted yet."}
  } catch (error) {
    console.log(error)
  }
}

export const getPlatformFee = async (getPlatformFeeParameters: getPlatformFeeParameters) => {
  try {
    let proof_marketplace_address = getPlatformFeeParameters.proofMarketPlaceAddress;
    let wallet = getPlatformFeeParameters.wallet;
    let inputbytes_length = getPlatformFeeParameters.inputbytes_length
    const proofMarketplaceContract = ProofMarketPlace__factory.connect(proof_marketplace_address, wallet);
    const platformFee = new BigNumber((await proofMarketplaceContract.costPerInputBytes()).toString()).multipliedBy((inputbytes_length - 2) / 2);
    return platformFee
  }catch(err){
    console.log(err)
  }
}


