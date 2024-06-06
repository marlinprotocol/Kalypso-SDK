import { ContractTransactionReceipt, ContractTransactionResponse, ethers } from "ethers";
import { KalspsoConfig } from "../../src/types";
import { KalypsoSdk } from "../../src";
import * as fs from "fs";
import BigNumber from "bignumber.js";
import { marketId } from "../../requestData.json";

const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/arb-sepolia.json", "utf-8"));
const keys = JSON.parse(fs.readFileSync("./keys/arb-sepolia.json", "utf-8"));

const provider = new ethers.JsonRpcProvider(keys.rpc);
const wallet = new ethers.Wallet(`${keys.generator_private_key}`, provider);

const computeAllocatedPerRequest = 1;
const proofGenerationCost = new BigNumber(10).pow(18).toFixed(0);
const proposedTimeInBlocks = 10000;

async function main() {
  console.log("using address", await wallet.getAddress());

  const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

  let tx: ContractTransactionResponse;
  let receipt: ContractTransactionReceipt | null;

  let attestation = await kalypso.Generator().GeneratorEnclaveConnector().getAttestation();

  const enclaveSignature = await kalypso
    .Generator()
    .GeneratorEnclaveConnector()
    .getAttestationSignature(attestation.attestation_document.toString(), await wallet.getAddress());

  // const tx_2 = await kalypso.Generator().updateEcisKey(marketId, attestation.attestation_document, enclaveSignature);

  // const receipt_2 = await tx_2.wait();
  // console.log("Added Generator ECIES key: ", receipt_2?.hash);

  tx = await kalypso
    .Generator()
    .joinMarketPlace(
      marketId,
      computeAllocatedPerRequest,
      proofGenerationCost,
      proposedTimeInBlocks,
      attestation.attestation_document,
      enclaveSignature
    );
  receipt = await tx.wait();
  console.log("Joined Market Place Transaction: ", receipt?.hash);

  return "Done Joining Market Place";
}

main().then(console.log).catch(console.log);
