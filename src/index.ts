import { ethers } from 'ethers';
import { IProofMarketPlace } from './ProofMarketPlace';
import { contractAbi } from './contractAbi';
import dotenv from 'dotenv';
import { BigNumber } from "bignumber.js";

dotenv.config();


const createAsk = async() => {
    try{
        if(process.env.PRIVATE_KEY == null || process.env.PRIVATE_KEY == undefined){
            return "PRIVATE_KEY not found in the .env file. Please make sure to setup environment variables in your project."
        }
        if(process.env.ACCOUNT_ADDRESS == null || process.env.ACCOUNT_ADDRESS == undefined){
            return "ACCOUNT_ADDRESS not found in the .env file. Please make sure to setup environment variables in your project."
        }
        const contractAddress = "0x56d030Fe5D75211DB0Ca84fcC1ee19615FA19105";
        const provider = new ethers.JsonRpcProvider("https://rpc.sepolia.org");

        const proofMarketplaceContract = new ethers.Contract(contractAddress,contractAbi,provider);
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!,provider);

        let prover_data = [
            "2105637085183975026416182559542404460031676306245877722261461946106804655086",
            "19439594886189624974326337197957132519325364002450674986233170049890491717384",
            "17143927394555365747948417026442777490360052502351480904471050303917255241440",
            "191561942608236107294793378393788647952342390272950272000",
            "17271989332094319463568711574612918371595219444387421875646753181212739186244"
        ];

        let abiCoder = new ethers.AbiCoder();
    
        let inputBytes = abiCoder.encode(
            ["uint256[5]"],
            [
              [
                prover_data[0],
                prover_data[1],
                prover_data[2],
                prover_data[3],
                prover_data[4],
              ],
            ],
        );

        const latestBlock = await provider.getBlockNumber();

        let assignmentExpiry = 100; // in blocks
        let timeTakenForProofGeneration = 1000; // in blocks
        let maxTimeForProofGeneration = 10000; // in blocks
        let marketId = "0xb839d5bc3d6a60bb59136cf24a77c2c39952ea51a65898a886b33bbe38d7d8a8";
        let expiry = assignmentExpiry + latestBlock;
        let deadline = latestBlock + maxTimeForProofGeneration;
        let proverRefundAddress = await wallet.getAddress();
        let reward = new BigNumber(10).pow(18).multipliedBy(50);

        const createAskFunctionCall = await proofMarketplaceContract.createAsk(marketId,reward.toFixed(),expiry,timeTakenForProofGeneration,deadline,proverRefundAddress,inputBytes);
        console.log(createAskFunctionCall);

        // const generatorRegistry = await proofMarketplaceContract.generatorRegistry();
        // console.log(generatorRegistry);
    }
    catch(err){
        console.log(err);
    }
}


const main = async()=>{
    createAsk();
}

main();


