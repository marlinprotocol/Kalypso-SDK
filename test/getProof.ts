import { KalypsoSdk } from "../src";
import dotenv from "dotenv";
import { ethers } from "ethers";

import * as fs from "fs";
import { KalspsoConfig } from "../src/types";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(keys.rpc);
  const wallet = new ethers.Wallet(keys.private_key, provider);

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  let txHash = "0x366dc71f1f9f52424f3c23a9cf732f6d9a1e671d44739136628b9d2d092e0a36";
  // let txHash = "0xd372431f85abf1c8543e3d8ed2c02fdd7dcd061646181589521a16c929633d57";

  let receipt = await provider.getTransactionReceipt(txHash);
  console.log(receipt);

  let blockNumber = receipt?.blockNumber;

  let ask_id = await kalypso.MarketPlace().getAskId(receipt!);

  console.log("Ask id : ", ask_id);

  let proof = await kalypso.MarketPlace().getProofByAskId(ask_id, blockNumber!);

  console.log(proof);
  return "Proof fetched";
}

main().then(console.log).catch(console.log);
