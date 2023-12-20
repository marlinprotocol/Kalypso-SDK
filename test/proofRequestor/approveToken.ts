import { KalypsoSdk } from "../../src";
import dotenv from "dotenv";
import { ethers } from "ethers";

import * as fs from "fs";
import { KalspsoConfig } from "../../src/types";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));

dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC);
  const private_key = `${process.env.PRIVATE_KEY}`;
  const wallet = new ethers.Wallet(private_key, provider);
  console.log("using address", await wallet.getAddress());
  const approval_amount = "10000000000000000000000";

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);
  let platform_token_approval = await kalypso.MarketPlace().approvePlatformTokenToMarketPlace(approval_amount);
  let pf_approval_tx = await platform_token_approval.wait();
  console.log("Platform Approval Tx: ", pf_approval_tx?.hash);
  console.log("Platform token approval done");
  let payment_token_approval = await kalypso.MarketPlace().approvePaymentTokenToMarketPlace(approval_amount);
  let py_approval_tx = await payment_token_approval.wait();
  console.log("Payment Approval Tx: ", py_approval_tx?.hash);
  console.log("Payment token approval done");
  return "Approval done";
}

main().then(console.log).catch(console.log);
