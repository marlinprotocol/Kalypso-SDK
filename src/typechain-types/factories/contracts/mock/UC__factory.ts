/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { UC, UCInterface } from "../../../contracts/mock/UC";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "my_operation1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "my_operation2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "slot1",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b50600054610100900460ff16158080156100355750600054600160ff909116105b8061004f5750303b15801561004f575060005460ff166001145b6100b65760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff1916600117905580156100d9576000805461ff0019166101001790555b801561011f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50608051610b6d61015760003960008181610176015281816101bf0152818161025501528181610295015261031f0152610b6d6000f3fe60806040526004361061007b5760003560e01c806352d1902d1161004e57806352d1902d146101205780638129fc1c14610135578063bc2e66e61461014a578063eefb44611461015657600080fd5b806301ffc9a7146100805780631f457cb5146100c65780633659cfe6146100eb5780634f1ef2861461010d575b600080fd5b34801561008c57600080fd5b506100b161009b366004610893565b6001600160e01b0319166301ffc9a760e01b1490565b60405190151581526020015b60405180910390f35b3480156100d257600080fd5b506100dd6102bd5481565b6040519081526020016100bd565b3480156100f757600080fd5b5061010b6101063660046108d9565b61016c565b005b61010b61011b36600461090a565b61024b565b34801561012c57600080fd5b506100dd610312565b34801561014157600080fd5b5061010b6103c5565b34801561010b57600080fd5b34801561016257600080fd5b506102bd546100dd565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036101bd5760405162461bcd60e51b81526004016101b4906109cc565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610206600080516020610af1833981519152546001600160a01b031690565b6001600160a01b03161461022c5760405162461bcd60e51b81526004016101b490610a18565b60408051600080825260208201909252610248918391906104cd565b50565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036102935760405162461bcd60e51b81526004016101b4906109cc565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166102dc600080516020610af1833981519152546001600160a01b031690565b6001600160a01b0316146103025760405162461bcd60e51b81526004016101b490610a18565b61030e828260016104cd565b5050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103b25760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016101b4565b50600080516020610af183398151915290565b600054610100900460ff16158080156103e55750600054600160ff909116105b806103ff5750303b1580156103ff575060005460ff166001145b6104625760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016101b4565b6000805460ff191660011790558015610485576000805461ff0019166101001790555b8015610248576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610505576105008361063d565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561055f575060408051601f3d908101601f1916820190925261055c91810190610a64565b60015b6105c25760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b60648201526084016101b4565b600080516020610af183398151915281146106315760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b60648201526084016101b4565b506105008383836106d9565b6001600160a01b0381163b6106aa5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016101b4565b600080516020610af183398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6106e283610704565b6000825111806106ef5750805b15610500576106fe8383610744565b50505050565b61070d8161063d565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606107698383604051806060016040528060278152602001610b1160279139610770565b9392505050565b6060600080856001600160a01b03168560405161078d9190610aa1565b600060405180830381855af49150503d80600081146107c8576040519150601f19603f3d011682016040523d82523d6000602084013e6107cd565b606091505b50915091506107de868383876107e8565b9695505050505050565b60608315610857578251600003610850576001600160a01b0385163b6108505760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101b4565b5081610861565b6108618383610869565b949350505050565b8151156108795781518083602001fd5b8060405162461bcd60e51b81526004016101b49190610abd565b6000602082840312156108a557600080fd5b81356001600160e01b03198116811461076957600080fd5b80356001600160a01b03811681146108d457600080fd5b919050565b6000602082840312156108eb57600080fd5b610769826108bd565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561091d57600080fd5b610926836108bd565b9150602083013567ffffffffffffffff8082111561094357600080fd5b818501915085601f83011261095757600080fd5b813581811115610969576109696108f4565b604051601f8201601f19908116603f01168101908382118183101715610991576109916108f4565b816040528281528860208487010111156109aa57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b600060208284031215610a7657600080fd5b5051919050565b60005b83811015610a98578181015183820152602001610a80565b50506000910152565b60008251610ab3818460208701610a7d565b9190910192915050565b6020815260008251806020840152610adc816040850160208701610a7d565b601f01601f1916919091016040019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212206951f205a12829089c08ddf6d357ab7cc8d80674122d185442e5e523bff6842e64736f6c63430008130033";

type UCConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: UCConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UC__factory extends ContractFactory {
  constructor(...args: UCConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(overrides?: NonPayableOverrides & { from?: string }): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      UC & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): UC__factory {
    return super.connect(runner) as UC__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UCInterface {
    return new Interface(_abi) as UCInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): UC {
    return new Contract(address, _abi, runner) as unknown as UC;
  }
}