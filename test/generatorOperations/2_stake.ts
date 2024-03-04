import { ContractTransactionReceipt, ContractTransactionResponse, ethers } from "ethers";
import { KalspsoConfig } from "../../src/types";
import { KalypsoSdk } from "../../src";
import * as fs from "fs";
import BigNumber from "bignumber.js";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(`${keys.generator_private_key}`, provider);

let amountToStake = new BigNumber("10").pow(18).multipliedBy(123).div(10);

async function main() {
  console.log("using address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  let tx: ContractTransactionResponse;
  let receipt: ContractTransactionReceipt | null;
  let currentStake = await kalypso.Generator().getStake();

  if (new BigNumber(currentStake.toString()).lt(amountToStake)) {
    tx = await kalypso.Generator().stake(await wallet.getAddress(), amountToStake.minus(currentStake.toString()).toFixed(0));
    receipt = await tx.wait();
    console.log("Stake Transaction: ", receipt?.hash);
  }

  return "Done Staking";
}

main().then(console.log).catch(console.log);
