/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, BytesLike, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  Xor2_verifier_wrapper,
  Xor2_verifier_wrapperInterface,
} from "../../../../contracts/verifierWrappers/xor2_verifier_wrapper.sol/Xor2_verifier_wrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract i_xor2_verifier",
        name: "_iverifier",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_sampleInput",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_sampleProof",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "marketId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeTakenForProofGeneration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "refundAddress",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "proverData",
            type: "bytes",
          },
        ],
        internalType: "struct ProofMarketPlace.Ask",
        name: "ask",
        type: "tuple",
      },
      {
        internalType: "enum ProofMarketPlace.SecretType",
        name: "secretType",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "secret_inputs",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "acl",
        type: "bytes",
      },
    ],
    name: "createRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[1]",
        name: "inputs",
        type: "uint256[1]",
      },
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
    ],
    name: "encodeInputAndProofForVerification",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[1]",
        name: "inputs",
        type: "uint256[1]",
      },
    ],
    name: "encodeInputs",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
    ],
    name: "encodeProof",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "iverifier",
    outputs: [
      {
        internalType: "contract i_xor2_verifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proofMarketPlace",
    outputs: [
      {
        internalType: "contract ProofMarketPlace",
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
        internalType: "contract ProofMarketPlace",
        name: "_proofMarketplace",
        type: "address",
      },
    ],
    name: "setProofMarketPlaceContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedData",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedProof",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "inputs",
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
  "0x60a06040523480156200001157600080fd5b50604051620015b8380380620015b883398101604081905262000034916200012d565b6001600160a01b03831660805260016200004f838262000246565b5060026200005e828262000246565b5050505062000312565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200009057600080fd5b81516001600160401b0380821115620000ad57620000ad62000068565b604051601f8301601f19908116603f01168101908282118183101715620000d857620000d862000068565b81604052838152602092508683858801011115620000f557600080fd5b600091505b83821015620001195785820183015181830184015290820190620000fa565b600093810190920192909252949350505050565b6000806000606084860312156200014357600080fd5b83516001600160a01b03811681146200015b57600080fd5b60208501519093506001600160401b03808211156200017957600080fd5b62000187878388016200007e565b935060408601519150808211156200019e57600080fd5b50620001ad868287016200007e565b9150509250925092565b600181811c90821680620001cc57607f821691505b602082108103620001ed57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200024157600081815260208120601f850160051c810160208610156200021c5750805b601f850160051c820191505b818110156200023d5782815560010162000228565b5050505b505050565b81516001600160401b0381111562000262576200026262000068565b6200027a81620002738454620001b7565b84620001f3565b602080601f831160018114620002b25760008415620002995750858301515b600019600386901b1c1916600185901b1785556200023d565b600085815260208120601f198616915b82811015620002e357888601518255948401946001909101908401620002c2565b5085821015620003025787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805161128362000335600039600081816101c8015261042401526112836000f3fe608060405234801561001057600080fd5b50600436106100ce5760003560e01c80639bbcad781161008c578063c46fc3ef11610066578063c46fc3ef1461019b578063d2235eac146101b0578063e7f5b81d146101c3578063ec23a9ed146101ea57600080fd5b80639bbcad781461016d578063a6dfbc7f14610180578063a76c05511461019357600080fd5b80626b4fb0146100d357806302f77d19146100fc57806310a542791461011f578063732a9d63146101275780637d8ad42b146101525780638e760afe1461015a575b600080fd5b6100e66100e1366004610937565b6101fd565b6040516100f391906109e0565b60405180910390f35b61010f61010a366004610a1b565b61023e565b60405190151581526020016100f3565b61010f610276565b60005461013a906001600160a01b031681565b6040516001600160a01b0390911681526020016100f3565b6100e6610310565b61010f610168366004610a1b565b61039e565b6100e661017b366004610a9b565b6104ac565b61010f61018e366004610b00565b6104d5565b6100e66104ef565b6101ae6101a9366004610b5a565b6104fc565b005b6101ae6101be366004610b77565b61056a565b61013a7f000000000000000000000000000000000000000000000000000000000000000081565b6100e66101f8366004610c2c565b61069c565b6060610208856104ac565b61021385858561069c565b604051602001610224929190610c73565b60405160208183030381529060405290505b949350505050565b600080600183604051602001610255929190610cdb565b604051602081830303815290604052905061026f8161039e565b9392505050565b600061030b6002805461028890610ca1565b80601f01602080910402602001604051908101604052809291908181526020018280546102b490610ca1565b80156103015780601f106102d657610100808354040283529160200191610301565b820191906000526020600020905b8154815290600101906020018083116102e457829003601f168201915b505050505061023e565b905090565b6001805461031d90610ca1565b80601f016020809104026020016040519081016040528092919081815260200182805461034990610ca1565b80156103965780601f1061036b57610100808354040283529160200191610396565b820191906000526020600020905b81548152906001019060200180831161037957829003601f168201915b505050505081565b60006103a861074b565b6103b0610769565b6103b861074b565b6103c0610796565b600080878060200190518101906103d79190610dd7565b91509150818060200190518101906103ef9190610e3b565b9250808060200190518101906104059190610ee0565b6040516343753b4d60e01b815292985090965094506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906343753b4d9061045f908990899089908990600401610fe7565b602060405180830381865afa15801561047c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a0919061101e565b98975050505050505050565b6060816040516020016104bf9190611040565b6040516020818303038152906040529050919050565b60006104e38284018461104e565b50600190505b92915050565b6002805461031d90610ca1565b6000546001600160a01b0316156105485760405162461bcd60e51b815260206004820152600b60248201526a105b1c9958591e4814d95d60aa1b60448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006040518060e0016040528088600001358152602001886020013581526020018860400135815260200188606001358152602001886080013581526020018860a00160208101906105bc9190610b5a565b6001600160a01b031681526020016105e261017b6105dd60c08c018c6110e8565b6106cb565b90526000546040519192506001600160a01b0316906370538fca9083908990610611908a908a9060200161112f565b604051602081830303815290604052878760405160200161063392919061112f565b6040516020818303038152906040526040518563ffffffff1660e01b81526004016106619493929190611180565b600060405180830381600087803b15801561067b57600080fd5b505af115801561068f573d6000803e3d6000fd5b5050505050505050505050565b60608383836040516020016106b393929190611224565b60405160208183030381529060405290509392505050565b6106d3610796565b6106dd83836104d5565b61073f5760405162461bcd60e51b815260206004820152602d60248201527f436972636f6d20566572696669657220577261707065723a20496e76616c696460448201526c081a5b9c1d5d08199bdc9b585d609a1b606482015260840161053f565b61026f82840184610a9b565b60405180604001604052806002906020820280368337509192915050565b60405180604001604052806002905b61078061074b565b8152602001906001900390816107785790505090565b60405180602001604052806001906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156107ed576107ed6107b4565b60405290565b6040805190810167ffffffffffffffff811182821017156107ed576107ed6107b4565b604051601f8201601f1916810167ffffffffffffffff8111828210171561083f5761083f6107b4565b604052919050565b600082601f83011261085857600080fd5b6108606107ca565b8060208085018681111561087357600080fd5b855b8181101561088c5780358552938201938201610875565b50919695505050505050565b600082601f8301126108a957600080fd5b6108b16107f3565b8060408401858111156108c357600080fd5b845b818110156108dd5780358452602093840193016108c5565b509095945050505050565b600082601f8301126108f957600080fd5b6109016107f3565b80608084018581111561091357600080fd5b845b818110156108dd576109278782610898565b8452602090930192604001610915565b600080600080610120858703121561094e57600080fd5b6109588686610847565b93506109678660208701610898565b925061097686606087016108e8565b91506109858660e08701610898565b905092959194509250565b60005b838110156109ab578181015183820152602001610993565b50506000910152565b600081518084526109cc816020860160208601610990565b601f01601f19169290920160200192915050565b60208152600061026f60208301846109b4565b600067ffffffffffffffff821115610a0d57610a0d6107b4565b50601f01601f191660200190565b600060208284031215610a2d57600080fd5b813567ffffffffffffffff811115610a4457600080fd5b8201601f81018413610a5557600080fd5b8035610a68610a63826109f3565b610816565b818152856020838501011115610a7d57600080fd5b81602084016020830137600091810160200191909152949350505050565b600060208284031215610aad57600080fd5b61026f8383610847565b60008083601f840112610ac957600080fd5b50813567ffffffffffffffff811115610ae157600080fd5b602083019150836020828501011115610af957600080fd5b9250929050565b60008060208385031215610b1357600080fd5b823567ffffffffffffffff811115610b2a57600080fd5b610b3685828601610ab7565b90969095509350505050565b6001600160a01b0381168114610b5757600080fd5b50565b600060208284031215610b6c57600080fd5b813561026f81610b42565b60008060008060008060808789031215610b9057600080fd5b863567ffffffffffffffff80821115610ba857600080fd5b9088019060e0828b031215610bbc57600080fd5b90965060208801359060038210610bd257600080fd5b90955060408801359080821115610be857600080fd5b610bf48a838b01610ab7565b90965094506060890135915080821115610c0d57600080fd5b50610c1a89828a01610ab7565b979a9699509497509295939492505050565b60008060006101008486031215610c4257600080fd5b610c4c8585610898565b9250610c5b85604086016108e8565b9150610c6a8560c08601610898565b90509250925092565b604081526000610c8660408301856109b4565b8281036020840152610c9881856109b4565b95945050505050565b600181811c90821680610cb557607f821691505b602082108103610cd557634e487b7160e01b600052602260045260246000fd5b50919050565b60408152600080845481600182811c915080831680610cfb57607f831692505b60208084108203610d1a57634e487b7160e01b86526022600452602486fd5b6040880184905260608801828015610d395760018114610d4f57610d7a565b60ff198716825285151560051b82019750610d7a565b60008c81526020902060005b87811015610d7457815484820152908601908401610d5b565b83019850505b5050878603818901525050505050610c9881856109b4565b600082601f830112610da357600080fd5b8151610db1610a63826109f3565b818152846020838601011115610dc657600080fd5b610236826020830160208701610990565b60008060408385031215610dea57600080fd5b825167ffffffffffffffff80821115610e0257600080fd5b610e0e86838701610d92565b93506020850151915080821115610e2457600080fd5b50610e3185828601610d92565b9150509250929050565b60006020808385031215610e4e57600080fd5b83601f840112610e5d57600080fd5b610e656107ca565b8082850186811115610e7657600080fd5b855b81811015610e8f5780518452928401928401610e78565b50909695505050505050565b600082601f830112610eac57600080fd5b610eb46107f3565b806040840185811115610ec657600080fd5b845b818110156108dd578051845260209384019301610ec8565b60008060006101008486031215610ef657600080fd5b610f008585610e9b565b9250604085605f860112610f1357600080fd5b610f1b6107f3565b8060c0870188811115610f2d57600080fd5b8388015b81811015610f5257610f438a82610e9b565b84526020909301928401610f31565b50819550610f608982610e9b565b9450505050509250925092565b8060005b6002811015610f90578151845260209384019390910190600101610f71565b50505050565b8060005b6002811015610f9057610fae848351610f6d565b6040939093019260209190910190600101610f9a565b8060005b6001811015610f90578151845260209384019390910190600101610fc8565b6101208101610ff68287610f6d565b6110036040830186610f96565b61101060c0830185610f6d565b610c98610100830184610fc4565b60006020828403121561103057600080fd5b8151801515811461026f57600080fd5b602081016104e98284610fc4565b6000602080838503121561106157600080fd5b823567ffffffffffffffff8082111561107957600080fd5b818501915085601f83011261108d57600080fd5b81358181111561109f5761109f6107b4565b8060051b91506110b0848301610816565b81815291830184019184810190888411156110ca57600080fd5b938501935b838510156104a0578435825293850193908501906110cf565b6000808335601e198436030181126110ff57600080fd5b83018035915067ffffffffffffffff82111561111a57600080fd5b602001915036819003821315610af957600080fd5b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b6003811061117c57634e487b7160e01b600052602160045260246000fd5b9052565b6080815284516080820152602085015160a0820152604085015160c0820152606085015160e0820152608085015161010082015260018060a01b0360a086015116610120820152600060c086015160e06101408401526111e46101608401826109b4565b90506111f3602084018761115e565b828103604084015261120581866109b4565b9050828103606084015261121981856109b4565b979650505050505050565b61010081016112338286610f6d565b6112406040830185610f96565b61023660c0830184610f6d56fea26469706673582212205a8c8691aabd6552ab3a215db4dcdaa4951c6272f1b3892ef4f96b67b19480a064736f6c63430008130033";

type Xor2_verifier_wrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: Xor2_verifier_wrapperConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Xor2_verifier_wrapper__factory extends ContractFactory {
  constructor(...args: Xor2_verifier_wrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _iverifier: AddressLike,
    _sampleInput: BytesLike,
    _sampleProof: BytesLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_iverifier, _sampleInput, _sampleProof, overrides || {});
  }
  override deploy(
    _iverifier: AddressLike,
    _sampleInput: BytesLike,
    _sampleProof: BytesLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_iverifier, _sampleInput, _sampleProof, overrides || {}) as Promise<
      Xor2_verifier_wrapper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Xor2_verifier_wrapper__factory {
    return super.connect(runner) as Xor2_verifier_wrapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Xor2_verifier_wrapperInterface {
    return new Interface(_abi) as Xor2_verifier_wrapperInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Xor2_verifier_wrapper {
    return new Contract(address, _abi, runner) as unknown as Xor2_verifier_wrapper;
  }
}
