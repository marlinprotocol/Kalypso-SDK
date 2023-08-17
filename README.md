# Kalypso SDK

## Installation

Inside the Kalypso-SDK folder :

```
tsc
npm link
```

Inside your project :

```
npm link kalypso-sdk
```

## Environment variable (.env) file setup

```
PRIVATE_KEY= [YOUR PRIVATE KEY]
RPC= [RPC LINK]
```

## Test locally

```
npm test
```

## Usage

`Note : Tested with ethers : 6.6.6`

Node.js :

```
const kalypso_sdk = require("kalypso-sdk");
const dotenv = require("dotenv");
const ethers = require("ethers");

dotenv.config();

//Noir circuit example
const main = async() => {
    try{
        if (
            process.env.PRIVATE_KEY == null ||
            process.env.PRIVATE_KEY == undefined
        ) {
            throw new Error("PRIVATE_KEY not found in the .env file. Please make sure to setup environment variables in your project.");
        }

        if (
            process.env.RPC == null ||
            process.env.RPC == undefined
        ) {
            throw new Error("RPC not found in the .env file. Please make sure to setup environment variables in your project.");
        }

        const provider = new ethers.JsonRpcProvider(process.env.RPC);
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY,provider);

        //Approve token for rewards
        const approveRewardsToken = await kalypso_sdk.approveRewardTokens({
            proofMarketPlaceAddress:"0x56d030Fe5D75211DB0Ca84fcC1ee19615FA19105",
            tokenContractAddress: "0x4935ea37F0ADd47B9567A36D0806a28459761b60",
            reward:1,
            wallet: wallet
        });
        console.log("Approval txHash : ",approveRewardsToken);

        //Create ASK request
        const createAskRequest = await kalypso_sdk.createAsk({
          marketId: "0xfbc2bb92a741de6f00a5a06821a4ddae09f4fe84f3c3c0c82e42930d5abf2db6",
          reward: 1,
          expiry: 100,
          timeTakenForProofGeneration: 1000,
          deadline: 10000,
          proverData:["0x0000000000000000000000000000000000000000000000000000000000000001"],
          proofMarketPlaceAddress:"0x56d030Fe5D75211DB0Ca84fcC1ee19615FA19105",
          inputAndProofFormatContractAddress:"0xA0Fbd852C6226b3E97eA141c72713dCb851DaCdE",
          wallet:wallet
        });
        console.log("Ask txHash : ",createAskRequest);
    }catch(err){
        console.log(err);
    }
  }

  main();
```
