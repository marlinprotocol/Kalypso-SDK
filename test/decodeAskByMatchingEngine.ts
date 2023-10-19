import { BytesLike, ethers } from "ethers";
import dotenv from "dotenv";
import { ProofMarketPlace__factory } from "../src/typechain-types";

dotenv.config();


const decodeAsk = async (transactionhash: string) => {
  console.log("decoding ask request in transaction ", transactionhash);
  const provider = new ethers.JsonRpcProvider(process.env.RPC);

  const transaction = await provider.getTransaction(transactionhash);

  const pm_interface = ProofMarketPlace__factory.createInterface();
  const decodedData = pm_interface.decodeFunctionData("createAsk", transaction?.data as BytesLike);

  const secretData = decodedData[decodedData.length - 2];
  const aclData = decodedData[decodedData.length - 1];

  console.log({ secretData: secretData.length, aclData: aclData.length });
  return "Done";
};

decodeAsk("0xe9545de48beb40b983cfb34c1c1f524bc250e87dd7ebfe680bf272b01b3da271").then(console.log).catch(console.log);
// { secretData: 8770, aclData: 260 }