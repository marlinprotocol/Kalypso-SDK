import { KalypsoSdk } from "../src";
import dotenv from "dotenv";
import { PublicKey, PrivateKey } from "eciesjs";

import { ethers } from "ethers";

dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC);
  let matching_engine_private_key = `${process.env.MATCHING_ENGINE_PRIVATE_KEY}`;
  const wallet = new ethers.Wallet(matching_engine_private_key, provider);
  console.log("using address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, {
    proofMarketPlace: "0xD4B9D03fF2205DAC4F1fE3382934EcCe9dF174b1",
    generatorRegistry: "0x6b23bA5825d6f1886e0EDBC46A5eCe846b79AEc8",
    entityKeyRegistry: "0xf1ac28F5E2F72657DD2699B7454E9c7f5207A6D1",
    paymentTokenAddress: "0xCe23FfE37A1669CfD0081109aFC680c8503888f8",
    platformTokenAddress: "0x560FCeb707B0F4b56d43d295e45eD7FE939b96b6",
  });

  let secret_key: PrivateKey = PrivateKey.fromHex(matching_engine_private_key);
  let pub_key = secret_key.publicKey.compressed;

  console.log({ me_pub_key: pub_key });

  const tx = await kalypso.Admin().updateEncryptionKey(pub_key, "0x");
  const receipt = await tx.wait();
  console.log("Added Matching Engine ECIES key: ", receipt?.hash);
  return "Done";
}

main().then(console.log).catch(console.log);
