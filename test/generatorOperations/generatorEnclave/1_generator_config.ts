import { ethers } from "ethers";
import { KalspsoConfig, PortAndIvsUrl } from "../../../src/types";
import { KalypsoSdk } from "../../../src";
import * as fs from "fs";
import { marketId, startBlock } from "../../../requestData.json";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(`${keys.private_key}`, provider);

type DynamicKeyObject<T> = {
  [key: string]: T;
};

const supportedMarketData: DynamicKeyObject<PortAndIvsUrl> = {};

const supportedMarket = marketId;

// 6000 for zkbob
// 3030 avail-prover
supportedMarketData[supportedMarket] = { port: "3000", ivs_url: "http://not_available" };

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
      "wss://arb-sepolia.g.alchemy.com/v2/Mo9-XYt75iKUHZ6-Pc-WfYnfU3tsZiYP/",
      "https://arb-sepolia.g.alchemy.com/v2/Mo9-XYt75iKUHZ6-Pc-WfYnfU3tsZiYP",
      "1a85a1804012e6d780c2da25c0d042822db69eaaad5caad79073c094fd718417", //0xae58E9187d21923cbbF8ce05e3d05354cD90Fc7A
      generatorStartBlock,
      421614,
      kalypso.MarketPlace().IvsEnclaveConnector().checkInputUrl(),
      supportedMarketData,
    );

  console.log(result);

  return "Done";
}

main().then(console.log).catch(console.log);
