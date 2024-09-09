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

export interface DisputeInterface extends Interface {
  getFunction(nameOrSignature: "ENTITY_KEY_REGISTRY" | "checkDispute"): FunctionFragment;

  encodeFunctionData(functionFragment: "ENTITY_KEY_REGISTRY", values?: undefined): string;
  encodeFunctionData(functionFragment: "checkDispute", values: [BigNumberish, BytesLike, BytesLike, BytesLike]): string;

  decodeFunctionResult(functionFragment: "ENTITY_KEY_REGISTRY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "checkDispute", data: BytesLike): Result;
}

export interface Dispute extends BaseContract {
  connect(runner?: ContractRunner | null): Dispute;
  waitForDeployment(): Promise<this>;

  interface: DisputeInterface;

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

  ENTITY_KEY_REGISTRY: TypedContractMethod<[], [string], "view">;

  checkDispute: TypedContractMethod<
    [askId: BigNumberish, proverData: BytesLike, invalidProofSignature: BytesLike, expectedFamilyId: BytesLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "ENTITY_KEY_REGISTRY"): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "checkDispute",
  ): TypedContractMethod<
    [askId: BigNumberish, proverData: BytesLike, invalidProofSignature: BytesLike, expectedFamilyId: BytesLike],
    [boolean],
    "view"
  >;

  filters: {};
}
