import { KalypsoSdk } from "../src";
import dotenv from "dotenv";

import { ethers } from "ethers";

import BigNumber from "bignumber.js";

import * as fs from "fs";
import { KalspsoConfig } from "../src/types";

// join game will also have identical code, just that the below data will change
import * as new_game_zk_data from "./battleship_data/new_game_proof.json";

const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));
const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));

dotenv.config();

const createAskTest = async () => {
  try {
    const provider = new ethers.JsonRpcProvider(keys.rpc);
    const wallet = new ethers.Wallet(keys.private_key, provider);

    console.log("using address", await wallet.getAddress());

    let abiCoder = new ethers.AbiCoder();
    let inputBytes = abiCoder.encode(["bytes32"], [new_game_zk_data.commitment]);

    const reward = "1000000000000000000";
    const kalypso = new KalypsoSdk(wallet, kalypsoConfig);
    const secretString = JSON.stringify(new_game_zk_data.ships);

    const marketId = "0x9c6d84fa00bb8b56de0fc2ee1aba6b07f7da55daa8c381bf6ed04b8fa399ea8d";

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
// 0x17860c578dd5adf4ce0b026fd06939b56ac356f6cded732b77604445a7433783