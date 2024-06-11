import { ethers } from "ethers";
import { KalspsoConfig } from "../../../src/types";
import { KalypsoSdk } from "../../../src";
import * as fs from "fs";
import { programName } from "../../../requestData.json";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(`${keys.generator_private_key}`, provider);

async function main() {
  console.log("using address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  const data1 = await kalypso.Generator().GeneratorEnclaveConnector().startListener();
  console.log(JSON.stringify(data1, null, 4));

  const data2 = await kalypso.Generator().GeneratorEnclaveConnector().startProgram(programName);
  console.log(JSON.stringify(data2, null, 4));
  return "Done";
}

main().then(console.log).catch(console.log);
