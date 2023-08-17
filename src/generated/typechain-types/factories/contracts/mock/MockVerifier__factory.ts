/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { MockVerifier, MockVerifierInterface } from "../../../contracts/mock/MockVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610194806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638e760afe14610030575b600080fd5b61004a600480360381019061004591906100db565b610060565b6040516100579190610143565b60405180910390f35b60006001905092915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f84011261009b5761009a610076565b5b8235905067ffffffffffffffff8111156100b8576100b761007b565b5b6020830191508360018202830111156100d4576100d3610080565b5b9250929050565b600080602083850312156100f2576100f161006c565b5b600083013567ffffffffffffffff8111156101105761010f610071565b5b61011c85828601610085565b92509250509250929050565b60008115159050919050565b61013d81610128565b82525050565b60006020820190506101586000830184610134565b9291505056fea26469706673582212209b75bbef68ef1009d579ae6d74b333fc01247efa01ee514e7bf3bd8260f3a6c264736f6c63430008130033";

type MockVerifierConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: MockVerifierConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockVerifier__factory extends ContractFactory {
  constructor(...args: MockVerifierConstructorParams) {
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
      MockVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockVerifier__factory {
    return super.connect(runner) as MockVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockVerifierInterface {
    return new Interface(_abi) as MockVerifierInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MockVerifier {
    return new Contract(address, _abi, runner) as unknown as MockVerifier;
  }
}
