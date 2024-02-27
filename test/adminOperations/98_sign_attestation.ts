import { ethers } from "ethers";
import { KalspsoConfig } from "../../src/types";
import { KalypsoSdk } from "../../src";
import * as fs from "fs";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(`${keys.generator_private_key}`, provider);

async function main() {
  console.log("using address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  const attestation_verifier_endpoint = "http://127.0.0.1:1400";
  const attestationResult = await kalypso.MarketPlace().MatchingEngineEnclaveConnector().getAttestation(attestation_verifier_endpoint);

  console.log({ attestationResult });

  const data = await kalypso
    .MarketPlace()
    .MatchingEngineEnclaveConnector()
    .getAttestationSignature(attestationResult.attestation_document.toString(), await wallet.getAddress());
  console.log(JSON.stringify(data, null, 4));

  return "Done";
}

main().then(console.log).catch(console.log);
