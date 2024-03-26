import { KalypsoSdk } from "../../src";
import dotenv from "dotenv";
import { ethers } from "ethers";

import * as fs from "fs";
import { KalspsoConfig } from "../../src/types";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(keys.rpc);
  const wallet = new ethers.Wallet(keys.generator_private_key, provider);
  console.log("using generator", await wallet.getAddress());

  for (let index = 0; index < 100; index++) {
    const askId = index;
    const kalypso = new KalypsoSdk(wallet, kalypsoConfig);
    try {
      const tx = await kalypso.Generator().discardRequest(askId);
      const receipt = await tx.wait();
      console.log("Cancelled askId: ", askId, receipt?.hash);
    } catch (ex) {
      console.log("failed cancelling ask", askId);
    }
  }
  return "Done";
}

main().then(console.log).catch(console.log);
