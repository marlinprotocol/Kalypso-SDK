import { KalypsoSdk } from "../src/index";
import dotenv from "dotenv";
import { ethers } from "ethers";

import * as secret from "./secret.json";
import * as input from "./input.json";
import BigNumber from "bignumber.js";

import * as fs from "fs";
import { KalspsoConfig } from "../src/types";
const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contract.json", "utf-8"));

dotenv.config();

const createAskAndGetProof = async () => {
  try {
    if (process.env.PRIVATE_KEY == null || process.env.PRIVATE_KEY == undefined) {
      throw new Error("PRIVATE_KEY not found in the .env file. Please make sure to setup environment variables in your project.");
    }

    if (process.env.RPC == null || process.env.RPC == undefined) {
      throw new Error("RPC not found in the .env file. Please make sure to setup environment variables in your project.");
    }

    const provider = new ethers.JsonRpcProvider(process.env.RPC);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    console.log("using address", await wallet.getAddress());

    let abiCoder = new ethers.AbiCoder();
    let inputBytes = abiCoder.encode(["uint256[5]"], [[input.root, input.nullifier, input.out_commit, input.delta, input.memo]]);

    const reward = "1000000000000000000";

    const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

    const secretString = JSON.stringify(secret);

    const latestBlock = await provider.getBlockNumber();

    const marketId = "0x07b7d625c70be57115ab18fc435ed0253425671cb91bd6547b7defbc75f52082";
    const assignmentDeadline = new BigNumber(latestBlock).plus(10000000000);
    console.log({ latestBlock, assignmentDeadline: assignmentDeadline.toFixed(0) });
    const proofGenerationTimeInBlocks = new BigNumber(10000000000);

    // Create ASK request
    const askRequest = await kalypso
      .MarketPlace()
      .createAsk(
        marketId,
        inputBytes,
        reward,
        assignmentDeadline.toFixed(0),
        proofGenerationTimeInBlocks.toFixed(0),
        await wallet.getAddress(),
        Buffer.from(secretString)
      );
      await askRequest.wait();
      console.log("Ask Request Hash: ", askRequest.hash);
      
      let receipt = await provider.getTransactionReceipt(askRequest.hash);
  
      let askId = await kalypso.MarketPlace().getAskId(receipt!);
      console.log("Ask ID :",askId);
  
      if(askId){
        return await new Promise(resolve => {
          console.log("\nTrying to fetch proof...\n")
          let intervalId = setInterval(async ()=>{
              let data = await kalypso.MarketPlace().getProofByAskId(askId.toString());
              if(data?.proof_generated){
                  console.log(data.message);
                  let abiCoder = new ethers.AbiCoder(); 
                  let proof = abiCoder.decode(
                    ["uint256[8]"],
                      data.proof,
                  );
        
                  let formated_proof = {
                    "a":[
                      proof[0][0].toString(),
                      proof[0][1].toString(),
                    ],
                    "b":[
                      [
                        proof[0][2].toString(),
                        proof[0][3].toString(),
                      ],
                      [
                        proof[0][4].toString(),
                        proof[0][5].toString(),
                      ]
                    ],
                    "c":[
                      proof[0][6].toString(),
                      proof[0][7].toString(),
                    ]
                  }
                  resolve(formated_proof);
                  clearInterval(intervalId);
              }  else {
                  console.log(`Proof not submitted yet for askId : ${askId}.`);
              }
          },10000);
        });
      }
  } catch (err) {
    console.log(err);
  }
};

async function main() {
  let proof = await createAskAndGetProof();
  console.log(proof);
}

main();