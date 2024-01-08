import { KalypsoSdk } from "../../src";
import dotenv from "dotenv";

import { ethers } from "ethers";

import * as secret from "../secret.json";
import * as input from "../input.json";

import * as fs from "fs";
import { KalspsoConfig } from "../../src/types";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

dotenv.config();

const createAskTest = async () => {
  const provider = new ethers.JsonRpcProvider(keys.rpc);
  const wallet = new ethers.Wallet(keys.private_key, provider);

  let abiCoder = new ethers.AbiCoder();
  let inputBytes = abiCoder.encode(["uint256[5]"], [[input.root, input.nullifier, input.out_commit, input.delta, input.memo]]);

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  const secretString = JSON.stringify(secret);

  const marketId = 1;
  // third argument to this function is your custom encryption key. If nothing is provided, matching engine pubkey is used
  const result = await kalypso.MarketPlace().checkInputsAndEncryptedSecretWithIvs(marketId, inputBytes, Buffer.from(secretString));
  console.log(JSON.stringify(result, null, 4));
};

createAskTest();
