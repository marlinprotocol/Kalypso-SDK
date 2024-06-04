import { ethers } from "ethers";
import { KalspsoConfig } from "../../src/types";
import { KalypsoSdk } from "../../src";
import { teeVerifier } from "../../requestData.json";

import * as fs from "fs";
import { PublicKey } from "eciesjs";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(keys.treasury_private_key, provider);

async function main(): Promise<string> {
  console.log("using address", await wallet.getAddress());
  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);
  const marketSetupData = {
    zkAppName: "Name of the app",
    proverCode: "link to the prover code",
    verifierCode: "link to the verifier code",
    proverOysterImage: "link to the oyster code",
    setupCeremonyData: ["to decide"],
    inputOuputVerifierUrl: "ivs optional for private markets",
  };

  // const wrapperAddress = "0xD8bfa8E31Caa0088cD86993a0D3e2329Fc3A8B8d";

  const wrapperAddress = teeVerifier;
  const slashingPenalty = "10000000000";
  const marketBytes = Buffer.from(JSON.stringify(marketSetupData), "utf-8");

  // const ivsAttestationData = await kalypso.MarketPlace().IvsEnclaveConnector().getAttestation();
  // console.log({ ivs_enclave_ecies_key: ivsAttestationData.secp_key });
  // const ivsPubkey = PublicKey.fromHex(ivsAttestationData.secp_key as string);
  // console.log({ ivs_compressed: ivsPubkey.compressed.toString("hex") });
  // const ivsImagePcrs = KalypsoSdk.getRlpedPcrsFromAttestation(ivsAttestationData.attestation_document);

  const proverAttestationData = await kalypso.Generator().GeneratorEnclaveConnector().getAttestation();
  console.log({ prover_enclave_key: proverAttestationData.secp_key });
  const proverPubKey = PublicKey.fromHex(proverAttestationData.secp_key as string);
  console.log({ prover_compressed: proverPubKey.compressed.toString("hex") });

  const proverImagePcrs = KalypsoSdk.getRlpedPcrsFromAttestation(proverAttestationData.attestation_document);
  console.log({ proverImagePcrs });

  const tx = await kalypso.MarketPlace().createPrivateMarket(marketBytes, wrapperAddress, slashingPenalty, proverImagePcrs);
  console.log("Market Creation Receipt hash", tx.hash);

  return "Done";
}

main().then(console.log).catch(console.log);
