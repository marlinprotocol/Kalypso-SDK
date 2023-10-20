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

export interface GeneratorRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "PARALLEL_REQUESTS_UPPER_LIMIT"
      | "SLASHER_ROLE"
      | "assignGeneratorTask"
      | "completeGeneratorTask"
      | "deregister"
      | "generatorInfoPerMarket"
      | "generatorRegistry"
      | "getGeneratorAssignmentDetails"
      | "getGeneratorRewardDetails"
      | "getGeneratorState"
      | "getRoleAdmin"
      | "getRoleMember"
      | "getRoleMemberCount"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "joinMarketPlace"
      | "leaveMarketPlace"
      | "leaveMarketPlaces"
      | "proofMarketPlace"
      | "proxiableUUID"
      | "register"
      | "renounceRole"
      | "requestForExitMarketPlace"
      | "requestForExitMarketPlaces"
      | "revokeRole"
      | "slashGenerator"
      | "stake"
      | "stakingToken"
      | "supportsInterface"
      | "unstake"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddedStash"
      | "AdminChanged"
      | "BeaconUpgraded"
      | "DeregisteredGenerator"
      | "Initialized"
      | "JoinedMarketPlace"
      | "LeftMarketplace"
      | "RegisteredGenerator"
      | "RemovedStash"
      | "RequestExitMarketPlace"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "PARALLEL_REQUESTS_UPPER_LIMIT", values?: undefined): string;
  encodeFunctionData(functionFragment: "SLASHER_ROLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "assignGeneratorTask", values: [AddressLike, BytesLike, BigNumberish]): string;
  encodeFunctionData(functionFragment: "completeGeneratorTask", values: [AddressLike, BytesLike, BigNumberish]): string;
  encodeFunctionData(functionFragment: "deregister", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "generatorInfoPerMarket", values: [AddressLike, BytesLike]): string;
  encodeFunctionData(functionFragment: "generatorRegistry", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "getGeneratorAssignmentDetails", values: [AddressLike, BytesLike]): string;
  encodeFunctionData(functionFragment: "getGeneratorRewardDetails", values: [AddressLike, BytesLike]): string;
  encodeFunctionData(functionFragment: "getGeneratorState", values: [AddressLike, BytesLike]): string;
  encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
  encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "initialize", values: [AddressLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "joinMarketPlace", values: [BytesLike, BigNumberish, BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: "leaveMarketPlace", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "leaveMarketPlaces", values: [BytesLike[]]): string;
  encodeFunctionData(functionFragment: "proofMarketPlace", values?: undefined): string;
  encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
  encodeFunctionData(functionFragment: "register", values: [AddressLike, BigNumberish, BytesLike]): string;
  encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "requestForExitMarketPlace", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "requestForExitMarketPlaces", values: [BytesLike[]]): string;
  encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "slashGenerator", values: [AddressLike, BytesLike, BigNumberish, AddressLike]): string;
  encodeFunctionData(functionFragment: "stake", values: [AddressLike, BigNumberish]): string;
  encodeFunctionData(functionFragment: "stakingToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "unstake", values: [AddressLike, BigNumberish]): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;

  decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PARALLEL_REQUESTS_UPPER_LIMIT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SLASHER_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assignGeneratorTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "completeGeneratorTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deregister", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "generatorInfoPerMarket", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "generatorRegistry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getGeneratorAssignmentDetails", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getGeneratorRewardDetails", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getGeneratorState", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "joinMarketPlace", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "leaveMarketPlace", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "leaveMarketPlaces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proofMarketPlace", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "requestForExitMarketPlace", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "requestForExitMarketPlaces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "slashGenerator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakingToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
}

