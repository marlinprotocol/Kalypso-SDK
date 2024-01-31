/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Dispute, DisputeInterface } from "../../contracts/Dispute";

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
    inputs: [],
    name: "ATTESTATION_VERIFIER",
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
        internalType: "uint256",
        name: "askId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "proverData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "completeData",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "expectedImageId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "defaultIvsSigner",
        type: "address",
      },
    ],
    name: "checkDisputeUsingAttestationAndOrSignature",
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
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610c9a380380610c9a83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051610c0a610090600039600081816067015260ba0152610c0a6000f3fe608060405234801561001057600080fd5b50600436106100355760003560e01c80622e27181461003a578063cd79f90614610062575b600080fd5b61004d610048366004610799565b6100a1565b60405190151581526020015b60405180910390f35b6100897f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610059565b60008080806100b287890189610901565b9250925092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638e760afe846040518263ffffffff1660e01b815260040161010491906109ce565b60006040518083038186803b15801561011c57600080fd5b505afa158015610130573d6000803e3d6000fd5b50505050801561017d576101738b8b8b85898b158061016e57507f99ff0d9125e1fc9531a11262e15aeb2c60509a078c4cc4c64cefdfb06ff686478c145b61019c565b9350505050610191565b61018b8b8b8b868a876102cd565b93505050505b979650505050505050565b60008082156101d7578787876040516020016101ba939291906109e8565b6040516020818303038152906040528051906020012090506101fc565b60408051602081018a9052016040516020818303038152906040528051906020012090505b6000610255826040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b9050600061026382886103c1565b9050856001600160a01b0316816001600160a01b03161460405180604001604052806002815260200161473760f01b815250906102bc5760405162461bcd60e51b81526004016102b391906109ce565b60405180910390fd5b5060019a9950505050505050505050565b6000806102d9856103e7565b90508381146040518060400160405280600381526020016241313160e81b815250906103185760405162461bcd60e51b81526004016102b391906109ce565b5061ea6061032586610420565b61032f9190610a1e565b4211156040518060400160405280600381526020016220989960e91b8152509061036c5760405162461bcd60e51b81526004016102b391906109ce565b50600061037886610445565b91506103b4905089898987858a158061016e57507f99ff0d9125e1fc9531a11262e15aeb2c60509a078c4cc4c64cefdfb06ff686478b1461019c565b9998505050505050505050565b60008060006103d0858561047b565b915091506103dd816104c0565b5090505b92915050565b600080600080848060200190518101906104019190610a8c565b505050945094509450505061041783838361060d565b95945050505050565b600080828060200190518101906104379190610a8c565b9a9950505050505050505050565b60606000808380602001905181019061045e9190610a8c565b5050505050509150508061047182610646565b9250925050915091565b60008082516041036104b15760208301516040840151606085015160001a6104a587828585610693565b945094505050506104b9565b506000905060025b9250929050565b60008160048111156104d4576104d4610b7b565b036104dc5750565b60018160048111156104f0576104f0610b7b565b0361053d5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016102b3565b600281600481111561055157610551610b7b565b0361059e5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016102b3565b60038160048111156105b2576105b2610b7b565b0361060a5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016102b3565b50565b60008084848460405160200161062593929190610b91565b60408051808303601f19018152919052805160209091012095945050505050565b6000815160401460405180604001604052806002815260200161473760f01b815250906106865760405162461bcd60e51b81526004016102b391906109ce565b5050805160209091012090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156106ca575060009050600361074e565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561071e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166107475760006001925092505061074e565b9150600090505b94509492505050565b60008083601f84011261076957600080fd5b50813567ffffffffffffffff81111561078157600080fd5b6020830191508360208285010111156104b957600080fd5b600080600080600080600060a0888a0312156107b457600080fd5b87359650602088013567ffffffffffffffff808211156107d357600080fd5b6107df8b838c01610757565b909850965060408a01359150808211156107f857600080fd5b506108058a828b01610757565b9095509350506060880135915060808801356001600160a01b038116811461082c57600080fd5b8091505092959891949750929550565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561087b5761087b61083c565b604052919050565b600067ffffffffffffffff82111561089d5761089d61083c565b50601f01601f191660200190565b600082601f8301126108bc57600080fd5b81356108cf6108ca82610883565b610852565b8181528460208386010111156108e457600080fd5b816020850160208301376000918101602001919091529392505050565b60008060006060848603121561091657600080fd5b833567ffffffffffffffff8082111561092e57600080fd5b61093a878388016108ab565b9450602086013591508082111561095057600080fd5b5061095d868287016108ab565b9250506040840135801515811461097357600080fd5b809150509250925092565b60005b83811015610999578181015183820152602001610981565b50506000910152565b600081518084526109ba81602086016020860161097e565b601f01601f19169290920160200192915050565b6020815260006109e160208301846109a2565b9392505050565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b808201808211156103e157634e487b7160e01b600052601160045260246000fd5b600082601f830112610a5057600080fd5b8151610a5e6108ca82610883565b818152846020838601011115610a7357600080fd5b610a8482602083016020870161097e565b949350505050565b600080600080600080600080610100898b031215610aa957600080fd5b885167ffffffffffffffff80821115610ac157600080fd5b610acd8c838d01610a3f565b995060208b0151915080821115610ae357600080fd5b610aef8c838d01610a3f565b985060408b0151915080821115610b0557600080fd5b610b118c838d01610a3f565b975060608b0151915080821115610b2757600080fd5b610b338c838d01610a3f565b965060808b0151915080821115610b4957600080fd5b50610b568b828c01610a3f565b94505060a0890151925060c0890151915060e089015190509295985092959890939650565b634e487b7160e01b600052602160045260246000fd5b60008451610ba381846020890161097e565b845190830190610bb781836020890161097e565b8451910190610bca81836020880161097e565b019594505050505056fea26469706673582212206245c015d978708441b1b3c1bdbdae111698b310792acbb92213d36f0d08453464736f6c63430008130033";

type DisputeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: DisputeConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Dispute__factory extends ContractFactory {
  constructor(...args: DisputeConstructorParams) {
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
      Dispute & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Dispute__factory {
    return super.connect(runner) as Dispute__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DisputeInterface {
    return new Interface(_abi) as DisputeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Dispute {
    return new Contract(address, _abi, runner) as unknown as Dispute;
  }
}
