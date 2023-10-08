import { KalypsoSdk } from "../src";
import dotenv from "dotenv";
import * as fs from "fs";

import { ContractTransactionReceipt, ContractTransactionResponse, ethers } from "ethers";
import BigNumber from "bignumber.js";

dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC);
  const wallet = new ethers.Wallet(`${process.env.GENERATOR_PRIVATE_KEY}`, provider);
  console.log("using address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, {
    proofMarketPlace: "0xf747B2a788b453eE4d00BE24Cd7D7A8532dCD3Cc",
    generatorRegistry: "0x77716073aB8D14bb7470021daeb33567Dc5c1BF7",
    entityKeyRegistry: "0x7ce14a0dc913e35e99C1F9D95685b30E73952240",
    paymentTokenAddress: "0xCe23FfE37A1669CfD0081109aFC680c8503888f8",
    platformTokenAddress: "0x560FCeb707B0F4b56d43d295e45eD7FE939b96b6",
  });

  const pubkey = Buffer.from("read this from env variables");

  const marketId = "0x6c2ec35f8128c43e710a84adb6c7de8978238ab2d2e2b9790847dbab464b54f6";
  let tx: ContractTransactionResponse;
  let receipt: ContractTransactionReceipt | null;

  const declaredCompute = 100000;
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
    tx = await kalypso.Generator().joinMarketPlace(marketId, "100000000000000000", "10000", "3");
    receipt = await tx.wait();
    console.log("Joined Market Place Transaction: ", receipt?.hash);
  } catch (ex) {
    console.log(ex);
  }

  return "Done";
}

main().then(console.log).catch(console.log);
