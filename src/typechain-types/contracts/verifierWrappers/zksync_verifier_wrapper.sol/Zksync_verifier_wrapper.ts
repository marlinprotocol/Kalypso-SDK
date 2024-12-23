/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";

export interface Zksync_verifier_wrapperInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "checkSampleInputsAndProof"
      | "iverifier"
      | "sampleInput"
      | "sampleProof"
      | "verify"
      | "verifyAgainstSampleInputs"
      | "verifyInputs",
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "checkSampleInputsAndProof", values?: undefined): string;
  encodeFunctionData(functionFragment: "iverifier", values?: undefined): string;
  encodeFunctionData(functionFragment: "sampleInput", values?: undefined): string;
  encodeFunctionData(functionFragment: "sampleProof", values?: undefined): string;
  encodeFunctionData(functionFragment: "verify", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "verifyAgainstSampleInputs", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "verifyInputs", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "checkSampleInputsAndProof", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "iverifier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sampleInput", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sampleProof", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifyAgainstSampleInputs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifyInputs", data: BytesLike): Result;
}

export interface Zksync_verifier_wrapper extends BaseContract {
  connect(runner?: ContractRunner | null): Zksync_verifier_wrapper;
  waitForDeployment(): Promise<this>;

  interface: Zksync_verifier_wrapperInterface;

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

  iverifier: TypedContractMethod<[], [string], "view">;

  sampleInput: TypedContractMethod<[], [string], "view">;

  sampleProof: TypedContractMethod<[], [string], "view">;

  verify: TypedContractMethod<[encodedData: BytesLike], [boolean], "view">;

  verifyAgainstSampleInputs: TypedContractMethod<[encodedProof: BytesLike], [boolean], "view">;

  verifyInputs: TypedContractMethod<[inputs: BytesLike], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "checkSampleInputsAndProof"): TypedContractMethod<[], [boolean], "view">;
  getFunction(nameOrSignature: "iverifier"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "sampleInput"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "sampleProof"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "verify"): TypedContractMethod<[encodedData: BytesLike], [boolean], "view">;
  getFunction(nameOrSignature: "verifyAgainstSampleInputs"): TypedContractMethod<[encodedProof: BytesLike], [boolean], "view">;
  getFunction(nameOrSignature: "verifyInputs"): TypedContractMethod<[inputs: BytesLike], [boolean], "view">;

  filters: {};
}
