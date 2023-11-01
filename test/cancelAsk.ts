import { KalypsoSdk } from "../src";
import dotenv from "dotenv";
import { ethers } from "ethers";

import * as fs from "fs";
import { KalspsoConfig } from "../src/types";

dotenv.config();

const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));
const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));


dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(keys.rpc);
  const generator_private_key = `${keys.private_key}`;
  const wallet = new ethers.Wallet(generator_private_key, provider);
  console.log("using address", await wallet.getAddress());

  const taskId = 118;
  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);
  const tx = await kalypso.Generator().discardRequest(taskId);
  const receipt = await tx.wait();
  console.log("Cancelled taskId: ", taskId, receipt?.hash);
  return "Done";
}

main().then(console.log).catch(console.log);
