import { KalypsoSdk } from "../../src";
import dotenv from "dotenv";

import { ethers } from "ethers";

import * as secret from "../secret.json";
import * as input from "../input.json";
import BigNumber from "bignumber.js";

import * as fs from "fs";
import { KalspsoConfig } from "../../src/types";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

dotenv.config();

const reward = new BigNumber(10).pow(18).multipliedBy(11).div(10).toFixed(0);

const createAskTest = async () => {
  const provider = new ethers.JsonRpcProvider(keys.rpc);
  const wallet = new ethers.Wallet(keys.private_key, provider);

  console.log("using address", await wallet.getAddress());

  let abiCoder = new ethers.AbiCoder();
  let inputBytes = abiCoder.encode(["uint256[5]"], [[input.root, input.nullifier, input.out_commit, input.delta, input.memo]]);

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  const secretString = JSON.stringify(secret);

  const latestBlock = await provider.getBlockNumber();

  const marketId = "1";
  const assignmentDeadline = new BigNumber(latestBlock).plus(10000000000);
  console.log({ latestBlock, assignmentDeadline: assignmentDeadline.toFixed(0) });
  const proofGenerationTimeInBlocks = new BigNumber(10000000000);

  const isGoodRequest = await kalypso.MarketPlace().checkInputsAndEncryptedSecretWithIvs(marketId, inputBytes, Buffer.from(secretString));

  if (isGoodRequest) {
    // Create ASK request
    const askRequest = await kalypso.MarketPlace().createAsk(
      marketId,
      inputBytes,
      reward,
      assignmentDeadline.toFixed(0),
      proofGenerationTimeInBlocks.toFixed(0),
      await wallet.getAddress(),
      0, // TODO: keep this 0 for now
      Buffer.from(secretString)
    );
    console.log("Ask Request Hash: ", askRequest.hash);
  } else {
    throw new Error("Better not create a request, if it is not provable to prevent loss of funds");
  }
};

createAskTest();
