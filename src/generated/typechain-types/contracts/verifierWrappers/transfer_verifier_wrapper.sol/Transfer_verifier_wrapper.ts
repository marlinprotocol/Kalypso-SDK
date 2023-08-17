/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";

export interface Transfer_verifier_wrapperInterface extends Interface {
  getFunction(nameOrSignature: "iverifier" | "verify"): FunctionFragment;

  encodeFunctionData(functionFragment: "iverifier", values?: undefined): string;
  encodeFunctionData(functionFragment: "verify", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "iverifier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
}

export interface Transfer_verifier_wrapper extends BaseContract {
  connect(runner?: ContractRunner | null): Transfer_verifier_wrapper;
  waitForDeployment(): Promise<this>;

  interface: Transfer_verifier_wrapperInterface;

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

  iverifier: TypedContractMethod<[], [string], "view">;

  verify: TypedContractMethod<[encodedData: BytesLike], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "iverifier"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "verify"): TypedContractMethod<[encodedData: BytesLike], [boolean], "view">;

  filters: {};
}
