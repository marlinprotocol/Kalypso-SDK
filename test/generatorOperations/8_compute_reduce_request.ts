import { ContractTransactionReceipt, ContractTransactionResponse, ethers } from "ethers";
import { KalspsoConfig } from "../../src/types";
import { KalypsoSdk } from "../../src";
import * as fs from "fs";
import BigNumber from "bignumber.js";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(`${keys.generator_private_key}`, provider);

const newCompute = new BigNumber("10").pow(2).div(7);

async function main() {
  console.log("using address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  let tx: ContractTransactionResponse;
  let receipt: ContractTransactionReceipt | null;

  tx = await kalypso.Generator().requestToReduceCompute(newCompute.toFixed(0));
  receipt = await tx.wait();
  console.log("Request To Reduce Compute Tx: ", receipt?.hash);

  return "Done Request To Reduce Compute Tx";
}

main().then(console.log).catch(console.log);
