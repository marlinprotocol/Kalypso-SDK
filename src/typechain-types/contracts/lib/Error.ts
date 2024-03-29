/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";

export interface ErrorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ALREADY_JOINED_MARKET"
      | "ARITY_MISMATCH"
      | "ASSIGN_ONLY_TO_IDLE_GENERATORS"
      | "ATTESTATION_TIMEOUT"
      | "CANNOT_BE_ADMIN_LESS"
      | "CANNOT_BE_ZERO"
      | "CANNOT_USE_MATCHING_ENGINE_ROLE"
      | "CAN_N0T_BE_SLASHED"
      | "CAN_NOT_ASSIGN_EXPIRED_TASKS"
      | "CAN_NOT_BE_MORE_THAN_DECLARED_COMPUTE"
      | "CAN_NOT_LEAVE_MARKET_WITH_ACTIVE_REQUEST"
      | "CAN_NOT_LEAVE_WITH_ACTIVE_MARKET"
      | "CAN_NOT_SLASH_USING_VALID_INPUTS"
      | "ENCLAVE_KEY_NOT_VERIFIED"
      | "EXCEEDS_ACCEPTABLE_RANGE"
      | "GENERATOR_ALREADY_EXISTS"
      | "INACTIVE_MARKET"
      | "INCORRECT_IMAGE_ID"
      | "INSUFFICIENT_GENERATOR_COMPUTE_AVAILABLE"
      | "INSUFFICIENT_STAKE_TO_LOCK"
      | "INVALID_CONTRACT_ADDRESS"
      | "INVALID_ECIES_ACL"
      | "INVALID_ENCLAVE_KEY"
      | "INVALID_ENCLAVE_SIGNATURE"
      | "INVALID_GENERATOR"
      | "INVALID_GENERATOR_STATE_PER_MARKET"
      | "INVALID_INPUTS"
      | "INVALID_MARKET"
      | "INVALID_PROOF"
      | "KEY_ALREADY_EXISTS"
      | "MARKET_ALREADY_EXISTS"
      | "MAX_PARALLEL_REQUESTS_PER_MARKET_EXCEEDED"
      | "ONLY_ADMIN_CAN_CALL"
      | "ONLY_ASSIGNED_ASKS_CAN_BE_PROVED"
      | "ONLY_EXPIRED_ASKS_CAN_BE_CANCELLED"
      | "ONLY_GENERATOR_CAN_DISCARD_REQUEST"
      | "ONLY_MATCHING_ENGINE_CAN_ASSIGN"
      | "ONLY_VALID_GENERATORS_CAN_REQUEST_EXIT"
      | "ONLY_WORKING_GENERATORS"
      | "PROOF_PRICE_MISMATCH"
      | "PROOF_TIME_MISMATCH"
      | "PUBLIC_MARKETS_DONT_NEED_KEY"
      | "REDUCE_COMPUTE_REQUEST_NOT_IN_PLACE"
      | "REDUCTION_REQUEST_NOT_VALID"
      | "REQUEST_ALREADY_IN_PLACE"
      | "SHOULD_BE_IN_ASSIGNED_STATE"
      | "SHOULD_BE_IN_CREATE_STATE"
      | "SHOULD_BE_IN_CROSSED_DEADLINE_STATE"
      | "UNSTAKE_REQUEST_NOT_IN_PLACE"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ALREADY_JOINED_MARKET", values?: undefined): string;
  encodeFunctionData(functionFragment: "ARITY_MISMATCH", values?: undefined): string;
  encodeFunctionData(functionFragment: "ASSIGN_ONLY_TO_IDLE_GENERATORS", values?: undefined): string;
  encodeFunctionData(functionFragment: "ATTESTATION_TIMEOUT", values?: undefined): string;
  encodeFunctionData(functionFragment: "CANNOT_BE_ADMIN_LESS", values?: undefined): string;
  encodeFunctionData(functionFragment: "CANNOT_BE_ZERO", values?: undefined): string;
  encodeFunctionData(functionFragment: "CANNOT_USE_MATCHING_ENGINE_ROLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "CAN_N0T_BE_SLASHED", values?: undefined): string;
  encodeFunctionData(functionFragment: "CAN_NOT_ASSIGN_EXPIRED_TASKS", values?: undefined): string;
  encodeFunctionData(functionFragment: "CAN_NOT_BE_MORE_THAN_DECLARED_COMPUTE", values?: undefined): string;
  encodeFunctionData(functionFragment: "CAN_NOT_LEAVE_MARKET_WITH_ACTIVE_REQUEST", values?: undefined): string;
  encodeFunctionData(functionFragment: "CAN_NOT_LEAVE_WITH_ACTIVE_MARKET", values?: undefined): string;
  encodeFunctionData(functionFragment: "CAN_NOT_SLASH_USING_VALID_INPUTS", values?: undefined): string;
  encodeFunctionData(functionFragment: "ENCLAVE_KEY_NOT_VERIFIED", values?: undefined): string;
  encodeFunctionData(functionFragment: "EXCEEDS_ACCEPTABLE_RANGE", values?: undefined): string;
  encodeFunctionData(functionFragment: "GENERATOR_ALREADY_EXISTS", values?: undefined): string;
  encodeFunctionData(functionFragment: "INACTIVE_MARKET", values?: undefined): string;
  encodeFunctionData(functionFragment: "INCORRECT_IMAGE_ID", values?: undefined): string;
  encodeFunctionData(functionFragment: "INSUFFICIENT_GENERATOR_COMPUTE_AVAILABLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "INSUFFICIENT_STAKE_TO_LOCK", values?: undefined): string;
  encodeFunctionData(functionFragment: "INVALID_CONTRACT_ADDRESS", values?: undefined): string;
  encodeFunctionData(functionFragment: "INVALID_ECIES_ACL", values?: undefined): string;
  encodeFunctionData(functionFragment: "INVALID_ENCLAVE_KEY", values?: undefined): string;
  encodeFunctionData(functionFragment: "INVALID_ENCLAVE_SIGNATURE", values?: undefined): string;
  encodeFunctionData(functionFragment: "INVALID_GENERATOR", values?: undefined): string;
  encodeFunctionData(functionFragment: "INVALID_GENERATOR_STATE_PER_MARKET", values?: undefined): string;
  encodeFunctionData(functionFragment: "INVALID_INPUTS", values?: undefined): string;
  encodeFunctionData(functionFragment: "INVALID_MARKET", values?: undefined): string;
  encodeFunctionData(functionFragment: "INVALID_PROOF", values?: undefined): string;
  encodeFunctionData(functionFragment: "KEY_ALREADY_EXISTS", values?: undefined): string;
  encodeFunctionData(functionFragment: "MARKET_ALREADY_EXISTS", values?: undefined): string;
  encodeFunctionData(functionFragment: "MAX_PARALLEL_REQUESTS_PER_MARKET_EXCEEDED", values?: undefined): string;
  encodeFunctionData(functionFragment: "ONLY_ADMIN_CAN_CALL", values?: undefined): string;
  encodeFunctionData(functionFragment: "ONLY_ASSIGNED_ASKS_CAN_BE_PROVED", values?: undefined): string;
  encodeFunctionData(functionFragment: "ONLY_EXPIRED_ASKS_CAN_BE_CANCELLED", values?: undefined): string;
  encodeFunctionData(functionFragment: "ONLY_GENERATOR_CAN_DISCARD_REQUEST", values?: undefined): string;
  encodeFunctionData(functionFragment: "ONLY_MATCHING_ENGINE_CAN_ASSIGN", values?: undefined): string;
  encodeFunctionData(functionFragment: "ONLY_VALID_GENERATORS_CAN_REQUEST_EXIT", values?: undefined): string;
  encodeFunctionData(functionFragment: "ONLY_WORKING_GENERATORS", values?: undefined): string;
  encodeFunctionData(functionFragment: "PROOF_PRICE_MISMATCH", values?: undefined): string;
  encodeFunctionData(functionFragment: "PROOF_TIME_MISMATCH", values?: undefined): string;
  encodeFunctionData(functionFragment: "PUBLIC_MARKETS_DONT_NEED_KEY", values?: undefined): string;
  encodeFunctionData(functionFragment: "REDUCE_COMPUTE_REQUEST_NOT_IN_PLACE", values?: undefined): string;
  encodeFunctionData(functionFragment: "REDUCTION_REQUEST_NOT_VALID", values?: undefined): string;
  encodeFunctionData(functionFragment: "REQUEST_ALREADY_IN_PLACE", values?: undefined): string;
  encodeFunctionData(functionFragment: "SHOULD_BE_IN_ASSIGNED_STATE", values?: undefined): string;
  encodeFunctionData(functionFragment: "SHOULD_BE_IN_CREATE_STATE", values?: undefined): string;
  encodeFunctionData(functionFragment: "SHOULD_BE_IN_CROSSED_DEADLINE_STATE", values?: undefined): string;
  encodeFunctionData(functionFragment: "UNSTAKE_REQUEST_NOT_IN_PLACE", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ALREADY_JOINED_MARKET", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ARITY_MISMATCH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ASSIGN_ONLY_TO_IDLE_GENERATORS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ATTESTATION_TIMEOUT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CANNOT_BE_ADMIN_LESS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CANNOT_BE_ZERO", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CANNOT_USE_MATCHING_ENGINE_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CAN_N0T_BE_SLASHED", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CAN_NOT_ASSIGN_EXPIRED_TASKS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CAN_NOT_BE_MORE_THAN_DECLARED_COMPUTE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CAN_NOT_LEAVE_MARKET_WITH_ACTIVE_REQUEST", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CAN_NOT_LEAVE_WITH_ACTIVE_MARKET", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CAN_NOT_SLASH_USING_VALID_INPUTS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ENCLAVE_KEY_NOT_VERIFIED", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "EXCEEDS_ACCEPTABLE_RANGE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "GENERATOR_ALREADY_EXISTS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INACTIVE_MARKET", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INCORRECT_IMAGE_ID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INSUFFICIENT_GENERATOR_COMPUTE_AVAILABLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INSUFFICIENT_STAKE_TO_LOCK", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INVALID_CONTRACT_ADDRESS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INVALID_ECIES_ACL", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INVALID_ENCLAVE_KEY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INVALID_ENCLAVE_SIGNATURE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INVALID_GENERATOR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INVALID_GENERATOR_STATE_PER_MARKET", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INVALID_INPUTS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INVALID_MARKET", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INVALID_PROOF", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "KEY_ALREADY_EXISTS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MARKET_ALREADY_EXISTS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MAX_PARALLEL_REQUESTS_PER_MARKET_EXCEEDED", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ONLY_ADMIN_CAN_CALL", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ONLY_ASSIGNED_ASKS_CAN_BE_PROVED", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ONLY_EXPIRED_ASKS_CAN_BE_CANCELLED", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ONLY_GENERATOR_CAN_DISCARD_REQUEST", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ONLY_MATCHING_ENGINE_CAN_ASSIGN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ONLY_VALID_GENERATORS_CAN_REQUEST_EXIT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ONLY_WORKING_GENERATORS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PROOF_PRICE_MISMATCH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PROOF_TIME_MISMATCH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PUBLIC_MARKETS_DONT_NEED_KEY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "REDUCE_COMPUTE_REQUEST_NOT_IN_PLACE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "REDUCTION_REQUEST_NOT_VALID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "REQUEST_ALREADY_IN_PLACE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SHOULD_BE_IN_ASSIGNED_STATE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SHOULD_BE_IN_CREATE_STATE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SHOULD_BE_IN_CROSSED_DEADLINE_STATE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "UNSTAKE_REQUEST_NOT_IN_PLACE", data: BytesLike): Result;
}

export interface Error extends BaseContract {
  connect(runner?: ContractRunner | null): Error;
  waitForDeployment(): Promise<this>;

  interface: ErrorInterface;

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

  ALREADY_JOINED_MARKET: TypedContractMethod<[], [string], "view">;

  ARITY_MISMATCH: TypedContractMethod<[], [string], "view">;

  ASSIGN_ONLY_TO_IDLE_GENERATORS: TypedContractMethod<[], [string], "view">;

  ATTESTATION_TIMEOUT: TypedContractMethod<[], [string], "view">;

  CANNOT_BE_ADMIN_LESS: TypedContractMethod<[], [string], "view">;

  CANNOT_BE_ZERO: TypedContractMethod<[], [string], "view">;

  CANNOT_USE_MATCHING_ENGINE_ROLE: TypedContractMethod<[], [string], "view">;

  CAN_N0T_BE_SLASHED: TypedContractMethod<[], [string], "view">;

  CAN_NOT_ASSIGN_EXPIRED_TASKS: TypedContractMethod<[], [string], "view">;

  CAN_NOT_BE_MORE_THAN_DECLARED_COMPUTE: TypedContractMethod<[], [string], "view">;

  CAN_NOT_LEAVE_MARKET_WITH_ACTIVE_REQUEST: TypedContractMethod<[], [string], "view">;

  CAN_NOT_LEAVE_WITH_ACTIVE_MARKET: TypedContractMethod<[], [string], "view">;

  CAN_NOT_SLASH_USING_VALID_INPUTS: TypedContractMethod<[], [string], "view">;

  ENCLAVE_KEY_NOT_VERIFIED: TypedContractMethod<[], [string], "view">;

  EXCEEDS_ACCEPTABLE_RANGE: TypedContractMethod<[], [string], "view">;

  GENERATOR_ALREADY_EXISTS: TypedContractMethod<[], [string], "view">;

  INACTIVE_MARKET: TypedContractMethod<[], [string], "view">;

  INCORRECT_IMAGE_ID: TypedContractMethod<[], [string], "view">;

  INSUFFICIENT_GENERATOR_COMPUTE_AVAILABLE: TypedContractMethod<[], [string], "view">;

  INSUFFICIENT_STAKE_TO_LOCK: TypedContractMethod<[], [string], "view">;

  INVALID_CONTRACT_ADDRESS: TypedContractMethod<[], [string], "view">;

  INVALID_ECIES_ACL: TypedContractMethod<[], [string], "view">;

  INVALID_ENCLAVE_KEY: TypedContractMethod<[], [string], "view">;

  INVALID_ENCLAVE_SIGNATURE: TypedContractMethod<[], [string], "view">;

  INVALID_GENERATOR: TypedContractMethod<[], [string], "view">;

  INVALID_GENERATOR_STATE_PER_MARKET: TypedContractMethod<[], [string], "view">;

  INVALID_INPUTS: TypedContractMethod<[], [string], "view">;

  INVALID_MARKET: TypedContractMethod<[], [string], "view">;

  INVALID_PROOF: TypedContractMethod<[], [string], "view">;

  KEY_ALREADY_EXISTS: TypedContractMethod<[], [string], "view">;

  MARKET_ALREADY_EXISTS: TypedContractMethod<[], [string], "view">;

  MAX_PARALLEL_REQUESTS_PER_MARKET_EXCEEDED: TypedContractMethod<[], [string], "view">;

  ONLY_ADMIN_CAN_CALL: TypedContractMethod<[], [string], "view">;

  ONLY_ASSIGNED_ASKS_CAN_BE_PROVED: TypedContractMethod<[], [string], "view">;

  ONLY_EXPIRED_ASKS_CAN_BE_CANCELLED: TypedContractMethod<[], [string], "view">;

  ONLY_GENERATOR_CAN_DISCARD_REQUEST: TypedContractMethod<[], [string], "view">;

  ONLY_MATCHING_ENGINE_CAN_ASSIGN: TypedContractMethod<[], [string], "view">;

  ONLY_VALID_GENERATORS_CAN_REQUEST_EXIT: TypedContractMethod<[], [string], "view">;

  ONLY_WORKING_GENERATORS: TypedContractMethod<[], [string], "view">;

  PROOF_PRICE_MISMATCH: TypedContractMethod<[], [string], "view">;

  PROOF_TIME_MISMATCH: TypedContractMethod<[], [string], "view">;

  PUBLIC_MARKETS_DONT_NEED_KEY: TypedContractMethod<[], [string], "view">;

  REDUCE_COMPUTE_REQUEST_NOT_IN_PLACE: TypedContractMethod<[], [string], "view">;

  REDUCTION_REQUEST_NOT_VALID: TypedContractMethod<[], [string], "view">;

  REQUEST_ALREADY_IN_PLACE: TypedContractMethod<[], [string], "view">;

  SHOULD_BE_IN_ASSIGNED_STATE: TypedContractMethod<[], [string], "view">;

  SHOULD_BE_IN_CREATE_STATE: TypedContractMethod<[], [string], "view">;

  SHOULD_BE_IN_CROSSED_DEADLINE_STATE: TypedContractMethod<[], [string], "view">;

  UNSTAKE_REQUEST_NOT_IN_PLACE: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: "ALREADY_JOINED_MARKET"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "ARITY_MISMATCH"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "ASSIGN_ONLY_TO_IDLE_GENERATORS"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "ATTESTATION_TIMEOUT"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "CANNOT_BE_ADMIN_LESS"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "CANNOT_BE_ZERO"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "CANNOT_USE_MATCHING_ENGINE_ROLE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "CAN_N0T_BE_SLASHED"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "CAN_NOT_ASSIGN_EXPIRED_TASKS"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "CAN_NOT_BE_MORE_THAN_DECLARED_COMPUTE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "CAN_NOT_LEAVE_MARKET_WITH_ACTIVE_REQUEST"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "CAN_NOT_LEAVE_WITH_ACTIVE_MARKET"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "CAN_NOT_SLASH_USING_VALID_INPUTS"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "ENCLAVE_KEY_NOT_VERIFIED"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "EXCEEDS_ACCEPTABLE_RANGE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "GENERATOR_ALREADY_EXISTS"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "INACTIVE_MARKET"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "INCORRECT_IMAGE_ID"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "INSUFFICIENT_GENERATOR_COMPUTE_AVAILABLE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "INSUFFICIENT_STAKE_TO_LOCK"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "INVALID_CONTRACT_ADDRESS"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "INVALID_ECIES_ACL"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "INVALID_ENCLAVE_KEY"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "INVALID_ENCLAVE_SIGNATURE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "INVALID_GENERATOR"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "INVALID_GENERATOR_STATE_PER_MARKET"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "INVALID_INPUTS"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "INVALID_MARKET"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "INVALID_PROOF"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "KEY_ALREADY_EXISTS"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "MARKET_ALREADY_EXISTS"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "MAX_PARALLEL_REQUESTS_PER_MARKET_EXCEEDED"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "ONLY_ADMIN_CAN_CALL"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "ONLY_ASSIGNED_ASKS_CAN_BE_PROVED"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "ONLY_EXPIRED_ASKS_CAN_BE_CANCELLED"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "ONLY_GENERATOR_CAN_DISCARD_REQUEST"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "ONLY_MATCHING_ENGINE_CAN_ASSIGN"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "ONLY_VALID_GENERATORS_CAN_REQUEST_EXIT"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "ONLY_WORKING_GENERATORS"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "PROOF_PRICE_MISMATCH"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "PROOF_TIME_MISMATCH"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "PUBLIC_MARKETS_DONT_NEED_KEY"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "REDUCE_COMPUTE_REQUEST_NOT_IN_PLACE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "REDUCTION_REQUEST_NOT_VALID"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "REQUEST_ALREADY_IN_PLACE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "SHOULD_BE_IN_ASSIGNED_STATE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "SHOULD_BE_IN_CREATE_STATE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "SHOULD_BE_IN_CROSSED_DEADLINE_STATE"): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "UNSTAKE_REQUEST_NOT_IN_PLACE"): TypedContractMethod<[], [string], "view">;

  filters: {};
}
