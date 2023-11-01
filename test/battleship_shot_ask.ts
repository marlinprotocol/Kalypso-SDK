import { KalypsoSdk } from "../src";
import dotenv from "dotenv";

import { ethers } from "ethers";

import BigNumber from "bignumber.js";

import * as fs from "fs";
import { KalspsoConfig } from "../src/types";

// join game will also have identical code, just that the below data will change
import * as game_shot_data from "./battleship_data/shot_proof.json";

const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));
const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));

dotenv.config();

const createAskTest = async () => {
  try {
    const provider = new ethers.JsonRpcProvider(keys.rpc);
    const wallet = new ethers.Wallet(keys.private_key, provider);

    console.log("using address", await wallet.getAddress());

    let abiCoder = new ethers.AbiCoder();
    let inputBytes = abiCoder.encode(
      ["bytes32", "bytes32", "bytes32", "bytes32"],
      [game_shot_data.verifier_data[0], game_shot_data.verifier_data[1], game_shot_data.verifier_data[2], game_shot_data.verifier_data[3]]
    );

    const reward = "1000000000000000000";
    const kalypso = new KalypsoSdk(wallet, kalypsoConfig);
    const secretString = JSON.stringify(game_shot_data.ships);

    const marketId = "0xa82ee56ae30ea22a12f320423a865feaf5de25e638b523f2507a7b32470e3659";

    const latestBlock = await provider.getBlockNumber();
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
// 0xfec7908ae76e440350c9d8e46658d13c392958d2d2d856492d137e5f30545035
