import { KalypsoSdk } from "../src";
import dotenv from "dotenv";
import * as fs from "fs";

import { ContractTransactionReceipt, ContractTransactionResponse, ethers } from "ethers";
import BigNumber from "bignumber.js";
import { KalspsoConfig } from "../src/types";

dotenv.config();

const keys = JSON.parse(fs.readFileSync("./keys/nova.json", "utf-8"));
const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/nova.json", "utf-8"));

async function main() {
  const provider = new ethers.JsonRpcProvider(keys.rpc);
  const wallet = new ethers.Wallet(`${keys.generator_private_key}`, provider);
  console.log("using address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  const marketId = "0x07b7d625c70be57115ab18fc435ed0253425671cb91bd6547b7defbc75f52082";
  let tx: ContractTransactionResponse;
  let receipt: ContractTransactionReceipt | null;

  const declaredCompute = "1000000000000000000";
  try {
    tx = await kalypso.Generator().register(await wallet.getAddress(), declaredCompute, "0xff00abcd00ff");
    receipt = await tx.wait();
    console.log("Registration Transaction: ", receipt?.hash);
  } catch (ex) {
    console.log(ex);
  }

  let amountToStake = new BigNumber("1000000000000000000000");
  let currentStake = await kalypso.Generator().getStake();

  if (new BigNumber(currentStake.toString()).lt(amountToStake)) {
    tx = await kalypso.Generator().stake(await wallet.getAddress(), amountToStake.minus(currentStake.toString()).toFixed(0));
    receipt = await tx.wait();
    console.log("Stake Transaction: ", receipt?.hash);
  }

  try {
    tx = await kalypso.Generator().joinMarketPlace(marketId, "100000000000000000", "10000", "10000000000");
    receipt = await tx.wait();
    console.log("Joined Market Place Transaction: ", receipt?.hash);
  } catch (ex) {
    console.log(ex);
  }

  return "Done";
}

main().then(console.log).catch(console.log);
