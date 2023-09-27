/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { IAttestationVerifier, IAttestationVerifierInterface } from "../../../contracts/interfaces/IAttestationVerifier";

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

export class IAttestationVerifier__factory {
  static readonly abi = _abi;
  static createInterface(): IAttestationVerifierInterface {
    return new Interface(_abi) as IAttestationVerifierInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IAttestationVerifier {
    return new Contract(address, _abi, runner) as unknown as IAttestationVerifier;
  }
}
