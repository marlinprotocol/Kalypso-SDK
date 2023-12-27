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

  const generator_endpoint = keys.generator_endpoint;
  const generator_attestation_utility_endpoint = keys.generator_attestation_utility_endpoint;
  const generator_client_api_key = keys.generator_client_api_key;
  const attestation_verifier_endpoint = keys.attestation_verifier_endpoint;

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  let attestation = await kalypso
    .Generator()
    .GeneratorEnclaveConnector()
    .getAttestation(generator_attestation_utility_endpoint, attestation_verifier_endpoint);

  console.log("\nAttestation :");
  console.log(attestation);

  let generator_public_keys = await kalypso
    .Generator()
    .GeneratorEnclaveConnector()
    .getGeneratorPublicKeys(generator_client_api_key, "0xb05e1dA573707223574443AC6DD1054A9e3A451F");

  console.log("\nGenerator public keys :");
  console.log(generator_public_keys);

  const tx = await kalypso.Generator().updateEcisKey(generator_public_keys.generator_public_key, attestation.attestation_document);
  const receipt = await tx.wait();
  console.log("Added Generator ECIES key: ", receipt?.hash);
  return "Done";
}

main().then(console.log).catch(console.log);