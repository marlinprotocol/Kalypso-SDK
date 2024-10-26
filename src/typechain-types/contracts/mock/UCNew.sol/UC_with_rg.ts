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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface UC_with_rgInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "UPGRADE_INTERFACE_VERSION"
      | "initialize"
      | "my_operation1"
      | "my_operation2"
      | "proxiableUUID"
      | "slot1"
      | "supportsInterface"
      | "upgradeToAndCall"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Initialized" | "Upgraded"): EventFragment;

  encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
  encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
  encodeFunctionData(functionFragment: "my_operation1", values?: undefined): string;
  encodeFunctionData(functionFragment: "my_operation2", values?: undefined): string;
  encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
  encodeFunctionData(functionFragment: "slot1", values?: undefined): string;
  encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;

  decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "my_operation1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "my_operation2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "slot1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface UC_with_rg extends BaseContract {
  connect(runner?: ContractRunner | null): UC_with_rg;
  waitForDeployment(): Promise<this>;

  interface: UC_with_rgInterface;

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

  UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;

  initialize: TypedContractMethod<[], [void], "nonpayable">;

  my_operation1: TypedContractMethod<[], [bigint], "nonpayable">;

  my_operation2: TypedContractMethod<[], [void], "nonpayable">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  slot1: TypedContractMethod<[], [bigint], "view">;

  supportsInterface: TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;

  upgradeToAndCall: TypedContractMethod<[newImplementation: AddressLike, data: BytesLike], [void], "payable">;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "initialize"): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(nameOrSignature: "my_operation1"): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(nameOrSignature: "my_operation2"): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "slot1"): TypedContractMethod<[], [bigint], "view">;
  getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<[newImplementation: AddressLike, data: BytesLike], [void], "payable">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
  getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;

  filters: {
    "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;

    "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
  };
}
