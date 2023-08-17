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
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";

export interface InputAndProofFormatRegistryInterface extends Interface {
  getFunction(
    nameOrSignature: "admin" | "inputArrayLength" | "inputs" | "proofArrayLength" | "proofs" | "setInputFormat" | "setProofFormat"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(functionFragment: "inputArrayLength", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "inputs", values: [BytesLike, BigNumberish]): string;
  encodeFunctionData(functionFragment: "proofArrayLength", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "proofs", values: [BytesLike, BigNumberish]): string;
  encodeFunctionData(functionFragment: "setInputFormat", values: [BytesLike, string[]]): string;
  encodeFunctionData(functionFragment: "setProofFormat", values: [BytesLike, string[]]): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "inputArrayLength", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "inputs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proofArrayLength", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proofs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setInputFormat", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setProofFormat", data: BytesLike): Result;
}

export interface InputAndProofFormatRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): InputAndProofFormatRegistry;
  waitForDeployment(): Promise<this>;

  interface: InputAndProofFormatRegistryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
  on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;

  once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
  once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;

  admin: TypedContractMethod<[], [string], "view">;

  inputArrayLength: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  inputs: TypedContractMethod<[arg0: BytesLike, arg1: BigNumberish], [string], "view">;

  proofArrayLength: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  proofs: TypedContractMethod<[arg0: BytesLike, arg1: BigNumberish], [string], "view">;

  setInputFormat: TypedContractMethod<[marketId: BytesLike, inputsFormat: string[]], [void], "nonpayable">;

  setProofFormat: TypedContractMethod<[marketId: BytesLike, proofFormat: string[]], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "inputArrayLength"): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(nameOrSignature: "inputs"): TypedContractMethod<[arg0: BytesLike, arg1: BigNumberish], [string], "view">;
  getFunction(nameOrSignature: "proofArrayLength"): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(nameOrSignature: "proofs"): TypedContractMethod<[arg0: BytesLike, arg1: BigNumberish], [string], "view">;
  getFunction(nameOrSignature: "setInputFormat"): TypedContractMethod<[marketId: BytesLike, inputsFormat: string[]], [void], "nonpayable">;
  getFunction(nameOrSignature: "setProofFormat"): TypedContractMethod<[marketId: BytesLike, proofFormat: string[]], [void], "nonpayable">;

  filters: {};
}
