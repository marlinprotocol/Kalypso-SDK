import { ethers } from "ethers";
import { KalspsoConfig } from "../../src/types";
import { KalypsoSdk } from "../../src";

import * as fs from "fs";
import { PublicKey } from "eciesjs";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(keys.private_key, provider);

async function main(): Promise<string> {
  console.log("using address", await wallet.getAddress());
  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  const proverAttestationData = await kalypso.Generator().GeneratorEnclaveConnector().getAttestation();
  console.log({ prover_enclave_key: proverAttestationData.secp_key });
  const proverPubKey = PublicKey.fromHex(proverAttestationData.secp_key as string);
  // console.log({ prover_compressed: proverPubKey.compressed.toString("hex") });

  const proverImagePcrs = KalypsoSdk.getRlpedPcrsFromAttestation(proverAttestationData.attestation_document);
  console.log({ proverImagePcrs });

  const data = await kalypso
    .MarketPlace()
    .createTeeVerifier(await wallet.getAddress(), kalypsoConfig.tee_verifier_deployer, kalypsoConfig.attestation_verifier, proverImagePcrs);

  console.log("Tee Verifier Creation Receipt hash", data.hash);

  return "Done";
}

main().then(console.log).catch(console.log);
