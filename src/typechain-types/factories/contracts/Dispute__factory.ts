/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Dispute, DisputeInterface } from "../../contracts/Dispute";

const _abi = [
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
        name: "attestationData",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "expectedImageId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "invalidProofSignature",
        type: "bytes",
      },
    ],
    name: "checkDisputeUsingAttesation",
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
    stateMutability: "pure",
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
        name: "invalidProofSignature",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "expectedSigner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isPublic",
        type: "bool",
      },
    ],
    name: "checkDisputeUsingSignature",
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
  "0x608060405234801561001057600080fd5b50610c2a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100405760003560e01c80622e27181461004557806371b582ff1461006c578063b2dcd8c81461007f575b600080fd5b6100586100533660046106a7565b610092565b604051901515815260200160405180910390f35b61005861007a366004610818565b610110565b61005861008d3660046108ad565b610241565b60008080806100a38789018961094d565b92509250925080156100f1576100e78b8b8b85898b158061007a57507f99ff0d9125e1fc9531a11262e15aeb2c60509a078c4cc4c64cefdfb06ff686478c14610110565b9350505050610105565b6100ff8b8b8b868a87610241565b93505050505b979650505050505050565b600080821561014b5787878760405160200161012e939291906109c1565b604051602081830303815290604052805190602001209050610170565b60408051602081018a9052016040516020818303038152906040528051906020012090505b60006101c9826040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b905060006101d782886102e1565b9050856001600160a01b0316816001600160a01b03161460405180604001604052806002815260200161473760f01b815250906102305760405162461bcd60e51b81526004016102279190610a1b565b60405180910390fd5b5060019a9950505050505050505050565b60008061024d85610305565b90508381146040518060400160405280600381526020016241313160e81b8152509061028c5760405162461bcd60e51b81526004016102279190610a1b565b5060006102988661033e565b91506102d4905089898987858a158061007a57507f99ff0d9125e1fc9531a11262e15aeb2c60509a078c4cc4c64cefdfb06ff686478b14610110565b9998505050505050505050565b60008060006102f08585610374565b915091506102fd816103b9565b509392505050565b6000806000808480602001905181019061031f9190610aa6565b5050955095509550505050610335838383610506565b95945050505050565b6060600080838060200190518101906103579190610aa6565b5050505050925050508061036a8261053f565b9250925050915091565b60008082516041036103aa5760208301516040840151606085015160001a61039e8782858561058c565b945094505050506103b2565b506000905060025b9250929050565b60008160048111156103cd576103cd610b9b565b036103d55750565b60018160048111156103e9576103e9610b9b565b036104365760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610227565b600281600481111561044a5761044a610b9b565b036104975760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610227565b60038160048111156104ab576104ab610b9b565b036105035760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610227565b50565b60008084848460405160200161051e93929190610bb1565b60408051808303601f19018152919052805160209091012095945050505050565b6000815160401460405180604001604052806002815260200161473760f01b8152509061057f5760405162461bcd60e51b81526004016102279190610a1b565b5050805160209091012090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156105c35750600090506003610647565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610617573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661064057600060019250925050610647565b9150600090505b94509492505050565b60008083601f84011261066257600080fd5b50813567ffffffffffffffff81111561067a57600080fd5b6020830191508360208285010111156103b257600080fd5b6001600160a01b038116811461050357600080fd5b600080600080600080600060a0888a0312156106c257600080fd5b87359650602088013567ffffffffffffffff808211156106e157600080fd5b6106ed8b838c01610650565b909850965060408a013591508082111561070657600080fd5b506107138a828b01610650565b90955093505060608801359150608088013561072e81610692565b8091505092959891949750929550565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561077d5761077d61073e565b604052919050565b600067ffffffffffffffff82111561079f5761079f61073e565b50601f01601f191660200190565b600082601f8301126107be57600080fd5b81356107d16107cc82610785565b610754565b8181528460208386010111156107e657600080fd5b816020850160208301376000918101602001919091529392505050565b8035801515811461081357600080fd5b919050565b60008060008060008060a0878903121561083157600080fd5b86359550602087013567ffffffffffffffff8082111561085057600080fd5b61085c8a838b01610650565b9097509550604089013591508082111561087557600080fd5b5061088289828a016107ad565b935050606087013561089381610692565b91506108a160808801610803565b90509295509295509295565b60008060008060008060a087890312156108c657600080fd5b86359550602087013567ffffffffffffffff808211156108e557600080fd5b6108f18a838b01610650565b9097509550604089013591508082111561090a57600080fd5b6109168a838b016107ad565b945060608901359350608089013591508082111561093357600080fd5b5061094089828a016107ad565b9150509295509295509295565b60008060006060848603121561096257600080fd5b833567ffffffffffffffff8082111561097a57600080fd5b610986878388016107ad565b9450602086013591508082111561099c57600080fd5b506109a9868287016107ad565b9250506109b860408501610803565b90509250925092565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b60005b83811015610a125781810151838201526020016109fa565b50506000910152565b6020815260008251806020840152610a3a8160408501602087016109f7565b601f01601f19169190910160400192915050565b600082601f830112610a5f57600080fd5b8151610a6d6107cc82610785565b818152846020838601011115610a8257600080fd5b610a938260208301602087016109f7565b949350505050565b805161081381610692565b600080600080600080600080610100898b031215610ac357600080fd5b885167ffffffffffffffff80821115610adb57600080fd5b610ae78c838d01610a4e565b9950610af560208c01610a9b565b985060408b0151915080821115610b0b57600080fd5b610b178c838d01610a4e565b975060608b0151915080821115610b2d57600080fd5b610b398c838d01610a4e565b965060808b0151915080821115610b4f57600080fd5b610b5b8c838d01610a4e565b955060a08b0151915080821115610b7157600080fd5b50610b7e8b828c01610a4e565b60c08b015160e0909b0151999c989b509699959894979350505050565b634e487b7160e01b600052602160045260246000fd5b60008451610bc38184602089016109f7565b845190830190610bd78183602089016109f7565b8451910190610bea8183602088016109f7565b019594505050505056fea2646970667358221220add11233e52cba23be277afdd2f746b66f9e3239e24e05a41b8ad904f3bbad7d64736f6c63430008130033";

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

  override getDeployTransaction(overrides?: NonPayableOverrides & { from?: string }): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
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
