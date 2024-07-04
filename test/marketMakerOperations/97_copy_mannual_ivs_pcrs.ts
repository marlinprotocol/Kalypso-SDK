import { ethers } from "ethers";
import { KalspsoConfig } from "../../src/types";
import { KalypsoSdk } from "../../src";

import * as fs from "fs";

import { marketId } from "../../requestData.json";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(keys.treasury_private_key, provider);

async function main(): Promise<string> {
  console.log("using address", await wallet.getAddress());
  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  const pcr0 = "0xA5D521D791D3BDF9D5AFDCA6A1527C5D7A0F99105DD3E1ADF70AE7A640E22BA74D2EB3AD3C2E597F0AC68F1606844270".toLowerCase();
  const pcr1 = "0xBCDF05FEFCCAA8E55BF2C8D6DEE9E79BBFF31E34BF28A99AA19E6B29C37EE80B214A414B7607236EDF26FCB78654E63F".toLowerCase();
  const pcr2 = "0x4C05E42160EFB0EF1BC0BEAAD50D8F61C9E700B3EA8A208AD848F6C273E2F5F393C26F75CE636034BB9871106E83D238".toLowerCase();

  let abicode = new ethers.AbiCoder();
  const manuallyComputedIvsPcrs = abicode.encode(["bytes", "bytes", "bytes"], [pcr0, pcr1, pcr2]);

  const tx = await kalypso.MarketPlace().addExtraImagesToMarket(marketId, [], [manuallyComputedIvsPcrs]);
  console.log("Add Extra Images to Market", tx.hash);

  return "Done";
}

main().then(console.log).catch(console.log);
