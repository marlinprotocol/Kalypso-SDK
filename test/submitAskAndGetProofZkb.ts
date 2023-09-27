import { KalypsoSdk } from "../src/index";
import dotenv from "dotenv";
import { ethers } from "ethers";

import * as secret from "./secret.json";
import * as input from "./input.json";
import * as fs from "fs";

dotenv.config();

const createAskAndGetProof = async () => {
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

    const proofMarketPlaceAddress = "0x57d8B74EB5c758C3D6809038E714A1c76c938076";
    const reward = "1000000000000000";

    const kalypso = new KalypsoSdk(wallet, {
      proofMarketPlace: "string",
      generatorRegistry: "string",
      stakingTokenAddress: "string",
      rsaRegistryAddress: "string",
      paymentTokenAddress: "string",
      platformTokenAddress: "string",
    });

    const secretString = JSON.stringify(secret);

    const latestBlock = await provider.getBlockNumber();

    const marketId = "0x6c2ec35f8128c43e710a84adb6c7de8978238ab2d2e2b9790847dbab464b54f6";
    const assignmentDeadline = latestBlock + 1000000;
    const proofGenerationTimeInBlocks = 1000000;

    // Create ASK request
    const askRequest = await kalypso
      .MarketPlace()
      .createAsk(marketId, inputBytes, reward, assignmentDeadline, proofGenerationTimeInBlocks, await wallet.getAddress(), secretString);

    let receipt = await provider.getTransactionReceipt(askRequest.hash);
    // todo fetch ask id from receipt

    let askId = 123;

    let proof = kalypso.MarketPlace().getProofByAskId(askId.toString());
    console.log(proof);
  } catch (err) {
    console.log(err);
  }
};

async function main() {
  let proof = await createAskAndGetProof();
  console.log(proof);
}

main();
