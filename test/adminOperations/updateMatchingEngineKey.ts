import { KalypsoSdk } from "../../src";
import dotenv from "dotenv";
import { ethers } from "ethers";

dotenv.config();

import * as fs from "fs";
import { KalspsoConfig } from "../../src/types";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

//check if both the values can be same

async function main1(): Promise<string> {
  const provider = new ethers.JsonRpcProvider(keys.rpc);
  let admin_private_key = `${keys.admin_private_key}`;
  const wallet = new ethers.Wallet(admin_private_key, provider);
  console.log("using address of admin", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);
  const meAttestation = await kalypso.MarketPlace().MatchingEngineEnclaveConnector().buildAttestation();

  const tx = await kalypso.Admin().updateMeEciesKeyAndSigner(meAttestation.attestation_doc);
  const receipt = await tx.wait();
  console.log("Updated ME Signer Tx ", receipt?.hash);
  return "Updated ME Signer";
}

main1().then(console.log).catch(console.log);
