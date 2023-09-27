import { BytesLike, ethers } from "ethers";
import dotenv from "dotenv";
import { ProofMarketPlace__factory } from "../src/generated/typechain-types";
import { KalypsoSdk } from "../src";

import * as fs from "fs";

dotenv.config();

const decryptDataWithRSAandAES = KalypsoSdk.SecretInputOperations().decryptDataWithRSAandAES;
const hexToBase64 = KalypsoSdk.SecretInputOperations().hexToBase64;

const decodeAsk = async (transactionhash: string) => {
  console.log("decoding ask request in transaction ", transactionhash);
  const provider = new ethers.JsonRpcProvider(process.env.RPC);

  const transaction = await provider.getTransaction(transactionhash);

  const pm_interface = ProofMarketPlace__factory.createInterface();
  const decodedData = pm_interface.decodeFunctionData("createAsk", transaction?.data as BytesLike);

  const secretData = decodedData[decodedData.length - 2];
  const aclData = decodedData[decodedData.length - 1];

  const privatekey = fs.readFileSync("./test/matching_engine/private_key_2048.pem", "utf-8");
  const decryptedData = await decryptDataWithRSAandAES(secretData.split("x")[1], hexToBase64(aclData.split("x")[1]), privatekey);

  console.log(JSON.parse(decryptedData));
  return "Done";
};

decodeAsk("0xc6e006edbfa8e7612f9b35da1ae80be008dedc7fa9938fecb026fafad71ddcf1").then(console.log).catch(console.log);
