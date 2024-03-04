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
import type {
  MockVerifier,
  MockVerifierInterface,
} from "../../../contracts/mock/MockVerifier";

const _abi = [
  {
    inputs: [],
    name: "checkSampleInputsAndProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "proofMarketplace",
    outputs: [
      {
        internalType: "contract ProofMarketplace",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sampleInput",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sampleProof",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ProofMarketplace",
        name: "_proofMarketplace",
        type: "address",
      },
    ],
    name: "setProofMarketplaceContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "verifyAgainstSampleInputs",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "verifyInputs",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061045f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806381c45c701161005b57806381c45c70146100e75780638e760afe14610112578063a6dfbc7f14610112578063a76c05511461012857600080fd5b806302f77d191461008d578063056de704146100b657806310a54279146100cb5780637d8ad42b146100d2575b600080fd5b6100a161009b36600461024e565b50600190565b60405190151581526020015b60405180910390f35b6100c96100c43660046102ff565b610130565b005b60016100a1565b6100da61019d565b6040516100ad919061032f565b6000546100fa906001600160a01b031681565b6040516001600160a01b0390911681526020016100ad565b6100a161012036600461037d565b600192915050565b6100da61022b565b6000546001600160a01b03161561017b5760405162461bcd60e51b815260206004820152600b60248201526a105b1c9958591e4814d95d60aa1b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600180546101aa906103ef565b80601f01602080910402602001604051908101604052809291908181526020018280546101d6906103ef565b80156102235780601f106101f857610100808354040283529160200191610223565b820191906000526020600020905b81548152906001019060200180831161020657829003601f168201915b505050505081565b600280546101aa906103ef565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561026057600080fd5b813567ffffffffffffffff8082111561027857600080fd5b818401915084601f83011261028c57600080fd5b81358181111561029e5761029e610238565b604051601f8201601f19908116603f011681019083821181831017156102c6576102c6610238565b816040528281528760208487010111156102df57600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020828403121561031157600080fd5b81356001600160a01b038116811461032857600080fd5b9392505050565b600060208083528351808285015260005b8181101561035c57858101830151858201604001528201610340565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806020838503121561039057600080fd5b823567ffffffffffffffff808211156103a857600080fd5b818501915085601f8301126103bc57600080fd5b8135818111156103cb57600080fd5b8660208285010111156103dd57600080fd5b60209290920196919550909350505050565b600181811c9082168061040357607f821691505b60208210810361042357634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212208901c17856c55444c14b529c62bd9ab830e51cba1500789fdb529189df8019a064736f6c63430008130033";

type MockVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockVerifier__factory extends ContractFactory {
  constructor(...args: MockVerifierConstructorParams) {
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
      MockVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockVerifier__factory {
    return super.connect(runner) as MockVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockVerifierInterface {
    return new Interface(_abi) as MockVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockVerifier {
    return new Contract(address, _abi, runner) as unknown as MockVerifier;
  }
}
