import { AbstractSigner, BigNumberish, BytesLike, ContractTransactionResponse, Log, Overrides, ethers } from "ethers";
import {
  ERC20,
  ERC20__factory,
  ProofMarketPlace,
  ProofMarketPlace__factory,
  RsaRegistry,
  RsaRegistry__factory,
} from "./generated/typechain-types";
import BigNumber from "bignumber.js";
import { SecretData } from "./types";
import { encryptDataWithRSAandAES, createPubKeyFrom, hexToUtf8, base64ToHex } from "./secretInputOperation";
import { gzip } from "node-gzip";

export class MarketPlace {
  private signer: AbstractSigner;
  private proofMarketPlace: ProofMarketPlace;
  private paymentToken: ERC20;
  private platformToken: ERC20;
  private rsaRegistry: RsaRegistry;

  private exponent = new BigNumber(10).pow(18);

  constructor(
    signer: AbstractSigner,
    proofMarketPlaceAddress: string,
    paymentTokenAddress: string,
    platformTokenAddress: string,
    rsaRegistryAddress: string
  ) {
    this.signer = signer;
    this.proofMarketPlace = ProofMarketPlace__factory.connect(proofMarketPlaceAddress, this.signer);
    this.paymentToken = ERC20__factory.connect(paymentTokenAddress, this.signer);
    this.platformToken = ERC20__factory.connect(platformTokenAddress, this.signer);
    this.rsaRegistry = RsaRegistry__factory.connect(rsaRegistryAddress, this.signer);
  }

  public async approvePaymentTokenToMarketPlace(amount: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.paymentToken.approve(await this.proofMarketPlace.getAddress(), amount.toString(), { ...options });
  }

  public async approvePlatformTokenToMarketPlace(amount: BigNumberish, options?: Overrides): Promise<ContractTransactionResponse> {
    return this.platformToken.approve(await this.proofMarketPlace.getAddress(), amount.toString(), { ...options });
  }

  public async getPlatformFee(proverData: BytesLike): Promise<BigNumberish> {
    const perByte = await this.proofMarketPlace.costPerInputBytes();
    const proverDataLength = proverData.toString().length;
    return new BigNumber(perByte.toString()).multipliedBy(proverDataLength).toString();
  }

  public async createAsk(
    marketId: BytesLike,
    proverData: BytesLike,
    reward: BigNumberish,
    assignmentDeadline: BigNumberish,
    blocksForProofGeneration: BigNumberish,
    refundAddress: string,
    secretString: string,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    const platformFee = await this.getPlatformFee(proverData);
    const platformTokenBalance = await this.platformToken.balanceOf(this.signer.getAddress());

    if (new BigNumber(platformTokenBalance.toString()).lt(platformFee.toString())) {
      throw new Error("Ensure sufficient platform token balance");
    }

    const paymentTokenBalance = await this.paymentToken.balanceOf(await this.signer.getAddress());
    if (new BigNumber(paymentTokenBalance.toString()).lt(reward.toString())) {
      throw new Error("Ensure sufficient payment token balance");
    }

    const platformTokenAllowance = await this.platformToken.allowance(
      await this.signer.getAddress(),
      await this.proofMarketPlace.getAddress()
    );
    if (new BigNumber(platformTokenAllowance.toString()).lt(platformFee.toString())) {
      const approvalTx = await this.platformToken.approve(await this.proofMarketPlace.getAddress(), platformFee.toString());
      const approvalReceipt = await approvalTx.wait();
      console.log("Approval Tx: ", approvalReceipt?.hash);
    }

    const paymentTokenAllowance = await this.paymentToken.allowance(
      await this.signer.getAddress(),
      await this.proofMarketPlace.getAddress()
    );
    if (new BigNumber(paymentTokenAllowance.toString()).lt(reward.toString())) {
      const approvalTx = await this.paymentToken.approve(await this.proofMarketPlace.getAddress(), reward.toString());
      const approvalReceipt = await approvalTx.wait();
      console.log("Approval Tx: ", approvalReceipt?.hash);
    }

    const matchingEnginePubKey = await this.rsaRegistry.rsa_pub_key(await this.proofMarketPlace.getAddress());
    if (matchingEnginePubKey.length == 0) {
      throw new Error("matching engine pub key is not updated in the registry");
    }

    const pubKey = hexToUtf8(matchingEnginePubKey.split("x")[1]); // trim 0x
    const result = await encryptDataWithRSAandAES(secretString, pubKey);
    const secretCompressed = await gzip(result.encryptedData);
    const aclHex = "0x" + base64ToHex(result.aclData);

    return this.proofMarketPlace.createAsk(
      {
        marketId,
        proverData,
        reward,
        expiry: assignmentDeadline,
        timeTakenForProofGeneration: blocksForProofGeneration,
        deadline: 0,
        refundAddress: refundAddress,
      },
      true,
      0,
      secretCompressed,
      aclHex,
      { ...options }
    );
  }

