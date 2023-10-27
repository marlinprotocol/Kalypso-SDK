import { KalypsoSdk } from "../src";
import dotenv from "dotenv";
import { PublicKey, PrivateKey } from "eciesjs";

import { ethers } from "ethers";

dotenv.config();

import * as fs from "fs";
import { KalspsoConfig } from "../src/types";

const keys = JSON.parse(fs.readFileSync("./keys/nova.json", "utf-8"));
const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/nova.json", "utf-8"));

async function main1(): Promise<string> {
  // const provider = new ethers.JsonRpcProvider(keys.rpc);
  // let admin_private_key = `${keys.admin_private_key}`;
  // const wallet = new ethers.Wallet(admin_private_key, provider);
  // console.log("using address of admin", await wallet.getAddress());

  // let matching_engine_private_key = `${process.env.matching_engine_private_key}`;
  // const me_wallet = new ethers.Wallet(matching_engine_private_key, provider);

  // const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  // const tx = await kalypso.Admin().grantRoleToMatchingEngine(await me_wallet.getAddress(), "0x");
  // const receipt = await tx.wait();
  // console.log("Granted Role To Matching Engine ", receipt?.hash);
  return "Done";
}
async function main2() {
  const provider = new ethers.JsonRpcProvider(keys.rpc);
  let matching_engine_private_key = `${keys.matching_engine_private_key}`;

  let admin_private_key = `${keys.admin_private_key}`;
  const wallet = new ethers.Wallet(admin_private_key, provider);
  console.log("using address of me", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  let secret_key: PrivateKey = PrivateKey.fromHex(matching_engine_private_key);
  let pub_key = secret_key.publicKey.compressed;

  console.log({ me_pub_key: pub_key });

  const tx = await kalypso.Admin().updateEncryptionKey(pub_key, "0x");
  const receipt = await tx.wait();
  console.log("Added Matching Engine ECIES key: ", receipt?.hash);
  return "Done";
}

main1().then(main2).then(console.log).catch(console.log);
