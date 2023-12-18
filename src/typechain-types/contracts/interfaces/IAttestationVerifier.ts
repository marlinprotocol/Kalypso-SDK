/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";

export interface IAttestationVerifierInterface extends Interface {
  getFunction(nameOrSignature: "safeVerify" | "verify"): FunctionFragment;

  encodeFunctionData(functionFragment: "safeVerify", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "verify", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "safeVerify", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
}

export interface IAttestationVerifier extends BaseContract {
  connect(runner?: ContractRunner | null): IAttestationVerifier;
  waitForDeployment(): Promise<this>;

  interface: IAttestationVerifierInterface;

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

  safeVerify: TypedContractMethod<[data: BytesLike], [boolean], "nonpayable">;

  verify: TypedContractMethod<[data: BytesLike], [boolean], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "safeVerify"): TypedContractMethod<[data: BytesLike], [boolean], "nonpayable">;
  getFunction(nameOrSignature: "verify"): TypedContractMethod<[data: BytesLike], [boolean], "nonpayable">;

  filters: {};
}
