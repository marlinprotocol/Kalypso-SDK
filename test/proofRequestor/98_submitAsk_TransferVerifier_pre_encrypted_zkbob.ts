import { KalypsoSdk } from "../../src";
import dotenv from "dotenv";

import { ethers } from "ethers";

import * as secret from "../secret.json";
import * as input from "../input.json";
import BigNumber from "bignumber.js";

import * as fs from "fs";
import { KalspsoConfig } from "../../src/types";
import { marketId } from "../../requestData.json";
import { MarketPlace } from "../../src/operators/marketPlace";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

dotenv.config();

const reward = new BigNumber(10).pow(18).multipliedBy(145).div(10).toFixed(0);

const createAskTest = async () => {
  const provider = new ethers.JsonRpcProvider(keys.rpc);
  const wallet = new ethers.Wallet(keys.treasury_private_key, provider);
  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  console.log("using address", await wallet.getAddress());

  // proof request terms
  let abiCoder = new ethers.AbiCoder();
  let inputBytes = abiCoder.encode(["uint256[5]"], [[input.root, input.nullifier, input.out_commit, input.delta, input.memo]]);
  const secretString = JSON.stringify(secret);
  const latestBlock = await provider.getBlockNumber();
  const assignmentDeadline = new BigNumber(latestBlock).plus(100000000000);
  console.log({ latestBlock, assignmentDeadline: assignmentDeadline.toFixed(0) });
  const proofGenerationTimeInBlocks = new BigNumber(100000000000);

  const matching_engine_pubkey_1 = await kalypso.Admin().readMatchingEngineKey(); // reads from contracts
  const matching_engine_pubkey_2 = await kalypso.MarketPlace().MatchingEngineEnclaveConnector().getMatchingEnginePublicKeys(); // via http API

  // this is expected to be run on a frontend, and pass the encryptedRequestData to server
  const encryptedRequestData = await MarketPlace.createEncryptedRequestData(
    inputBytes,
    Buffer.from(secretString), //secret_string is un-encrypted here
    marketId,
    matching_engine_pubkey_1 || matching_engine_pubkey_2.data.matching_engine_ecies_public_key,
  );
  console.log({ encryptedRequestData });

  // on server
  // first, we should check if the request is good or not using `/checkEncryptedRequest` on IVS before making the next call, but ignore for now

  // second, we need to place request on contract
  const askRequest = await kalypso.MarketPlace().createAskWithEncryptedSecretAndAcl(
    marketId,
    encryptedRequestData.publicInputs,
    reward,
    assignmentDeadline.toFixed(0),
    proofGenerationTimeInBlocks.toFixed(0),
    await wallet.getAddress(),
    0, // TODO: keep this 0 for now
    encryptedRequestData.encryptedSecret,
    encryptedRequestData.acl,
  );
  const tx = await askRequest.wait();
  console.log("Ask Request Hash: ", askRequest.hash, " at block", tx?.blockNumber);

  const askId = await kalypso.MarketPlace().getAskId(tx!);
  const proof = await kalypso.MarketPlace().getProofByAskId(askId, tx!.blockNumber);
  console.log({ proof });
};

createAskTest();
