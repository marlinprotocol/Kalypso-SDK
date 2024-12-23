/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";

export declare namespace ProofMarketplace {
  export type AskStruct = {
    marketId: BigNumberish;
    reward: BigNumberish;
    expiry: BigNumberish;
    timeTakenForProofGeneration: BigNumberish;
    deadline: BigNumberish;
    refundAddress: AddressLike;
    proverData: BytesLike;
  };

  export type AskStructOutput = [
    marketId: bigint,
    reward: bigint,
    expiry: bigint,
    timeTakenForProofGeneration: bigint,
    deadline: bigint,
    refundAddress: string,
    proverData: string,
  ] & {
    marketId: bigint;
    reward: bigint;
    expiry: bigint;
    timeTakenForProofGeneration: bigint;
    deadline: bigint;
    refundAddress: string;
    proverData: string;
  };
}

export interface Plonk_verifier_wrapperInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "checkSampleInputsAndProof"
      | "createRequest"
      | "encodeInputAndProofForVerification"
      | "encodeInputs"
      | "encodeProof"
      | "iverifier"
      | "proofMarketplace"
      | "sampleInput"
      | "sampleProof"
      | "setProofMarketplaceContract"
      | "verify"
      | "verifyAgainstSampleInputs"
      | "verifyInputs",
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "checkSampleInputsAndProof", values?: undefined): string;
  encodeFunctionData(functionFragment: "createRequest", values: [ProofMarketplace.AskStruct, BigNumberish, BytesLike, BytesLike]): string;
  encodeFunctionData(functionFragment: "encodeInputAndProofForVerification", values: [BytesLike[], BytesLike]): string;
  encodeFunctionData(functionFragment: "encodeInputs", values: [BytesLike[]]): string;
  encodeFunctionData(functionFragment: "encodeProof", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "iverifier", values?: undefined): string;
  encodeFunctionData(functionFragment: "proofMarketplace", values?: undefined): string;
  encodeFunctionData(functionFragment: "sampleInput", values?: undefined): string;
  encodeFunctionData(functionFragment: "sampleProof", values?: undefined): string;
  encodeFunctionData(functionFragment: "setProofMarketplaceContract", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "verify", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "verifyAgainstSampleInputs", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "verifyInputs", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "checkSampleInputsAndProof", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createRequest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "encodeInputAndProofForVerification", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "encodeInputs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "encodeProof", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "iverifier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proofMarketplace", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sampleInput", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sampleProof", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setProofMarketplaceContract", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifyAgainstSampleInputs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifyInputs", data: BytesLike): Result;
}

export interface Plonk_verifier_wrapper extends BaseContract {
  connect(runner?: ContractRunner | null): Plonk_verifier_wrapper;
  waitForDeployment(): Promise<this>;

  interface: Plonk_verifier_wrapperInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
  on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;

  once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
  once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;

  checkSampleInputsAndProof: TypedContractMethod<[], [boolean], "view">;

  createRequest: TypedContractMethod<
    [ask: ProofMarketplace.AskStruct, secretType: BigNumberish, secret_inputs: BytesLike, acl: BytesLike],
    [void],
    "nonpayable"
  >;

  encodeInputAndProofForVerification: TypedContractMethod<[inputs: BytesLike[], proof: BytesLike], [string], "view">;

  encodeInputs: TypedContractMethod<[inputs: BytesLike[]], [string], "view">;

  encodeProof: TypedContractMethod<[proof: BytesLike], [string], "view">;

  iverifier: TypedContractMethod<[], [string], "view">;

  proofMarketplace: TypedContractMethod<[], [string], "view">;

  sampleInput: TypedContractMethod<[], [string], "view">;

  sampleProof: TypedContractMethod<[], [string], "view">;

  setProofMarketplaceContract: TypedContractMethod<[_proofMarketplace: AddressLike], [void], "nonpayable">;

  verify: TypedContractMethod<[encodedData: BytesLike], [boolean], "view">;

  verifyAgainstSampleInputs: TypedContractMethod<[encodedProof: BytesLike], [boolean], "view">;

  verifyInputs: TypedContractMethod<[inputs: BytesLike], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "checkSampleInputsAndProof"): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "createRequest",
  ): TypedContractMethod<
    [ask: ProofMarketplace.AskStruct, secretType: BigNumberish, secret_inputs: BytesLike, acl: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "encodeInputAndProofForVerification",
  ): TypedContractMethod<[inputs: BytesLike[], proof: BytesLike], [string], "view">;
  getFunction(nameOrSignature: "encodeInputs"): TypedContractMethod<[inputs: BytesLike[]], [string], "view">;
  getFunction(nameOrSignature: "encodeProof"): TypedContractMethod<[proof: BytesLike], [string], "view">;
  getFunction(nameOrSignature: "iverifier"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "proofMarketplace"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "sampleInput"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "sampleProof"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "setProofMarketplaceContract"): TypedContractMethod<[_proofMarketplace: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "verify"): TypedContractMethod<[encodedData: BytesLike], [boolean], "view">;
  getFunction(nameOrSignature: "verifyAgainstSampleInputs"): TypedContractMethod<[encodedProof: BytesLike], [boolean], "view">;
  getFunction(nameOrSignature: "verifyInputs"): TypedContractMethod<[inputs: BytesLike], [boolean], "view">;

  filters: {};
}
