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

`Note : Tested with ethers : 6.6.6`

Node.js :

```
const kalypso_sdk = require("kalypso-sdk");
const dotenv = require("dotenv");
const ethers = require("ethers");

dotenv.config();

//Noir circuit example
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
      marketId: "0xfbc2bb92a741de6f00a5a06821a4ddae09f4fe84f3c3c0c82e42930d5abf2db6",
      reward: 1,
      expiry: 100,
      timeTakenForProofGeneration: 1000,
      deadline: 10000,
      proverData:"0x0000000000000000000000000000000000000000000000000000000000000001",
      proofMarketPlaceAddress:"0x56d030Fe5D75211DB0Ca84fcC1ee19615FA19105",
      tokenAddress:"0x4935ea37F0ADd47B9567A36D0806a28459761b60",
      wallet:wallet
    });
    console.log(createAskRequest);
  }
  
  main();
```

React :

```
import React, { useState } from 'react';
const ethers = require("ethers")
const kalypso_sdk = require("kalypso-sdk");

function App() {
  const [signer,setSigner] = useState('');

async function createAskCall() {
  const createAskRequest = await kalypso_sdk.createAsk({
    marketId: "0xfbc2bb92a741de6f00a5a06821a4ddae09f4fe84f3c3c0c82e42930d5abf2db6",
    reward: 1,
    expiry: 100,
    timeTakenForProofGeneration: 1000,
    deadline: 10000,
    proverData:"0x0000000000000000000000000000000000000000000000000000000000000001",
    proofMarketPlaceAddress:"0x56d030Fe5D75211DB0Ca84fcC1ee19615FA19105",
    tokenAddress:"0x4935ea37F0ADd47B9567A36D0806a28459761b60",
    wallet:signer
  });
  console.log(createAskRequest);
}

async function connectWallet() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider =  new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        setSigner(signer);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      console.error('No Ethereum provider detected');
    }
}

  return (
    <div className="App">
      <h1>Kalypso SDK test</h1>
      {
        signer === "" ?<button onClick={connectWallet}>Connect Wallet</button> : <button onClick={createAskCall}>Create Ask</button> 
      }
    </div>
  );
}

export default App;

```



