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
} from "../common";

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

export interface ProofMarketPlaceInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "MATCHING_ENGINE_ROLE"
      | "UPDATER_ROLE"
      | "askCounter"
      | "assignTask"
      | "cancelAsk"
      | "costPerInputBytes"
      | "createAsk"
      | "createMarketPlace"
      | "discardRequest"
      | "generatorRegistry"
      | "getAskState"
      | "getRoleAdmin"
      | "getRoleMember"
      | "getRoleMemberCount"
      | "grantRole(bytes32,address)"
      | "grantRole(bytes32,address,bytes)"
      | "hasRole"
      | "initialize"
      | "listOfAsk"
      | "listOfTask"
      | "marketCreationCost"
      | "marketmetadata"
      | "minStakeToJoin"
      | "paymentToken"
      | "platformToken"
      | "proxiableUUID"
      | "relayAssignTask"
      | "relayBatchAssignTasks"
      | "renounceRole"
      | "revokeRole"
      | "rsaRegistry"
      | "slashGenerator"
      | "slashingPenalty"
      | "submitProof"
      | "submitProofs"
      | "supportsInterface"
      | "taskCounter"
      | "updateEncryptionKey"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "verifier"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminChanged"
      | "AskCancelled"
      | "AskCreated"
      | "BeaconUpgraded"
      | "Initialized"
      | "MarketPlaceCreated"
      | "ProofCreated"
      | "ProofNotGenerated"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "TaskCreated"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MATCHING_ENGINE_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UPDATER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "askCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assignTask",
    values: [BigNumberish, BigNumberish, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelAsk",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "costPerInputBytes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createAsk",
    values: [
      IProofMarketPlace.AskStruct,
      boolean,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createMarketPlace",
    values: [BytesLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "discardRequest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "generatorRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAskState",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole(bytes32,address)",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole(bytes32,address,bytes)",
    values: [BytesLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "listOfAsk",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listOfTask",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "marketCreationCost",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "marketmetadata",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "minStakeToJoin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "paymentToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "platformToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "relayAssignTask",
    values: [BigNumberish, BigNumberish, AddressLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "relayBatchAssignTasks",
    values: [
      BigNumberish[],
      BigNumberish[],
      AddressLike[],
      BytesLike[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rsaRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "slashGenerator",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "slashingPenalty",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "submitProof",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "submitProofs",
    values: [BigNumberish[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "taskCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateEncryptionKey",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "verifier", values: [BytesLike]): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MATCHING_ENGINE_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UPDATER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "askCounter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assignTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancelAsk", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "costPerInputBytes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createAsk", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createMarketPlace",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "discardRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generatorRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAskState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantRole(bytes32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantRole(bytes32,address,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listOfAsk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listOfTask", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marketCreationCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketmetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minStakeToJoin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "paymentToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "platformToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "relayAssignTask",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "relayBatchAssignTasks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rsaRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slashGenerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slashingPenalty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitProofs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taskCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateEncryptionKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
}

export namespace AdminChangedEvent {
  export type InputTuple = [previousAdmin: AddressLike, newAdmin: AddressLike];
  export type OutputTuple = [previousAdmin: string, newAdmin: string];
  export interface OutputObject {
    previousAdmin: string;
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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
  export type InputTuple = [
    askId: BigNumberish,
    hasPrivateInputs: boolean,
    secret_data: BytesLike,
    acl: BytesLike
  ];
  export type OutputTuple = [
    askId: bigint,
    hasPrivateInputs: boolean,
    secret_data: string,
    acl: string
  ];
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

export namespace BeaconUpgradedEvent {
  export type InputTuple = [beacon: AddressLike];
  export type OutputTuple = [beacon: string];
  export interface OutputObject {
    beacon: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TaskCreatedEvent {
  export type InputTuple = [
    askId: BigNumberish,
    taskId: BigNumberish,
    generator: AddressLike,
    new_acl: BytesLike
  ];
  export type OutputTuple = [
    askId: bigint,
    taskId: bigint,
    generator: string,
    new_acl: string
  ];
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

export interface ProofMarketPlace extends BaseContract {
  connect(runner?: ContractRunner | null): ProofMarketPlace;
  waitForDeployment(): Promise<this>;

  interface: ProofMarketPlaceInterface;

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

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  MATCHING_ENGINE_ROLE: TypedContractMethod<[], [string], "view">;

  UPDATER_ROLE: TypedContractMethod<[], [string], "view">;

  askCounter: TypedContractMethod<[], [bigint], "view">;

  assignTask: TypedContractMethod<
    [
      askId: BigNumberish,
      newTaskId: BigNumberish,
      generator: AddressLike,
      new_acl: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  cancelAsk: TypedContractMethod<[askId: BigNumberish], [void], "nonpayable">;

  costPerInputBytes: TypedContractMethod<[], [bigint], "view">;

  createAsk: TypedContractMethod<
    [
      ask: IProofMarketPlace.AskStruct,
      hasPrivateInputs: boolean,
      arg2: BigNumberish,
      secret_inputs: BytesLike,
      acl: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  createMarketPlace: TypedContractMethod<
    [
      _marketmetadata: BytesLike,
      _verifier: AddressLike,
      _minStake: BigNumberish,
      _slashingPenalty: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  discardRequest: TypedContractMethod<
    [taskId: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  generatorRegistry: TypedContractMethod<[], [string], "view">;

  getAskState: TypedContractMethod<[askId: BigNumberish], [bigint], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  getRoleMember: TypedContractMethod<
    [role: BytesLike, index: BigNumberish],
    [string],
    "view"
  >;

  getRoleMemberCount: TypedContractMethod<[role: BytesLike], [bigint], "view">;

  "grantRole(bytes32,address)": TypedContractMethod<
    [arg0: BytesLike, arg1: AddressLike],
    [void],
    "nonpayable"
  >;

  "grantRole(bytes32,address,bytes)": TypedContractMethod<
    [role: BytesLike, account: AddressLike, attestation_data: BytesLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  initialize: TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;

  listOfAsk: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [IProofMarketPlace.AskStructOutput, bigint, string] & {
        ask: IProofMarketPlace.AskStructOutput;
        state: bigint;
        requester: string;
      }
    ],
    "view"
  >;

  listOfTask: TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, string] & { askId: bigint; generator: string }],
    "view"
  >;

  marketCreationCost: TypedContractMethod<[], [bigint], "view">;

  marketmetadata: TypedContractMethod<[arg0: BytesLike], [string], "view">;

  minStakeToJoin: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  paymentToken: TypedContractMethod<[], [string], "view">;

  platformToken: TypedContractMethod<[], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  relayAssignTask: TypedContractMethod<
    [
      askId: BigNumberish,
      newTaskId: BigNumberish,
      generator: AddressLike,
      new_acl: BytesLike,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  relayBatchAssignTasks: TypedContractMethod<
    [
      askIds: BigNumberish[],
      newTaskIds: BigNumberish[],
      generators: AddressLike[],
      new_acls: BytesLike[],
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  rsaRegistry: TypedContractMethod<[], [string], "view">;

  slashGenerator: TypedContractMethod<
    [taskId: BigNumberish, rewardAddress: AddressLike],
    [bigint],
    "nonpayable"
  >;

  slashingPenalty: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  submitProof: TypedContractMethod<
    [taskId: BigNumberish, proof: BytesLike],
    [void],
    "nonpayable"
  >;

  submitProofs: TypedContractMethod<
    [taskIds: BigNumberish[], proofs: BytesLike[]],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  taskCounter: TypedContractMethod<[], [bigint], "view">;

  updateEncryptionKey: TypedContractMethod<
    [rsa_pub: BytesLike, attestation_data: BytesLike],
    [void],
    "nonpayable"
  >;

  upgradeTo: TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  verifier: TypedContractMethod<[arg0: BytesLike], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "MATCHING_ENGINE_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "UPDATER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "askCounter"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "assignTask"
  ): TypedContractMethod<
    [
      askId: BigNumberish,
      newTaskId: BigNumberish,
      generator: AddressLike,
      new_acl: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cancelAsk"
  ): TypedContractMethod<[askId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "costPerInputBytes"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "createAsk"
  ): TypedContractMethod<
    [
      ask: IProofMarketPlace.AskStruct,
      hasPrivateInputs: boolean,
      arg2: BigNumberish,
      secret_inputs: BytesLike,
      acl: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createMarketPlace"
  ): TypedContractMethod<
    [
      _marketmetadata: BytesLike,
      _verifier: AddressLike,
      _minStake: BigNumberish,
      _slashingPenalty: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "discardRequest"
  ): TypedContractMethod<[taskId: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "generatorRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getAskState"
  ): TypedContractMethod<[askId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getRoleMember"
  ): TypedContractMethod<
    [role: BytesLike, index: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRoleMemberCount"
  ): TypedContractMethod<[role: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "grantRole(bytes32,address)"
  ): TypedContractMethod<
    [arg0: BytesLike, arg1: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "grantRole(bytes32,address,bytes)"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike, attestation_data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[_admin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "listOfAsk"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [IProofMarketPlace.AskStructOutput, bigint, string] & {
        ask: IProofMarketPlace.AskStructOutput;
        state: bigint;
        requester: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "listOfTask"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, string] & { askId: bigint; generator: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "marketCreationCost"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "marketmetadata"
  ): TypedContractMethod<[arg0: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "minStakeToJoin"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "paymentToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "platformToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "relayAssignTask"
  ): TypedContractMethod<
    [
      askId: BigNumberish,
      newTaskId: BigNumberish,
      generator: AddressLike,
      new_acl: BytesLike,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "relayBatchAssignTasks"
  ): TypedContractMethod<
    [
      askIds: BigNumberish[],
      newTaskIds: BigNumberish[],
      generators: AddressLike[],
      new_acls: BytesLike[],
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rsaRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "slashGenerator"
  ): TypedContractMethod<
    [taskId: BigNumberish, rewardAddress: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "slashingPenalty"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "submitProof"
  ): TypedContractMethod<
    [taskId: BigNumberish, proof: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "submitProofs"
  ): TypedContractMethod<
    [taskIds: BigNumberish[], proofs: BytesLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "taskCounter"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "updateEncryptionKey"
  ): TypedContractMethod<
    [rsa_pub: BytesLike, attestation_data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradeTo"
  ): TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "verifier"
  ): TypedContractMethod<[arg0: BytesLike], [string], "view">;

  getEvent(
    key: "AdminChanged"
  ): TypedContractEvent<
    AdminChangedEvent.InputTuple,
    AdminChangedEvent.OutputTuple,
    AdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "AskCancelled"
  ): TypedContractEvent<
    AskCancelledEvent.InputTuple,
    AskCancelledEvent.OutputTuple,
    AskCancelledEvent.OutputObject
  >;
  getEvent(
    key: "AskCreated"
  ): TypedContractEvent<
    AskCreatedEvent.InputTuple,
    AskCreatedEvent.OutputTuple,
    AskCreatedEvent.OutputObject
  >;
  getEvent(
    key: "BeaconUpgraded"
  ): TypedContractEvent<
    BeaconUpgradedEvent.InputTuple,
    BeaconUpgradedEvent.OutputTuple,
    BeaconUpgradedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "MarketPlaceCreated"
  ): TypedContractEvent<
    MarketPlaceCreatedEvent.InputTuple,
    MarketPlaceCreatedEvent.OutputTuple,
    MarketPlaceCreatedEvent.OutputObject
  >;
  getEvent(
    key: "ProofCreated"
  ): TypedContractEvent<
    ProofCreatedEvent.InputTuple,
    ProofCreatedEvent.OutputTuple,
    ProofCreatedEvent.OutputObject
  >;
  getEvent(
    key: "ProofNotGenerated"
  ): TypedContractEvent<
    ProofNotGeneratedEvent.InputTuple,
    ProofNotGeneratedEvent.OutputTuple,
    ProofNotGeneratedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "TaskCreated"
  ): TypedContractEvent<
    TaskCreatedEvent.InputTuple,
    TaskCreatedEvent.OutputTuple,
    TaskCreatedEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "AdminChanged(address,address)": TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;
    AdminChanged: TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;

    "AskCancelled(uint256)": TypedContractEvent<
      AskCancelledEvent.InputTuple,
      AskCancelledEvent.OutputTuple,
      AskCancelledEvent.OutputObject
    >;
    AskCancelled: TypedContractEvent<
      AskCancelledEvent.InputTuple,
      AskCancelledEvent.OutputTuple,
      AskCancelledEvent.OutputObject
    >;

    "AskCreated(uint256,bool,bytes,bytes)": TypedContractEvent<
      AskCreatedEvent.InputTuple,
      AskCreatedEvent.OutputTuple,
      AskCreatedEvent.OutputObject
    >;
    AskCreated: TypedContractEvent<
      AskCreatedEvent.InputTuple,
      AskCreatedEvent.OutputTuple,
      AskCreatedEvent.OutputObject
    >;

    "BeaconUpgraded(address)": TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;
    BeaconUpgraded: TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

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

    "ProofCreated(uint256,uint256)": TypedContractEvent<
      ProofCreatedEvent.InputTuple,
      ProofCreatedEvent.OutputTuple,
      ProofCreatedEvent.OutputObject
    >;
    ProofCreated: TypedContractEvent<
      ProofCreatedEvent.InputTuple,
      ProofCreatedEvent.OutputTuple,
      ProofCreatedEvent.OutputObject
    >;

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

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "TaskCreated(uint256,uint256,address,bytes)": TypedContractEvent<
      TaskCreatedEvent.InputTuple,
      TaskCreatedEvent.OutputTuple,
      TaskCreatedEvent.OutputObject
    >;
    TaskCreated: TypedContractEvent<
      TaskCreatedEvent.InputTuple,
      TaskCreatedEvent.OutputTuple,
      TaskCreatedEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
