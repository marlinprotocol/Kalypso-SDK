import { KalypsoSdk } from "../src";
import dotenv from "dotenv";
import { ethers } from "ethers";

import * as fs from "fs";
import { KalspsoConfig } from "../src/types";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/nova.json", "utf-8"));


dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC);
  const private_key = `${process.env.PRIVATE_KEY}`;
  const wallet = new ethers.Wallet(private_key, provider);
  console.log("Using address", await wallet.getAddress());
  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  let txHash = "0xd372431f85abf1c8543e3d8ed2c02fdd7dcd061646181589521a16c929633d57"

  let receipt = await provider.getTransactionReceipt(txHash);

  let blockNumber = receipt?.blockNumber;

  let ask_id = await kalypso.MarketPlace().getAskId(receipt!);

  console.log("Ask id : ",ask_id);

  let proof = await kalypso.MarketPlace().getProofByAskId(ask_id,blockNumber!);

  console.log(proof);
  return "Proof fetched"

}

main().then(console.log).catch(console.log);
