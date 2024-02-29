import { ethers } from "ethers";
import { KalspsoConfig } from "../../src/types";
import { KalypsoSdk } from "../../src";
import * as fs from "fs";
import { PublicKey } from "eciesjs";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(`${keys.generator_private_key}`, provider);

async function main() {
  console.log("using address", await wallet.getAddress());

  const attestation_verifier_endpoint = "http://127.0.0.1:1400";

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  let attestation = await kalypso.Generator().GeneratorEnclaveConnector().getAttestation(attestation_verifier_endpoint);
  // let attestation = await kalypso
  //   .Generator()
  //   .GeneratorEnclaveConnector()
  //   .getMockAttestation(
  //     "0x1f087499fe4b0ce31ad5fe80bd4c03a642e251ed422bd9c08678a97582e8360218cc658dc8ae0cba9147af7273b67377287951c39dd2a2234b4ead1b8dc0fe02"
  //   );

  console.log("\nAttestation :");
  console.log(attestation);

  const public_key = PublicKey.fromHex(attestation.secp_key.toString());
  console.log("compressed publickey", public_key.compressed.toString("hex"));

  // let generator_public_keys = await kalypso
  //   .Generator()
  //   .GeneratorEnclaveConnector()
  //   .getGeneratorPublicKeys("0xb05e1dA573707223574443AC6DD1054A9e3A451F");

  // console.log("\nGenerator public keys :");
  // console.log(generator_public_keys);

  const marketId = 0;
  const enclaveSignature = await kalypso
    .Generator()
    .GeneratorEnclaveConnector()
    .getAttestationSignature(attestation.attestation_document.toString(), await wallet.getAddress());

  const tx = await kalypso.Generator().updateEcisKey(marketId, attestation.attestation_document, enclaveSignature);

  const receipt = await tx.wait();
  console.log("Added Generator ECIES key: ", receipt?.hash);
  return "Done";
}

main().then(console.log).catch(console.log);
