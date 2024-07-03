import { ContractTransactionReceipt, ContractTransactionResponse, ethers } from "ethers";
import { KalspsoConfig } from "../../src/types";
import { KalypsoSdk } from "../../src";
import * as fs from "fs";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(`${keys.generator_private_key}`, provider);

import { marketId } from "../../requestData.json";

async function main() {
  console.log("using address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  let tx: ContractTransactionResponse;
  let receipt: ContractTransactionReceipt | null;

  tx = await kalypso.Generator().requestForExitMarket(marketId);
  tx = await kalypso.Generator().leaveMarketPlace(marketId);
  receipt = await tx.wait();
  console.log("Leave Market Place Transaction: ", receipt?.hash);

  return "Done Leaving Market Place";
}

main().then(console.log).catch(console.log);
