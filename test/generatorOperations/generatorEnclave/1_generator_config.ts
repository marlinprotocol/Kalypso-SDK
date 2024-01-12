import { ethers } from "ethers";
import { KalspsoConfig } from "../../../src/types";
import { KalypsoSdk } from "../../../src";
import * as fs from "fs";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(`${keys.generator_private_key}`, provider);

async function main() {
  console.log("using address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  const result = await kalypso
    .Generator()
    .GeneratorEnclaveConnector()
    .generatorConfigSetup(
      [{ address: await wallet.getAddress(), data: "Some data", supported_markets: ["1"] }],
      "wss://arb-sepolia.g.alchemy.com/v2/HRgHr93dID1CdtMKBF0P8Khafl5MHYaN/",
      "https://arb-sepolia.g.alchemy.com/v2/HRgHr93dID1CdtMKBF0P8Khafl5MHYaN",
      "0x0db6072bd69de885b93a846133dc22cde7b612f55022fc5d6a2e492e0e61698d",
      6194382,
      421614,
      "0x3b26f467C93e2507BC944E01744126a1CCeE3F17",
      "0x18Eec904038507ECd60f2e78BbC2C8a1c73653ca",
      "0xc6A76e552b565F7E35bC6F231bDAfa78511f74b2",
      "0xb08B0d7A9a84A791C8ac235467c20D7a21681B7b"
    );

  return "Done";
}

main().then(console.log).catch(console.log);
