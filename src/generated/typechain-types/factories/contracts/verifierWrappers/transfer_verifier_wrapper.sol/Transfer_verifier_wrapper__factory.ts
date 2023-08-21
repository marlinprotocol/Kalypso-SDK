/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
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
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
  "0x60a060405234801561001057600080fd5b5060405162000eb738038062000eb7833981810160405281019061003491906100e3565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505050610110565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009e82610073565b9050919050565b60006100b082610093565b9050919050565b6100c0816100a5565b81146100cb57600080fd5b50565b6000815190506100dd816100b7565b92915050565b6000602082840312156100f9576100f861006e565b5b6000610107848285016100ce565b91505092915050565b608051610d8462000133600039600081816101f4015261031d0152610d846000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806364f1bcc7146100675780638e760afe146100975780639966599f146100c7578063a6dfbc7f146100f7578063dfd4ac1b14610127578063e7f5b81d14610157575b600080fd5b610081600480360381019061007c9190610515565b610175565b60405161008e91906105c2565b60405180910390f35b6100b160048036038101906100ac919061063f565b61019e565b6040516100be91906106a7565b60405180910390f35b6100e160048036038101906100dc9190610773565b61029a565b6040516100ee91906105c2565b60405180910390f35b610111600480360381019061010c919061063f565b6102d6565b60405161011e91906106a7565b60405180910390f35b610141600480360381019061013c91906107b4565b6102f2565b60405161014e91906105c2565b60405180910390f35b61015f61031b565b60405161016c9190610860565b60405180910390f35b6060816040516020016101889190610926565b6040516020818303038152906040529050919050565b60006101a861033f565b6101b0610361565b60008086868101906101c291906109f7565b91509150818060200190518101906101da9190610b0f565b9350808060200190518101906101f09190610bc7565b92507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166368444dc785856040518363ffffffff1660e01b815260040161024d929190610c79565b602060405180830381865afa15801561026a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028e9190610ccf565b94505050505092915050565b60606102a5836102f2565b6102ae83610175565b6040516020016102bf929190610cfc565b604051602081830303815290604052905092915050565b600082828101906102e791906107b4565b506001905092915050565b6060816040516020016103059190610d33565b6040516020818303038152906040529050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6040518060a00160405280600590602082028036833780820191505090505090565b604051806101000160405280600890602082028036833780820191505090505090565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6103e68261039d565b810181811067ffffffffffffffff82111715610405576104046103ae565b5b80604052505050565b6000610418610384565b905061042482826103dd565b919050565b600067ffffffffffffffff821115610444576104436103ae565b5b602082029050919050565b600080fd5b6000819050919050565b61046781610454565b811461047257600080fd5b50565b6000813590506104848161045e565b92915050565b600061049d61049884610429565b61040e565b905080602084028301858111156104b7576104b661044f565b5b835b818110156104e057806104cc8882610475565b8452602084019350506020810190506104b9565b5050509392505050565b600082601f8301126104ff576104fe610398565b5b600861050c84828561048a565b91505092915050565b6000610100828403121561052c5761052b61038e565b5b600061053a848285016104ea565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561057d578082015181840152602081019050610562565b60008484015250505050565b600061059482610543565b61059e818561054e565b93506105ae81856020860161055f565b6105b78161039d565b840191505092915050565b600060208201905081810360008301526105dc8184610589565b905092915050565b600080fd5b60008083601f8401126105ff576105fe610398565b5b8235905067ffffffffffffffff81111561061c5761061b6105e4565b5b6020830191508360018202830111156106385761063761044f565b5b9250929050565b600080602083850312156106565761065561038e565b5b600083013567ffffffffffffffff81111561067457610673610393565b5b610680858286016105e9565b92509250509250929050565b60008115159050919050565b6106a18161068c565b82525050565b60006020820190506106bc6000830184610698565b92915050565b600067ffffffffffffffff8211156106dd576106dc6103ae565b5b602082029050919050565b60006106fb6106f6846106c2565b61040e565b905080602084028301858111156107155761071461044f565b5b835b8181101561073e578061072a8882610475565b845260208401935050602081019050610717565b5050509392505050565b600082601f83011261075d5761075c610398565b5b600561076a8482856106e8565b91505092915050565b6000806101a0838503121561078b5761078a61038e565b5b600061079985828601610748565b92505060a06107aa858286016104ea565b9150509250929050565b600060a082840312156107ca576107c961038e565b5b60006107d884828501610748565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061082661082161081c846107e1565b610801565b6107e1565b9050919050565b60006108388261080b565b9050919050565b600061084a8261082d565b9050919050565b61085a8161083f565b82525050565b60006020820190506108756000830184610851565b92915050565b600060089050919050565b600081905092915050565b6000819050919050565b6108a481610454565b82525050565b60006108b6838361089b565b60208301905092915050565b6000602082019050919050565b6108d88161087b565b6108e28184610886565b92506108ed82610891565b8060005b8381101561091e57815161090587826108aa565b9650610910836108c2565b9250506001810190506108f1565b505050505050565b60006101008201905061093c60008301846108cf565b92915050565b600080fd5b600067ffffffffffffffff821115610962576109616103ae565b5b61096b8261039d565b9050602081019050919050565b82818337600083830152505050565b600061099a61099584610947565b61040e565b9050828152602081018484840111156109b6576109b5610942565b5b6109c1848285610978565b509392505050565b600082601f8301126109de576109dd610398565b5b81356109ee848260208601610987565b91505092915050565b60008060408385031215610a0e57610a0d61038e565b5b600083013567ffffffffffffffff811115610a2c57610a2b610393565b5b610a38858286016109c9565b925050602083013567ffffffffffffffff811115610a5957610a58610393565b5b610a65858286016109c9565b9150509250929050565b600081519050610a7e8161045e565b92915050565b6000610a97610a92846106c2565b61040e565b90508060208402830185811115610ab157610ab061044f565b5b835b81811015610ada5780610ac68882610a6f565b845260208401935050602081019050610ab3565b5050509392505050565b600082601f830112610af957610af8610398565b5b6005610b06848285610a84565b91505092915050565b600060a08284031215610b2557610b2461038e565b5b6000610b3384828501610ae4565b91505092915050565b6000610b4f610b4a84610429565b61040e565b90508060208402830185811115610b6957610b6861044f565b5b835b81811015610b925780610b7e8882610a6f565b845260208401935050602081019050610b6b565b5050509392505050565b600082601f830112610bb157610bb0610398565b5b6008610bbe848285610b3c565b91505092915050565b60006101008284031215610bde57610bdd61038e565b5b6000610bec84828501610b9c565b91505092915050565b600060059050919050565b600081905092915050565b6000819050919050565b6000602082019050919050565b610c2b81610bf5565b610c358184610c00565b9250610c4082610c0b565b8060005b83811015610c71578151610c5887826108aa565b9650610c6383610c15565b925050600181019050610c44565b505050505050565b60006101a082019050610c8f6000830185610c22565b610c9c60a08301846108cf565b9392505050565b610cac8161068c565b8114610cb757600080fd5b50565b600081519050610cc981610ca3565b92915050565b600060208284031215610ce557610ce461038e565b5b6000610cf384828501610cba565b91505092915050565b60006040820190508181036000830152610d168185610589565b90508181036020830152610d2a8184610589565b90509392505050565b600060a082019050610d486000830184610c22565b9291505056fea2646970667358221220bb29dac37b361ab0ad0e0e7e63773d334fc1b7e5da424a4c9251592d903c50b764736f6c63430008130033";

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
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_iverifier, overrides || {});
  }
  override deploy(_iverifier: AddressLike, overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(_iverifier, overrides || {}) as Promise<
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
