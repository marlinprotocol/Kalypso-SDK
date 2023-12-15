import { KalypsoSdk } from "../src";
import dotenv from "dotenv";
import { PublicKey, PrivateKey } from "eciesjs";
import { ethers, AbiCoder } from "ethers";
import axios from "axios";

import * as fs from "fs";
import { KalspsoConfig } from "../src/types";

const keys = JSON.parse(fs.readFileSync("./keys/nova.json", "utf-8"));
const kalypsoConfig: KalspsoConfig = JSON.parse(fs.readFileSync("./contracts/nova.json", "utf-8"));

dotenv.config();

async function main() {
  try {
    const provider = new ethers.JsonRpcProvider(keys.rpc);
    const generator_private_key = keys.generator_private_key;
    const generator_endpoint = keys.generator_endpoint;
    const generator_client_api_key = keys.generator_client_api_key;
    const attestation_verifier_endpoint = keys.attestation_verifier_endpoint;
    const wallet = new ethers.Wallet(generator_private_key, provider);
    console.log("using address", await wallet.getAddress());

    //Fetching the attestation document
    let attestation_build_config = {
      method: "post",
      url: `${generator_endpoint}:1500/build/attestation`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({}),
    };

    let attestation_server_response = await axios(attestation_build_config);
    let attestation_build_data = attestation_server_response.data;

    //Verifying the attestation document with whitelisted enclave
    let verify_attestation_config = {
      method: "post",
      url: `${attestation_verifier_endpoint}:1400/verify/attestation`,
      headers: {
        "Content-Type": "application/json",
      },
      data: attestation_build_data,
    };

    let attestation_verifier_response = await axios(verify_attestation_config);
    let attestation_verifier_response_data = attestation_verifier_response.data;

    let verifier_address = "0x"+ethers.keccak256("0x"+attestation_verifier_response_data.secp_key).slice(-40);
    let generator_address = "0x"+ethers.keccak256("0x"+attestation_build_data.secp_key).slice(-40);

    let abiCoder = new AbiCoder();
    let encodedData = abiCoder.encode(
      ["bytes", "address", "address", "bytes", "bytes", "bytes", "uint256", "uint256"],
      [
        "0x"+attestation_verifier_response_data.sig,
        verifier_address,
        generator_address,
        "0x"+attestation_build_data.pcrs[0],
        "0x"+attestation_build_data.pcrs[1],
        "0x"+attestation_build_data.pcrs[2],
        attestation_build_data.min_cpus,
        attestation_build_data.min_mem,
      ],
    );

    console.log("Attestation data : ", encodedData);

    let data = JSON.stringify({
      generator_address: "0xb05e1dA573707223574443AC6DD1054A9e3A451F",
    });

    let public_key_config = {
      method: "get",
      url: `${generator_endpoint}:5000/api/getGeneratorPublicKeys`,
      headers: {
        "api-key": generator_client_api_key,
        "Content-Type": "application/json",
      },
      data: data,
    };

    let generator_public_keys_response = await axios(public_key_config);
    let ecies_public_key = generator_public_keys_response.data.data.generator_ecies_public_key;

    const kalypso = new KalypsoSdk(wallet, kalypsoConfig);

    let secret_key: PrivateKey = PrivateKey.fromHex(generator_private_key);
    let pub_key = secret_key.publicKey.compressed;

    console.log({ gen_pub_key: pub_key });

    //TODO - Add fetched attestation document to the updateEcisKey
    
    // const tx = await kalypso.Generator().updateEcisKey(pub_key, encodedData);
    // const receipt = await tx.wait();
    // console.log("Added Generator ECIES key: ", receipt?.hash);
    return "Done";
  } catch (err) {
    console.log(err);
    throw new Error("There was an error updating the generator public key");
  }
}

main().then(console.log).catch(console.log);
