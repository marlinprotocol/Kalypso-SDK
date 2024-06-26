/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { UC_Rekt, UC_RektInterface } from "../../../contracts/mock/UC_Rekt";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "my_operation1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "my_operation2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rektSlot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rektSlot2",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "slot1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b507ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff1615906001600160401b031660008115801561005f5750825b90506000826001600160401b0316600114801561007b5750303b155b905081158015610089575080155b156100a75760405163f92ee8a960e01b815260040160405180910390fd5b84546001600160401b031916600117855583156100d557845460ff60401b1916680100000000000000001785555b831561011b57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050506080516108bb610149600039600081816103470152818161037001526104b301526108bb6000f3fe6080604052600436106100915760003560e01c80638129fc1c116100595780638129fc1c14610145578063a8d21b9d1461015a578063ad3cb1cc146101a1578063bc2e66e6146101df578063eefb4461146101eb57600080fd5b806301ffc9a7146100965780631f457cb5146100dc578063303408d6146101015780634f1ef2861461011b57806352d1902d14610130575b600080fd5b3480156100a257600080fd5b506100c76100b13660046106c9565b6001600160e01b0319166301ffc9a760e01b1490565b60405190151581526020015b60405180910390f35b3480156100e857600080fd5b506100f36101c25481565b6040519081526020016100d3565b34801561010d57600080fd5b506000546100c79060ff1681565b61012e610129366004610709565b610201565b005b34801561013c57600080fd5b506100f3610217565b34801561015157600080fd5b5061012e610234565b34801561016657600080fd5b506000546101849061010090046bffffffffffffffffffffffff1681565b6040516bffffffffffffffffffffffff90911681526020016100d3565b3480156101ad57600080fd5b506101d2604051806040016040528060058152602001640352e302e360dc1b81525081565b6040516100d391906107fd565b34801561012e57600080fd5b3480156101f757600080fd5b506101c2546100f3565b61020961033c565b61021382826103e1565b5050565b60006102216104a8565b5060008051602061086683398151915290565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff1660008115801561027a5750825b905060008267ffffffffffffffff1660011480156102975750303b155b9050811580156102a5575080155b156102c35760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156102ed57845460ff60401b1916600160401b1785555b831561033357845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050565b565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614806103c357507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166103b7600080516020610866833981519152546001600160a01b031690565b6001600160a01b031614155b1561033a5760405163703e46dd60e11b815260040160405180910390fd5b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561043b575060408051601f3d908101601f1916820190925261043891810190610830565b60015b61046857604051634c9c8ce360e01b81526001600160a01b03831660048201526024015b60405180910390fd5b600080516020610866833981519152811461049957604051632a87526960e21b81526004810182905260240161045f565b6104a383836104f1565b505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461033a5760405163703e46dd60e11b815260040160405180910390fd5b6104fa82610547565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a280511561053f576104a382826105ac565b610213610622565b806001600160a01b03163b60000361057d57604051634c9c8ce360e01b81526001600160a01b038216600482015260240161045f565b60008051602061086683398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080846001600160a01b0316846040516105c99190610849565b600060405180830381855af49150503d8060008114610604576040519150601f19603f3d011682016040523d82523d6000602084013e610609565b606091505b5091509150610619858383610641565b95945050505050565b341561033a5760405163b398979f60e01b815260040160405180910390fd5b60608261065657610651826106a0565b610699565b815115801561066d57506001600160a01b0384163b155b1561069657604051639996b31560e01b81526001600160a01b038516600482015260240161045f565b50805b9392505050565b8051156106b05780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b6000602082840312156106db57600080fd5b81356001600160e01b03198116811461069957600080fd5b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561071c57600080fd5b82356001600160a01b038116811461073357600080fd5b9150602083013567ffffffffffffffff8082111561075057600080fd5b818501915085601f83011261076457600080fd5b813581811115610776576107766106f3565b604051601f8201601f19908116603f0116810190838211818310171561079e5761079e6106f3565b816040528281528860208487010111156107b757600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60005b838110156107f45781810151838201526020016107dc565b50506000910152565b602081526000825180602084015261081c8160408501602087016107d9565b601f01601f19169190910160400192915050565b60006020828403121561084257600080fd5b5051919050565b6000825161085b8184602087016107d9565b919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220e5dfac1b700913e2f9a80cfd1a9139e0e9259e21efb42fdec9e571d907012dbf64736f6c63430008180033";

type UC_RektConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: UC_RektConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UC_Rekt__factory extends ContractFactory {
  constructor(...args: UC_RektConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(overrides?: NonPayableOverrides & { from?: string }): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      UC_Rekt & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): UC_Rekt__factory {
    return super.connect(runner) as UC_Rekt__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UC_RektInterface {
    return new Interface(_abi) as UC_RektInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): UC_Rekt {
    return new Contract(address, _abi, runner) as unknown as UC_Rekt;
  }
}
