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
} from "../../common";

export declare namespace IProofMarketPlace {
  export type AskStruct = {
    marketId: BytesLike;
    reward: BigNumberish;
    expiry: BigNumberish;
    timeTakenForProofGeneration: BigNumberish;
    deadline: BigNumberish;
    refundAddress: AddressLike;
    proverData: BytesLike;
  };

  export type AskStructOutput = [
    marketId: string,
    reward: bigint,
    expiry: bigint,
    timeTakenForProofGeneration: bigint,
    deadline: bigint,
    refundAddress: string,
    proverData: string
  ] & {
    marketId: string;
    reward: bigint;
    expiry: bigint;
    timeTakenForProofGeneration: bigint;
    deadline: bigint;
    refundAddress: string;
    proverData: string;
  };
}

export interface IProofMarketPlaceInterface extends Interface {
  getFunction(nameOrSignature: "createAsk" | "createMarketPlace" | "minStakeToJoin" | "slashingPenalty" | "verifier"): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "AskCancelled" | "AskCreated" | "MarketPlaceCreated" | "ProofCreated" | "ProofNotGenerated" | "TaskCreated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "createAsk",
    values: [IProofMarketPlace.AskStruct, boolean, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "createMarketPlace", values: [BytesLike, AddressLike, BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: "minStakeToJoin", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "slashingPenalty", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "verifier", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "createAsk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createMarketPlace", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minStakeToJoin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "slashingPenalty", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
}

export namespace AskCancelledEvent {
  export type InputTuple = [askId: BigNumberish];
  export type OutputTuple = [askId: bigint];
  export interface OutputObject {
    askId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AskCreatedEvent {
  export type InputTuple = [askId: BigNumberish, hasPrivateInputs: boolean, secret_data: BytesLike, acl: BytesLike];
  export type OutputTuple = [askId: bigint, hasPrivateInputs: boolean, secret_data: string, acl: string];
  export interface OutputObject {
    askId: bigint;
    hasPrivateInputs: boolean;
    secret_data: string;
    acl: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MarketPlaceCreatedEvent {
  export type InputTuple = [marketId: BytesLike];
  export type OutputTuple = [marketId: string];
  export interface OutputObject {
    marketId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProofCreatedEvent {
  export type InputTuple = [askId: BigNumberish, taskId: BigNumberish, proof: BytesLike];
  export type OutputTuple = [askId: bigint, taskId: bigint, proof: string];
  export interface OutputObject {
    askId: bigint;
    taskId: bigint;
    proof: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProofNotGeneratedEvent {
  export type InputTuple = [askId: BigNumberish, taskId: BigNumberish];
  export type OutputTuple = [askId: bigint, taskId: bigint];
  export interface OutputObject {
    askId: bigint;
    taskId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TaskCreatedEvent {
  export type InputTuple = [askId: BigNumberish, taskId: BigNumberish, generator: AddressLike, new_acl: BytesLike];
  export type OutputTuple = [askId: bigint, taskId: bigint, generator: string, new_acl: string];
  export interface OutputObject {
    askId: bigint;
    taskId: bigint;
    generator: string;
    new_acl: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IProofMarketPlace extends BaseContract {
  connect(runner?: ContractRunner | null): IProofMarketPlace;
  waitForDeployment(): Promise<this>;

  interface: IProofMarketPlaceInterface;

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

  createAsk: TypedContractMethod<
    [ask: IProofMarketPlace.AskStruct, hasPrivateInputs: boolean, secretType: BigNumberish, secret: BytesLike, acl: BytesLike],
    [void],
    "nonpayable"
  >;

  createMarketPlace: TypedContractMethod<
    [marketmetadata: BytesLike, verifier: AddressLike, _minStake: BigNumberish, _slashingPenalty: BigNumberish],
    [void],
    "nonpayable"
  >;

  minStakeToJoin: TypedContractMethod<[marketId: BytesLike], [bigint], "view">;

  slashingPenalty: TypedContractMethod<[marketId: BytesLike], [bigint], "view">;

  verifier: TypedContractMethod<[marketId: BytesLike], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(
    nameOrSignature: "createAsk"
  ): TypedContractMethod<
    [ask: IProofMarketPlace.AskStruct, hasPrivateInputs: boolean, secretType: BigNumberish, secret: BytesLike, acl: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createMarketPlace"
  ): TypedContractMethod<
    [marketmetadata: BytesLike, verifier: AddressLike, _minStake: BigNumberish, _slashingPenalty: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(nameOrSignature: "minStakeToJoin"): TypedContractMethod<[marketId: BytesLike], [bigint], "view">;
  getFunction(nameOrSignature: "slashingPenalty"): TypedContractMethod<[marketId: BytesLike], [bigint], "view">;
  getFunction(nameOrSignature: "verifier"): TypedContractMethod<[marketId: BytesLike], [string], "view">;

  getEvent(
    key: "AskCancelled"
  ): TypedContractEvent<AskCancelledEvent.InputTuple, AskCancelledEvent.OutputTuple, AskCancelledEvent.OutputObject>;
  getEvent(key: "AskCreated"): TypedContractEvent<AskCreatedEvent.InputTuple, AskCreatedEvent.OutputTuple, AskCreatedEvent.OutputObject>;
  getEvent(
    key: "MarketPlaceCreated"
  ): TypedContractEvent<MarketPlaceCreatedEvent.InputTuple, MarketPlaceCreatedEvent.OutputTuple, MarketPlaceCreatedEvent.OutputObject>;
  getEvent(
    key: "ProofCreated"
  ): TypedContractEvent<ProofCreatedEvent.InputTuple, ProofCreatedEvent.OutputTuple, ProofCreatedEvent.OutputObject>;
  getEvent(
    key: "ProofNotGenerated"
  ): TypedContractEvent<ProofNotGeneratedEvent.InputTuple, ProofNotGeneratedEvent.OutputTuple, ProofNotGeneratedEvent.OutputObject>;
  getEvent(
    key: "TaskCreated"
  ): TypedContractEvent<TaskCreatedEvent.InputTuple, TaskCreatedEvent.OutputTuple, TaskCreatedEvent.OutputObject>;

  filters: {
    "AskCancelled(uint256)": TypedContractEvent<
      AskCancelledEvent.InputTuple,
      AskCancelledEvent.OutputTuple,
      AskCancelledEvent.OutputObject
    >;
    AskCancelled: TypedContractEvent<AskCancelledEvent.InputTuple, AskCancelledEvent.OutputTuple, AskCancelledEvent.OutputObject>;

    "AskCreated(uint256,bool,bytes,bytes)": TypedContractEvent<
      AskCreatedEvent.InputTuple,
      AskCreatedEvent.OutputTuple,
      AskCreatedEvent.OutputObject
    >;
    AskCreated: TypedContractEvent<AskCreatedEvent.InputTuple, AskCreatedEvent.OutputTuple, AskCreatedEvent.OutputObject>;

    "MarketPlaceCreated(bytes32)": TypedContractEvent<
      MarketPlaceCreatedEvent.InputTuple,
      MarketPlaceCreatedEvent.OutputTuple,
      MarketPlaceCreatedEvent.OutputObject
    >;
    MarketPlaceCreated: TypedContractEvent<
      MarketPlaceCreatedEvent.InputTuple,
      MarketPlaceCreatedEvent.OutputTuple,
      MarketPlaceCreatedEvent.OutputObject
    >;

    "ProofCreated(uint256,uint256,bytes)": TypedContractEvent<
      ProofCreatedEvent.InputTuple,
      ProofCreatedEvent.OutputTuple,
      ProofCreatedEvent.OutputObject
    >;
    ProofCreated: TypedContractEvent<ProofCreatedEvent.InputTuple, ProofCreatedEvent.OutputTuple, ProofCreatedEvent.OutputObject>;

    "ProofNotGenerated(uint256,uint256)": TypedContractEvent<
      ProofNotGeneratedEvent.InputTuple,
      ProofNotGeneratedEvent.OutputTuple,
      ProofNotGeneratedEvent.OutputObject
    >;
    ProofNotGenerated: TypedContractEvent<
      ProofNotGeneratedEvent.InputTuple,
      ProofNotGeneratedEvent.OutputTuple,
      ProofNotGeneratedEvent.OutputObject
    >;

    "TaskCreated(uint256,uint256,address,bytes)": TypedContractEvent<
      TaskCreatedEvent.InputTuple,
      TaskCreatedEvent.OutputTuple,
      TaskCreatedEvent.OutputObject
    >;
    TaskCreated: TypedContractEvent<TaskCreatedEvent.InputTuple, TaskCreatedEvent.OutputTuple, TaskCreatedEvent.OutputObject>;
  };
}
