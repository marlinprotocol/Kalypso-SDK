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

export declare namespace AttestationVerifier {
  export type EnclaveImageStruct = {
    PCR0: BytesLike;
    PCR1: BytesLike;
    PCR2: BytesLike;
  };

  export type EnclaveImageStructOutput = [PCR0: string, PCR1: string, PCR2: string] & { PCR0: string; PCR1: string; PCR2: string };
}

export interface AttestationVerifierInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ATTESTATION_PREFIX"
      | "DEFAULT_ADMIN_ROLE"
      | "getRoleAdmin"
      | "getRoleMember"
      | "getRoleMemberCount"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "isVerified"
      | "proxiableUUID"
      | "renounceRole"
      | "revokeRole"
      | "revokeWhitelistedEnclave"
      | "revokeWhitelistedImage"
      | "safeVerify(bytes)"
      | "safeVerify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)"
      | "supportsInterface"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "verify(bytes)"
      | "verify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)"
      | "verifyEnclaveKey"
      | "whitelistEnclaveKey"
      | "whitelistImage"
      | "whitelistedImages"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminChanged"
      | "BeaconUpgraded"
      | "EnclaveImageWhitelisted"
      | "EnclaveKeyVerified"
      | "EnclaveKeyWhitelisted"
      | "Initialized"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "Upgraded"
      | "WhitelistedEnclaveKeyRevoked"
      | "WhitelistedImageRevoked"
  ): EventFragment;

  encodeFunctionData(functionFragment: "ATTESTATION_PREFIX", values?: undefined): string;
  encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
  encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AttestationVerifier.EnclaveImageStruct[], AddressLike[], AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "isVerified", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
  encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "revokeWhitelistedEnclave", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "revokeWhitelistedImage", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "safeVerify(bytes)", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "safeVerify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)",
    values: [BytesLike, AddressLike, AddressLike, BytesLike, BytesLike, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
  encodeFunctionData(functionFragment: "verify(bytes)", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "verify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)",
    values: [BytesLike, AddressLike, AddressLike, BytesLike, BytesLike, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyEnclaveKey",
    values: [BytesLike, AddressLike, AddressLike, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "whitelistEnclaveKey", values: [AddressLike, BytesLike]): string;
  encodeFunctionData(functionFragment: "whitelistImage", values: [BytesLike, BytesLike, BytesLike]): string;
  encodeFunctionData(functionFragment: "whitelistedImages", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "ATTESTATION_PREFIX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isVerified", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revokeWhitelistedEnclave", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revokeWhitelistedImage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safeVerify(bytes)", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safeVerify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify(bytes)", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifyEnclaveKey", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "whitelistEnclaveKey", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "whitelistImage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "whitelistedImages", data: BytesLike): Result;
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

export namespace EnclaveImageWhitelistedEvent {
  export type InputTuple = [imageId: BytesLike, PCR0: BytesLike, PCR1: BytesLike, PCR2: BytesLike];
  export type OutputTuple = [imageId: string, PCR0: string, PCR1: string, PCR2: string];
  export interface OutputObject {
    imageId: string;
    PCR0: string;
    PCR1: string;
    PCR2: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EnclaveKeyVerifiedEvent {
  export type InputTuple = [enclaveKey: AddressLike, imageId: BytesLike];
  export type OutputTuple = [enclaveKey: string, imageId: string];
  export interface OutputObject {
    enclaveKey: string;
    imageId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EnclaveKeyWhitelistedEvent {
  export type InputTuple = [enclaveKey: AddressLike, imageId: BytesLike];
  export type OutputTuple = [enclaveKey: string, imageId: string];
  export interface OutputObject {
    enclaveKey: string;
    imageId: string;
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

export namespace WhitelistedEnclaveKeyRevokedEvent {
  export type InputTuple = [enclaveKey: AddressLike, imageId: BytesLike];
  export type OutputTuple = [enclaveKey: string, imageId: string];
  export interface OutputObject {
    enclaveKey: string;
    imageId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WhitelistedImageRevokedEvent {
  export type InputTuple = [imageId: BytesLike];
  export type OutputTuple = [imageId: string];
  export interface OutputObject {
    imageId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AttestationVerifier extends BaseContract {
  connect(runner?: ContractRunner | null): AttestationVerifier;
  waitForDeployment(): Promise<this>;

  interface: AttestationVerifierInterface;

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

  ATTESTATION_PREFIX: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  getRoleMember: TypedContractMethod<[role: BytesLike, index: BigNumberish], [string], "view">;

  getRoleMemberCount: TypedContractMethod<[role: BytesLike], [bigint], "view">;

  grantRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;

  hasRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [boolean], "view">;

  initialize: TypedContractMethod<
    [images: AttestationVerifier.EnclaveImageStruct[], enclaveKeys: AddressLike[], _admin: AddressLike],
    [void],
    "nonpayable"
  >;

  isVerified: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  renounceRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;

  revokeRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;

  revokeWhitelistedEnclave: TypedContractMethod<[enclaveKey: AddressLike], [void], "nonpayable">;

  revokeWhitelistedImage: TypedContractMethod<[imageId: BytesLike], [void], "nonpayable">;

  "safeVerify(bytes)": TypedContractMethod<[data: BytesLike], [void], "view">;

  "safeVerify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)": TypedContractMethod<
    [
      attestation: BytesLike,
      sourceEnclaveKey: AddressLike,
      enclaveKey: AddressLike,
      PCR0: BytesLike,
      PCR1: BytesLike,
      PCR2: BytesLike,
      enclaveCPUs: BigNumberish,
      enclaveMemory: BigNumberish
    ],
    [void],
    "view"
  >;

  supportsInterface: TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;

  upgradeTo: TypedContractMethod<[newImplementation: AddressLike], [void], "nonpayable">;

  upgradeToAndCall: TypedContractMethod<[newImplementation: AddressLike, data: BytesLike], [void], "payable">;

  "verify(bytes)": TypedContractMethod<[data: BytesLike], [boolean], "view">;

  "verify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)": TypedContractMethod<
    [
      attestation: BytesLike,
      sourceEnclaveKey: AddressLike,
      enclaveKey: AddressLike,
      PCR0: BytesLike,
      PCR1: BytesLike,
      PCR2: BytesLike,
      enclaveCPUs: BigNumberish,
      enclaveMemory: BigNumberish
    ],
    [boolean],
    "view"
  >;

  verifyEnclaveKey: TypedContractMethod<
    [
      attestation: BytesLike,
      sourceEnclaveKey: AddressLike,
      enclaveKey: AddressLike,
      imageId: BytesLike,
      enclaveCPUs: BigNumberish,
      enclaveMemory: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  whitelistEnclaveKey: TypedContractMethod<[enclaveKey: AddressLike, imageId: BytesLike], [void], "nonpayable">;

  whitelistImage: TypedContractMethod<[PCR0: BytesLike, PCR1: BytesLike, PCR2: BytesLike], [void], "nonpayable">;

  whitelistedImages: TypedContractMethod<
    [arg0: BytesLike],
    [[string, string, string] & { PCR0: string; PCR1: string; PCR2: string }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "ATTESTATION_PREFIX"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(nameOrSignature: "getRoleMember"): TypedContractMethod<[role: BytesLike, index: BigNumberish], [string], "view">;
  getFunction(nameOrSignature: "getRoleMemberCount"): TypedContractMethod<[role: BytesLike], [bigint], "view">;
  getFunction(nameOrSignature: "grantRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "hasRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [images: AttestationVerifier.EnclaveImageStruct[], enclaveKeys: AddressLike[], _admin: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(nameOrSignature: "isVerified"): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "renounceRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "revokeRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "revokeWhitelistedEnclave"): TypedContractMethod<[enclaveKey: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "revokeWhitelistedImage"): TypedContractMethod<[imageId: BytesLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "safeVerify(bytes)"): TypedContractMethod<[data: BytesLike], [void], "view">;
  getFunction(
    nameOrSignature: "safeVerify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)"
  ): TypedContractMethod<
    [
      attestation: BytesLike,
      sourceEnclaveKey: AddressLike,
      enclaveKey: AddressLike,
      PCR0: BytesLike,
      PCR1: BytesLike,
      PCR2: BytesLike,
      enclaveCPUs: BigNumberish,
      enclaveMemory: BigNumberish
    ],
    [void],
    "view"
  >;
  getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(nameOrSignature: "upgradeTo"): TypedContractMethod<[newImplementation: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<[newImplementation: AddressLike, data: BytesLike], [void], "payable">;
  getFunction(nameOrSignature: "verify(bytes)"): TypedContractMethod<[data: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "verify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)"
  ): TypedContractMethod<
    [
      attestation: BytesLike,
      sourceEnclaveKey: AddressLike,
      enclaveKey: AddressLike,
      PCR0: BytesLike,
      PCR1: BytesLike,
      PCR2: BytesLike,
      enclaveCPUs: BigNumberish,
      enclaveMemory: BigNumberish
    ],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "verifyEnclaveKey"
  ): TypedContractMethod<
    [
      attestation: BytesLike,
      sourceEnclaveKey: AddressLike,
      enclaveKey: AddressLike,
      imageId: BytesLike,
      enclaveCPUs: BigNumberish,
      enclaveMemory: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "whitelistEnclaveKey"
  ): TypedContractMethod<[enclaveKey: AddressLike, imageId: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "whitelistImage"
  ): TypedContractMethod<[PCR0: BytesLike, PCR1: BytesLike, PCR2: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "whitelistedImages"
  ): TypedContractMethod<[arg0: BytesLike], [[string, string, string] & { PCR0: string; PCR1: string; PCR2: string }], "view">;

  getEvent(
    key: "AdminChanged"
  ): TypedContractEvent<AdminChangedEvent.InputTuple, AdminChangedEvent.OutputTuple, AdminChangedEvent.OutputObject>;
  getEvent(
    key: "BeaconUpgraded"
  ): TypedContractEvent<BeaconUpgradedEvent.InputTuple, BeaconUpgradedEvent.OutputTuple, BeaconUpgradedEvent.OutputObject>;
  getEvent(
    key: "EnclaveImageWhitelisted"
  ): TypedContractEvent<
    EnclaveImageWhitelistedEvent.InputTuple,
    EnclaveImageWhitelistedEvent.OutputTuple,
    EnclaveImageWhitelistedEvent.OutputObject
  >;
  getEvent(
    key: "EnclaveKeyVerified"
  ): TypedContractEvent<EnclaveKeyVerifiedEvent.InputTuple, EnclaveKeyVerifiedEvent.OutputTuple, EnclaveKeyVerifiedEvent.OutputObject>;
  getEvent(
    key: "EnclaveKeyWhitelisted"
  ): TypedContractEvent<
    EnclaveKeyWhitelistedEvent.InputTuple,
    EnclaveKeyWhitelistedEvent.OutputTuple,
    EnclaveKeyWhitelistedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
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
  getEvent(
    key: "WhitelistedEnclaveKeyRevoked"
  ): TypedContractEvent<
    WhitelistedEnclaveKeyRevokedEvent.InputTuple,
    WhitelistedEnclaveKeyRevokedEvent.OutputTuple,
    WhitelistedEnclaveKeyRevokedEvent.OutputObject
  >;
  getEvent(
    key: "WhitelistedImageRevoked"
  ): TypedContractEvent<
    WhitelistedImageRevokedEvent.InputTuple,
    WhitelistedImageRevokedEvent.OutputTuple,
    WhitelistedImageRevokedEvent.OutputObject
  >;

  filters: {
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

    "EnclaveImageWhitelisted(bytes32,bytes,bytes,bytes)": TypedContractEvent<
      EnclaveImageWhitelistedEvent.InputTuple,
      EnclaveImageWhitelistedEvent.OutputTuple,
      EnclaveImageWhitelistedEvent.OutputObject
    >;
    EnclaveImageWhitelisted: TypedContractEvent<
      EnclaveImageWhitelistedEvent.InputTuple,
      EnclaveImageWhitelistedEvent.OutputTuple,
      EnclaveImageWhitelistedEvent.OutputObject
    >;

    "EnclaveKeyVerified(address,bytes32)": TypedContractEvent<
      EnclaveKeyVerifiedEvent.InputTuple,
      EnclaveKeyVerifiedEvent.OutputTuple,
      EnclaveKeyVerifiedEvent.OutputObject
    >;
    EnclaveKeyVerified: TypedContractEvent<
      EnclaveKeyVerifiedEvent.InputTuple,
      EnclaveKeyVerifiedEvent.OutputTuple,
      EnclaveKeyVerifiedEvent.OutputObject
    >;

    "EnclaveKeyWhitelisted(address,bytes32)": TypedContractEvent<
      EnclaveKeyWhitelistedEvent.InputTuple,
      EnclaveKeyWhitelistedEvent.OutputTuple,
      EnclaveKeyWhitelistedEvent.OutputObject
    >;
    EnclaveKeyWhitelisted: TypedContractEvent<
      EnclaveKeyWhitelistedEvent.InputTuple,
      EnclaveKeyWhitelistedEvent.OutputTuple,
      EnclaveKeyWhitelistedEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;

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

    "WhitelistedEnclaveKeyRevoked(address,bytes32)": TypedContractEvent<
      WhitelistedEnclaveKeyRevokedEvent.InputTuple,
      WhitelistedEnclaveKeyRevokedEvent.OutputTuple,
      WhitelistedEnclaveKeyRevokedEvent.OutputObject
    >;
    WhitelistedEnclaveKeyRevoked: TypedContractEvent<
      WhitelistedEnclaveKeyRevokedEvent.InputTuple,
      WhitelistedEnclaveKeyRevokedEvent.OutputTuple,
      WhitelistedEnclaveKeyRevokedEvent.OutputObject
    >;

    "WhitelistedImageRevoked(bytes32)": TypedContractEvent<
      WhitelistedImageRevokedEvent.InputTuple,
      WhitelistedImageRevokedEvent.OutputTuple,
      WhitelistedImageRevokedEvent.OutputObject
    >;
    WhitelistedImageRevoked: TypedContractEvent<
      WhitelistedImageRevokedEvent.InputTuple,
      WhitelistedImageRevokedEvent.OutputTuple,
      WhitelistedImageRevokedEvent.OutputObject
    >;
  };
}
