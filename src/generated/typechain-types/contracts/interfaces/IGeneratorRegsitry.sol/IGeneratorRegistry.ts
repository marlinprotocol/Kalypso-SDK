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

export declare namespace IGeneratorRegistry {
  export type GeneratorStruct = {
    rewardAddress: AddressLike;
    amountLocked: BigNumberish;
    minReward: BigNumberish;
    generatorData: BytesLike;
  };

  export type GeneratorStructOutput = [
    rewardAddress: string,
    amountLocked: bigint,
    minReward: bigint,
    generatorData: string
  ] & {
    rewardAddress: string;
    amountLocked: bigint;
    minReward: bigint;
    generatorData: string;
  };
}

export interface IGeneratorRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "assignGeneratorTask"
      | "completeGeneratorTask"
      | "deregister"
      | "getGeneratorDetails"
      | "register"
      | "slashGenerator"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddExtraStash"
      | "DeregisteredGenerator"
      | "RegisteredGenerator"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "assignGeneratorTask",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "completeGeneratorTask",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deregister",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getGeneratorDetails",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [IGeneratorRegistry.GeneratorStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "slashGenerator",
    values: [AddressLike, BytesLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "assignGeneratorTask",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "completeGeneratorTask",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deregister", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGeneratorDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "slashGenerator",
    data: BytesLike
  ): Result;
}

export namespace AddExtraStashEvent {
  export type InputTuple = [
    generator: AddressLike,
    marketId: BytesLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    generator: string,
    marketId: string,
    amount: bigint
  ];
  export interface OutputObject {
    generator: string;
    marketId: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DeregisteredGeneratorEvent {
  export type InputTuple = [generator: AddressLike, marketId: BytesLike];
  export type OutputTuple = [generator: string, marketId: string];
  export interface OutputObject {
    generator: string;
    marketId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RegisteredGeneratorEvent {
  export type InputTuple = [generator: AddressLike, marketId: BytesLike];
  export type OutputTuple = [generator: string, marketId: string];
  export interface OutputObject {
    generator: string;
    marketId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IGeneratorRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): IGeneratorRegistry;
  waitForDeployment(): Promise<this>;

  interface: IGeneratorRegistryInterface;

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

  assignGeneratorTask: TypedContractMethod<
    [generator: AddressLike, marketId: BytesLike],
    [void],
    "nonpayable"
  >;

  completeGeneratorTask: TypedContractMethod<
    [generator: AddressLike, marketId: BytesLike],
    [void],
    "nonpayable"
  >;

  deregister: TypedContractMethod<[marketId: BytesLike], [void], "nonpayable">;

  getGeneratorDetails: TypedContractMethod<
    [generator: AddressLike, marketId: BytesLike],
    [[bigint, bigint, string]],
    "view"
  >;

  register: TypedContractMethod<
    [generator: IGeneratorRegistry.GeneratorStruct, marketId: BytesLike],
    [void],
    "nonpayable"
  >;

  slashGenerator: TypedContractMethod<
    [generator: AddressLike, marketId: BytesLike, rewardAddress: AddressLike],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "assignGeneratorTask"
  ): TypedContractMethod<
    [generator: AddressLike, marketId: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "completeGeneratorTask"
  ): TypedContractMethod<
    [generator: AddressLike, marketId: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deregister"
  ): TypedContractMethod<[marketId: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getGeneratorDetails"
  ): TypedContractMethod<
    [generator: AddressLike, marketId: BytesLike],
    [[bigint, bigint, string]],
    "view"
  >;
  getFunction(
    nameOrSignature: "register"
  ): TypedContractMethod<
    [generator: IGeneratorRegistry.GeneratorStruct, marketId: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "slashGenerator"
  ): TypedContractMethod<
    [generator: AddressLike, marketId: BytesLike, rewardAddress: AddressLike],
    [bigint],
    "nonpayable"
  >;

  getEvent(
    key: "AddExtraStash"
  ): TypedContractEvent<
    AddExtraStashEvent.InputTuple,
    AddExtraStashEvent.OutputTuple,
    AddExtraStashEvent.OutputObject
  >;
  getEvent(
    key: "DeregisteredGenerator"
  ): TypedContractEvent<
    DeregisteredGeneratorEvent.InputTuple,
    DeregisteredGeneratorEvent.OutputTuple,
    DeregisteredGeneratorEvent.OutputObject
  >;
  getEvent(
    key: "RegisteredGenerator"
  ): TypedContractEvent<
    RegisteredGeneratorEvent.InputTuple,
    RegisteredGeneratorEvent.OutputTuple,
    RegisteredGeneratorEvent.OutputObject
  >;

  filters: {
    "AddExtraStash(address,bytes32,uint256)": TypedContractEvent<
      AddExtraStashEvent.InputTuple,
      AddExtraStashEvent.OutputTuple,
      AddExtraStashEvent.OutputObject
    >;
    AddExtraStash: TypedContractEvent<
      AddExtraStashEvent.InputTuple,
      AddExtraStashEvent.OutputTuple,
      AddExtraStashEvent.OutputObject
    >;

    "DeregisteredGenerator(address,bytes32)": TypedContractEvent<
      DeregisteredGeneratorEvent.InputTuple,
      DeregisteredGeneratorEvent.OutputTuple,
      DeregisteredGeneratorEvent.OutputObject
    >;
    DeregisteredGenerator: TypedContractEvent<
      DeregisteredGeneratorEvent.InputTuple,
      DeregisteredGeneratorEvent.OutputTuple,
      DeregisteredGeneratorEvent.OutputObject
    >;

    "RegisteredGenerator(address,bytes32)": TypedContractEvent<
      RegisteredGeneratorEvent.InputTuple,
      RegisteredGeneratorEvent.OutputTuple,
      RegisteredGeneratorEvent.OutputObject
    >;
    RegisteredGenerator: TypedContractEvent<
      RegisteredGeneratorEvent.InputTuple,
      RegisteredGeneratorEvent.OutputTuple,
      RegisteredGeneratorEvent.OutputObject
    >;
  };
}
