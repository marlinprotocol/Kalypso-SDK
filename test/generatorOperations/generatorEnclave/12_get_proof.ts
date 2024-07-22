// import { ethers } from "ethers";
// import { KalspsoConfig } from "../../../src/types";
// import { KalypsoSdk } from "../../../src";
// import * as fs from "fs";

// const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
// const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

// const provider = new ethers.JsonRpcProvider(keys.rpc);
// const wallet = new ethers.Wallet(`${keys.private_key}`, provider);

async function main() {
    sendFetchRequest()

  return "Done";
}

main().then(console.log).catch(console.log);

async function sendFetchRequest() {
    const url = 'http://13.234.50.235:1500/generate_proof';
    const requestBody = {
      ask: 'example_ask',
      private_inputs: ['1', '2'],
      ask_id: ['ask123']
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('Response from server:', responseData);
      // Process response as needed
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  
