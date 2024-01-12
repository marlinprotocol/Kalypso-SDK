/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, BytesLike, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  Transfer_verifier_wrapper,
  Transfer_verifier_wrapperInterface,
} from "../../../../contracts/verifierWrappers/transfer_verifier_wrapper.sol/Transfer_verifier_wrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract i_transfer_verifier",
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
        internalType: "uint256[5]",
        name: "inputs",
        type: "uint256[5]",
      },
      {
        internalType: "uint256[8]",
        name: "proof",
        type: "uint256[8]",
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
        internalType: "uint256[5]",
        name: "inputs",
        type: "uint256[5]",
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
        internalType: "uint256[8]",
        name: "proof",
        type: "uint256[8]",
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
        internalType: "contract i_transfer_verifier",
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
  "0x60a06040523480156200001157600080fd5b506040516200131d3803806200131d83398101604081905262000034916200012d565b6001600160a01b03831660805260016200004f838262000246565b5060026200005e828262000246565b5050505062000312565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200009057600080fd5b81516001600160401b0380821115620000ad57620000ad62000068565b604051601f8301601f19908116603f01168101908282118183101715620000d857620000d862000068565b81604052838152602092508683858801011115620000f557600080fd5b600091505b83821015620001195785820183015181830184015290820190620000fa565b600093810190920192909252949350505050565b6000806000606084860312156200014357600080fd5b83516001600160a01b03811681146200015b57600080fd5b60208501519093506001600160401b03808211156200017957600080fd5b62000187878388016200007e565b935060408601519150808211156200019e57600080fd5b50620001ad868287016200007e565b9150509250925092565b600181811c90821680620001cc57607f821691505b602082108103620001ed57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200024157600081815260208120601f850160051c810160208610156200021c5750805b601f850160051c820191505b818110156200023d5782815560010162000228565b5050505b505050565b81516001600160401b0381111562000262576200026262000068565b6200027a81620002738454620001b7565b84620001f3565b602080601f831160018114620002b25760008415620002995750858301515b600019600386901b1c1916600185901b1785556200023d565b600085815260208120601f198616915b82811015620002e357888601518255948401946001909101908401620002c2565b5085821015620003025787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b608051610fe862000335600039600081816101d801526103f40152610fe86000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80639966599f1161008c578063c46fc3ef11610066578063c46fc3ef14610198578063d2235eac146101ad578063dfd4ac1b146101c0578063e7f5b81d146101d357600080fd5b80639966599f1461016a578063a6dfbc7f1461017d578063a76c05511461019057600080fd5b806302f77d19146100d457806310a54279146100fc57806364f1bcc714610104578063732a9d63146101245780637d8ad42b1461014f5780638e760afe14610157575b600080fd5b6100e76100e2366004610806565b6101fa565b60405190151581526020015b60405180910390f35b6100e7610232565b6101176101123660046108d7565b6102cc565b6040516100f39190610944565b600054610137906001600160a01b031681565b6040516001600160a01b0390911681526020016100f3565b6101176102f5565b6100e7610165366004610806565b610383565b610117610178366004610982565b610476565b6100e761018b366004610a01565b6104b3565b6101176104cb565b6101ab6101a6366004610a5b565b6104d8565b005b6101ab6101bb366004610a78565b610546565b6101176101ce366004610b2d565b610678565b6101377f000000000000000000000000000000000000000000000000000000000000000081565b600080600183604051602001610211929190610b83565b604051602081830303815290604052905061022b81610383565b9392505050565b60006102c76002805461024490610b49565b80601f016020809104026020016040519081016040528092919081815260200182805461027090610b49565b80156102bd5780601f10610292576101008083540402835291602001916102bd565b820191906000526020600020905b8154815290600101906020018083116102a057829003601f168201915b50505050506101fa565b905090565b6060816040516020016102df9190610c6c565b6040516020818303038152906040529050919050565b6001805461030290610b49565b80601f016020809104026020016040519081016040528092919081815260200182805461032e90610b49565b801561037b5780601f106103505761010080835404028352916020019161037b565b820191906000526020600020905b81548152906001019060200180831161035e57829003601f168201915b505050505081565b600061038d61070d565b61039561072b565b600080858060200190518101906103ac9190610cc8565b91509150818060200190518101906103c49190610d2c565b9350808060200190518101906103da9190610d81565b6040516368444dc760e01b81529093506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906368444dc79061042b9087908790600401610e05565b602060405180830381865afa158015610448573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046c9190610e21565b9695505050505050565b606061048183610678565b61048a836102cc565b60405160200161049b929190610e43565b60405160208183030381529060405290505b92915050565b60006104c182840184610b2d565b5060019392505050565b6002805461030290610b49565b6000546001600160a01b0316156105245760405162461bcd60e51b815260206004820152600b60248201526a105b1c9958591e4814d95d60aa1b60448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006040518060e0016040528088600001358152602001886020013581526020018860400135815260200188606001358152602001886080013581526020018860a00160208101906105989190610a5b565b6001600160a01b031681526020016105be6101ce6105b960c08c018c610e68565b61068b565b90526000546040519192506001600160a01b0316906370538fca90839089906105ed908a908a90602001610eaf565b604051602081830303815290604052878760405160200161060f929190610eaf565b6040516020818303038152906040526040518563ffffffff1660e01b815260040161063d9493929190610f00565b600060405180830381600087803b15801561065757600080fd5b505af115801561066b573d6000803e3d6000fd5b5050505050505050505050565b6060816040516020016102df9190610fa4565b61069361070d565b61069d83836104b3565b6107015760405162461bcd60e51b815260206004820152602f60248201527f5472616e7366657220566572696669657220577261707065723a20496e76616c60448201526e1a59081a5b9c1d5d08199bdc9b585d608a1b606482015260840161051b565b61022b82840184610b2d565b6040518060a001604052806005906020820280368337509192915050565b6040518061010001604052806008906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b604051610100810167ffffffffffffffff811182821017156107845761078461074a565b60405290565b60405160a0810167ffffffffffffffff811182821017156107845761078461074a565b604051601f8201601f1916810167ffffffffffffffff811182821017156107d6576107d661074a565b604052919050565b600067ffffffffffffffff8211156107f8576107f861074a565b50601f01601f191660200190565b60006020828403121561081857600080fd5b813567ffffffffffffffff81111561082f57600080fd5b8201601f8101841361084057600080fd5b803561085361084e826107de565b6107ad565b81815285602083850101111561086857600080fd5b81602084016020830137600091810160200191909152949350505050565b600082601f83011261089757600080fd5b61089f610760565b806101008401858111156108b257600080fd5b845b818110156108cc5780358452602093840193016108b4565b509095945050505050565b600061010082840312156108ea57600080fd5b61022b8383610886565b60005b8381101561090f5781810151838201526020016108f7565b50506000910152565b600081518084526109308160208601602086016108f4565b601f01601f19169290920160200192915050565b60208152600061022b6020830184610918565b600082601f83011261096857600080fd5b61097061078a565b8060a08401858111156108b257600080fd5b6000806101a0838503121561099657600080fd5b6109a08484610957565b91506109af8460a08501610886565b90509250929050565b60008083601f8401126109ca57600080fd5b50813567ffffffffffffffff8111156109e257600080fd5b6020830191508360208285010111156109fa57600080fd5b9250929050565b60008060208385031215610a1457600080fd5b823567ffffffffffffffff811115610a2b57600080fd5b610a37858286016109b8565b90969095509350505050565b6001600160a01b0381168114610a5857600080fd5b50565b600060208284031215610a6d57600080fd5b813561022b81610a43565b60008060008060008060808789031215610a9157600080fd5b863567ffffffffffffffff80821115610aa957600080fd5b9088019060e0828b031215610abd57600080fd5b90965060208801359060038210610ad357600080fd5b90955060408801359080821115610ae957600080fd5b610af58a838b016109b8565b90965094506060890135915080821115610b0e57600080fd5b50610b1b89828a016109b8565b979a9699509497509295939492505050565b600060a08284031215610b3f57600080fd5b61022b8383610957565b600181811c90821680610b5d57607f821691505b602082108103610b7d57634e487b7160e01b600052602260045260246000fd5b50919050565b60408152600080845481600182811c915080831680610ba357607f831692505b60208084108203610bc257634e487b7160e01b86526022600452602486fd5b6040880184905260608801828015610be15760018114610bf757610c22565b60ff198716825285151560051b82019750610c22565b60008c81526020902060005b87811015610c1c57815484820152908601908401610c03565b83019850505b5050878603818901525050505050610c3a8185610918565b95945050505050565b8060005b6008811015610c66578151845260209384019390910190600101610c47565b50505050565b61010081016104ad8284610c43565b600082601f830112610c8c57600080fd5b8151610c9a61084e826107de565b818152846020838601011115610caf57600080fd5b610cc08260208301602087016108f4565b949350505050565b60008060408385031215610cdb57600080fd5b825167ffffffffffffffff80821115610cf357600080fd5b610cff86838701610c7b565b93506020850151915080821115610d1557600080fd5b50610d2285828601610c7b565b9150509250929050565b600060a08284031215610d3e57600080fd5b82601f830112610d4d57600080fd5b610d5561078a565b8060a0840185811115610d6757600080fd5b845b818110156108cc578051845260209384019301610d69565b6000610100808385031215610d9557600080fd5b83601f840112610da457600080fd5b610dac610760565b908301908085831115610dbe57600080fd5b845b83811015610dd8578051835260209283019201610dc0565b5095945050505050565b8060005b6005811015610c66578151845260209384019390910190600101610de6565b6101a08101610e148285610de2565b61022b60a0830184610c43565b600060208284031215610e3357600080fd5b8151801515811461022b57600080fd5b604081526000610e566040830185610918565b8281036020840152610c3a8185610918565b6000808335601e19843603018112610e7f57600080fd5b83018035915067ffffffffffffffff821115610e9a57600080fd5b6020019150368190038213156109fa57600080fd5b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60038110610efc57634e487b7160e01b600052602160045260246000fd5b9052565b6080815284516080820152602085015160a0820152604085015160c0820152606085015160e0820152608085015161010082015260018060a01b0360a086015116610120820152600060c086015160e0610140840152610f64610160840182610918565b9050610f736020840187610ede565b8281036040840152610f858186610918565b90508281036060840152610f998185610918565b979650505050505050565b60a081016104ad8284610de256fea26469706673582212204ef3659be3a88a5c1d868edb3228fa67f220d20d7d99482ce877a4e77df7104264736f6c63430008130033";

type Transfer_verifier_wrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: Transfer_verifier_wrapperConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Transfer_verifier_wrapper__factory extends ContractFactory {
  constructor(...args: Transfer_verifier_wrapperConstructorParams) {
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
      Transfer_verifier_wrapper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Transfer_verifier_wrapper__factory {
    return super.connect(runner) as Transfer_verifier_wrapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Transfer_verifier_wrapperInterface {
    return new Interface(_abi) as Transfer_verifier_wrapperInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Transfer_verifier_wrapper {
    return new Contract(address, _abi, runner) as unknown as Transfer_verifier_wrapper;
  }
}
