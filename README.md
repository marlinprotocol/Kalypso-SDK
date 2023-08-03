# Kalypso SDK

#### Installation

```
npm i kalypso-sdk
```

#### Environment variable (.env) file setup

```
PRIVATE_KEY= [YOUR PRIVATE KEY]
RPC= [RPC LINK]
```

#### Usage

createAsk
```
const kalypso_sdk = require("kalypso-sdk");
const dotenv = require("dotenv");

dotenv.config();

const main = async() => {
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
    });
    console.log(createAskRequest);
}

main();
```



