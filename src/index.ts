import { ethers } from "ethers";
import dotenv from "dotenv";
import { BigNumber } from "bignumber.js";
import {
  MockToken__factory,
  ProofMarketPlace__factory,
  InputAndProofFormatRegistry__factory
  
} from "./generated/typechain-types";

dotenv.config();

type askParameters = {
    marketId: string;
    reward: number;
    timeTakenForProofGeneration: number;
    deadline: number;
    expiry: number;
    proverData: any;
}

// GET the input type for a marketId
export const getInputType = async (marketId:string) => {
  try{
    if (
      process.env.PRIVATE_KEY == null ||
      process.env.PRIVATE_KEY == undefined
    ) {
      throw new Error("PRIVATE_KEY not found in the .env file. Please make sure to setup environment variables in your project.");
    }
  
    if (
      process.env.RPC == null ||
      process.env.RPC == undefined
    ) {
      throw new Error("RPC not found in the .env file. Please make sure to setup environment variables in your project.");
    }
  
    if(!marketId){
      throw new Error("Please provide a valid marketId.");
    }
  
    const provider = new ethers.JsonRpcProvider(process.env.RPC);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
    const inputAndProofFormatContractAddress = "0xA0Fbd852C6226b3E97eA141c72713dCb851DaCdE";
  
    const inputAndProofFormatContract = InputAndProofFormatRegistry__factory.connect(
      inputAndProofFormatContractAddress,
      wallet
    )
  
    const inputsArrayLength = await inputAndProofFormatContract.inputArrayLength(marketId);
    const inputFormat: string[] = [];
    for (let index = 0; index < inputsArrayLength; index++) {
      inputFormat.push(await inputAndProofFormatContract.inputs(marketId, index));
    }
  
    return inputFormat;
  }catch(err){
    console.log(err);
  }
}

//Create ASK
export const createAsk = async (askParameters:askParameters) => {
  try {
    if (
      process.env.PRIVATE_KEY == null ||
      process.env.PRIVATE_KEY == undefined
    ) {
      throw new Error("PRIVATE_KEY not found in the .env file. Please make sure to setup environment variables in your project.");
    }

    if (
      process.env.RPC == null ||
      process.env.RPC == undefined
    ) {
      throw new Error("RPC not found in the .env file. Please make sure to setup environment variables in your project.");
    }

    if(!askParameters.marketId){
      throw new Error("Please provide a valid marketId.");
    }

    if(askParameters.reward <= 0){
      throw new Error("Please provide a valid reward value.");
    }

    if(askParameters.timeTakenForProofGeneration <= 0){
      throw new Error("Please provide a valid timeTakenForProofGeneration value.")
    }

    if(askParameters.expiry <= 0){
      throw new Error("Please provide a valid expiry value.")
    }

    if(askParameters.deadline <= 0){
      throw new Error("Please provide a valid deadline value.")
    }

    if(!askParameters.proverData){
      throw new Error("proverData cannot be empty.")
    }

    const provider = new ethers.JsonRpcProvider(process.env.RPC);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

    const accountAddress = await wallet.getAddress();
    const accountBalance = await wallet.provider?.getBalance(accountAddress);

    console.log("Account Address:", accountAddress);
    console.log("Account Balance (wei):", accountBalance?.toString());

    const contractAddress = "0x56d030Fe5D75211DB0Ca84fcC1ee19615FA19105";
    const tokenContractAddress = "0x4935ea37F0ADd47B9567A36D0806a28459761b60";

    const proofMarketplaceContract = ProofMarketPlace__factory.connect(
      contractAddress,
      wallet
    );

    const tokenContract = MockToken__factory.connect(
      tokenContractAddress,
      wallet
    );

    const inputFormat = await getInputType(askParameters.marketId);

    const accountTokenBalance = await tokenContract.balanceOf(accountAddress);
    console.log("Account Token Balance: ", accountTokenBalance.toString());

    let prover_data = askParameters.proverData;

    let abiCoder = new ethers.AbiCoder();

    let inputBytes = abiCoder.encode(
      inputFormat!,
      [
        prover_data
      ]
    );

    const latestBlock = await provider.getBlockNumber();

    let assignmentExpiry = askParameters.expiry;
    let timeTakenForProofGeneration = askParameters.timeTakenForProofGeneration;
    let maxTimeForProofGeneration = askParameters.deadline;
    let marketId = askParameters.marketId;
    let expiry = assignmentExpiry + latestBlock;
    let deadline = latestBlock + maxTimeForProofGeneration;
    let proverRefundAddress = await wallet.getAddress();
    let reward = new BigNumber(10).pow(18).multipliedBy(askParameters.reward);

    console.log("Approving tokens for rewards...")
    const approvalTransaction = await tokenContract
      .connect(wallet)
      .approve(await proofMarketplaceContract.getAddress(), reward.toString());
    const approvalReceipt = await approvalTransaction.wait();

    console.log("Approval receipt:", approvalReceipt?.hash);

    console.log("creating ASK...")
    const createAskFunctionTransaction =
      await proofMarketplaceContract.createAsk({
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
    return `txHash : ${receipt?.hash}`;

  } catch (err) {
    console.log(err);
  }
};

