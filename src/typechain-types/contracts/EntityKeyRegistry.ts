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

export interface EntityKeyRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "KEY_REGISTER_ROLE"
      | "addGeneratorRegistry"
      | "attestationVerifier"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "pub_key"
      | "removePubkey"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
      | "updatePubkey"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Initialized" | "RemoveKey" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "UpdateKey"
  ): EventFragment;

  encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "KEY_REGISTER_ROLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "addGeneratorRegistry", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "attestationVerifier", values?: undefined): string;
  encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "pub_key", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "removePubkey", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "updatePubkey", values: [AddressLike, BytesLike, BytesLike]): string;

  decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "KEY_REGISTER_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addGeneratorRegistry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "attestationVerifier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pub_key", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removePubkey", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updatePubkey", data: BytesLike): Result;
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

export namespace RemoveKeyEvent {
  export type InputTuple = [user: AddressLike];
  export type OutputTuple = [user: string];
  export interface OutputObject {
    user: string;
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

export namespace UpdateKeyEvent {
  export type InputTuple = [user: AddressLike];
  export type OutputTuple = [user: string];
  export interface OutputObject {
    user: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface EntityKeyRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): EntityKeyRegistry;
  waitForDeployment(): Promise<this>;

  interface: EntityKeyRegistryInterface;

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

  KEY_REGISTER_ROLE: TypedContractMethod<[], [string], "view">;

  addGeneratorRegistry: TypedContractMethod<[_generatorRegistry: AddressLike], [void], "nonpayable">;

  attestationVerifier: TypedContractMethod<[], [string], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;

  hasRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [boolean], "view">;

  pub_key: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  removePubkey: TypedContractMethod<[key_owner: AddressLike], [void], "nonpayable">;

  renounceRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;

  revokeRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;

  supportsInterface: TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;

  updatePubkey: TypedContractMethod<[key_owner: AddressLike, pubkey: BytesLike, attestation_data: BytesLike], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "KEY_REGISTER_ROLE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "addGeneratorRegistry"): TypedContractMethod<[_generatorRegistry: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "attestationVerifier"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(nameOrSignature: "grantRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "hasRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [boolean], "view">;
  getFunction(nameOrSignature: "pub_key"): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(nameOrSignature: "removePubkey"): TypedContractMethod<[key_owner: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "renounceRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "revokeRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "updatePubkey"
  ): TypedContractMethod<[key_owner: AddressLike, pubkey: BytesLike, attestation_data: BytesLike], [void], "nonpayable">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
  getEvent(key: "RemoveKey"): TypedContractEvent<RemoveKeyEvent.InputTuple, RemoveKeyEvent.OutputTuple, RemoveKeyEvent.OutputObject>;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
  getEvent(key: "UpdateKey"): TypedContractEvent<UpdateKeyEvent.InputTuple, UpdateKeyEvent.OutputTuple, UpdateKeyEvent.OutputObject>;

  filters: {
    "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;

    "RemoveKey(address)": TypedContractEvent<RemoveKeyEvent.InputTuple, RemoveKeyEvent.OutputTuple, RemoveKeyEvent.OutputObject>;
    RemoveKey: TypedContractEvent<RemoveKeyEvent.InputTuple, RemoveKeyEvent.OutputTuple, RemoveKeyEvent.OutputObject>;

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

    "UpdateKey(address)": TypedContractEvent<UpdateKeyEvent.InputTuple, UpdateKeyEvent.OutputTuple, UpdateKeyEvent.OutputObject>;
    UpdateKey: TypedContractEvent<UpdateKeyEvent.InputTuple, UpdateKeyEvent.OutputTuple, UpdateKeyEvent.OutputObject>;
  };
}