  public async createNewMarket(
    marketMetaData: BytesLike,
    verifier: string,
    minStakeForGenerator: BigNumberish,
    slashingPenalty: BigNumberish,
    options?: Overrides
  ): Promise<ContractTransactionResponse> {
    if (new BigNumber(slashingPenalty.toString()).gt(this.exponent)) {
      throw new Error("Slashing penalty can't be more than " + this.exponent.toFixed(0));
    }

    const marketId = ethers.keccak256(marketMetaData);
    console.log("trying to create market", marketId);

    if (this.exponent.gt(minStakeForGenerator.toString())) {
      throw new Error("min staking for generator is " + this.exponent.toFixed(0));
    }

    const marketCreationCost = await this.proofMarketPlace.marketCreationCost();

    const availableBalance = await this.paymentToken.balanceOf(await this.signer.getAddress());

    if (new BigNumber(availableBalance.toString()).lt(marketCreationCost.toString())) {
      throw new Error("Insufficient balance in the wallet to create market");
    }

    const allowance = await this.paymentToken.allowance(await this.signer.getAddress(), await this.proofMarketPlace.getAddress());

    if (new BigNumber(allowance.toString()).lt(marketCreationCost.toString())) {
      const approvalTx = await this.approvePaymentTokenToMarketPlace(marketCreationCost);
      const approvalReceipt = await approvalTx.wait();

      console.log("Approved Tokens: ", approvalReceipt?.hash);
    }

    return await this.proofMarketPlace.createMarketPlace(
      marketMetaData,
      verifier,
      minStakeForGenerator.toString(),
      slashingPenalty.toString(),
      { ...options }
    );
  }

  //Fetching the AskId
  public async getAskId(receipt: ethers.TransactionReceipt): Promise<string> {
    let blockNumber = receipt.blockNumber;
    const ask_created_filter = this.proofMarketPlace.filters.AskCreated();
    const ask_id = await this.proofMarketPlace.queryFilter(ask_created_filter,blockNumber,blockNumber);

    if(ask_id[0].args[0]){
      return ask_id[0].args[0].toString();
    }

    throw new Error("Ask Id not found for the give receipt");
  }

  //Fetching the proof by askId
  public async getProofByAskId(askId: string) {
    try {
      const proof_created_filter = this.proofMarketPlace.filters.ProofCreated(askId);
      const proof_created_tx_data = await this.proofMarketPlace.queryFilter(proof_created_filter);
    if(proof_created_tx_data.length>0){
      let proofCreatedTxHash = proof_created_tx_data[0].transactionHash;
      let submitProofTxData = await this.signer.provider?.getTransaction(proofCreatedTxHash);
      let submitProofCallData = submitProofTxData?.data;

      //Decoding calldata
      let abiCoder = new ethers.AbiCoder(); 
      let calldata = "0x"+submitProofCallData?.substring(10);
      let decoded_calldata = abiCoder.decode(
        ["uint256","bytes"],
        calldata!
      );
      let encoded_proof = decoded_calldata[1];

      //Decoding the encoded proof
      let proof = abiCoder.decode(
        ["uint256[8]"],
          encoded_proof!,
      );
      let formated_proof = {
        "a":[
          proof[0][0].toString(),
          proof[0][1].toString(),
        ],
        "b":[
          [
            proof[0][2].toString(),
            proof[0][3].toString(),
          ],
          [
            proof[0][4].toString(),
            proof[0][5].toString(),
          ]
        ],
        "c":[
          proof[0][6].toString(),
          proof[0][7].toString(),
        ]
      }
      return {proof_generated:true,proof:formated_proof, message:"Proof fetched."};
    }
    return {proof_generated:false,proof:[], message: "Proof not submitted yet."}
    } catch (error) {
      console.log(error);
    }
  }

  public async getProofByTaskId(taskId: string): Promise<BytesLike> {
    const proof_created_filter = this.proofMarketPlace.filters.ProofCreated(undefined, taskId);
    const topics = await proof_created_filter.getTopicFilter();

    const logs = await this.signer.provider?.getLogs({
      fromBlock: 0,
      toBlock: "latest",
      address: await this.proofMarketPlace.getAddress(),
      topics,
    });

    // Todo: return only proof and not the whole event
    if (logs && logs.length != 0) {
      return logs[0].data;
    }

    throw new Error("Proof Not Found");
  }
}
