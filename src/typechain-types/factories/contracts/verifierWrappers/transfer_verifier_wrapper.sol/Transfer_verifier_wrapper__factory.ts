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
        internalType: "struct ProofMarketplace.Ask",
        name: "ask",
        type: "tuple",
      },
      {
        internalType: "enum ProofMarketplace.SecretType",
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
  "0x60a06040523480156200001157600080fd5b50604051620018463803806200184683398101604081905262000034916200037d565b6001600160a01b03831660805260016200004f838262000498565b5060026200005e828262000498565b5062000069620000b7565b620000ae5760405162461bcd60e51b815260206004820152601160248201527010d85b89dd0818994819195c1b1bde5959607a1b604482015260640160405180910390fd5b50505062000838565b60006200015760028054620000cc9062000407565b80601f0160208091040260200160405190810160405280929190818152602001828054620000fa9062000407565b80156200014b5780601f106200011f576101008083540402835291602001916200014b565b820191906000526020600020905b8154815290600101906020018083116200012d57829003601f168201915b50506200015c92505050565b905090565b6000806001836040516020016200017592919062000592565b60408051601f198184030181529190529050620001928162000199565b9392505050565b6000620001a56200027d565b620001af6200029b565b60008085806020019051810190620001c891906200063e565b9150915081806020019051810190620001e29190620006a8565b935080806020019051810190620001fa91906200072d565b6080516040516368444dc760e01b81529194506001600160a01b0316906368444dc7906200022f9087908790600401620007b3565b602060405180830381865afa1580156200024d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000273919062000814565b9695505050505050565b6040518060a001604052806005906020820280368337509192915050565b6040518061010001604052806008906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620002ed578181015183820152602001620002d3565b50506000910152565b600082601f8301126200030857600080fd5b81516001600160401b0380821115620003255762000325620002ba565b604051601f8301601f19908116603f01168101908282118183101715620003505762000350620002ba565b816040528381528660208588010111156200036a57600080fd5b62000273846020830160208901620002d0565b6000806000606084860312156200039357600080fd5b83516001600160a01b0381168114620003ab57600080fd5b60208501519093506001600160401b0380821115620003c957600080fd5b620003d787838801620002f6565b93506040860151915080821115620003ee57600080fd5b50620003fd86828701620002f6565b9150509250925092565b600181811c908216806200041c57607f821691505b6020821081036200043d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000493576000816000526020600020601f850160051c810160208610156200046e5750805b601f850160051c820191505b818110156200048f578281556001016200047a565b5050505b505050565b81516001600160401b03811115620004b457620004b4620002ba565b620004cc81620004c5845462000407565b8462000443565b602080601f831160018114620005045760008415620004eb5750858301515b600019600386901b1c1916600185901b1785556200048f565b600085815260208120601f198616915b82811015620005355788860151825594840194600190910190840162000514565b5085821015620005545787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600081518084526200057e816020860160208601620002d0565b601f01601f19169290920160200192915050565b604081526000808454620005a68162000407565b8060408601526060600180841660008114620005cb5760018114620005e8576200061c565b60ff1985166060890152606084151560051b89010195506200061c565b8960005260208060002060005b86811015620006125781548b8201870152908401908201620005f5565b8a01606001975050505b5050505050828103602084015262000635818562000564565b95945050505050565b600080604083850312156200065257600080fd5b82516001600160401b03808211156200066a57600080fd5b6200067886838701620002f6565b935060208501519150808211156200068f57600080fd5b506200069e85828601620002f6565b9150509250929050565b600060a08284031215620006bb57600080fd5b82601f830112620006cb57600080fd5b60405160a081016001600160401b0381118282101715620006f057620006f0620002ba565b6040528060a08401858111156200070657600080fd5b845b818110156200072257805183526020928301920162000708565b509195945050505050565b60006101008083850312156200074257600080fd5b83601f8401126200075257600080fd5b6040518181016001600160401b0381118282101715620007765762000776620002ba565b6040529083019080858311156200078c57600080fd5b845b83811015620007a85780518252602091820191016200078e565b509095945050505050565b6101a08101818460005b6005811015620007de578151835260209283019290910190600101620007bd565b50505060a082018360005b60088110156200080a578151835260209283019290910190600101620007e9565b5050509392505050565b6000602082840312156200082757600080fd5b815180151581146200019257600080fd5b608051610feb6200085b600039600081816101d801526104620152610feb6000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638e760afe1161008c578063a76c055111610066578063a76c0551146101a5578063d2235eac146101ad578063dfd4ac1b146101c0578063e7f5b81d146101d357600080fd5b80638e760afe1461016c5780639966599f1461017f578063a6dfbc7f1461019257600080fd5b806302f77d19146100d4578063056de704146100fc57806310a542791461011157806364f1bcc7146101195780637d8ad42b1461013957806381c45c7014610141575b600080fd5b6100e76100e2366004610806565b6101fa565b60405190151581526020015b60405180910390f35b61010f61010a36600461089e565b610232565b005b6100e76102a0565b61012c61012736600461090c565b61033a565b6040516100f39190610979565b61012c610363565b600054610154906001600160a01b031681565b6040516001600160a01b0390911681526020016100f3565b6100e761017a366004610806565b6103f1565b61012c61018d3660046109b7565b6104e4565b6100e76101a0366004610a36565b610521565b61012c610539565b61010f6101bb366004610a78565b610546565b61012c6101ce366004610b2d565b610678565b6101547f000000000000000000000000000000000000000000000000000000000000000081565b600080600183604051602001610211929190610b83565b604051602081830303815290604052905061022b816103f1565b9392505050565b6000546001600160a01b03161561027e5760405162461bcd60e51b815260206004820152600b60248201526a105b1c9958591e4814d95d60aa1b60448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000610335600280546102b290610b49565b80601f01602080910402602001604051908101604052809291908181526020018280546102de90610b49565b801561032b5780601f106103005761010080835404028352916020019161032b565b820191906000526020600020905b81548152906001019060200180831161030e57829003601f168201915b50505050506101fa565b905090565b60608160405160200161034d9190610c6f565b6040516020818303038152906040529050919050565b6001805461037090610b49565b80601f016020809104026020016040519081016040528092919081815260200182805461039c90610b49565b80156103e95780601f106103be576101008083540402835291602001916103e9565b820191906000526020600020905b8154815290600101906020018083116103cc57829003601f168201915b505050505081565b60006103fb61070d565b61040361072b565b6000808580602001905181019061041a9190610ccb565b91509150818060200190518101906104329190610d2f565b9350808060200190518101906104489190610d84565b6040516368444dc760e01b81529093506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906368444dc7906104999087908790600401610e08565b602060405180830381865afa1580156104b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104da9190610e24565b9695505050505050565b60606104ef83610678565b6104f88361033a565b604051602001610509929190610e46565b60405160208183030381529060405290505b92915050565b600061052f82840184610b2d565b5060019392505050565b6002805461037090610b49565b60006040518060e0016040528088600001358152602001886020013581526020018860400135815260200188606001358152602001886080013581526020018860a0016020810190610598919061089e565b6001600160a01b031681526020016105be6101ce6105b960c08c018c610e6b565b61068b565b90526000546040519192506001600160a01b0316906370538fca90839089906105ed908a908a90602001610eb2565b604051602081830303815290604052878760405160200161060f929190610eb2565b6040516020818303038152906040526040518563ffffffff1660e01b815260040161063d9493929190610f03565b600060405180830381600087803b15801561065757600080fd5b505af115801561066b573d6000803e3d6000fd5b5050505050505050505050565b60608160405160200161034d9190610fa7565b61069361070d565b61069d8383610521565b6107015760405162461bcd60e51b815260206004820152602f60248201527f5472616e7366657220566572696669657220577261707065723a20496e76616c60448201526e1a59081a5b9c1d5d08199bdc9b585d608a1b6064820152608401610275565b61022b82840184610b2d565b6040518060a001604052806005906020820280368337509192915050565b6040518061010001604052806008906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b604051610100810167ffffffffffffffff811182821017156107845761078461074a565b60405290565b60405160a0810167ffffffffffffffff811182821017156107845761078461074a565b604051601f8201601f1916810167ffffffffffffffff811182821017156107d6576107d661074a565b604052919050565b600067ffffffffffffffff8211156107f8576107f861074a565b50601f01601f191660200190565b60006020828403121561081857600080fd5b813567ffffffffffffffff81111561082f57600080fd5b8201601f8101841361084057600080fd5b803561085361084e826107de565b6107ad565b81815285602083850101111561086857600080fd5b81602084016020830137600091810160200191909152949350505050565b6001600160a01b038116811461089b57600080fd5b50565b6000602082840312156108b057600080fd5b813561022b81610886565b600082601f8301126108cc57600080fd5b6108d4610760565b806101008401858111156108e757600080fd5b845b818110156109015780358452602093840193016108e9565b509095945050505050565b6000610100828403121561091f57600080fd5b61022b83836108bb565b60005b8381101561094457818101518382015260200161092c565b50506000910152565b60008151808452610965816020860160208601610929565b601f01601f19169290920160200192915050565b60208152600061022b602083018461094d565b600082601f83011261099d57600080fd5b6109a561078a565b8060a08401858111156108e757600080fd5b6000806101a083850312156109cb57600080fd5b6109d5848461098c565b91506109e48460a085016108bb565b90509250929050565b60008083601f8401126109ff57600080fd5b50813567ffffffffffffffff811115610a1757600080fd5b602083019150836020828501011115610a2f57600080fd5b9250929050565b60008060208385031215610a4957600080fd5b823567ffffffffffffffff811115610a6057600080fd5b610a6c858286016109ed565b90969095509350505050565b60008060008060008060808789031215610a9157600080fd5b863567ffffffffffffffff80821115610aa957600080fd5b9088019060e0828b031215610abd57600080fd5b90965060208801359060038210610ad357600080fd5b90955060408801359080821115610ae957600080fd5b610af58a838b016109ed565b90965094506060890135915080821115610b0e57600080fd5b50610b1b89828a016109ed565b979a9699509497509295939492505050565b600060a08284031215610b3f57600080fd5b61022b838361098c565b600181811c90821680610b5d57607f821691505b602082108103610b7d57634e487b7160e01b600052602260045260246000fd5b50919050565b6040815260008084548160018260011c91506001831680610ba557607f831692505b60208084108203610bc457634e487b7160e01b86526022600452602486fd5b6040880184905260608801828015610be35760018114610bf957610c24565b60ff198716825285151560051b82019750610c24565b60008c81526020902060005b87811015610c1e57815484820152908601908401610c05565b83019850505b505050505050508281036020840152610c3d818561094d565b95945050505050565b8060005b6008811015610c69578151845260209384019390910190600101610c4a565b50505050565b610100810161051b8284610c46565b600082601f830112610c8f57600080fd5b8151610c9d61084e826107de565b818152846020838601011115610cb257600080fd5b610cc3826020830160208701610929565b949350505050565b60008060408385031215610cde57600080fd5b825167ffffffffffffffff80821115610cf657600080fd5b610d0286838701610c7e565b93506020850151915080821115610d1857600080fd5b50610d2585828601610c7e565b9150509250929050565b600060a08284031215610d4157600080fd5b82601f830112610d5057600080fd5b610d5861078a565b8060a0840185811115610d6a57600080fd5b845b81811015610901578051845260209384019301610d6c565b6000610100808385031215610d9857600080fd5b83601f840112610da757600080fd5b610daf610760565b908301908085831115610dc157600080fd5b845b83811015610ddb578051835260209283019201610dc3565b5095945050505050565b8060005b6005811015610c69578151845260209384019390910190600101610de9565b6101a08101610e178285610de5565b61022b60a0830184610c46565b600060208284031215610e3657600080fd5b8151801515811461022b57600080fd5b604081526000610e59604083018561094d565b8281036020840152610c3d818561094d565b6000808335601e19843603018112610e8257600080fd5b83018035915067ffffffffffffffff821115610e9d57600080fd5b602001915036819003821315610a2f57600080fd5b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60038110610eff57634e487b7160e01b600052602160045260246000fd5b9052565b6080815284516080820152602085015160a0820152604085015160c0820152606085015160e0820152608085015161010082015260018060a01b0360a086015116610120820152600060c086015160e0610140840152610f6761016084018261094d565b9050610f766020840187610ee1565b8281036040840152610f88818661094d565b90508281036060840152610f9c818561094d565b979650505050505050565b60a0810161051b8284610de556fea2646970667358221220e42565f1fddc1717a8974c41694a88778bfffc67e7bf34cb309a18dcc645716f64736f6c63430008180033";

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
    overrides?: NonPayableOverrides & { from?: string },
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_iverifier, _sampleInput, _sampleProof, overrides || {});
  }
  override deploy(
    _iverifier: AddressLike,
    _sampleInput: BytesLike,
    _sampleProof: BytesLike,
    overrides?: NonPayableOverrides & { from?: string },
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
