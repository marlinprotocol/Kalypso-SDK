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

export declare namespace AttestationVerifier {
  export type EnclaveImageStruct = {
    PCR0: BytesLike;
    PCR1: BytesLike;
    PCR2: BytesLike;
  };

  export type EnclaveImageStructOutput = [PCR0: string, PCR1: string, PCR2: string] & { PCR0: string; PCR1: string; PCR2: string };
}

export declare namespace IAttestationVerifier {
  export type AttestationStruct = {
    enclavePubKey: BytesLike;
    PCR0: BytesLike;
    PCR1: BytesLike;
    PCR2: BytesLike;
    timestampInMilliseconds: BigNumberish;
  };

  export type AttestationStructOutput = [
    enclavePubKey: string,
    PCR0: string,
    PCR1: string,
    PCR2: string,
    timestampInMilliseconds: bigint,
  ] & {
    enclavePubKey: string;
    PCR0: string;
    PCR1: string;
    PCR2: string;
    timestampInMilliseconds: bigint;
  };
}

export interface AttestationVerifierInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "MAX_AGE"
      | "UPGRADE_INTERFACE_VERSION"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "proxiableUUID"
      | "pubKeyToAddress"
      | "renounceRole"
      | "revokeEnclaveImage"
      | "revokeEnclaveKey"
      | "revokeRole"
      | "supportsInterface"
      | "upgradeToAndCall"
      | "verifiedKeys"
      | "verify(bytes)"
      | "verify(bytes,(bytes,bytes,bytes,bytes,uint256))"
      | "verifyEnclaveKey"
      | "whitelistEnclaveImage"
      | "whitelistEnclaveKey"
      | "whitelistedImages",
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "EnclaveImageRevoked"
      | "EnclaveImageWhitelisted"
      | "EnclaveKeyRevoked"
      | "EnclaveKeyVerified"
      | "EnclaveKeyWhitelisted"
      | "Initialized"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "Upgraded",
  ): EventFragment;

  encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "MAX_AGE", values?: undefined): string;
  encodeFunctionData(functionFragment: "UPGRADE_INTERFACE_VERSION", values?: undefined): string;
  encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "initialize", values: [AttestationVerifier.EnclaveImageStruct[], BytesLike[], AddressLike]): string;
  encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
  encodeFunctionData(functionFragment: "pubKeyToAddress", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "revokeEnclaveImage", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "revokeEnclaveKey", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
  encodeFunctionData(functionFragment: "verifiedKeys", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "verify(bytes)", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "verify(bytes,(bytes,bytes,bytes,bytes,uint256))",
    values: [BytesLike, IAttestationVerifier.AttestationStruct],
  ): string;
  encodeFunctionData(functionFragment: "verifyEnclaveKey", values: [BytesLike, IAttestationVerifier.AttestationStruct]): string;
  encodeFunctionData(functionFragment: "whitelistEnclaveImage", values: [BytesLike, BytesLike, BytesLike]): string;
  encodeFunctionData(functionFragment: "whitelistEnclaveKey", values: [BytesLike, BytesLike]): string;
  encodeFunctionData(functionFragment: "whitelistedImages", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MAX_AGE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "UPGRADE_INTERFACE_VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pubKeyToAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revokeEnclaveImage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revokeEnclaveKey", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifiedKeys", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify(bytes)", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify(bytes,(bytes,bytes,bytes,bytes,uint256))", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifyEnclaveKey", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "whitelistEnclaveImage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "whitelistEnclaveKey", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "whitelistedImages", data: BytesLike): Result;
}

export namespace EnclaveImageRevokedEvent {
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

export namespace EnclaveKeyRevokedEvent {
  export type InputTuple = [enclavePubKey: BytesLike];
  export type OutputTuple = [enclavePubKey: string];
  export interface OutputObject {
    enclavePubKey: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EnclaveKeyVerifiedEvent {
  export type InputTuple = [enclavePubKey: BytesLike, imageId: BytesLike];
  export type OutputTuple = [enclavePubKey: string, imageId: string];
  export interface OutputObject {
    enclavePubKey: string;
    imageId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EnclaveKeyWhitelistedEvent {
  export type InputTuple = [enclavePubKey: BytesLike, imageId: BytesLike];
  export type OutputTuple = [enclavePubKey: string, imageId: string];
  export interface OutputObject {
    enclavePubKey: string;
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

export interface AttestationVerifier extends BaseContract {
  connect(runner?: ContractRunner | null): AttestationVerifier;
  waitForDeployment(): Promise<this>;

  interface: AttestationVerifierInterface;

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

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  MAX_AGE: TypedContractMethod<[], [bigint], "view">;

  UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;

  hasRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [boolean], "view">;

  initialize: TypedContractMethod<
    [images: AttestationVerifier.EnclaveImageStruct[], enclaveKeys: BytesLike[], _admin: AddressLike],
    [void],
    "nonpayable"
  >;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  pubKeyToAddress: TypedContractMethod<[pubKey: BytesLike], [string], "view">;

  renounceRole: TypedContractMethod<[role: BytesLike, callerConfirmation: AddressLike], [void], "nonpayable">;

  revokeEnclaveImage: TypedContractMethod<[imageId: BytesLike], [void], "nonpayable">;

  revokeEnclaveKey: TypedContractMethod<[enclavePubKey: BytesLike], [void], "nonpayable">;

  revokeRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;

  supportsInterface: TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;

  upgradeToAndCall: TypedContractMethod<[newImplementation: AddressLike, data: BytesLike], [void], "payable">;

  verifiedKeys: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  "verify(bytes)": TypedContractMethod<[data: BytesLike], [void], "view">;

  "verify(bytes,(bytes,bytes,bytes,bytes,uint256))": TypedContractMethod<
    [signature: BytesLike, attestation: IAttestationVerifier.AttestationStruct],
    [void],
    "view"
  >;

  verifyEnclaveKey: TypedContractMethod<[signature: BytesLike, attestation: IAttestationVerifier.AttestationStruct], [void], "nonpayable">;

  whitelistEnclaveImage: TypedContractMethod<[PCR0: BytesLike, PCR1: BytesLike, PCR2: BytesLike], [void], "nonpayable">;

  whitelistEnclaveKey: TypedContractMethod<[enclavePubKey: BytesLike, imageId: BytesLike], [void], "nonpayable">;

  whitelistedImages: TypedContractMethod<
    [arg0: BytesLike],
    [[string, string, string] & { PCR0: string; PCR1: string; PCR2: string }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "MAX_AGE"): TypedContractMethod<[], [bigint], "view">;
  getFunction(nameOrSignature: "UPGRADE_INTERFACE_VERSION"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(nameOrSignature: "grantRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "hasRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "initialize",
  ): TypedContractMethod<
    [images: AttestationVerifier.EnclaveImageStruct[], enclaveKeys: BytesLike[], _admin: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(nameOrSignature: "proxiableUUID"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "pubKeyToAddress"): TypedContractMethod<[pubKey: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "renounceRole",
  ): TypedContractMethod<[role: BytesLike, callerConfirmation: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "revokeEnclaveImage"): TypedContractMethod<[imageId: BytesLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "revokeEnclaveKey"): TypedContractMethod<[enclavePubKey: BytesLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "revokeRole"): TypedContractMethod<[role: BytesLike, account: AddressLike], [void], "nonpayable">;
  getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "upgradeToAndCall",
  ): TypedContractMethod<[newImplementation: AddressLike, data: BytesLike], [void], "payable">;
  getFunction(nameOrSignature: "verifiedKeys"): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(nameOrSignature: "verify(bytes)"): TypedContractMethod<[data: BytesLike], [void], "view">;
  getFunction(
    nameOrSignature: "verify(bytes,(bytes,bytes,bytes,bytes,uint256))",
  ): TypedContractMethod<[signature: BytesLike, attestation: IAttestationVerifier.AttestationStruct], [void], "view">;
  getFunction(
    nameOrSignature: "verifyEnclaveKey",
  ): TypedContractMethod<[signature: BytesLike, attestation: IAttestationVerifier.AttestationStruct], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "whitelistEnclaveImage",
  ): TypedContractMethod<[PCR0: BytesLike, PCR1: BytesLike, PCR2: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "whitelistEnclaveKey",
  ): TypedContractMethod<[enclavePubKey: BytesLike, imageId: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "whitelistedImages",
  ): TypedContractMethod<[arg0: BytesLike], [[string, string, string] & { PCR0: string; PCR1: string; PCR2: string }], "view">;

  getEvent(
    key: "EnclaveImageRevoked",
  ): TypedContractEvent<EnclaveImageRevokedEvent.InputTuple, EnclaveImageRevokedEvent.OutputTuple, EnclaveImageRevokedEvent.OutputObject>;
  getEvent(
    key: "EnclaveImageWhitelisted",
  ): TypedContractEvent<
    EnclaveImageWhitelistedEvent.InputTuple,
    EnclaveImageWhitelistedEvent.OutputTuple,
    EnclaveImageWhitelistedEvent.OutputObject
  >;
  getEvent(
    key: "EnclaveKeyRevoked",
  ): TypedContractEvent<EnclaveKeyRevokedEvent.InputTuple, EnclaveKeyRevokedEvent.OutputTuple, EnclaveKeyRevokedEvent.OutputObject>;
  getEvent(
    key: "EnclaveKeyVerified",
  ): TypedContractEvent<EnclaveKeyVerifiedEvent.InputTuple, EnclaveKeyVerifiedEvent.OutputTuple, EnclaveKeyVerifiedEvent.OutputObject>;
  getEvent(
    key: "EnclaveKeyWhitelisted",
  ): TypedContractEvent<
    EnclaveKeyWhitelistedEvent.InputTuple,
    EnclaveKeyWhitelistedEvent.OutputTuple,
    EnclaveKeyWhitelistedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized",
  ): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
  getEvent(
    key: "RoleAdminChanged",
  ): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
  getEvent(
    key: "RoleGranted",
  ): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
  getEvent(
    key: "RoleRevoked",
  ): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
  getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;

  filters: {
    "EnclaveImageRevoked(bytes32)": TypedContractEvent<
      EnclaveImageRevokedEvent.InputTuple,
      EnclaveImageRevokedEvent.OutputTuple,
      EnclaveImageRevokedEvent.OutputObject
    >;
    EnclaveImageRevoked: TypedContractEvent<
      EnclaveImageRevokedEvent.InputTuple,
      EnclaveImageRevokedEvent.OutputTuple,
      EnclaveImageRevokedEvent.OutputObject
    >;

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

    "EnclaveKeyRevoked(bytes)": TypedContractEvent<
      EnclaveKeyRevokedEvent.InputTuple,
      EnclaveKeyRevokedEvent.OutputTuple,
      EnclaveKeyRevokedEvent.OutputObject
    >;
    EnclaveKeyRevoked: TypedContractEvent<
      EnclaveKeyRevokedEvent.InputTuple,
      EnclaveKeyRevokedEvent.OutputTuple,
      EnclaveKeyRevokedEvent.OutputObject
    >;

    "EnclaveKeyVerified(bytes,bytes32)": TypedContractEvent<
      EnclaveKeyVerifiedEvent.InputTuple,
      EnclaveKeyVerifiedEvent.OutputTuple,
      EnclaveKeyVerifiedEvent.OutputObject
    >;
    EnclaveKeyVerified: TypedContractEvent<
      EnclaveKeyVerifiedEvent.InputTuple,
      EnclaveKeyVerifiedEvent.OutputTuple,
      EnclaveKeyVerifiedEvent.OutputObject
    >;

    "EnclaveKeyWhitelisted(bytes,bytes32)": TypedContractEvent<
      EnclaveKeyWhitelistedEvent.InputTuple,
      EnclaveKeyWhitelistedEvent.OutputTuple,
      EnclaveKeyWhitelistedEvent.OutputObject
    >;
    EnclaveKeyWhitelisted: TypedContractEvent<
      EnclaveKeyWhitelistedEvent.InputTuple,
      EnclaveKeyWhitelistedEvent.OutputTuple,
      EnclaveKeyWhitelistedEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
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
  };
}
