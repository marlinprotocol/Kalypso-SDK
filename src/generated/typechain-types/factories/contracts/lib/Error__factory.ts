/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { Error, ErrorInterface } from "../../../contracts/lib/Error";

const _abi = [
  {
    inputs: [],
    name: "ALREADY_COMPLETE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ALREADY_EXISTS",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ARITY_MISMATCH",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CANNOT_BE_ADMIN_LESS",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CANNOT_BE_SAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CANNOT_BE_ZERO",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CANT_BE_IN_PAST",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CAN_N0T_BE_SLASHED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CAN_NOT_DEREGISTER_WITH_ACTIVE_MARKET",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CAN_NOT_GRANT_ROLE_WITHOUT_ATTESTATION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOES_NOT_EXISTS",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ENCLAVE_KEY_NOT_VERIFIED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "HAS_A_PENDING_WORK",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INSUFFICIENT_GENERATOR_CAPACITY",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INSUFFICIENT_REWARD",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INSUFFICIENT_STAKE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INVALID_GENERATOR",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INVALID_INPUTS",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INVALID_PROOF",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INVAlID_SENDER",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ONLY_ADMIN_CAN_CALL",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ONLY_TASKS_GENERATOR",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ONLY_TO_IDLE_GENERATORS",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ONLY_WORKING_GENERATORS",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROOF_REQUESTED_IN_LESS_TIME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SHOULD_BE_CREATED",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SHOULD_BE_IN_ASSIGNED_STATE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SHOULD_BE_IN_CREATE_STATE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SHOULD_BE_IN_CROSSED_DEADLINE_STATE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SHOULD_BE_IN_EXPIRED_STATE",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SHOULD_BE_LESS_THAN_OR_EQUAL",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SHOULD_BE_SAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6106af61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106101fa5760003560e01c806374b1674811610119578063bd3085b2116100ac578063ddacd5531161007b578063ddacd553146105a9578063de1f41a1146105c9578063fa10ae5a146105e9578063fd9e407f1461060a57600080fd5b8063bd3085b214610525578063c4732e0e14610546578063ccad0c4a14610567578063d5b201811461058857600080fd5b80639d1e55e0116100e85780639d1e55e0146104a4578063a9edb3be146104c4578063ada341b5146104e4578063b4bc599c1461050557600080fd5b806374b16748146104215780637e481599146104415780638d018994146104625780639295c75b1461048357600080fd5b8063379e1d07116101915780636695668a116101605780636695668a1461039e5780636c93394c146103bf5780636efa9fcd146103e0578063712eb0871461040157600080fd5b8063379e1d071461031c5780633c7765671461033d5780634aac153d1461035e5780634fe2755c1461037e57600080fd5b8063190ca58b116101cd578063190ca58b146102995780631f1138e0146102b95780632026c28b146102da578063235cfc49146102fb57600080fd5b80630c8d1b0a146101ff5780630df3560f146102365780631400c800146102575780631409c39714610278575b600080fd5b61022060405180604001604052806002815260200161313760f01b81525081565b60405161022d919061062b565b60405180910390f35b61022060405180604001604052806002815260200161189960f11b81525081565b61022060405180604001604052806002815260200161191b60f11b81525081565b61022060405180604001604052806002815260200161333160f01b81525081565b610220604051806040016040528060018152602001600d60fa1b81525081565b61022060405180604001604052806002815260200161313360f01b81525081565b61022060405180604001604052806002815260200161313960f01b81525081565b61022060405180604001604052806002815260200161313560f01b81525081565b610220604051806040016040528060028152602001610c8d60f21b81525081565b61022060405180604001604052806002815260200161313160f01b81525081565b610220604051806040016040528060018152602001601960f91b81525081565b610220604051806040016040528060018152602001603760f81b81525081565b61022060405180604001604052806002815260200161323160f01b81525081565b61022060405180604001604052806002815260200161032360f41b81525081565b61022060405180604001604052806002815260200161323560f01b81525081565b610220604051806040016040528060018152602001603960f81b81525081565b610220604051806040016040528060018152602001603160f81b81525081565b61022060405180604001604052806002815260200161323360f01b81525081565b61022060405180604001604052806002815260200161191960f11b81525081565b610220604051806040016040528060028152602001610c4d60f21b81525081565b610220604051806040016040528060018152602001603360f81b81525081565b610220604051806040016040528060018152602001600760fb1b81525081565b61022060405180604001604052806002815260200161064760f31b81525081565b610220604051806040016040528060018152602001603560f81b81525081565b61022060405180604001604052806002815260200161031360f41b81525081565b61022060405180604001604052806002815260200161323760f01b81525081565b61022060405180604001604052806002815260200161189b60f11b81525081565b61022060405180604001604052806002815260200161033360f41b81525081565b610220604051806040016040528060018152602001601b60f91b81525081565b610220604051806040016040528060018152602001600360fc1b81525081565b61022060405180604001604052806002815260200161323960f01b81525081565b61022060405180604001604052806002815260200161062760f31b81525081565b600060208083528351808285015260005b818110156106585785810183015185820160400152820161063c565b506000604082860101526040601f19601f830116850101925050509291505056fea26469706673582212205f853814bb7f167039b478975fa506b656f23910a55e69175d43d061ad54fc5c64736f6c63430008130033";

type ErrorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ErrorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Error__factory extends ContractFactory {
  constructor(...args: ErrorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Error & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Error__factory {
    return super.connect(runner) as Error__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ErrorInterface {
    return new Interface(_abi) as ErrorInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Error {
    return new Contract(address, _abi, runner) as unknown as Error;
  }
}
