import { ethers } from "ethers";
import { getProof } from "../src/index";
import dotenv from "dotenv";

dotenv.config();

const getProofTest = async() => {
    try {
      if (process.env.PRIVATE_KEY == null || process.env.PRIVATE_KEY == undefined) {
        throw new Error("PRIVATE_KEY not found in the .env file. Please make sure to setup environment variables in your project.");
      }
  
      if (process.env.RPC == null || process.env.RPC == undefined) {
        throw new Error("RPC not found in the .env file. Please make sure to setup environment variables in your project.");
      }
  
      const provider = new ethers.JsonRpcProvider(process.env.RPC);
      const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
      let block_number = 4221866;
      const proofMarketPlaceAddress = "0x57d8B74EB5c758C3D6809038E714A1c76c938076";
      let data = await getProof({
        proofMarketPlaceAddress:proofMarketPlaceAddress,
        blockNumber:block_number,
        wallet:wallet
      });
      console.log(data)
    } catch (error) {
      console.log(error);
    }
}
  
getProofTest();