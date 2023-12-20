import { KalypsoSdk } from "../src";
import dotenv from "dotenv";
import { PublicKey, PrivateKey } from "eciesjs";
import { ethers, AbiCoder } from "ethers";

import * as fs from "fs";
import { KalspsoConfig } from "../src/types";

const keys = JSON.parse(fs.readFileSync("./keys/nova.json", "utf-8"));
const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/nova.json", "utf-8"));

dotenv.config();

async function main() {
  try {
    const provider = new ethers.JsonRpcProvider(keys.rpc);
    const generator_private_key = keys.generator_private_key;
    const generator_endpoint = keys.generator_endpoint;
    const generator_attestation_utility_endpoint = keys.generator_attestation_utility_endpoint;
    const generator_client_api_key = keys.generator_client_api_key;
    const attestation_verifier_endpoint = keys.attestation_verifier_endpoint;
    const wallet = new ethers.Wallet(generator_private_key, provider);
    console.log("using address", await wallet.getAddress());

    const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

    let attestation = await kalypso.Generator().getAttestation(generator_attestation_utility_endpoint, attestation_verifier_endpoint);

    console.log("\nAttestation :");
    console.log(attestation);

    let generator_public_keys = await kalypso
      .Generator()
      .getGeneratorPublicKeys(generator_endpoint, generator_client_api_key, "0xb05e1dA573707223574443AC6DD1054A9e3A451F");

    console.log("\nGenerator public keys :");
    console.log(generator_public_keys);

    //TODO - Add fetched attestation document to the updateEcisKey
    // const tx = await kalypso.Generator().updateEcisKey(pub_key, encodedData);
    // const receipt = await tx.wait();
    // console.log("Added Generator ECIES key: ", receipt?.hash);
    return "Done";
  } catch (err) {
    console.log(err);
    throw new Error("There was an error updating the generator public key");
  }
}

main().then(console.log).catch(console.log);
