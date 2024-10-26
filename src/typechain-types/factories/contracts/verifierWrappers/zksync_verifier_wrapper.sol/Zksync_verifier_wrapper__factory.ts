/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, BytesLike, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  Zksync_verifier_wrapper,
  Zksync_verifier_wrapperInterface,
} from "../../../../contracts/verifierWrappers/zksync_verifier_wrapper.sol/Zksync_verifier_wrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract i_zksync_verifier",
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
    inputs: [],
    name: "iverifier",
    outputs: [
      {
        internalType: "contract i_zksync_verifier",
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
  "0x60a06040523480156200001157600080fd5b50604051620011f6380380620011f6833981016040819052620000349162000357565b6001600160a01b03831660805260006200004f838262000472565b5060016200005e828262000472565b5062000069620000b7565b620000ae5760405162461bcd60e51b815260206004820152601160248201527010d85b89dd0818994819195c1b1bde5959607a1b604482015260640160405180910390fd5b50505062000842565b60006200015760018054620000cc90620003e1565b80601f0160208091040260200160405190810160405280929190818152602001828054620000fa90620003e1565b80156200014b5780601f106200011f576101008083540402835291602001916200014b565b820191906000526020600020905b8154815290600101906020018083116200012d57829003601f168201915b50506200015c92505050565b905090565b600080600083604051602001620001759291906200056c565b60408051601f198184030181529190529050620001928162000199565b9392505050565b6000606060008084806020019051810190620001b6919062000618565b9150915081806020019051810190620001d09190620006ff565b925060608082806020019051810190620001eb919062000737565b6080516040516387d9d02360e01b81529294509092506001600160a01b0316906387d9d023906200022590889086908690600401620007d5565b602060405180830381865afa15801562000243573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200026991906200081e565b979650505050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715620002b557620002b562000274565b604052919050565b60005b83811015620002da578181015183820152602001620002c0565b50506000910152565b600082601f830112620002f557600080fd5b81516001600160401b0381111562000311576200031162000274565b62000326601f8201601f19166020016200028a565b8181528460208386010111156200033c57600080fd5b6200034f826020830160208701620002bd565b949350505050565b6000806000606084860312156200036d57600080fd5b83516001600160a01b03811681146200038557600080fd5b60208501519093506001600160401b0380821115620003a357600080fd5b620003b187838801620002e3565b93506040860151915080821115620003c857600080fd5b50620003d786828701620002e3565b9150509250925092565b600181811c90821680620003f657607f821691505b6020821081036200041757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200046d576000816000526020600020601f850160051c81016020861015620004485750805b601f850160051c820191505b81811015620004695782815560010162000454565b5050505b505050565b81516001600160401b038111156200048e576200048e62000274565b620004a6816200049f8454620003e1565b846200041d565b602080601f831160018114620004de5760008415620004c55750858301515b600019600386901b1c1916600185901b17855562000469565b600085815260208120601f198616915b828110156200050f57888601518255948401946001909101908401620004ee565b50858210156200052e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000815180845262000558816020860160208601620002bd565b601f01601f19169290920160200192915050565b6040815260008084546200058081620003e1565b8060408601526060600180841660008114620005a55760018114620005c257620005f6565b60ff1985166060890152606084151560051b8901019550620005f6565b8960005260208060002060005b86811015620005ec5781548b8201870152908401908201620005cf565b8a01606001975050505b505050505082810360208401526200060f81856200053e565b95945050505050565b600080604083850312156200062c57600080fd5b82516001600160401b03808211156200064457600080fd5b6200065286838701620002e3565b935060208501519150808211156200066957600080fd5b506200067885828601620002e3565b9150509250929050565b600082601f8301126200069457600080fd5b815160206001600160401b03821115620006b257620006b262000274565b8160051b620006c38282016200028a565b9283528481018201928281019087851115620006de57600080fd5b83870192505b848310156200026957825182529183019190830190620006e4565b6000602082840312156200071257600080fd5b81516001600160401b038111156200072957600080fd5b6200034f8482850162000682565b600080604083850312156200074b57600080fd5b82516001600160401b03808211156200076357600080fd5b620007718683870162000682565b935060208501519150808211156200078857600080fd5b50620006788582860162000682565b60008151808452602080850194506020840160005b83811015620007ca57815187529582019590820190600101620007ac565b509495945050505050565b606081526000620007ea606083018662000797565b8281036020840152620007fe818662000797565b9050828103604084015262000814818562000797565b9695505050505050565b6000602082840312156200083157600080fd5b815180151581146200019257600080fd5b608051610992620008646000396000818160fa01526102fc01526109926000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638e760afe1161005b5780638e760afe146100c7578063a6dfbc7f146100da578063a76c0551146100ed578063e7f5b81d146100f557600080fd5b806302f77d191461008257806310a54279146100aa5780637d8ad42b146100b2575b600080fd5b610095610090366004610415565b610134565b60405190151581526020015b60405180910390f35b61009561016c565b6100ba610206565b6040516100a191906104e5565b6100956100d5366004610415565b610294565b6100956100e83660046104f8565b610381565b6100ba610399565b61011c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100a1565b60008060008360405160200161014b9291906105a4565b604051602081830303815290604052905061016581610294565b9392505050565b60006102016001805461017e9061056a565b80601f01602080910402602001604051908101604052809291908181526020018280546101aa9061056a565b80156101f75780601f106101cc576101008083540402835291602001916101f7565b820191906000526020600020905b8154815290600101906020018083116101da57829003601f168201915b5050505050610134565b905090565b600080546102139061056a565b80601f016020809104026020016040519081016040528092919081815260200182805461023f9061056a565b801561028c5780601f106102615761010080835404028352916020019161028c565b820191906000526020600020905b81548152906001019060200180831161026f57829003601f168201915b505050505081565b60006060600080848060200190518101906102af91906106b4565b91509150818060200190518101906102c791906107a6565b9250606080828060200190518101906102e091906107db565b6040516387d9d02360e01b815291935091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906387d9d0239061033590889086908690600401610871565b602060405180830381865afa158015610352573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037691906108b4565b979650505050505050565b600061038f828401846108d6565b5060019392505050565b600180546102139061056a565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156103e5576103e56103a6565b604052919050565b600067ffffffffffffffff821115610407576104076103a6565b50601f01601f191660200190565b60006020828403121561042757600080fd5b813567ffffffffffffffff81111561043e57600080fd5b8201601f8101841361044f57600080fd5b803561046261045d826103ed565b6103bc565b81815285602083850101111561047757600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b838110156104b0578181015183820152602001610498565b50506000910152565b600081518084526104d1816020860160208601610495565b601f01601f19169290920160200192915050565b60208152600061016560208301846104b9565b6000806020838503121561050b57600080fd5b823567ffffffffffffffff8082111561052357600080fd5b818501915085601f83011261053757600080fd5b81358181111561054657600080fd5b86602082850101111561055857600080fd5b60209290920196919550909350505050565b600181811c9082168061057e57607f821691505b60208210810361059e57634e487b7160e01b600052602260045260246000fd5b50919050565b6040815260008084548160018260011c915060018316806105c657607f831692505b602080841082036105e557634e487b7160e01b86526022600452602486fd5b6040880184905260608801828015610604576001811461061a57610645565b60ff198716825285151560051b82019750610645565b60008c81526020902060005b8781101561063f57815484820152908601908401610626565b83019850505b50505050505050828103602084015261065e81856104b9565b95945050505050565b600082601f83011261067857600080fd5b815161068661045d826103ed565b81815284602083860101111561069b57600080fd5b6106ac826020830160208701610495565b949350505050565b600080604083850312156106c757600080fd5b825167ffffffffffffffff808211156106df57600080fd5b6106eb86838701610667565b9350602085015191508082111561070157600080fd5b5061070e85828601610667565b9150509250929050565b600067ffffffffffffffff821115610732576107326103a6565b5060051b60200190565b600082601f83011261074d57600080fd5b8151602061075d61045d83610718565b8083825260208201915060208460051b87010193508684111561077f57600080fd5b602086015b8481101561079b5780518352918301918301610784565b509695505050505050565b6000602082840312156107b857600080fd5b815167ffffffffffffffff8111156107cf57600080fd5b6106ac8482850161073c565b600080604083850312156107ee57600080fd5b825167ffffffffffffffff8082111561080657600080fd5b6108128683870161073c565b9350602085015191508082111561082857600080fd5b5061070e8582860161073c565b60008151808452602080850194506020840160005b838110156108665781518752958201959082019060010161084a565b509495945050505050565b6060815260006108846060830186610835565b82810360208401526108968186610835565b905082810360408401526108aa8185610835565b9695505050505050565b6000602082840312156108c657600080fd5b8151801515811461016557600080fd5b600060208083850312156108e957600080fd5b823567ffffffffffffffff81111561090057600080fd5b8301601f8101851361091157600080fd5b803561091f61045d82610718565b81815260059190911b8201830190838101908783111561093e57600080fd5b928401925b828410156103765783358252928401929084019061094356fea2646970667358221220203b69c63e2ac188dffc0d0ed3d4dd546ae582f59d549854254af1794f1eff6a64736f6c63430008180033";

type Zksync_verifier_wrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: Zksync_verifier_wrapperConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Zksync_verifier_wrapper__factory extends ContractFactory {
  constructor(...args: Zksync_verifier_wrapperConstructorParams) {
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
      Zksync_verifier_wrapper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Zksync_verifier_wrapper__factory {
    return super.connect(runner) as Zksync_verifier_wrapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Zksync_verifier_wrapperInterface {
    return new Interface(_abi) as Zksync_verifier_wrapperInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Zksync_verifier_wrapper {
    return new Contract(address, _abi, runner) as unknown as Zksync_verifier_wrapper;
  }
}
