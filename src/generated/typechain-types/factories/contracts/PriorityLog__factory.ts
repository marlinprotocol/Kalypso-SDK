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
  "0x608060405234801561001057600080fd5b50610183806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063991a34e71461003b578063db2636f614610074575b600080fd5b61005e6100493660046100be565b60006020819052908152604090205460ff1681565b60405161006b9190610104565b60405180910390f35b61008761008236600461012c565b610089565b005b336000818152602081905260409020805483919060ff191660018360038111156100b5576100b56100ee565b02179055505050565b6000602082840312156100d057600080fd5b81356001600160a01b03811681146100e757600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b602081016004831061012657634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561013e57600080fd5b8135600481106100e757600080fdfea2646970667358221220f99af17808426b7e4c43ae48429c82ffd65affd4c7608a6cc39f6b1d370d119664736f6c63430008130033";

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
