import { KalypsoSdk } from "../../src";
import dotenv from "dotenv";
import { ethers } from "ethers";
import { PublicKey } from "eciesjs";

dotenv.config();

import * as fs from "fs";
import { KalspsoConfig } from "../../src/types";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

//check if both the values can be same

async function main1(): Promise<string> {
  const provider = new ethers.JsonRpcProvider(keys.rpc);
  let admin_private_key = `${keys.admin_private_key}`;
  const wallet = new ethers.Wallet(admin_private_key, provider);
  console.log("using address of admin", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  // // in case you wan't to mock the ME without enclave
  // const secretKey = PrivateKey.fromHex(keys.matching_engine_private_key);
  // const pubKeyString = "0x" + secretKey.publicKey.uncompressed.toString("hex").substring(2);
  // const meAttestation = await kalypso.MarketPlace().MatchingEngineEnclaveConnector().getMockAttestation(pubKeyString);

  const meAttestation = await kalypso.MarketPlace().MatchingEngineEnclaveConnector().getAttestation();

  const pubkey = PublicKey.fromHex(meAttestation.secp_key as string);
  console.log("me key from attestation", pubkey.compressed.toString("hex"));

  // const meSignature = await kalypso
  //   .MarketPlace()
  //   .MatchingEngineEnclaveConnector()
  //   .getMockAddressSignature(keys.matching_engine_private_key, kalypsoConfig.proof_market_place);

  const meSignature = await kalypso
    .MarketPlace()
    .MatchingEngineEnclaveConnector()
    .getAttestationSignature(meAttestation.attestation_document.toString(), kalypsoConfig.proof_market_place);

  const tx = await kalypso.Admin().updateMeEciesKeyAndSigner(meAttestation.attestation_document, meSignature);
  console.log("Updated ME Signer Tx ", tx.hash);
  return "Updated ME Signer";
}

main1().then(console.log).catch(console.log);
