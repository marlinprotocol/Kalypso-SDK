/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { EntityKeyRegistry, EntityKeyRegistryInterface } from "../../contracts/EntityKeyRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IAttestationVerifier",
        name: "_attestationVerifier",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "UpdateKey",
    type: "event",
  },
  {
    inputs: [],
    name: "attestationVerifier",
    outputs: [
      {
        internalType: "contract IAttestationVerifier",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pub_key",
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
        internalType: "bytes",
        name: "pubkey",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "attestation_data",
        type: "bytes",
      },
    ],
    name: "updatePubkey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161064838038061064883398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516105b7610091600039600081816089015261017601526105b76000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806340a7ba911461004657806382c023811461006f578063b4b3c5a014610084575b600080fd5b610059610054366004610292565b6100c3565b6040516100669190610308565b60405180910390f35b61008261007d366004610364565b61015d565b005b6100ab7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610066565b600060208190529081526040902080546100dc906103d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610108906103d0565b80156101555780601f1061012a57610100808354040283529160200191610155565b820191906000526020600020905b81548152906001019060200180831161013857829003601f168201915b505050505081565b6040516306d5a2ed60e01b815233906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906306d5a2ed906101ad908690869060040161040a565b6020604051808303816000875af11580156101cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f09190610439565b60405180604001604052806002815260200161189b60f11b815250906102325760405162461bcd60e51b81526004016102299190610308565b60405180910390fd5b506001600160a01b03811660009081526020819052604090206102568587836104c0565b506040516001600160a01b038216907fcecf7d261ce60d7d2350445216f35e5a0bbc30b4dad83d6c2368e219baae6ead90600090a25050505050565b6000602082840312156102a457600080fd5b81356001600160a01b03811681146102bb57600080fd5b9392505050565b6000815180845260005b818110156102e8576020818501810151868301820152016102cc565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006102bb60208301846102c2565b60008083601f84011261032d57600080fd5b50813567ffffffffffffffff81111561034557600080fd5b60208301915083602082850101111561035d57600080fd5b9250929050565b6000806000806040858703121561037a57600080fd5b843567ffffffffffffffff8082111561039257600080fd5b61039e8883890161031b565b909650945060208701359150808211156103b757600080fd5b506103c48782880161031b565b95989497509550505050565b600181811c908216806103e457607f821691505b60208210810361040457634e487b7160e01b600052602260045260246000fd5b50919050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60006020828403121561044b57600080fd5b815180151581146102bb57600080fd5b634e487b7160e01b600052604160045260246000fd5b601f8211156104bb57600081815260208120601f850160051c810160208610156104985750805b601f850160051c820191505b818110156104b7578281556001016104a4565b5050505b505050565b67ffffffffffffffff8311156104d8576104d861045b565b6104ec836104e683546103d0565b83610471565b6000601f84116001811461052057600085156105085750838201355b600019600387901b1c1916600186901b17835561057a565b600083815260209020601f19861690835b828110156105515786850135825560209485019460019092019101610531565b508682101561056e5760001960f88860031b161c19848701351681555b505060018560011b0183555b505050505056fea2646970667358221220cae287c51b7d0fc5d1d8cecce394beabc80fa77b1466ad5182856e60b7c7d99764736f6c63430008130033";

type EntityKeyRegistryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: EntityKeyRegistryConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EntityKeyRegistry__factory extends ContractFactory {
  constructor(...args: EntityKeyRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _attestationVerifier: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_attestationVerifier, overrides || {});
  }
  override deploy(_attestationVerifier: AddressLike, overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(_attestationVerifier, overrides || {}) as Promise<
      EntityKeyRegistry & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EntityKeyRegistry__factory {
    return super.connect(runner) as EntityKeyRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EntityKeyRegistryInterface {
    return new Interface(_abi) as EntityKeyRegistryInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): EntityKeyRegistry {
    return new Contract(address, _abi, runner) as unknown as EntityKeyRegistry;
  }
}