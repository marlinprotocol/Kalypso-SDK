import { KalypsoSdk } from "../src";
import dotenv from "dotenv";
import * as fs from "fs";

import { ContractTransactionReceipt, ContractTransactionResponse, ethers } from "ethers";
import { KalspsoConfig } from "../src/types";

dotenv.config();

const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));
const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));

async function main() {
  const provider = new ethers.JsonRpcProvider(keys.rpc);
  const wallet = new ethers.Wallet(keys.private_key, provider);
  console.log("using address", await wallet.getAddress());
  let generator_address = await wallet.getAddress();
  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  let tx: ContractTransactionResponse;
  let receipt: ContractTransactionReceipt | null;

  try {
    tx = await kalypso.Generator().deregister(generator_address);
    receipt = await tx.wait();
    console.log("Deregistration Transaction: ", receipt?.hash);
  } catch (ex) {
    console.log(ex);
  }

  return "Done";
}

main().then(console.log).catch(console.log);
