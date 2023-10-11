# Kalypso SDK

## Installation

`npm i kalypso-sdk`

## Environment variable (.env) file setup

```
PRIVATE_KEY= [YOUR PRIVATE KEY]
RPC= [RPC LINK]
```

## Usage

`Note : Tested with ethers : 6.6.6`

#### Create a new ASK :

```

const askRequest = await createAsk({
    marketId: "0x027f76939e5bed90c45d0d1809796f033f6481011d554502d4c63f7878c9ee83",
    reward,
    expiry: 100000,
    timeTakenForProofGeneration: 100000,
    deadline: 10000,
    proverData: inputBytes,
    proofMarketPlaceAddress,
    inputAndProofFormatContractAddress: "0xA0Fbd852C6226b3E97eA141c72713dCb851DaCdE",
    wallet: wallet,
    secrets: { secret: encryptedSecret, acl: aclHex },
});
```

#### Get proof for a ASK :

```
let proof_data = await getProof({
    proofMarketPlaceAddress:proofMarketPlaceAddress,
    blockNumber:block_number,
    wallet:wallet
});
```