export namespace AddedStashEvent {
  export type InputTuple = [generator: AddressLike, amount: BigNumberish];
  export type OutputTuple = [generator: string, amount: bigint];
  export interface OutputObject {
    generator: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace DeregisteredGeneratorEvent {
  export type InputTuple = [generator: AddressLike];
  export type OutputTuple = [generator: string];
  export interface OutputObject {
    generator: string;
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

export namespace JoinedMarketPlaceEvent {
  export type InputTuple = [generator: AddressLike, marketId: BytesLike, computeAllocation: BigNumberish];
  export type OutputTuple = [generator: string, marketId: string, computeAllocation: bigint];
  export interface OutputObject {
    generator: string;
    marketId: string;
    computeAllocation: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LeftMarketplaceEvent {
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
  export type InputTuple = [generator: AddressLike];
  export type OutputTuple = [generator: string];
  export interface OutputObject {
    generator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemovedStashEvent {
  export type InputTuple = [generator: AddressLike, arg1: BigNumberish];
  export type OutputTuple = [generator: string, arg1: bigint];
  export interface OutputObject {
    generator: string;
    arg1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RequestExitMarketPlaceEvent {
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

export namespace RoleAdminChangedEvent {
  export type InputTuple = [role: BytesLike, previousAdminRole: BytesLike, newAdminRole: BytesLike];
  export type OutputTuple = [role: string, previousAdminRole: string, newAdminRole: string];
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
  export type InputTuple = [role: BytesLike, account: AddressLike, sender: AddressLike];
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
  export type InputTuple = [role: BytesLike, account: AddressLike, sender: AddressLike];
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

export interface GeneratorRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): GeneratorRegistry;
  waitForDeployment(): Promise<this>;

  interface: GeneratorRegistryInterface;

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

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  PARALLEL_REQUESTS_UPPER_LIMIT: TypedContractMethod<[], [bigint], "view">;

  SLASHER_ROLE: TypedContractMethod<[], [string], "view">;

  assignGeneratorTask: TypedContractMethod<
    [generatorAddress: AddressLike, marketId: BytesLike, amountToLock: BigNumberish],
    [void],
    "nonpayable"
  >;

  completeGeneratorTask: TypedContractMethod<
    [generatorAddress: AddressLike, marketId: BytesLike, stakeToRelease: BigNumberish],
    [void],
    "nonpayable"
  >;

  deregister: TypedContractMethod<[refundAddress: AddressLike], [void], "nonpayable">;

  generatorInfoPerMarket: TypedContractMethod<
    [arg0: AddressLike, arg1: BytesLike],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        state: bigint;
        computeAllocation: bigint;
        proofGenerationCost: bigint;
        proposedTime: bigint;
        activeRequests: bigint;
      }
    ],
    "view"
  >;

  generatorRegistry: TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, bigint, bigint, bigint, bigint, bigint, bigint, string] & {
        rewardAddress: string;
        totalStake: bigint;
        totalCompute: bigint;
        computeConsumed: bigint;
        stakeLocked: bigint;
        activeMarketPlaces: bigint;
        declaredCompute: bigint;
        generatorData: string;
      }
    ],
    "view"
  >;

  getGeneratorAssignmentDetails: TypedContractMethod<[generatorAddress: AddressLike, marketId: BytesLike], [[bigint, bigint]], "view">;

  getGeneratorRewardDetails: TypedContractMethod<[generatorAddress: AddressLike, marketId: BytesLike], [[string, bigint]], "view">;

  getGeneratorState: TypedContractMethod<[generatorAddress: AddressLike, marketId: BytesLike], [[bigint, bigint]], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  getRoleMember: TypedContractMethod<[role: BytesLike, index: BigNumberish], [string], "view">;

  getRoleMemberCount: TypedContractMethod<[role: BytesLike], [bigint], "view">;

  grantRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;

  hasRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [boolean], "view">;

  initialize: TypedContractMethod<[_admin: AddressLike, _proofMarketPlace: AddressLike], [void], "nonpayable">;

  joinMarketPlace: TypedContractMethod<
    [marketId: BytesLike, computeAllocation: BigNumberish, proofGenerationCost: BigNumberish, proposedTime: BigNumberish],
    [void],
    "nonpayable"
  >;

  leaveMarketPlace: TypedContractMethod<[marketId: BytesLike], [void], "nonpayable">;

  leaveMarketPlaces: TypedContractMethod<[marketIds: BytesLike[]], [void], "nonpayable">;

  proofMarketPlace: TypedContractMethod<[], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  register: TypedContractMethod<
    [rewardAddress: AddressLike, declaredCompute: BigNumberish, generatorData: BytesLike],
    [void],
    "nonpayable"
  >;

  renounceRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;

  requestForExitMarketPlace: TypedContractMethod<[marketId: BytesLike], [void], "nonpayable">;

  requestForExitMarketPlaces: TypedContractMethod<[marketIds: BytesLike[]], [void], "nonpayable">;

  revokeRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;

  slashGenerator: TypedContractMethod<
    [generatorAddress: AddressLike, marketId: BytesLike, slashingAmount: BigNumberish, rewardAddress: AddressLike],
    [bigint],
    "nonpayable"
  >;

  stake: TypedContractMethod<[generatorAddress: AddressLike, amount: BigNumberish], [bigint], "nonpayable">;

  stakingToken: TypedContractMethod<[], [string], "view">;

  supportsInterface: TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;

  unstake: TypedContractMethod<[receipient: AddressLike, amount: BigNumberish], [bigint], "nonpayable">;

  upgradeTo: TypedContractMethod<[newImplementation: AddressLike], [void], "nonpayable">;

  upgradeToAndCall: TypedContractMethod<[newImplementation: AddressLike, data: BytesLike], [void], "payable">;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "PARALLEL_REQUESTS_UPPER_LIMIT"): TypedContractMethod<[], [bigint], "view">;
  getFunction(nameOrSignature: "SLASHER_ROLE"): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "assignGeneratorTask"
  ): TypedContractMethod<[generatorAddress: AddressLike, marketId: BytesLike, amountToLock: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "completeGeneratorTask"
  ): TypedContractMethod<[generatorAddress: AddressLike, marketId: BytesLike, stakeToRelease: BigNumberish], [void], "nonpayable">;
  getFunction(nameOrSignature: "deregister"): TypedContractMethod<[refundAddress: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "generatorInfoPerMarket"): TypedContractMethod<
    [arg0: AddressLike, arg1: BytesLike],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        state: bigint;
        computeAllocation: bigint;
        proofGenerationCost: bigint;
        proposedTime: bigint;
        activeRequests: bigint;
      }
    ],
    "view"
  >;
  getFunction(nameOrSignature: "generatorRegistry"): TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, bigint, bigint, bigint, bigint, bigint, bigint, string] & {
        rewardAddress: string;
        totalStake: bigint;
        totalCompute: bigint;
        computeConsumed: bigint;
        stakeLocked: bigint;
        activeMarketPlaces: bigint;
        declaredCompute: bigint;
        generatorData: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getGeneratorAssignmentDetails"
  ): TypedContractMethod<[generatorAddress: AddressLike, marketId: BytesLike], [[bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "getGeneratorRewardDetails"
  ): TypedContractMethod<[generatorAddress: AddressLike, marketId: BytesLike], [[string, bigint]], "view">;
  getFunction(
    nameOrSignature: "getGeneratorState"
  ): TypedContractMethod<[generatorAddress: AddressLike, marketId: BytesLike], [[bigint, bigint]], "view">;
  getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(nameOrSignature: "getRoleMember"): TypedContractMethod<[role: BytesLike, index: BigNumberish], [string], "view">;
  getFunction(nameOrSignature: "getRoleMemberCount"): TypedContractMethod<[role: BytesLike], [bigint], "view">;
  getFunction(nameOrSignature: "grantRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "hasRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[_admin: AddressLike, _proofMarketPlace: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "joinMarketPlace"
  ): TypedContractMethod<
    [marketId: BytesLike, computeAllocation: BigNumberish, proofGenerationCost: BigNumberish, proposedTime: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(nameOrSignature: "leaveMarketPlace"): TypedContractMethod<[marketId: BytesLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "leaveMarketPlaces"): TypedContractMethod<[marketIds: BytesLike[]], [void], "nonpayable">;
  getFunction(nameOrSignature: "proofMarketPlace"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "register"
  ): TypedContractMethod<[rewardAddress: AddressLike, declaredCompute: BigNumberish, generatorData: BytesLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "renounceRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "requestForExitMarketPlace"): TypedContractMethod<[marketId: BytesLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "requestForExitMarketPlaces"): TypedContractMethod<[marketIds: BytesLike[]], [void], "nonpayable">;
  getFunction(nameOrSignature: "revokeRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "slashGenerator"
  ): TypedContractMethod<
    [generatorAddress: AddressLike, marketId: BytesLike, slashingAmount: BigNumberish, rewardAddress: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(nameOrSignature: "stake"): TypedContractMethod<[generatorAddress: AddressLike, amount: BigNumberish], [bigint], "nonpayable">;
  getFunction(nameOrSignature: "stakingToken"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(nameOrSignature: "unstake"): TypedContractMethod<[receipient: AddressLike, amount: BigNumberish], [bigint], "nonpayable">;
  getFunction(nameOrSignature: "upgradeTo"): TypedContractMethod<[newImplementation: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<[newImplementation: AddressLike, data: BytesLike], [void], "payable">;

  getEvent(key: "AddedStash"): TypedContractEvent<AddedStashEvent.InputTuple, AddedStashEvent.OutputTuple, AddedStashEvent.OutputObject>;
  getEvent(
    key: "AdminChanged"
  ): TypedContractEvent<AdminChangedEvent.InputTuple, AdminChangedEvent.OutputTuple, AdminChangedEvent.OutputObject>;
  getEvent(
    key: "BeaconUpgraded"
  ): TypedContractEvent<BeaconUpgradedEvent.InputTuple, BeaconUpgradedEvent.OutputTuple, BeaconUpgradedEvent.OutputObject>;
  getEvent(
    key: "DeregisteredGenerator"
  ): TypedContractEvent<
    DeregisteredGeneratorEvent.InputTuple,
    DeregisteredGeneratorEvent.OutputTuple,
    DeregisteredGeneratorEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
  getEvent(
    key: "JoinedMarketPlace"
  ): TypedContractEvent<JoinedMarketPlaceEvent.InputTuple, JoinedMarketPlaceEvent.OutputTuple, JoinedMarketPlaceEvent.OutputObject>;
  getEvent(
    key: "LeftMarketplace"
  ): TypedContractEvent<LeftMarketplaceEvent.InputTuple, LeftMarketplaceEvent.OutputTuple, LeftMarketplaceEvent.OutputObject>;
  getEvent(
    key: "RegisteredGenerator"
  ): TypedContractEvent<RegisteredGeneratorEvent.InputTuple, RegisteredGeneratorEvent.OutputTuple, RegisteredGeneratorEvent.OutputObject>;
  getEvent(
    key: "RemovedStash"
  ): TypedContractEvent<RemovedStashEvent.InputTuple, RemovedStashEvent.OutputTuple, RemovedStashEvent.OutputObject>;
  getEvent(
    key: "RequestExitMarketPlace"
  ): TypedContractEvent<
    RequestExitMarketPlaceEvent.InputTuple,
    RequestExitMarketPlaceEvent.OutputTuple,
    RequestExitMarketPlaceEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
  getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;

  filters: {
    "AddedStash(address,uint256)": TypedContractEvent<
      AddedStashEvent.InputTuple,
      AddedStashEvent.OutputTuple,
      AddedStashEvent.OutputObject
    >;
    AddedStash: TypedContractEvent<AddedStashEvent.InputTuple, AddedStashEvent.OutputTuple, AddedStashEvent.OutputObject>;

    "AdminChanged(address,address)": TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;
    AdminChanged: TypedContractEvent<AdminChangedEvent.InputTuple, AdminChangedEvent.OutputTuple, AdminChangedEvent.OutputObject>;

    "BeaconUpgraded(address)": TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;
    BeaconUpgraded: TypedContractEvent<BeaconUpgradedEvent.InputTuple, BeaconUpgradedEvent.OutputTuple, BeaconUpgradedEvent.OutputObject>;

    "DeregisteredGenerator(address)": TypedContractEvent<
      DeregisteredGeneratorEvent.InputTuple,
      DeregisteredGeneratorEvent.OutputTuple,
      DeregisteredGeneratorEvent.OutputObject
    >;
    DeregisteredGenerator: TypedContractEvent<
      DeregisteredGeneratorEvent.InputTuple,
      DeregisteredGeneratorEvent.OutputTuple,
      DeregisteredGeneratorEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;

    "JoinedMarketPlace(address,bytes32,uint256)": TypedContractEvent<
      JoinedMarketPlaceEvent.InputTuple,
      JoinedMarketPlaceEvent.OutputTuple,
      JoinedMarketPlaceEvent.OutputObject
    >;
    JoinedMarketPlace: TypedContractEvent<
      JoinedMarketPlaceEvent.InputTuple,
      JoinedMarketPlaceEvent.OutputTuple,
      JoinedMarketPlaceEvent.OutputObject
    >;

    "LeftMarketplace(address,bytes32)": TypedContractEvent<
      LeftMarketplaceEvent.InputTuple,
      LeftMarketplaceEvent.OutputTuple,
      LeftMarketplaceEvent.OutputObject
    >;
    LeftMarketplace: TypedContractEvent<
      LeftMarketplaceEvent.InputTuple,
      LeftMarketplaceEvent.OutputTuple,
      LeftMarketplaceEvent.OutputObject
    >;

    "RegisteredGenerator(address)": TypedContractEvent<
      RegisteredGeneratorEvent.InputTuple,
      RegisteredGeneratorEvent.OutputTuple,
      RegisteredGeneratorEvent.OutputObject
    >;
    RegisteredGenerator: TypedContractEvent<
      RegisteredGeneratorEvent.InputTuple,
      RegisteredGeneratorEvent.OutputTuple,
      RegisteredGeneratorEvent.OutputObject
    >;

    "RemovedStash(address,uint256)": TypedContractEvent<
      RemovedStashEvent.InputTuple,
      RemovedStashEvent.OutputTuple,
      RemovedStashEvent.OutputObject
    >;
    RemovedStash: TypedContractEvent<RemovedStashEvent.InputTuple, RemovedStashEvent.OutputTuple, RemovedStashEvent.OutputObject>;

    "RequestExitMarketPlace(address,bytes32)": TypedContractEvent<
      RequestExitMarketPlaceEvent.InputTuple,
      RequestExitMarketPlaceEvent.OutputTuple,
      RequestExitMarketPlaceEvent.OutputObject
    >;
    RequestExitMarketPlace: TypedContractEvent<
      RequestExitMarketPlaceEvent.InputTuple,
      RequestExitMarketPlaceEvent.OutputTuple,
      RequestExitMarketPlaceEvent.OutputObject
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
    RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;

    "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
  };
}
