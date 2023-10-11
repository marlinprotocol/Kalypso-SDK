import { KalypsoSdk } from "../src/index";
import dotenv from "dotenv";
import { ethers } from "ethers";

import * as secret from "./secret.json";
import * as input from "./input.json";

import * as fs from "fs";
import { KalspsoConfig } from "../src/types";
const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contract.json", "utf-8"));

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

    const reward = "1000000000000000";

    const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

    const secretString = JSON.stringify(secret);

    const latestBlock = await provider.getBlockNumber();

    const marketId = "0x07b7d625c70be57115ab18fc435ed0253425671cb91bd6547b7defbc75f52082";
    const assignmentDeadline = latestBlock + 1000000;
    const proofGenerationTimeInBlocks = 1000000;

    // Create ASK request
    const askRequest = await kalypso
      .MarketPlace()
      .createAsk(
        marketId,
        inputBytes,
        reward,
        assignmentDeadline,
        proofGenerationTimeInBlocks,
        await wallet.getAddress(),
        Buffer.from(secretString)
      );

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
