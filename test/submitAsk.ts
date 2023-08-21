import { createAsk, approveRewardTokens } from "../src/index";
import dotenv from "dotenv";
import { ethers } from "ethers";

dotenv.config();

const createAskTest = async () => {
  try {
    if (process.env.PRIVATE_KEY == null || process.env.PRIVATE_KEY == undefined) {
      throw new Error("PRIVATE_KEY not found in the .env file. Please make sure to setup environment variables in your project.");
    }

    if (process.env.RPC == null || process.env.RPC == undefined) {
      throw new Error("RPC not found in the .env file. Please make sure to setup environment variables in your project.");
    }

    const provider = new ethers.JsonRpcProvider(process.env.RPC);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    //Approve token for rewards
    const approveRewardsToken = await approveRewardTokens({
      proofMarketPlaceAddress: "0x56d030Fe5D75211DB0Ca84fcC1ee19615FA19105",
      tokenContractAddress: "0x4935ea37F0ADd47B9567A36D0806a28459761b60",
      reward: 1,
      wallet: wallet,
    });
    console.log("Approval txHash : ", approveRewardsToken);

    let abiCoder = new ethers.AbiCoder();

    // use this as input
    const input = {
      root: "264788213728069619241111851921906489438189097587452881387720682995263352015",
      nullifier: "16262454939008220729285921537441320334330234758770259393772360806896176035643",
      out_commit: "20917908391172521884053148230313204449422558688338602868432842022522663432650",
      delta: "191561942608236107294793378393788647952342390272950272000",
      memo: "2109732754415874372326623686167947501292568528630512787557291109233407247572",
    };

    let inputBytes = abiCoder.encode(["uint256[5]"], [[input.root, input.nullifier, input.out_commit, input.delta, input.memo]]);

    //Create ASK request
    const createAskRequest = await createAsk({
      marketId: "0xfbc2bb92a741de6f00a5a06821a4ddae09f4fe84f3c3c0c82e42930d5abf2db6",
      reward: 10000,
      expiry: 100000,
      timeTakenForProofGeneration: 100000,
      deadline: 10000,
      proverData: inputBytes,
      proofMarketPlaceAddress: "0x56d030Fe5D75211DB0Ca84fcC1ee19615FA19105",
      inputAndProofFormatContractAddress: "0xA0Fbd852C6226b3E97eA141c72713dCb851DaCdE",
      wallet: wallet,
    });
    console.log("Ask txHash : ", createAskRequest);
  } catch (err) {
    console.log(err);
  }
};

createAskTest();
