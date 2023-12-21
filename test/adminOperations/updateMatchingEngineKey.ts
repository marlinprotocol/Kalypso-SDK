import { KalypsoSdk } from "../../src";
import dotenv from "dotenv";
import { PublicKey, PrivateKey } from "eciesjs";

import { ethers } from "ethers";

dotenv.config();

import * as fs from "fs";
import { KalspsoConfig } from "../../src/types";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const meSignerAttestation = "0xabcd"; // fetch this
const meEciesPubKeyAttestation = "0xabcd"; // fetch this
//check if both the values can be same

async function main1(): Promise<string> {
  const provider = new ethers.JsonRpcProvider(keys.rpc);
  let admin_private_key = `${keys.admin_private_key}`;
  const wallet = new ethers.Wallet(admin_private_key, provider);
  console.log("using address of admin", await wallet.getAddress());

  const me_wallet = new ethers.Wallet(keys.matching_engine_private_key, provider);

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  const tx = await kalypso.Admin().updateMeSigner(await me_wallet.getAddress(), meSignerAttestation);
  const receipt = await tx.wait();
  console.log("Updated ME Signer Tx ", receipt?.hash);
  return "Updated ME Signer";
}

async function main2() {
  const provider = new ethers.JsonRpcProvider(keys.rpc);
  const wallet = new ethers.Wallet(keys.admin_private_key, provider);

  console.log("admin address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  // optional if not done during setup
  let roleTx = await kalypso.Admin().grantKeyRegistryRoleForEntityKeyRegistry(kalypsoConfig.generator_registry);
  await roleTx.wait();
  roleTx = await kalypso.Admin().grantKeyRegistryRoleForEntityKeyRegistry(kalypsoConfig.proof_market_place);
  await roleTx.wait();

  let secret_key: PrivateKey = PrivateKey.fromHex(keys.matching_engine_private_key);
  let pub_key = secret_key.publicKey.compressed;

  console.log({ me_pub_key: pub_key });

  const tx = await kalypso.Admin().updateEncryptionKey(pub_key, meEciesPubKeyAttestation);
  const receipt = await tx.wait();
  console.log("Updated ME ECIES key: ", receipt?.hash);
  return "Done";
}

main1().then(main2).then(console.log).catch(console.log);
