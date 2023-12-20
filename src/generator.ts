import { AbstractSigner, BigNumberish, BytesLike, ContractTransactionResponse, Overrides } from "ethers";
import {
  ERC20,
  ERC20__factory,
  GeneratorRegistry,
  GeneratorRegistry__factory,
  ProofMarketPlace,
  ProofMarketPlace__factory,
  EntityKeyRegistry,
  EntityKeyRegistry__factory,
} from "./typechain-types";
import BigNumber from "bignumber.js";
import fetch from "node-fetch";
import { ethers } from "ethers";
import { KalspsoConfig, PublicKeyResponse, AttestationResponse } from "./types";

export class Generator {
  private signer: AbstractSigner;
  private generatorRegistry: GeneratorRegistry;
  private stakingToken: ERC20;
  private proofMarketplace: ProofMarketPlace;

  constructor(signer: AbstractSigner, config: KalspsoConfig) {
    this.signer = signer;
    this.generatorRegistry = GeneratorRegistry__factory.connect(config.generator_registry, this.signer);
    this.stakingToken = ERC20__factory.connect(config.staking_token, this.signer);
    this.proofMarketplace = ProofMarketPlace__factory.connect(config.proof_market_place, this.signer);
  }

  public async register(
    rewardAddress: string,
    declaredCompute: BigNumberish,
    generatorData: BytesLike,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    const result = await this.generatorRegistry.generatorRegistry(await this.signer.getAddress());
    if (result.rewardAddress != "0x0000000000000000000000000000000000000000") {
      throw new Error("Generator is already registered");
    }
    return this.generatorRegistry.register(rewardAddress, declaredCompute, generatorData, { ...options });
  }

  public async deregister(refundAddress: string, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.generatorRegistry.deregister(refundAddress, { ...options });
  }

  public async getStake(): Promise<BigNumberish> {
    return (await this.generatorRegistry.generatorRegistry(await this.signer.getAddress())).totalStake;
  }

  public async stake(generatorAddress: string, amount: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    const currentBalance = await this.stakingToken.balanceOf(await this.signer.getAddress());

    if (new BigNumber(amount.toString()).gt(currentBalance.toString())) {
      throw new Error("Insufficient balance in current account to stake");
    }

    const currentAllowance = await this.stakingToken.allowance(await this.signer.getAddress(), await this.generatorRegistry.getAddress());

    if (new BigNumber(currentAllowance.toString()).lt(amount.toString())) {
      const approvalTx = await this.approveGeneratorRegistry(amount);
      const approvalReceipt = await approvalTx.wait();
      console.log("Approval Tx: ", approvalReceipt?.hash);
    }

    return this.generatorRegistry.stake(generatorAddress, amount.toString(), { ...options });
  }

  public async approveGeneratorRegistry(amount: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return await this.stakingToken.approve(await this.generatorRegistry.getAddress(), amount.toString(), { ...options });
  }

  public async joinMarketPlace(
    marketId: BigNumberish,
    computeAllocation: BigNumberish,
    proofGeneratorCost: BigNumberish,
    proposedTime: BigNumberish,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    const data = await this.generatorRegistry.generatorInfoPerMarket(await this.signer.getAddress(), marketId);
    if (!new BigNumber(data.proposedTime.toString()).eq(0)) {
      throw new Error("Already part of this market");
    }

    return await this.generatorRegistry.joinMarketPlace(
      marketId,
      computeAllocation.toString(),
      proofGeneratorCost.toString(),
      proposedTime.toString(),
      { ...options }
    );
  }

  public async leaveMarketPlace(marketId: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return await this.generatorRegistry.leaveMarketPlace(marketId, { ...options });
  }

  public async requestForExitMarket(marketId: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return await this.generatorRegistry.requestForExitMarketPlace(marketId, { ...options });
  }

  public async updateEcisKey(
    pubKeyBytes: BytesLike,
    attestationBytes: BytesLike,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    return this.generatorRegistry.updateEncryptionKey(pubKeyBytes, attestationBytes, { ...options });
  }

  public async slashExistingRequest(taskId: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.proofMarketplace.discardRequest(taskId, { ...options });
  }

  public async discardRequest(askId: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.proofMarketplace.discardRequest(askId, { ...options });
  }

  public async getGeneratorPublicKeys(
    generator_endpoint: string,
    generator_client_api_key: string,
    generator_address: string
  ): Promise<PublicKeyResponse> {
    let data = JSON.stringify({
      generator_address: generator_address,
    });

    let public_key_config = {
      method: "POST",
      headers: {
        "api-key": generator_client_api_key,
        "Content-Type": "application/json",
      },
      body: data,
    };

    let generator_public_keys_response = await fetch(`${generator_endpoint}/api/fetchGeneratorPublicKeys`, public_key_config);
    let generator_public_keys = await generator_public_keys_response.json();
    if (generator_public_keys_response.status != 200) {
      throw new Error(
        generator_public_keys.message ? generator_public_keys.message : "There was an error in fetching generator public keys"
      );
    }
    return {
      generator_ecies_public_key: generator_public_keys.data.generator_ecies_public_key,
      generator_public_key: generator_public_keys.data.generator_public_key,
    };
  }

  public async getAttestation(
    generator_attestation_utility_endpoint: string,
    attestation_verifier_endpoint: string
  ): Promise<AttestationResponse> {
    //Fetching the attestation document
    let attestation_build_config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };

    let attestation_server_response = await fetch(`${generator_attestation_utility_endpoint}/build/attestation`, attestation_build_config);
    let attestation_build_data = await attestation_server_response.json();

    //Verifying the attestation document with whitelisted enclave
    let verify_attestation_config = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attestation_build_data),
    };

    let attestation_verifier_response = await fetch(`${attestation_verifier_endpoint}/verify/attestation`, verify_attestation_config);
    let attestation_verifier_response_data = await attestation_verifier_response.json();

    let verifier_address = "0x" + ethers.keccak256("0x" + attestation_verifier_response_data.secp_key).slice(-40);
    let generator_address = "0x" + ethers.keccak256("0x" + attestation_build_data.secp_key).slice(-40);

    let abiCoder = new ethers.AbiCoder();
    let encodedData = abiCoder.encode(
      ["bytes", "address", "address", "bytes", "bytes", "bytes", "uint256", "uint256"],
      [
        "0x" + attestation_verifier_response_data.sig,
        verifier_address,
        generator_address,
        "0x" + attestation_build_data.pcrs[0],
        "0x" + attestation_build_data.pcrs[1],
        "0x" + attestation_build_data.pcrs[2],
        attestation_build_data.min_cpus,
        attestation_build_data.min_mem,
      ]
    );

    return {
      attestation_document: encodedData,
      secp_key: attestation_build_data.secp_key,
    };
  }
}
