import { createAsk, approveRewardTokens,getPlatformFee, encryptDataWithRSAandAES, base64ToHex, getProof } from "../src/index";
import dotenv from "dotenv";
import { ethers } from "ethers";

import * as secret from "./secret.json";
import * as input from "./input.json";
import * as fs from "fs";

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

    const proofMarketPlaceAddress = "0x57d8B74EB5c758C3D6809038E714A1c76c938076";

    const reward = "1000000000000000";

    let inputbytes_length = inputBytes.length;
    let platformFee = await getPlatformFee({
      proofMarketPlaceAddress,
      wallet,
      inputbytes_length
    })

    //Approve token for rewards
    const firstTokenApproval = await approveRewardTokens({
      proofMarketPlaceAddress,
      tokenContractAddress: "0x4935ea37F0ADd47B9567A36D0806a28459761b60",
      reward,
      wallet: wallet,
    });
    console.log("firstTokenApproval txHash : ", firstTokenApproval);

    const secondTokenApproval = await approveRewardTokens({
      proofMarketPlaceAddress,
      tokenContractAddress: "0x27FDcb086Cdb0bCFa40638376CD3CbF5B8c69197",
      reward: platformFee!.toFixed(),
      wallet: wallet,
    });
    console.log("secondTokenApproval txHash : ", secondTokenApproval);

    const publicKey = fs.readFileSync("./test/matching_engine/public_key_2048.pem", "utf-8");
    const secretString = JSON.stringify(secret);

    const result = await encryptDataWithRSAandAES(secretString, publicKey);
    const aclHex = "0x" + base64ToHex(result.aclData);
    const encryptedSecret = "0x" + result.encryptedData;
    
    // Create ASK request
    const askRequest = await createAsk({
      marketId: "0x027f76939e5bed90c45d0d1809796f033f6481011d554502d4c63f7878c9ee83",
      reward,
      expiry: 100000,
      timeTakenForProofGeneration: 100000,
      deadline: 10000,
      proverData: inputBytes,
      proofMarketPlaceAddress,
      inputAndProofFormatContractAddress: "0xA0Fbd852C6226b3E97eA141c72713dCb851DaCdE",
      wallet: wallet,
      secrets: { secret: encryptedSecret, acl: aclHex },
    });
    
    let block_number = askRequest.block_number;
    console.log(`Block number : ${block_number}`);
    if(block_number){
        return await new Promise(resolve => {
        let intervalId = setInterval(async ()=>{
            console.log("\nTrying to fetch proof...")
            let data = await getProof({
                proofMarketPlaceAddress:proofMarketPlaceAddress,
                blockNumber:block_number,
                wallet:wallet
            });
            if(data?.proof_generated){
                console.log(data.message);
                resolve(data.proof);
                clearInterval(intervalId);
            }  else {
                console.log(data?.message);
            }
        },10000);
        });
    }

  } catch (err) {
    console.log(err);
  }
};

async function main() {
    let proof = await createAskAndGetProof()
    console.log(proof);
}

main();