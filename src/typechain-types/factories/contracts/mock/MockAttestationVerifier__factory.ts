/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { MockAttestationVerifier, MockAttestationVerifierInterface } from "../../../contracts/mock/MockAttestationVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeVerify",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "attestation",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "sourceEnclaveKey",
        type: "address",
      },
      {
        internalType: "address",
        name: "enclaveKey",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "PCR0",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "PCR1",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "PCR2",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "enclaveCPUs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "enclaveMemory",
        type: "uint256",
      },
    ],
    name: "safeVerify",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "attestation",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "sourceEnclaveKey",
        type: "address",
      },
      {
        internalType: "address",
        name: "enclaveKey",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "PCR0",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "PCR1",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "PCR2",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "enclaveCPUs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "enclaveMemory",
        type: "uint256",
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
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102d4806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806306d5a2ed146100515780638e760afe14610064578063948b44591461008c578063b247499b146100a4575b600080fd5b61006261005f366004610163565b50565b005b610078610072366004610163565b50600190565b604051901515815260200160405180910390f35b61006261009a3660046101bc565b5050505050505050565b6100786100b23660046101bc565b600198975050505050505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126100e757600080fd5b813567ffffffffffffffff80821115610102576101026100c0565b604051601f8301601f19908116603f0116810190828211818310171561012a5761012a6100c0565b8160405283815286602085880101111561014357600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561017557600080fd5b813567ffffffffffffffff81111561018c57600080fd5b610198848285016100d6565b949350505050565b80356001600160a01b03811681146101b757600080fd5b919050565b600080600080600080600080610100898b0312156101d957600080fd5b883567ffffffffffffffff808211156101f157600080fd5b6101fd8c838d016100d6565b995061020b60208c016101a0565b985061021960408c016101a0565b975060608b013591508082111561022f57600080fd5b61023b8c838d016100d6565b965060808b013591508082111561025157600080fd5b61025d8c838d016100d6565b955060a08b013591508082111561027357600080fd5b506102808b828c016100d6565b93505060c0890135915060e08901359050929598509295989093965056fea26469706673582212207e25a4a27b376d533f3ae0f9f1a9eca298ce938eda36f8a2f059a25b3e9cc9bd64736f6c63430008130033";

type MockAttestationVerifierConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: MockAttestationVerifierConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockAttestationVerifier__factory extends ContractFactory {
  constructor(...args: MockAttestationVerifierConstructorParams) {
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
      MockAttestationVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockAttestationVerifier__factory {
    return super.connect(runner) as MockAttestationVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockAttestationVerifierInterface {
    return new Interface(_abi) as MockAttestationVerifierInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MockAttestationVerifier {
    return new Contract(address, _abi, runner) as unknown as MockAttestationVerifier;
  }
}
