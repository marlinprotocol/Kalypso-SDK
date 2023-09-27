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
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IPriorityLogInterface extends Interface {
  getFunction(
    nameOrSignature: "priorityStore" | "setPriority"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "priorityStore",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriority",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "priorityStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriority",
    data: BytesLike
  ): Result;
}

export interface IPriorityLog extends BaseContract {
  connect(runner?: ContractRunner | null): IPriorityLog;
  waitForDeployment(): Promise<this>;

  interface: IPriorityLogInterface;

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

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  priorityStore: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "nonpayable"
  >;

  setPriority: TypedContractMethod<
    [priority: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "priorityStore"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "setPriority"
  ): TypedContractMethod<[priority: BigNumberish], [void], "nonpayable">;

  filters: {};
}
