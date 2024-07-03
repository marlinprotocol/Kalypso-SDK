import { ethers } from "ethers";
import { KalspsoConfig, PortAndIvsUrl } from "../../../src/types";
import { KalypsoSdk } from "../../../src";
import * as fs from "fs";
import { marketId, startBlock } from "../../../requestData.json";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(`${keys.generator_private_key}`, provider);

type DynamicKeyObject<T> = {
  [key: string]: T;
};

const supportedMarketData: DynamicKeyObject<PortAndIvsUrl> = {};

const supportedMarket = marketId;

// 6000 for zkbob
// 3030 avail-prover
supportedMarketData[supportedMarket] = { port: "6000", ivs_url: "http://not_available" };

async function main() {
  console.log("using address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  const generatorStartBlock = startBlock;

  const generatorToListen = await wallet.getAddress();
  const result = await kalypso
    .Generator()
    .GeneratorEnclaveConnector()
    .generatorConfigSetup(
      [{ address: generatorToListen, data: "Some data", supported_markets: Object.keys(supportedMarketData) }],
      "wss://arb-sepolia.g.alchemy.com/v2/HRgHr93dID1CdtMKBF0P8Khafl5MHYaN/",
      "https://arb-sepolia.g.alchemy.com/v2/HRgHr93dID1CdtMKBF0P8Khafl5MHYaN",
      "8d13b631b2d10d0ea70ad06beb22b97e4aaa4c1d802e4b0ed1c7f466190bfe63", //0xae58E9187d21923cbbF8ce05e3d05354cD90Fc7A
      generatorStartBlock,
      421614,
      kalypso.MarketPlace().IvsEnclaveConnector().checkInputUrl(),
      supportedMarketData,
    );

  console.log(result);

  return "Done";
}

main().then(console.log).catch(console.log);
