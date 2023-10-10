import { KalypsoSdk } from "../src/index";
import dotenv from "dotenv";
import { ethers } from "ethers";

import * as secret from "./secret.json";
import * as input from "./input.json";
import BigNumber from "bignumber.js";

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

    const kalypso = new KalypsoSdk(wallet, {
      proofMarketPlace: "0xf747B2a788b453eE4d00BE24Cd7D7A8532dCD3Cc",
      generatorRegistry: "0x77716073aB8D14bb7470021daeb33567Dc5c1BF7",
      rsaRegistryAddress: "0x7ce14a0dc913e35e99C1F9D95685b30E73952240",
      paymentTokenAddress: "0xCe23FfE37A1669CfD0081109aFC680c8503888f8",
      platformTokenAddress: "0x560FCeb707B0F4b56d43d295e45eD7FE939b96b6",
    });

    const secretString = JSON.stringify(secret);

    const latestBlock = await provider.getBlockNumber();

    const marketId = "0x6c2ec35f8128c43e710a84adb6c7de8978238ab2d2e2b9790847dbab464b54f6";
    const assignmentDeadline = new BigNumber(latestBlock).plus(100000000);
    const proofGenerationTimeInBlocks = new BigNumber(100000000);

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
        secretString
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
