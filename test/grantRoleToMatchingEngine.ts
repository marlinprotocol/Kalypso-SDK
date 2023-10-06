import { KalypsoSdk } from "../src";
import dotenv from "dotenv";
import axios from "axios";

import { ethers } from "ethers";

dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC);
  const wallet = new ethers.Wallet(`${process.env.MATCHING_ENGINE_PRIVATE_KEY}`, provider);
  console.log("using address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, {
    proofMarketPlace: "0xf747B2a788b453eE4d00BE24Cd7D7A8532dCD3Cc",
    generatorRegistry: "0x77716073aB8D14bb7470021daeb33567Dc5c1BF7",
    rsaRegistryAddress: "0x7ce14a0dc913e35e99C1F9D95685b30E73952240",
    paymentTokenAddress: "0xCe23FfE37A1669CfD0081109aFC680c8503888f8",
    platformTokenAddress: "0x560FCeb707B0F4b56d43d295e45eD7FE939b96b6",
  });

  let config = {
    method: 'get',
    url: 'http://localhost:6000/api/getMatchingEngineAddress',
    headers: { 
        'api-key': 'ce1523aa-ad50-418a-836d-c12eb193365b'
    }
  };

  let resp = await axios(config);
  let me_address = resp.data.data;
  console.log("ME address : ",me_address);
  const tx = await kalypso.Admin().grantRoleToMatchingEngine(me_address, "0x");
  const receipt = await tx.wait();
  console.log("Grant role to ME address tx_hash ", receipt?.hash);
  return "Done";
}

main().then(console.log).catch(console.log);