// [kalypso-program/script/src/main.rs:43:5] hex::encode(&RSA_2048_PUB_DER) = "30820122300d06092a864886f70d01010105000382010f003082010a0282010100c5529f21f0afe6df78e83aab07b66c11ed9203af47a8ab9fdda4a83b4ae767720b833d2e150fcb4a4aec2776d0aa9762a3955d402b0c2665d3c4aa5db002656b65c75712eef82289d92bd6a3fba04d846e3680d1f9c0598a6717f07ae65400feb9d62156ecb37e0ef0c781299e300e268d825205ffad8892e267e63083348de4670907a8e23d4a03bc3a34496abb923fdf6181126cb073cf7a41620be431c7e1dc65e3d80a62fd76d04f8d011435529c7d683fc9f7c766c4527d3082b7dd2e5254876e1c8b296f41618c92cbb359b54df35010caa84286c35d7bf32c2fefd11c655fa48390c35d54274454a0ff749f8951fb23ee79a01e51a052716df0bc44db0203010001"
// [kalypso-program/script/src/main.rs:44:5] hex::encode(&message) = "48656c6c6f20776f726c6421"
// [kalypso-program/script/src/main.rs:45:5] hex::encode(&signature) = "2079f76d6bf9d2b2ea9588f22287fa7f96e12b89f1278b4eb331a96fc860b7e3460f2ee37267a9aa396bd666de0d13d8f1861a7c60ca1db94504cc4edf3d7c29b3ff543a2f89f266a1252d1427814337d2a46952d6dfc2c98f7263ed9d2a4932afa0915f8af29d5a64aace2750314137cad61113b7f4b8116cab36b2f289d743b9c67aea84f0492a7b2ec913c5f8097a105643faedf52bc7413e99a02c6c157dc59ae773e126eee58fcb9f41931209e00e2b3a10079402bb615f46ae4495074fdf7ccf39d6f27e020703c6ca1a88ed6acd0be378a26816a7c07cef27c99d2d5593f701f0d9dcda4fee8764162c585f0940e0653936abda06a08961725a202fb8"

import { BytesLike } from "ethers";
import { ethers } from "ethers";
import { KalypsoSdk } from "../../src";
import { KalspsoConfig } from "../../src/types";
import * as fs from "fs";
import BigNumber from "bignumber.js";

let pub_key =
  "0x30820122300d06092a864886f70d01010105000382010f003082010a0282010100c5529f21f0afe6df78e83aab07b66c11ed9203af47a8ab9fdda4a83b4ae767720b833d2e150fcb4a4aec2776d0aa9762a3955d402b0c2665d3c4aa5db002656b65c75712eef82289d92bd6a3fba04d846e3680d1f9c0598a6717f07ae65400feb9d62156ecb37e0ef0c781299e300e268d825205ffad8892e267e63083348de4670907a8e23d4a03bc3a34496abb923fdf6181126cb073cf7a41620be431c7e1dc65e3d80a62fd76d04f8d011435529c7d683fc9f7c766c4527d3082b7dd2e5254876e1c8b296f41618c92cbb359b54df35010caa84286c35d7bf32c2fefd11c655fa48390c35d54274454a0ff749f8951fb23ee79a01e51a052716df0bc44db0203010001";
let message = "0x48656c6c6f20776f726c6421";
let signature =
  "0x2079f76d6bf9d2b2ea9588f22287fa7f96e12b89f1278b4eb331a96fc860b7e3460f2ee37267a9aa396bd666de0d13d8f1861a7c60ca1db94504cc4edf3d7c29b3ff543a2f89f266a1252d1427814337d2a46952d6dfc2c98f7263ed9d2a4932afa0915f8af29d5a64aace2750314137cad61113b7f4b8116cab36b2f289d743b9c67aea84f0492a7b2ec913c5f8097a105643faedf52bc7413e99a02c6c157dc59ae773e126eee58fcb9f41931209e00e2b3a10079402bb615f46ae4495074fdf7ccf39d6f27e020703c6ca1a88ed6acd0be378a26816a7c07cef27c99d2d5593f701f0d9dcda4fee8764162c585f0940e0653936abda06a08961725a202fb8";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));
const provider = new ethers.JsonRpcProvider(keys.rpc);

const wallet = new ethers.Wallet(keys.treasury_private_key, provider);
const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

const reward = new BigNumber(10).pow(18).multipliedBy(145).div(10).toFixed(0);

async function main() {
  let encoded = createInputs([pub_key, message, signature]);
  console.log(encoded);
  const latestBlock = await provider.getBlockNumber();

  const proofGenerationTimeInBlocks = new BigNumber(100000000000);
  const assignmentDeadline = new BigNumber(latestBlock).plus(100000000000);

  const askRequest = await kalypso.MarketPlace().createAsk(
    "20",
    encoded,
    reward,
    assignmentDeadline.toFixed(0),
    proofGenerationTimeInBlocks.toFixed(0),
    await wallet.getAddress(),
    0, // TODO: keep this 0 for now
    Buffer.from(""),
    false,
  );
  const tx = await askRequest.wait();
  console.log("Ask Request Hash: ", askRequest.hash, " at block", tx?.blockNumber);

  const askId = await kalypso.MarketPlace().getAskId(tx as any);

  console.log("askId", askId);
  latestBlock;
  await getProofWithRetry(askId, latestBlock, 20000);

  return "Done";
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getProofWithRetry(askId: string, startBlock: number, retryInterval = 1000) {
  while (true) {
    try {
      console.log("Trying to fetch proof", new Date());
      const proof = await kalypso.MarketPlace().getProofByAskId(askId, startBlock);
      if (proof && proof.proof_generated) {
        const buffer = Buffer.from(proof.proof.toString().split("x")[1], "hex");
        const linkToProof = buffer.toString("utf-8");
        console.log(linkToProof);
        return; // Exit the loop if proof is successfully fetched
      }
    } catch (error) {
      console.error("Error fetching proof:", error);
    }

    // Sleep before retrying
    await sleep(retryInterval);
  }
}

function createInputs(inputs: BytesLike[]): string {
  let abicoder = new ethers.AbiCoder();
  let data = abicoder.encode(Array(inputs.length).fill("bytes"), [...inputs]);
  let encoded = abicoder.encode(["uint256", "bytes"], [inputs.length, data]);

  return encoded;
}

main().then(console.log);
