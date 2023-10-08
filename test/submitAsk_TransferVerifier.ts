import { KalypsoSdk } from "../src";
import dotenv from "dotenv";

import { ethers } from "ethers";

import * as secret from "./secret.json";
import * as input from "./input.json";
import BigNumber from "bignumber.js";

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

    console.log("using address", await wallet.getAddress());

    let abiCoder = new ethers.AbiCoder();
    let inputBytes = abiCoder.encode(["uint256[5]"], [[input.root, input.nullifier, input.out_commit, input.delta, input.memo]]);

    const reward = "1000000000000000000";

    const kalypso = new KalypsoSdk(wallet, {
      proofMarketPlace: "0xD4B9D03fF2205DAC4F1fE3382934EcCe9dF174b1",
      generatorRegistry: "0x6b23bA5825d6f1886e0EDBC46A5eCe846b79AEc8",
      entityKeyRegistry: "0xf1ac28F5E2F72657DD2699B7454E9c7f5207A6D1",
      paymentTokenAddress: "0xCe23FfE37A1669CfD0081109aFC680c8503888f8",
      platformTokenAddress: "0x560FCeb707B0F4b56d43d295e45eD7FE939b96b6",
    });

    const secretString = JSON.stringify(secret);

    const latestBlock = await provider.getBlockNumber();

    const marketId = "0x07b7d625c70be57115ab18fc435ed0253425671cb91bd6547b7defbc75f52082";
    const assignmentDeadline = new BigNumber(latestBlock).plus(10000000000);
    console.log({ latestBlock, assignmentDeadline: assignmentDeadline.toFixed(0) });
    const proofGenerationTimeInBlocks = new BigNumber(10000000000);

    // Create ASK request
    const askRequest = await kalypso
      .MarketPlace()
      .createAsk(
        marketId,
        inputBytes,
        reward,
        assignmentDeadline.toFixed(0),
        proofGenerationTimeInBlocks.toFixed(0),
        await wallet.getAddress(),
        Buffer.from(secretString)
      );
    console.log("Ask Request Hash: ", askRequest.hash);
  } catch (err) {
    console.log(err);
  }
};

createAskTest();
