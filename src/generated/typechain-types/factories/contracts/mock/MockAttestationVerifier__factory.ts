/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MockAttestationVerifier,
  MockAttestationVerifierInterface,
} from "../../../contracts/mock/MockAttestationVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
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
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610155806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638e760afe14610030575b600080fd5b61004461003e36600461006e565b50600190565b604051901515815260200160405180910390f35b634e487b7160e01b600052604160045260246000fd5b60006020828403121561008057600080fd5b813567ffffffffffffffff8082111561009857600080fd5b818401915084601f8301126100ac57600080fd5b8135818111156100be576100be610058565b604051601f8201601f19908116603f011681019083821181831017156100e6576100e6610058565b816040528281528760208487010111156100ff57600080fd5b82602086016020830137600092810160200192909252509594505050505056fea26469706673582212201800a9fcc398b7c40b3545f58707e8d49d9bb81936c036f7e0fb7a693b76e05264736f6c63430008130033";

type MockAttestationVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockAttestationVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockAttestationVerifier__factory extends ContractFactory {
  constructor(...args: MockAttestationVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MockAttestationVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MockAttestationVerifier__factory {
    return super.connect(runner) as MockAttestationVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockAttestationVerifierInterface {
    return new Interface(_abi) as MockAttestationVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockAttestationVerifier {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MockAttestationVerifier;
  }
}
