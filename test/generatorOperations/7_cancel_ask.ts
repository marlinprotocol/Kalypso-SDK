import { KalypsoSdk } from "../../src";
import dotenv from "dotenv";
import { ethers } from "ethers";

import * as fs from "fs";
import { KalspsoConfig } from "../../src/types";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contract/arb-sepolia.json", "utf-8"));

dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC);
  const generator_private_key = `${process.env.GENERATOR_PRIVATE_KEY}`;
  const wallet = new ethers.Wallet(generator_private_key, provider);
  console.log("using address", await wallet.getAddress());

  const askId = 6;
  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);
  const tx = await kalypso.Generator().discardRequest(askId);
  const receipt = await tx.wait();
  console.log("Cancelled taskId: ", askId, receipt?.hash);
  return "Done";
}

main().then(console.log).catch(console.log);
