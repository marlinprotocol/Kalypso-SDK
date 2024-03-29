/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  InputAndProofFormatRegistry,
  InputAndProofFormatRegistryInterface,
} from "../../../contracts/periphery/InputAndProofFormatRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "inputArrayLength",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "inputs",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proofArrayLength",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proofs",
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
    inputs: [
      {
        internalType: "uint256",
        name: "marketId",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "inputsFormat",
        type: "string[]",
      },
    ],
    name: "setInputFormat",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "marketId",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "proofFormat",
        type: "string[]",
      },
    ],
    name: "setProofFormat",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161085038038061085083398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516107b7610099600039600081816101350152818161023301526102f001526107b76000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c0a594711161005b578063c0a59471146100f5578063ccc15e491461010a578063e86aa1901461011d578063f851a4401461013057600080fd5b80630ce4914c146100825780635ef77949146100b5578063bed78ca3146100d5575b600080fd5b6100a2610090366004610444565b60026020526000908152604090205481565b6040519081526020015b60405180910390f35b6100c86100c336600461045d565b61016f565b6040516100ac919061047f565b6100a26100e3366004610444565b60036020526000908152604090205481565b610108610103366004610514565b610228565b005b6100c861011836600461045d565b6102c9565b61010861012b366004610514565b6102e5565b6101577f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100ac565b6001602052816000526040600020818154811061018b57600080fd5b906000526020600020016000915091505080546101a790610638565b80601f01602080910402602001604051908101604052809291908181526020018280546101d390610638565b80156102205780601f106101f557610100808354040283529160200191610220565b820191906000526020600020905b81548152906001019060200180831161020357829003601f168201915b505050505081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102965760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9030b236b4b71031b0b760911b60448201526064015b60405180910390fd5b600082815260016020908152604090912082516102b59284019061037f565b505160009182526003602052604090912055565b6000602052816000526040600020818154811061018b57600080fd5b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461034e5760405162461bcd60e51b815260206004820152600e60248201526d37b7363c9030b236b4b71031b0b760911b604482015260640161028d565b600082815260208181526040909120825161036b9284019061037f565b505160009182526002602052604090912055565b8280548282559060005260206000209081019282156103c5579160200282015b828111156103c557825182906103b590826106c1565b509160200191906001019061039f565b506103d19291506103d5565b5090565b808211156103d15760006103e982826103f2565b506001016103d5565b5080546103fe90610638565b6000825580601f1061040e575050565b601f01602090049060005260206000209081019061042c919061042f565b50565b5b808211156103d15760008155600101610430565b60006020828403121561045657600080fd5b5035919050565b6000806040838503121561047057600080fd5b50508035926020909101359150565b600060208083528351808285015260005b818110156104ac57858101830151858201604001528201610490565b506000604082860101526040601f19601f8301168501019250505092915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561050c5761050c6104cd565b604052919050565b600080604080848603121561052857600080fd5b8335925060208085013567ffffffffffffffff8082111561054857600080fd5b8187019150601f888184011261055d57600080fd5b82358281111561056f5761056f6104cd565b8060051b61057e8682016104e3565b918252848101860191868101908c84111561059857600080fd5b87870192505b83831015610625578235868111156105b65760008081fd5b8701603f81018e136105c85760008081fd5b88810135878111156105dc576105dc6104cd565b6105ed818801601f19168b016104e3565b8181528f8c8385010111156106025760008081fd5b818c84018c83013760009181018b0191909152835250918701919087019061059e565b8099505050505050505050509250929050565b600181811c9082168061064c57607f821691505b60208210810361066c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156106bc57600081815260208120601f850160051c810160208610156106995750805b601f850160051c820191505b818110156106b8578281556001016106a5565b5050505b505050565b815167ffffffffffffffff8111156106db576106db6104cd565b6106ef816106e98454610638565b84610672565b602080601f831160018114610724576000841561070c5750858301515b600019600386901b1c1916600185901b1785556106b8565b600085815260208120601f198616915b8281101561075357888601518255948401946001909101908401610734565b50858210156107715787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea26469706673582212202cfc4317ef18059e3a70391e61d6cb9e8833ac5f939761ee47e3d57de601ba4c64736f6c63430008130033";

type InputAndProofFormatRegistryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: InputAndProofFormatRegistryConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class InputAndProofFormatRegistry__factory extends ContractFactory {
  constructor(...args: InputAndProofFormatRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _admin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_admin, overrides || {});
  }
  override deploy(_admin: AddressLike, overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(_admin, overrides || {}) as Promise<
      InputAndProofFormatRegistry & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): InputAndProofFormatRegistry__factory {
    return super.connect(runner) as InputAndProofFormatRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InputAndProofFormatRegistryInterface {
    return new Interface(_abi) as InputAndProofFormatRegistryInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): InputAndProofFormatRegistry {
    return new Contract(address, _abi, runner) as unknown as InputAndProofFormatRegistry;
  }
}
