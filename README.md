# Kalypso SDK

#### Installation

```
npm link kalypso-sdk
```

#### Environment variable (.env) file setup

```
PRIVATE_KEY= [YOUR PRIVATE KEY]
RPC= [RPC LINK]
```

#### Usage

```
const kalypso_sdk = require("kalypso-sdk");
const dotenv = require("dotenv");
const ethers = require("ethers");

dotenv.config();

const main = async() => {

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
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    const createAskRequest = await kalypso_sdk.createAsk({
        marketId: "0xb839d5bc3d6a60bb59136cf24a77c2c39952ea51a65898a886b33bbe38d7d8a8",
        reward: 1,
        expiry: 100,
        timeTakenForProofGeneration: 1000,
        deadline: 10000,
        proverData: [
            "2105637085183975026416182559542404460031676306245877722261461946106804655086",
            "19439594886189624974326337197957132519325364002450674986233170049890491717384",
            "17143927394555365747948417026442777490360052502351480904471050303917255241440",
            "191561942608236107294793378393788647952342390272950272000",
            "17271989332094319463568711574612918371595219444387421875646753181212739186244",
        ],
        proofMarketPlaceAddress:"0x56d030Fe5D75211DB0Ca84fcC1ee19615FA19105",
        inputAndProofFormatContractAddress:"0xA0Fbd852C6226b3E97eA141c72713dCb851DaCdE",
        tokenAddress:"0x4935ea37F0ADd47B9567A36D0806a28459761b60",
        wallet:wallet

    });
    console.log(createAskRequest);
}

main();
```



