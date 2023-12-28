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
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";

export interface IAttestationVerifierInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "safeVerify(bytes)"
      | "safeVerify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)"
      | "verify(bytes)"
      | "verify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "safeVerify(bytes)", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "safeVerify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)",
    values: [BytesLike, AddressLike, AddressLike, BytesLike, BytesLike, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "verify(bytes)", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "verify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)",
    values: [BytesLike, AddressLike, AddressLike, BytesLike, BytesLike, BytesLike, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "safeVerify(bytes)", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safeVerify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify(bytes)", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify(bytes,address,address,bytes,bytes,bytes,uint256,uint256)", data: BytesLike): Result;
}

export interface IAttestationVerifier extends BaseContract {
  connect(runner?: ContractRunner | null): IAttestationVerifier;
  waitForDeployment(): Promise<this>;

  interface: IAttestationVerifierInterface;

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

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

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

  filters: {};
}
