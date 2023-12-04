import { KalypsoSdk } from "../src";
import dotenv from "dotenv";
import { PublicKey, PrivateKey } from "eciesjs";
import { ethers } from "ethers";
import axios from 'axios';

import * as fs from "fs";
import { KalspsoConfig } from "../src/types";

const keys = JSON.parse(fs.readFileSync("./keys/nova.json", "utf-8"));
const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/nova.json", "utf-8"));

dotenv.config();

async function main() {
  try{
    const provider = new ethers.JsonRpcProvider(keys.rpc);
    const generator_private_key = `${keys.generator_private_key}`;
    const wallet = new ethers.Wallet(generator_private_key, provider);
    console.log("using address", await wallet.getAddress());
  
    let config = {
      method: 'get',
      url: 'http://65.1.228.145:3000'
    };
    
    let attestation_server_response = await axios(config);
    let attestation_document = attestation_server_response.data;
  
    const kalypso = new KalypsoSdk(wallet, kalypsoConfig);
  
    let secret_key: PrivateKey = PrivateKey.fromHex(generator_private_key);
    let pub_key = secret_key.publicKey.compressed;
  
    console.log({ gen_pub_key: pub_key });
  
    //TODO - Add fetched attestation document to the updateEcisKey
    const tx = await kalypso.Generator().updateEcisKey(pub_key, "0x");
    const receipt = await tx.wait();
    console.log("Added Generator ECIES key: ", receipt?.hash);
    return "Done";
  }
  catch(err){
    console.log(err);
    throw new Error("There was an error updating the generator public key");
  }
}

main().then(console.log).catch(console.log);
