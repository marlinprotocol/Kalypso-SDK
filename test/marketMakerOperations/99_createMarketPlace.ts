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
  const marketSetupData = {
    zkAppName: "Name of the app",
    proverCode: "link to the prover code",
    verifierCode: "link to the verifier code",
    proverOysterImage: "link to the oyster code",
    setupCeremonyData: ["to decide"],
    inputOuputVerifierUrl: "ivs url mandatory",
  };

  const wrapperAddress = "0x96AEC4bFEF7D802cd609Af69058D07ECB22e9015";
  const slashingPenalty = "10000000000";
  const marketBytes = Buffer.from(JSON.stringify(marketSetupData), "utf-8");
  const isEnclaveRequired = true;

  const ivsSignature = await kalypso
    .MarketPlace()
    .IvsEnclaveConnector()
    .getAddressSignature(await wallet.getAddress());

  console.log({ ivsSignature });

  const attestationVeriferEndPoint = "http://65.1.112.107:1400";

  const attestationData = await kalypso.MarketPlace().IvsEnclaveConnector().getAttestation(attestationVeriferEndPoint);
  console.log({ enclave_ecies_key: attestationData.secp_key });
  const pubkey = PublicKey.fromHex(attestationData.secp_key as string);
  console.log({ compressed: pubkey.compressed.toString("hex") });

  const ivsCheckPointUrl = "http://13.200.244.229:3030/checkInput";

  const tx = await kalypso
    .MarketPlace()
    .createNewMarket(
      marketBytes,
      wrapperAddress,
      slashingPenalty,
      isEnclaveRequired,
      attestationData.attestation_document,
      ivsCheckPointUrl,
      ivsSignature
    );
  await tx.wait();

  const receiptHash = tx.hash;
  console.log("Market Creation Receipt hash", receiptHash);

  return "Done";
}

main().then(console.log).catch(console.log);
