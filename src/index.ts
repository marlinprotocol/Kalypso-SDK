import { AbiCoder, ethers } from "ethers";
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
    proofMarketPlaceAddress: string,
    tokenAddress:string,
    inputAndProofFormatContractAddress: string,
    wallet:any;
}

type getInputTypeParameters = {
  marketId: string,
  inputAndProofFormatContractAddress: string,
  wallet:any;
}

// GET the input type for a marketId
export const getInputType = async (getInputTypeParameters:getInputTypeParameters) => {
  try{
  
    if(!getInputTypeParameters.marketId){
      throw new Error("Please provide a valid marketId.");
    }

    if(!getInputTypeParameters.inputAndProofFormatContractAddress){
      throw new Error("Please provide a valid inputAndProofFormat contract address");
    }

    const marketId = getInputTypeParameters.marketId;
    const inputAndProofFormatContractAddress = getInputTypeParameters.inputAndProofFormatContractAddress;

    const wallet = getInputTypeParameters.wallet;

  
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

    if(!askParameters.proofMarketPlaceAddress){
      throw new Error("Please provide a valid proof market place contract address")
    }

    if(!askParameters.tokenAddress){
      throw new Error("Please provide a valid token contract address")
    }

    if(!askParameters.inputAndProofFormatContractAddress){
      throw new Error("Please provide a valid input and proof format contract address")
    }

    const proofMarketPlaceAddress = askParameters.proofMarketPlaceAddress;
    const tokenContractAddress = askParameters.tokenAddress;
    const inputAndProofFormatContractAddress = askParameters.inputAndProofFormatContractAddress;
    const wallet = askParameters.wallet;
    const extractedProvider = wallet.provider;

    const accountAddress = await wallet.getAddress();
    const accountBalance = await wallet.provider?.getBalance(accountAddress);

    console.log("Account Address:", accountAddress);
    console.log("Account Balance (wei):", accountBalance?.toString());

    const proofMarketplaceContract = ProofMarketPlace__factory.connect(
      proofMarketPlaceAddress,
      wallet
    );

    const tokenContract = MockToken__factory.connect(
      tokenContractAddress,
      wallet
    );

    const inputFormat = await getInputType({
      marketId:askParameters.marketId,
      inputAndProofFormatContractAddress:inputAndProofFormatContractAddress,
      wallet:askParameters.wallet
    });

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

    const latestBlock = await extractedProvider.getBlockNumber();
    console.log("Latest block : ", latestBlock);

    let assignmentExpiry = askParameters.expiry;
    let timeTakenForProofGeneration = askParameters.timeTakenForProofGeneration;
    let maxTimeForProofGeneration = askParameters.deadline;
    let marketId = askParameters.marketId;
    let expiry = assignmentExpiry + latestBlock;
    let deadline = latestBlock + maxTimeForProofGeneration;
    let proverRefundAddress = await wallet.getAddress();
    let reward = new BigNumber(10).pow(18).multipliedBy(askParameters.reward);

    console.log("Approving tokens for rewards...")
    const allowance = await tokenContract.connect(wallet).allowance(await wallet.getAddress(), await proofMarketplaceContract.getAddress())
    if(new BigNumber(allowance.toString()).lt(reward)){
      const approvalTransaction = await tokenContract
        .connect(wallet)
        .approve(await proofMarketplaceContract.getAddress(), reward.toString());
      const approvalReceipt = await approvalTransaction.wait();
      console.log("Approval receipt:", approvalReceipt?.hash);
    }else{
      console.log('Sufficient approval available')
    }

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


const main = async() => {

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

  const provider = new ethers.JsonRpcProvider(process.env.RPC);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const createAskRequest = await createAsk({
      marketId: "0xb839d5bc3d6a60bb59136cf24a77c2c39952ea51a65898a886b33bbe38d7d8a8",
      reward: 1,
      expiry: 100,
      timeTakenForProofGeneration: 1000,
      deadline: 10000,
      proverData: [
          "2105637085183975026416182559542404460031676306245877722261461946106804655086",
          "19439594886189624974326337197957132519325364002450674986233170049890491717384",
          "17143927394555365747948417026442777490360052502351480904471050303917255241440",
          "191561942608236107294793378393788647952342390272950272000",
          "17271989332094319463568711574612918371595219444387421875646753181212739186244",
      ],
      proofMarketPlaceAddress:"0x56d030Fe5D75211DB0Ca84fcC1ee19615FA19105",
      inputAndProofFormatContractAddress:"0xA0Fbd852C6226b3E97eA141c72713dCb851DaCdE",
      tokenAddress:"0x4935ea37F0ADd47B9567A36D0806a28459761b60",
      wallet:wallet

  });
  console.log(createAskRequest);
}

main();
