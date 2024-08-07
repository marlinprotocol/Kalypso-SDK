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
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";

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

export interface MockAttestationVerifierInterface extends Interface {
  getFunction(
    nameOrSignature: "verify(bytes)" | "verify(bytes,bytes,bytes,bytes,bytes,uint256)" | "verify(bytes,(bytes,bytes,bytes,bytes,uint256))",
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "verify(bytes)", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "verify(bytes,bytes,bytes,bytes,bytes,uint256)",
    values: [BytesLike, BytesLike, BytesLike, BytesLike, BytesLike, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "verify(bytes,(bytes,bytes,bytes,bytes,uint256))",
    values: [BytesLike, IAttestationVerifier.AttestationStruct],
  ): string;

  decodeFunctionResult(functionFragment: "verify(bytes)", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify(bytes,bytes,bytes,bytes,bytes,uint256)", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify(bytes,(bytes,bytes,bytes,bytes,uint256))", data: BytesLike): Result;
}

export interface MockAttestationVerifier extends BaseContract {
  connect(runner?: ContractRunner | null): MockAttestationVerifier;
  waitForDeployment(): Promise<this>;

  interface: MockAttestationVerifierInterface;

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

  "verify(bytes)": TypedContractMethod<[arg0: BytesLike], [void], "view">;

  "verify(bytes,bytes,bytes,bytes,bytes,uint256)": TypedContractMethod<
    [attestation: BytesLike, enclaveKey: BytesLike, PCR0: BytesLike, PCR1: BytesLike, PCR2: BytesLike, timestamp: BigNumberish],
    [void],
    "view"
  >;

  "verify(bytes,(bytes,bytes,bytes,bytes,uint256))": TypedContractMethod<
    [signature: BytesLike, attestation: IAttestationVerifier.AttestationStruct],
    [void],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "verify(bytes)"): TypedContractMethod<[arg0: BytesLike], [void], "view">;
  getFunction(
    nameOrSignature: "verify(bytes,bytes,bytes,bytes,bytes,uint256)",
  ): TypedContractMethod<
    [attestation: BytesLike, enclaveKey: BytesLike, PCR0: BytesLike, PCR1: BytesLike, PCR2: BytesLike, timestamp: BigNumberish],
    [void],
    "view"
  >;
  getFunction(
    nameOrSignature: "verify(bytes,(bytes,bytes,bytes,bytes,uint256))",
  ): TypedContractMethod<[signature: BytesLike, attestation: IAttestationVerifier.AttestationStruct], [void], "view">;

  filters: {};
}
