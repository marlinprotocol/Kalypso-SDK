import { ethers } from "ethers";
import { KalspsoConfig } from "../../src/types";
import { KalypsoSdk } from "../../src";

import * as fs from "fs";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(keys.treasury_private_key, provider);

async function main(): Promise<string> {
  console.log("using address", await wallet.getAddress());
  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);
  const marketSetupData = {
    zkAppName: "sp1 test prover",
    proverCode: "public prover",
    verifierCode: "public prover",
    proverOysterImage: "not required",
    inputOuputVerifierUrl: "not required in testnet",
  };
  const marketBytes = Buffer.from(JSON.stringify(marketSetupData), "utf-8");

  const wrapperAddress = "0xABBF9E6674e741656D718431B275EB2c951Aa184";
  const slashingPenalty = "10000000000";

  const proverAttestationData = await kalypso.Generator().GeneratorEnclaveConnector().getAttestation();

  const ivs_image_pcrs = KalypsoSdk.getRlpedPcrsFromAttestation(proverAttestationData.attestation_document);

  const tx = await kalypso.MarketPlace().createPublicMarket(marketBytes, wrapperAddress, slashingPenalty, ivs_image_pcrs);
  console.log("Market Creation Receipt hash", tx.hash);

  return "Done";
}

main().then(console.log).catch(console.log);
