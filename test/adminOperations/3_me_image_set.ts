import { ethers } from "ethers";
import { KalspsoConfig } from "../../src/types";
import { KalypsoSdk } from "../../src";
import { PublicKey } from "eciesjs";

import * as fs from "fs";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(keys.admin_private_key, provider);

async function main(): Promise<string> {
  console.log("using address", await wallet.getAddress());
  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  const attestationVeriferEndPoint = "http://13.201.18.93:1400";

  const meAttestationData = await kalypso.MarketPlace().MatchingEngineEnclaveConnector().getAttestation(attestationVeriferEndPoint);
  console.log({ me_enclave_ecies_key: meAttestationData.secp_key });
  const mePubkey = PublicKey.fromHex(meAttestationData.secp_key as string);
  console.log({ me_compressed: mePubkey.compressed.toString("hex") });

  const mePCRS = KalypsoSdk.getRlpedPcrsFromAttestation(meAttestationData.attestation_document);
  console.log({ mePCRS });
  const result = await kalypso.Admin().setMatchingEngineImage(mePCRS);

  console.log({ result });

  return "Done";
}

main().then(console.log).catch(console.log);
