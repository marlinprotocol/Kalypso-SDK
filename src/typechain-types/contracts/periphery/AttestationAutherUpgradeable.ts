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

export interface AttestationAutherUpgradeableInterface extends Interface {
  getFunction(nameOrSignature: "ATTESTATION_MAX_AGE" | "ATTESTATION_VERIFIER" | "verifyKey"): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "EnclaveImageRevoked"
      | "EnclaveImageWhitelisted"
      | "EnclaveKeyRevoked"
      | "EnclaveKeyVerified"
      | "EnclaveKeyWhitelisted"
      | "Initialized"
  ): EventFragment;

  encodeFunctionData(functionFragment: "ATTESTATION_MAX_AGE", values?: undefined): string;
  encodeFunctionData(functionFragment: "ATTESTATION_VERIFIER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "verifyKey",
    values: [BytesLike, BytesLike, BytesLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ATTESTATION_MAX_AGE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ATTESTATION_VERIFIER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifyKey", data: BytesLike): Result;
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

export interface AttestationAutherUpgradeable extends BaseContract {
  connect(runner?: ContractRunner | null): AttestationAutherUpgradeable;
  waitForDeployment(): Promise<this>;

  interface: AttestationAutherUpgradeableInterface;

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

  ATTESTATION_MAX_AGE: TypedContractMethod<[], [bigint], "view">;

  ATTESTATION_VERIFIER: TypedContractMethod<[], [string], "view">;

  verifyKey: TypedContractMethod<
    [
      signature: BytesLike,
      enclavePubKey: BytesLike,
      imageId: BytesLike,
      enclaveCPUs: BigNumberish,
      enclaveMemory: BigNumberish,
      timestampInMilliseconds: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "ATTESTATION_MAX_AGE"): TypedContractMethod<[], [bigint], "view">;
  getFunction(nameOrSignature: "ATTESTATION_VERIFIER"): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "verifyKey"
  ): TypedContractMethod<
    [
      signature: BytesLike,
      enclavePubKey: BytesLike,
      imageId: BytesLike,
      enclaveCPUs: BigNumberish,
      enclaveMemory: BigNumberish,
      timestampInMilliseconds: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "EnclaveImageRevoked"
  ): TypedContractEvent<EnclaveImageRevokedEvent.InputTuple, EnclaveImageRevokedEvent.OutputTuple, EnclaveImageRevokedEvent.OutputObject>;
  getEvent(
    key: "EnclaveImageWhitelisted"
  ): TypedContractEvent<
    EnclaveImageWhitelistedEvent.InputTuple,
    EnclaveImageWhitelistedEvent.OutputTuple,
    EnclaveImageWhitelistedEvent.OutputObject
  >;
  getEvent(
    key: "EnclaveKeyRevoked"
  ): TypedContractEvent<EnclaveKeyRevokedEvent.InputTuple, EnclaveKeyRevokedEvent.OutputTuple, EnclaveKeyRevokedEvent.OutputObject>;
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

    "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
  };
}
