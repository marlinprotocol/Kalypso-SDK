import { createAsk, approveRewardTokens, jsonToBytes } from "../src/index";
import dotenv from "dotenv";
import { ethers } from "ethers";

import * as secret from "./secret.json";
import * as input from "./input.json";

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

    const reward = 1;

    //Approve token for rewards
    const approveRewardsToken = await approveRewardTokens({
      proofMarketPlaceAddress: "0x56d030Fe5D75211DB0Ca84fcC1ee19615FA19105",
      tokenContractAddress: "0x4935ea37F0ADd47B9567A36D0806a28459761b60",
      reward,
      wallet: wallet,
    });
    console.log("Approval txHash : ", approveRewardsToken);

    let abiCoder = new ethers.AbiCoder();

    let inputBytes = abiCoder.encode(["uint256[5]"], [[input.root, input.nullifier, input.out_commit, input.delta, input.memo]]);

    const secretString = jsonToBytes(secret);
    //Create ASK request
    const askRequestId = await createAsk({
      marketId: "0x027f76939e5bed90c45d0d1809796f033f6481011d554502d4c63f7878c9ee83",
      reward,
      expiry: 100000,
      timeTakenForProofGeneration: 100000,
      deadline: 10000,
      proverData: inputBytes,
      proofMarketPlaceAddress: "0x56d030Fe5D75211DB0Ca84fcC1ee19615FA19105",
      inputAndProofFormatContractAddress: "0xA0Fbd852C6226b3E97eA141c72713dCb851DaCdE",
      wallet: wallet,
      privateInputRegistry: "0x8F21b1c281E110DCEDbAbFE746dC0208F8544501",
      privateData: secretString,
    });
    console.log("Ask id : ", askRequestId);
  } catch (err) {
    console.log(err);
  }
};

createAskTest();
