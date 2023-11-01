import { KalypsoSdk } from "../src";
import dotenv from "dotenv";
import { PublicKey, PrivateKey } from "eciesjs";
import { ethers } from "ethers";

import * as fs from "fs";
import { KalspsoConfig } from "../src/types";

const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));
const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));

dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(keys.rpc);
  const generator_private_key = `${keys.generator_private_key}`;
  const private_key = `${keys.private_key}`;
  const wallet = new ethers.Wallet(generator_private_key, provider);
  console.log("using address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  let secret_key: PrivateKey = PrivateKey.fromHex(generator_private_key);
  let pub_key = secret_key.publicKey.compressed;

  console.log({ gen_pub_key: pub_key });

  const tx = await kalypso.Generator().updateEcisKey(pub_key, "0x");
  const receipt = await tx.wait();
  console.log("Added Generator ECIES key: ", receipt?.hash);
  return "Done";
}

main().then(console.log).catch(console.log);
