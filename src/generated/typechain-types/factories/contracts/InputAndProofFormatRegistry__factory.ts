/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { InputAndProofFormatRegistry, InputAndProofFormatRegistryInterface } from "../../contracts/InputAndProofFormatRegistry";

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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "marketId",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "marketId",
        type: "bytes32",
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
  "0x60a060405234801561001057600080fd5b50604051610f1e380380610f1e833981810160405281019061003291906100cf565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506100fc565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009c82610071565b9050919050565b6100ac81610091565b81146100b757600080fd5b50565b6000815190506100c9816100a3565b92915050565b6000602082840312156100e5576100e461006c565b5b60006100f3848285016100ba565b91505092915050565b608051610df9610125600039600081816102530152818161040f01526104e10152610df96000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063a51b0db01161005b578063a51b0db0146100fe578063aafd1da21461012e578063c741188a1461015e578063f851a4401461017a5761007d565b80632093c15b146100825780632c842305146100b2578063846bb26b146100ce575b600080fd5b61009c6004803603810190610097919061065d565b610198565b6040516100a9919061072d565b60405180910390f35b6100cc60048036038101906100c7919061096a565b610251565b005b6100e860048036038101906100e391906109c6565b610324565b6040516100f59190610a02565b60405180910390f35b610118600480360381019061011391906109c6565b61033c565b6040516101259190610a02565b60405180910390f35b6101486004803603810190610143919061065d565b610354565b604051610155919061072d565b60405180910390f35b6101786004803603810190610173919061096a565b61040d565b005b6101826104df565b60405161018f9190610a5e565b60405180910390f35b600160205281600052604060002081815481106101b457600080fd5b906000526020600020016000915091505080546101d090610aa8565b80601f01602080910402602001604051908101604052809291908181526020018280546101fc90610aa8565b80156102495780601f1061021e57610100808354040283529160200191610249565b820191906000526020600020905b81548152906001019060200180831161022c57829003601f168201915b505050505081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d690610b25565b60405180910390fd5b80600160008481526020019081526020016000209080519060200190610306929190610503565b50805160036000848152602001908152602001600020819055505050565b60036020528060005260406000206000915090505481565b60026020528060005260406000206000915090505481565b6000602052816000526040600020818154811061037057600080fd5b9060005260206000200160009150915050805461038c90610aa8565b80601f01602080910402602001604051908101604052809291908181526020018280546103b890610aa8565b80156104055780601f106103da57610100808354040283529160200191610405565b820191906000526020600020905b8154815290600101906020018083116103e857829003601f168201915b505050505081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461049b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049290610b25565b60405180910390fd5b8060008084815260200190815260200160002090805190602001906104c1929190610503565b50805160026000848152602001908152602001600020819055505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b82805482825590600052602060002090810192821561054b579160200282015b8281111561054a57825182908161053a9190610cf1565b5091602001919060010190610523565b5b509050610558919061055c565b5090565b5b8082111561057c57600081816105739190610580565b5060010161055d565b5090565b50805461058c90610aa8565b6000825580601f1061059e57506105bd565b601f0160209004906000526020600020908101906105bc91906105c0565b5b50565b5b808211156105d95760008160009055506001016105c1565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610604816105f1565b811461060f57600080fd5b50565b600081359050610621816105fb565b92915050565b6000819050919050565b61063a81610627565b811461064557600080fd5b50565b60008135905061065781610631565b92915050565b60008060408385031215610674576106736105e7565b5b600061068285828601610612565b925050602061069385828601610648565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b838110156106d75780820151818401526020810190506106bc565b60008484015250505050565b6000601f19601f8301169050919050565b60006106ff8261069d565b61070981856106a8565b93506107198185602086016106b9565b610722816106e3565b840191505092915050565b6000602082019050818103600083015261074781846106f4565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61078c826106e3565b810181811067ffffffffffffffff821117156107ab576107aa610754565b5b80604052505050565b60006107be6105dd565b90506107ca8282610783565b919050565b600067ffffffffffffffff8211156107ea576107e9610754565b5b602082029050602081019050919050565b600080fd5b600080fd5b600067ffffffffffffffff8211156108205761081f610754565b5b610829826106e3565b9050602081019050919050565b82818337600083830152505050565b600061085861085384610805565b6107b4565b90508281526020810184848401111561087457610873610800565b5b61087f848285610836565b509392505050565b600082601f83011261089c5761089b61074f565b5b81356108ac848260208601610845565b91505092915050565b60006108c86108c3846107cf565b6107b4565b905080838252602082019050602084028301858111156108eb576108ea6107fb565b5b835b8181101561093257803567ffffffffffffffff8111156109105761090f61074f565b5b80860161091d8982610887565b855260208501945050506020810190506108ed565b5050509392505050565b600082601f8301126109515761095061074f565b5b81356109618482602086016108b5565b91505092915050565b60008060408385031215610981576109806105e7565b5b600061098f85828601610612565b925050602083013567ffffffffffffffff8111156109b0576109af6105ec565b5b6109bc8582860161093c565b9150509250929050565b6000602082840312156109dc576109db6105e7565b5b60006109ea84828501610612565b91505092915050565b6109fc81610627565b82525050565b6000602082019050610a1760008301846109f3565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a4882610a1d565b9050919050565b610a5881610a3d565b82525050565b6000602082019050610a736000830184610a4f565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ac057607f821691505b602082108103610ad357610ad2610a79565b5b50919050565b7f6f6e6c792061646d696e2063616e000000000000000000000000000000000000600082015250565b6000610b0f600e836106a8565b9150610b1a82610ad9565b602082019050919050565b60006020820190508181036000830152610b3e81610b02565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610ba77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610b6a565b610bb18683610b6a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610bee610be9610be484610627565b610bc9565b610627565b9050919050565b6000819050919050565b610c0883610bd3565b610c1c610c1482610bf5565b848454610b77565b825550505050565b600090565b610c31610c24565b610c3c818484610bff565b505050565b5b81811015610c6057610c55600082610c29565b600181019050610c42565b5050565b601f821115610ca557610c7681610b45565b610c7f84610b5a565b81016020851015610c8e578190505b610ca2610c9a85610b5a565b830182610c41565b50505b505050565b600082821c905092915050565b6000610cc860001984600802610caa565b1980831691505092915050565b6000610ce18383610cb7565b9150826002028217905092915050565b610cfa8261069d565b67ffffffffffffffff811115610d1357610d12610754565b5b610d1d8254610aa8565b610d28828285610c64565b600060209050601f831160018114610d5b5760008415610d49578287015190505b610d538582610cd5565b865550610dbb565b601f198416610d6986610b45565b60005b82811015610d9157848901518255600182019150602085019450602081019050610d6c565b86831015610dae5784890151610daa601f891682610cb7565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220cce983c7fbce5bd76dfddd3162f253f865a5ada15db53b1d2bea93edf7c54a7764736f6c63430008130033";

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