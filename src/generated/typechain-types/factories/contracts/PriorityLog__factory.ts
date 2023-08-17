/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { PriorityLog, PriorityLogInterface } from "../../contracts/PriorityLog";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "priorityStore",
    outputs: [
      {
        internalType: "enum IPriorityLog.Priority",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IPriorityLog.Priority",
        name: "priority",
        type: "uint8",
      },
    ],
    name: "setPriority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102c0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063991a34e71461003b578063db2636f61461006b575b600080fd5b61005560048036038101906100509190610179565b610087565b604051610062919061021d565b60405180910390f35b6100856004803603810190610080919061025d565b6100a7565b005b60006020528060005260406000206000915054906101000a900460ff1681565b6000339050816000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083600381111561010d5761010c6101a6565b5b02179055505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101468261011b565b9050919050565b6101568161013b565b811461016157600080fd5b50565b6000813590506101738161014d565b92915050565b60006020828403121561018f5761018e610116565b5b600061019d84828501610164565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600481106101e6576101e56101a6565b5b50565b60008190506101f7826101d5565b919050565b6000610207826101e9565b9050919050565b610217816101fc565b82525050565b6000602082019050610232600083018461020e565b92915050565b6004811061024557600080fd5b50565b60008135905061025781610238565b92915050565b60006020828403121561027357610272610116565b5b600061028184828501610248565b9150509291505056fea2646970667358221220e49c49672fc96972c989ea088d6501ee7c6a8415c41a86b98bfc56917e09d95b64736f6c63430008130033";

type PriorityLogConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: PriorityLogConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PriorityLog__factory extends ContractFactory {
  constructor(...args: PriorityLogConstructorParams) {
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
      PriorityLog & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PriorityLog__factory {
    return super.connect(runner) as PriorityLog__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PriorityLogInterface {
    return new Interface(_abi) as PriorityLogInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PriorityLog {
    return new Contract(address, _abi, runner) as unknown as PriorityLog;
  }
}
