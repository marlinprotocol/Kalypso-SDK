import { ethers } from "ethers";
import { KalspsoConfig } from "../../src/types";
import { KalypsoSdk } from "../../src";

import { PublicKey } from "eciesjs";

import * as fs from "fs";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(keys.private_key, provider);

async function main(): Promise<string> {
  console.log("using address", await wallet.getAddress());
  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  const attestationVeriferEndPoint = "http://127.0.0.1:1400";

  const marketId = 4;
  const ivsAttestationData = await kalypso.MarketPlace().IvsEnclaveConnector().getAttestation(attestationVeriferEndPoint);
  // console.log({ ivsAttestationData });
  // console.log({ ivs_enclave_ecies_key: ivsAttestationData.secp_key });
  // const ivsPubkey = PublicKey.fromHex(ivsAttestationData.secp_key as string);
  // console.log({ ivs_compressed: ivsPubkey.compressed.toString("hex") });

  const enclaveSignature = await kalypso
    .MarketPlace()
    .IvsEnclaveConnector()
    .getAttestationSignature(ivsAttestationData.attestation_document.toString(), await wallet.getAddress());

  console.log({ enclaveSignature });

  const result = await kalypso.Generator().addIvsKey(marketId, ivsAttestationData.attestation_document.toString(), enclaveSignature);
  console.log({ result: result.hash });

  return "Done";
}

main().then(console.log).catch(console.log);
