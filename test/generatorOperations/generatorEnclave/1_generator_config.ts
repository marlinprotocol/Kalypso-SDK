import { ethers } from "ethers";
import { KalspsoConfig } from "../../../src/types";
import { KalypsoSdk } from "../../../src";
import * as fs from "fs";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(`${keys.generator_private_key}`, provider);

type PORT = string;

type DynamicKeyObject<T> = {
  [key: string]: T;
};

const supportedMarketData: DynamicKeyObject<PORT> = {};

const supportedMarket = "3";
supportedMarketData[supportedMarket] = "6000";

async function main() {
  console.log("using address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  const result = await kalypso
    .Generator()
    .GeneratorEnclaveConnector()
    .generatorConfigSetup(
      [{ address: await wallet.getAddress(), data: "Some data", supported_markets: Object.keys(supportedMarketData) }],
      "wss://arb-sepolia.g.alchemy.com/v2/HRgHr93dID1CdtMKBF0P8Khafl5MHYaN/",
      "https://arb-sepolia.g.alchemy.com/v2/HRgHr93dID1CdtMKBF0P8Khafl5MHYaN",
      "91e60908ad659c964169211f07d7c2328ca8919d81dfd772c850bebfd67d4cdf",
      18470349,
      421614,
      kalypso.MarketPlace().IvsEnclaveConnector().checkInputUrl(),
      supportedMarketData
    );

  console.log(result);

  return "Done";
}

main().then(console.log).catch(console.log);
