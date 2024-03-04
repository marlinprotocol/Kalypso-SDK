/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
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
  "0x60a06040523480156200001157600080fd5b50604051620017fa380380620017fa833981016040819052620000349162000339565b6001600160a01b03831660805260016200004f838262000452565b5060026200005e828262000452565b506200006962000073565b50505050620007ef565b600062000113600280546200008890620003c3565b80601f0160208091040260200160405190810160405280929190818152602001828054620000b690620003c3565b8015620001075780601f10620000db5761010080835404028352916020019162000107565b820191906000526020600020905b815481529060010190602001808311620000e957829003601f168201915b50506200011892505050565b905090565b600080600183604051602001620001319291906200054c565b60408051601f1981840301815291905290506200014e8162000155565b9392505050565b60006200016162000239565b6200016b62000257565b60008085806020019051810190620001849190620005f5565b91509150818060200190518101906200019e91906200065f565b935080806020019051810190620001b69190620006e4565b6080516040516368444dc760e01b81529194506001600160a01b0316906368444dc790620001eb90879087906004016200076a565b602060405180830381865afa15801562000209573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200022f9190620007cb565b9695505050505050565b6040518060a001604052806005906020820280368337509192915050565b6040518061010001604052806008906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620002a95781810151838201526020016200028f565b50506000910152565b600082601f830112620002c457600080fd5b81516001600160401b0380821115620002e157620002e162000276565b604051601f8301601f19908116603f011681019082821181831017156200030c576200030c62000276565b816040528381528660208588010111156200032657600080fd5b6200022f8460208301602089016200028c565b6000806000606084860312156200034f57600080fd5b83516001600160a01b03811681146200036757600080fd5b60208501519093506001600160401b03808211156200038557600080fd5b6200039387838801620002b2565b93506040860151915080821115620003aa57600080fd5b50620003b986828701620002b2565b9150509250925092565b600181811c90821680620003d857607f821691505b602082108103620003f957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200044d57600081815260208120601f850160051c81016020861015620004285750805b601f850160051c820191505b81811015620004495782815560010162000434565b5050505b505050565b81516001600160401b038111156200046e576200046e62000276565b62000486816200047f8454620003c3565b84620003ff565b602080601f831160018114620004be5760008415620004a55750858301515b600019600386901b1c1916600185901b17855562000449565b600085815260208120601f198616915b82811015620004ef57888601518255948401946001909101908401620004ce565b50858210156200050e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008151808452620005388160208601602086016200028c565b601f01601f19169290920160200192915050565b6040815260008084546200056081620003c3565b8060408601526060600180841660008114620005855760018114620005a057620005d3565b60ff1985168884015283151560051b880183019550620005d3565b8960005260208060002060005b86811015620005ca5781548b8201870152908401908201620005ad565b8a018501975050505b50505050508281036020840152620005ec81856200051e565b95945050505050565b600080604083850312156200060957600080fd5b82516001600160401b03808211156200062157600080fd5b6200062f86838701620002b2565b935060208501519150808211156200064657600080fd5b506200065585828601620002b2565b9150509250929050565b600060a082840312156200067257600080fd5b82601f8301126200068257600080fd5b60405160a081016001600160401b0381118282101715620006a757620006a762000276565b6040528060a0840185811115620006bd57600080fd5b845b81811015620006d9578051835260209283019201620006bf565b509195945050505050565b6000610100808385031215620006f957600080fd5b83601f8401126200070957600080fd5b6040518181016001600160401b03811182821017156200072d576200072d62000276565b6040529083019080858311156200074357600080fd5b845b838110156200075f57805182526020918201910162000745565b509095945050505050565b6101a08101818460005b60058110156200079557815183526020928301929091019060010162000774565b50505060a082018360005b6008811015620007c1578151835260209283019290910190600101620007a0565b5050509392505050565b600060208284031215620007de57600080fd5b815180151581146200014e57600080fd5b608051610fe862000812600039600081816101d801526104620152610fe86000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638e760afe1161008c578063a76c055111610066578063a76c0551146101a5578063d2235eac146101ad578063dfd4ac1b146101c0578063e7f5b81d146101d357600080fd5b80638e760afe1461016c5780639966599f1461017f578063a6dfbc7f1461019257600080fd5b806302f77d19146100d4578063056de704146100fc57806310a542791461011157806364f1bcc7146101195780637d8ad42b1461013957806381c45c7014610141575b600080fd5b6100e76100e2366004610806565b6101fa565b60405190151581526020015b60405180910390f35b61010f61010a36600461089e565b610232565b005b6100e76102a0565b61012c61012736600461090c565b61033a565b6040516100f39190610979565b61012c610363565b600054610154906001600160a01b031681565b6040516001600160a01b0390911681526020016100f3565b6100e761017a366004610806565b6103f1565b61012c61018d3660046109b7565b6104e4565b6100e76101a0366004610a36565b610521565b61012c610539565b61010f6101bb366004610a78565b610546565b61012c6101ce366004610b2d565b610678565b6101547f000000000000000000000000000000000000000000000000000000000000000081565b600080600183604051602001610211929190610b83565b604051602081830303815290604052905061022b816103f1565b9392505050565b6000546001600160a01b03161561027e5760405162461bcd60e51b815260206004820152600b60248201526a105b1c9958591e4814d95d60aa1b60448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000610335600280546102b290610b49565b80601f01602080910402602001604051908101604052809291908181526020018280546102de90610b49565b801561032b5780601f106103005761010080835404028352916020019161032b565b820191906000526020600020905b81548152906001019060200180831161030e57829003601f168201915b50505050506101fa565b905090565b60608160405160200161034d9190610c6c565b6040516020818303038152906040529050919050565b6001805461037090610b49565b80601f016020809104026020016040519081016040528092919081815260200182805461039c90610b49565b80156103e95780601f106103be576101008083540402835291602001916103e9565b820191906000526020600020905b8154815290600101906020018083116103cc57829003601f168201915b505050505081565b60006103fb61070d565b61040361072b565b6000808580602001905181019061041a9190610cc8565b91509150818060200190518101906104329190610d2c565b9350808060200190518101906104489190610d81565b6040516368444dc760e01b81529093506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906368444dc7906104999087908790600401610e05565b602060405180830381865afa1580156104b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104da9190610e21565b9695505050505050565b60606104ef83610678565b6104f88361033a565b604051602001610509929190610e43565b60405160208183030381529060405290505b92915050565b600061052f82840184610b2d565b5060019392505050565b6002805461037090610b49565b60006040518060e0016040528088600001358152602001886020013581526020018860400135815260200188606001358152602001886080013581526020018860a0016020810190610598919061089e565b6001600160a01b031681526020016105be6101ce6105b960c08c018c610e68565b61068b565b90526000546040519192506001600160a01b0316906370538fca90839089906105ed908a908a90602001610eaf565b604051602081830303815290604052878760405160200161060f929190610eaf565b6040516020818303038152906040526040518563ffffffff1660e01b815260040161063d9493929190610f00565b600060405180830381600087803b15801561065757600080fd5b505af115801561066b573d6000803e3d6000fd5b5050505050505050505050565b60608160405160200161034d9190610fa4565b61069361070d565b61069d8383610521565b6107015760405162461bcd60e51b815260206004820152602f60248201527f5472616e7366657220566572696669657220577261707065723a20496e76616c60448201526e1a59081a5b9c1d5d08199bdc9b585d608a1b6064820152608401610275565b61022b82840184610b2d565b6040518060a001604052806005906020820280368337509192915050565b6040518061010001604052806008906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b604051610100810167ffffffffffffffff811182821017156107845761078461074a565b60405290565b60405160a0810167ffffffffffffffff811182821017156107845761078461074a565b604051601f8201601f1916810167ffffffffffffffff811182821017156107d6576107d661074a565b604052919050565b600067ffffffffffffffff8211156107f8576107f861074a565b50601f01601f191660200190565b60006020828403121561081857600080fd5b813567ffffffffffffffff81111561082f57600080fd5b8201601f8101841361084057600080fd5b803561085361084e826107de565b6107ad565b81815285602083850101111561086857600080fd5b81602084016020830137600091810160200191909152949350505050565b6001600160a01b038116811461089b57600080fd5b50565b6000602082840312156108b057600080fd5b813561022b81610886565b600082601f8301126108cc57600080fd5b6108d4610760565b806101008401858111156108e757600080fd5b845b818110156109015780358452602093840193016108e9565b509095945050505050565b6000610100828403121561091f57600080fd5b61022b83836108bb565b60005b8381101561094457818101518382015260200161092c565b50506000910152565b60008151808452610965816020860160208601610929565b601f01601f19169290920160200192915050565b60208152600061022b602083018461094d565b600082601f83011261099d57600080fd5b6109a561078a565b8060a08401858111156108e757600080fd5b6000806101a083850312156109cb57600080fd5b6109d5848461098c565b91506109e48460a085016108bb565b90509250929050565b60008083601f8401126109ff57600080fd5b50813567ffffffffffffffff811115610a1757600080fd5b602083019150836020828501011115610a2f57600080fd5b9250929050565b60008060208385031215610a4957600080fd5b823567ffffffffffffffff811115610a6057600080fd5b610a6c858286016109ed565b90969095509350505050565b60008060008060008060808789031215610a9157600080fd5b863567ffffffffffffffff80821115610aa957600080fd5b9088019060e0828b031215610abd57600080fd5b90965060208801359060038210610ad357600080fd5b90955060408801359080821115610ae957600080fd5b610af58a838b016109ed565b90965094506060890135915080821115610b0e57600080fd5b50610b1b89828a016109ed565b979a9699509497509295939492505050565b600060a08284031215610b3f57600080fd5b61022b838361098c565b600181811c90821680610b5d57607f821691505b602082108103610b7d57634e487b7160e01b600052602260045260246000fd5b50919050565b60408152600080845481600182811c915080831680610ba357607f831692505b60208084108203610bc257634e487b7160e01b86526022600452602486fd5b6040880184905260608801828015610be15760018114610bf757610c22565b60ff198716825285151560051b82019750610c22565b60008c81526020902060005b87811015610c1c57815484820152908601908401610c03565b83019850505b5050878603818901525050505050610c3a818561094d565b95945050505050565b8060005b6008811015610c66578151845260209384019390910190600101610c47565b50505050565b610100810161051b8284610c43565b600082601f830112610c8c57600080fd5b8151610c9a61084e826107de565b818152846020838601011115610caf57600080fd5b610cc0826020830160208701610929565b949350505050565b60008060408385031215610cdb57600080fd5b825167ffffffffffffffff80821115610cf357600080fd5b610cff86838701610c7b565b93506020850151915080821115610d1557600080fd5b50610d2285828601610c7b565b9150509250929050565b600060a08284031215610d3e57600080fd5b82601f830112610d4d57600080fd5b610d5561078a565b8060a0840185811115610d6757600080fd5b845b81811015610901578051845260209384019301610d69565b6000610100808385031215610d9557600080fd5b83601f840112610da457600080fd5b610dac610760565b908301908085831115610dbe57600080fd5b845b83811015610dd8578051835260209283019201610dc0565b5095945050505050565b8060005b6005811015610c66578151845260209384019390910190600101610de6565b6101a08101610e148285610de2565b61022b60a0830184610c43565b600060208284031215610e3357600080fd5b8151801515811461022b57600080fd5b604081526000610e56604083018561094d565b8281036020840152610c3a818561094d565b6000808335601e19843603018112610e7f57600080fd5b83018035915067ffffffffffffffff821115610e9a57600080fd5b602001915036819003821315610a2f57600080fd5b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60038110610efc57634e487b7160e01b600052602160045260246000fd5b9052565b6080815284516080820152602085015160a0820152604085015160c0820152606085015160e0820152608085015161010082015260018060a01b0360a086015116610120820152600060c086015160e0610140840152610f6461016084018261094d565b9050610f736020840187610ede565b8281036040840152610f85818661094d565b90508281036060840152610f99818561094d565b979650505050505050565b60a0810161051b8284610de256fea2646970667358221220a77f6d2c59c7b383e5d13563f5d71d1956bf43c35c92fab271e525d339348afe64736f6c63430008130033";

type Transfer_verifier_wrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Transfer_verifier_wrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

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
    return super.getDeployTransaction(
      _iverifier,
      _sampleInput,
      _sampleProof,
      overrides || {}
    );
  }
  override deploy(
    _iverifier: AddressLike,
    _sampleInput: BytesLike,
    _sampleProof: BytesLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _iverifier,
      _sampleInput,
      _sampleProof,
      overrides || {}
    ) as Promise<
      Transfer_verifier_wrapper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): Transfer_verifier_wrapper__factory {
    return super.connect(runner) as Transfer_verifier_wrapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Transfer_verifier_wrapperInterface {
    return new Interface(_abi) as Transfer_verifier_wrapperInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Transfer_verifier_wrapper {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as Transfer_verifier_wrapper;
  }
}
