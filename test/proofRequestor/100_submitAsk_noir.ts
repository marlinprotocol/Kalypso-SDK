import { KalypsoSdk } from "../../src";
import dotenv from "dotenv";

import { ethers } from "ethers";

// import * as secret from "../secret.json";
// import * as input from "../input.json";
import BigNumber from "bignumber.js";

import * as fs from "fs";
import { KalspsoConfig } from "../../src/types";
import { marketId } from "../../requestData.json";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

dotenv.config();

const reward = new BigNumber(10).pow(18).multipliedBy(145).div(10).toFixed(0);
const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(keys.private_key, provider);
const kalypso = new KalypsoSdk(wallet, kalypsoConfig);
let abiCoder = new ethers.AbiCoder();

const createAskTest = async () => {
  
  console.log("using address", await wallet.getAddress());

  const noir = {
    p_in_1: "0",
  };

  const secret = {
    x: "1",
    z: "2",
  };
  
  // Convert the object to a JSON string
  // const jsonString = JSON.stringify(secret);
  
  let inputBytes = abiCoder.encode(["string[1]"], [[noir.p_in_1]]);
  console.log({ inputBytes });

  const secretString = JSON.stringify(secret);

  const latestBlock = await provider.getBlockNumber();

  const assignmentDeadline = new BigNumber(latestBlock).plus(100000000000);
  console.log({ latestBlock, assignmentDeadline: assignmentDeadline.toFixed(0) });
  const proofGenerationTimeInBlocks = new BigNumber(100000000000);
  console.log({ secretString });
  // Create ASK request
  const askRequest = await kalypso.MarketPlace().createAsk(
    marketId,
    inputBytes,
    reward,
    assignmentDeadline.toFixed(0),
    proofGenerationTimeInBlocks.toFixed(0),
    await wallet.getAddress(),
    0, // TODO: keep this 0 for now
    Buffer.from(secretString),
    false,
  );
  const tx = await askRequest.wait();
  console.log("Ask Request Hash: ", askRequest.hash, " at block", tx?.blockNumber);
  const askId = await kalypso.MarketPlace().getAskId(tx as any);
  console.log("askId", askId);

  await getProofWithRetry(askId, latestBlock, 20000);

  return "Done";
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getProofWithRetry(askId: string, startBlock: number, retryInterval = 1000) {
  while (true) {
    try {
      console.log("Trying to fetch proof", new Date());
      const proof = await kalypso.MarketPlace().getProofByAskId(askId, startBlock);
      if (proof && proof.proof_generated) {
        // const buffer = Buffer.from(proof.proof.toString().split("x")[1], "hex");
        // const linkToProof = buffer.toString("utf-8");
        const types = ['bytes', 'bytes', 'bytes'];
        const decoded = abiCoder.decode(types, proof.proof);
        
        writeStringToFile("helloworld.proof",decoded[1]);
        console.log(decoded[1]);
        return; // Exit the loop if proof is successfully fetched
      }
      else if (proof){
        console.log(proof.message);
      }
    } catch (error) {
      console.error("Error fetching proof:", error);
    }

    // Sleep before retrying
    await sleep(retryInterval);
  }
}

// Write the string to the file
export function writeStringToFile(filePath: string, data: string): void {
  const cleanedData = data.startsWith('0x') ? data.slice(2) : data;
  fs.writeFile(filePath, cleanedData, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File written successfully');
    }
  });
}
createAskTest();
