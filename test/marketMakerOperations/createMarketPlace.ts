import { ethers } from "ethers";
import { KalspsoConfig } from "../../src/types";
import { KalypsoSdk } from "../../src";

import * as fs from "fs";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(keys.private_key, provider);

async function main(): Promise<string> {
  console.log("using address", await wallet.getAddress());
  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);
  const marketSetupData = {
    zkAppName: "Name of the app",
    proverCode: "link to the prover code",
    verifierCode: "link to the verifier code",
    proverOysterImage: "link to the oyster code",
    setupCeremonyData: ["to decide"],
    inputOuputVerifierUrl: "ivs url mandatory",
  };

  const wrapperAddress = "0x66AB83117Fe67901eE2B0DF4E37FCce5dCB71c0A";
  const slashingPenalty = "10000000000";
  const marketBytes = Buffer.from(JSON.stringify(marketSetupData), "utf-8");
  const isEnclaveRequired = true;
  const ivsAttestationBytes = Buffer.from("ivs attestation to be fetched from ivs enclave", "utf-8");
  const ivsUrl = "https enclave url to check inputs";
  const ivsSigner = await wallet.getAddress(); // this should be ideally fetched from ivs enclave and linked with ivsSigner

  const tx = await kalypso
    .MarketPlace()
    .createNewMarket(marketBytes, wrapperAddress, slashingPenalty, isEnclaveRequired, ivsAttestationBytes, ivsUrl, ivsSigner);
  await tx.wait();

  const receiptHash = tx.hash;
  console.log("Market Creation Receipt hash", receiptHash);

  return "Done";
}

main().then(console.log).catch(console.log);
