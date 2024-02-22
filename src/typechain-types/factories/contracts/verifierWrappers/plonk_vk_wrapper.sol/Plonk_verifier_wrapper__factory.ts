/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, BytesLike, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  Plonk_verifier_wrapper,
  Plonk_verifier_wrapperInterface,
} from "../../../../contracts/verifierWrappers/plonk_vk_wrapper.sol/Plonk_verifier_wrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract i_plonk_vk",
        name: "_iverifier",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_sampleInput",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_sampleProof",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "checkSampleInputsAndProof",
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
        components: [
          {
            internalType: "uint256",
            name: "marketId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeTakenForProofGeneration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "refundAddress",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "proverData",
            type: "bytes",
          },
        ],
        internalType: "struct ProofMarketplace.Ask",
        name: "ask",
        type: "tuple",
      },
      {
        internalType: "enum ProofMarketplace.SecretType",
        name: "secretType",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "secret_inputs",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "acl",
        type: "bytes",
      },
    ],
    name: "createRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "inputs",
        type: "bytes32[]",
      },
      {
        internalType: "bytes",
        name: "proof",
        type: "bytes",
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
        internalType: "bytes32[]",
        name: "inputs",
        type: "bytes32[]",
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
        internalType: "bytes",
        name: "proof",
        type: "bytes",
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
        internalType: "contract i_plonk_vk",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proofMarketplace",
    outputs: [
      {
        internalType: "contract ProofMarketplace",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sampleInput",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sampleProof",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ProofMarketplace",
        name: "_proofMarketplace",
        type: "address",
      },
    ],
    name: "setProofMarketplaceContract",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "encodedProof",
        type: "bytes",
      },
    ],
    name: "verifyAgainstSampleInputs",
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
  "0x60a06040523480156200001157600080fd5b50604051620012623803806200126283398101604081905262000034916200012d565b6001600160a01b03831660805260016200004f838262000246565b5060026200005e828262000246565b5050505062000312565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200009057600080fd5b81516001600160401b0380821115620000ad57620000ad62000068565b604051601f8301601f19908116603f01168101908282118183101715620000d857620000d862000068565b81604052838152602092508683858801011115620000f557600080fd5b600091505b83821015620001195785820183015181830184015290820190620000fa565b600093810190920192909252949350505050565b6000806000606084860312156200014357600080fd5b83516001600160a01b03811681146200015b57600080fd5b60208501519093506001600160401b03808211156200017957600080fd5b62000187878388016200007e565b935060408601519150808211156200019e57600080fd5b50620001ad868287016200007e565b9150509250925092565b600181811c90821680620001cc57607f821691505b602082108103620001ed57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200024157600081815260208120601f850160051c810160208610156200021c5750805b601f850160051c820191505b818110156200023d5782815560010162000228565b5050505b505050565b81516001600160401b0381111562000262576200026262000068565b6200027a81620002738454620001b7565b84620001f3565b602080601f831160018114620002b25760008415620002995750858301515b600019600386901b1c1916600185901b1785556200023d565b600085815260208120601f198616915b82811015620002e357888601518255948401946001909101908401620002c2565b5085821015620003025787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b608051610f2d62000335600039600081816101d801526104a40152610f2d6000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80637d8ad42b1161008c578063a6dfbc7f11610066578063a6dfbc7f146101a5578063a76c0551146101b8578063d2235eac146101c0578063e7f5b81d146101d357600080fd5b80637d8ad42b1461015f57806381c45c70146101675780638e760afe1461019257600080fd5b806302f77d19146100d4578063056de704146100fc57806310a54279146101115780633fa0cfbf146101195780634cff91251461013957806370f9dfca1461014c575b600080fd5b6100e76100e2366004610777565b6101fa565b60405190151581526020015b60405180910390f35b61010f61010a3660046107cb565b610232565b005b6100e76102a0565b61012c610127366004610871565b61033a565b6040516100f391906108f5565b61012c610147366004610777565b610363565b61012c61015a366004610908565b610376565b61012c6103b2565b60005461017a906001600160a01b031681565b6040516001600160a01b0390911681526020016100f3565b6100e76101a0366004610777565b610440565b6100e76101b33660046109b3565b610526565b61012c61053e565b61010f6101ce3660046109f4565b61054b565b61017a7f000000000000000000000000000000000000000000000000000000000000000081565b600080600183604051602001610211929190610ae2565b604051602081830303815290604052905061022b81610440565b9392505050565b6000546001600160a01b03161561027e5760405162461bcd60e51b815260206004820152600b60248201526a105b1c9958591e4814d95d60aa1b60448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000610335600280546102b290610aa8565b80601f01602080910402602001604051908101604052809291908181526020018280546102de90610aa8565b801561032b5780601f106103005761010080835404028352916020019161032b565b820191906000526020600020905b81548152906001019060200180831161030e57829003601f168201915b50505050506101fa565b905090565b60608160405160200161034d9190610bdd565b6040516020818303038152906040529050919050565b60608160405160200161034d91906108f5565b60606103818361033a565b61038a83610363565b60405160200161039b929190610bf0565b604051602081830303815290604052905092915050565b600180546103bf90610aa8565b80601f01602080910402602001604051908101604052809291908181526020018280546103eb90610aa8565b80156104385780601f1061040d57610100808354040283529160200191610438565b820191906000526020600020905b81548152906001019060200180831161041b57829003601f168201915b505050505081565b60006060806000808580602001905181019061045c9190610c5a565b91509150818060200190518101906104749190610cb3565b93508080602001905181019061048a9190610d43565b604051633a94343960e21b81529093506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ea50d0e4906104db9086908890600401610d77565b602060405180830381865afa1580156104f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051c9190610d9c565b9695505050505050565b600061053482840184610871565b5060019392505050565b600280546103bf90610aa8565b60006040518060e0016040528088600001358152602001886020013581526020018860400135815260200188606001358152602001886080013581526020018860a001602081019061059d91906107cb565b6001600160a01b031681526020016105c36101276105be60c08c018c610dbe565b61063b565b9052600054604051633829c7e560e11b81529192506001600160a01b0316906370538fca906106009084908a908a908a908a908a90600401610e4f565b600060405180830381600087803b15801561061a57600080fd5b505af115801561062e573d6000803e3d6000fd5b5050505050505050505050565b60606106478383610526565b6106a85760405162461bcd60e51b815260206004820152602c60248201527f506c6f6e6b20566572696669657220577261707065723a20496e76616c69642060448201526b1a5b9c1d5d08199bdc9b585d60a21b6064820152608401610275565b61022b82840184610871565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156106f2576106f26106b4565b604052919050565b60006001600160401b03821115610713576107136106b4565b50601f01601f191660200190565b600082601f83011261073257600080fd5b8135610745610740826106fa565b6106ca565b81815284602083860101111561075a57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561078957600080fd5b81356001600160401b0381111561079f57600080fd5b6107ab84828501610721565b949350505050565b6001600160a01b03811681146107c857600080fd5b50565b6000602082840312156107dd57600080fd5b813561022b816107b3565b60006001600160401b03821115610801576108016106b4565b5060051b60200190565b600082601f83011261081c57600080fd5b8135602061082c610740836107e8565b82815260059290921b8401810191818101908684111561084b57600080fd5b8286015b84811015610866578035835291830191830161084f565b509695505050505050565b60006020828403121561088357600080fd5b81356001600160401b0381111561089957600080fd5b6107ab8482850161080b565b60005b838110156108c05781810151838201526020016108a8565b50506000910152565b600081518084526108e18160208601602086016108a5565b601f01601f19169290920160200192915050565b60208152600061022b60208301846108c9565b6000806040838503121561091b57600080fd5b82356001600160401b038082111561093257600080fd5b61093e8683870161080b565b9350602085013591508082111561095457600080fd5b5061096185828601610721565b9150509250929050565b60008083601f84011261097d57600080fd5b5081356001600160401b0381111561099457600080fd5b6020830191508360208285010111156109ac57600080fd5b9250929050565b600080602083850312156109c657600080fd5b82356001600160401b038111156109dc57600080fd5b6109e88582860161096b565b90969095509350505050565b60008060008060008060808789031215610a0d57600080fd5b86356001600160401b0380821115610a2457600080fd5b9088019060e0828b031215610a3857600080fd5b90965060208801359060038210610a4e57600080fd5b90955060408801359080821115610a6457600080fd5b610a708a838b0161096b565b90965094506060890135915080821115610a8957600080fd5b50610a9689828a0161096b565b979a9699509497509295939492505050565b600181811c90821680610abc57607f821691505b602082108103610adc57634e487b7160e01b600052602260045260246000fd5b50919050565b60408152600080845481600182811c915080831680610b0257607f831692505b60208084108203610b2157634e487b7160e01b86526022600452602486fd5b6040880184905260608801828015610b405760018114610b5657610b81565b60ff198716825285151560051b82019750610b81565b60008c81526020902060005b87811015610b7b57815484820152908601908401610b62565b83019850505b5050878603818901525050505050610b9981856108c9565b95945050505050565b600081518084526020808501945080840160005b83811015610bd257815187529582019590820190600101610bb6565b509495945050505050565b60208152600061022b6020830184610ba2565b604081526000610c0360408301856108c9565b8281036020840152610b9981856108c9565b600082601f830112610c2657600080fd5b8151610c34610740826106fa565b818152846020838601011115610c4957600080fd5b6107ab8260208301602087016108a5565b60008060408385031215610c6d57600080fd5b82516001600160401b0380821115610c8457600080fd5b610c9086838701610c15565b93506020850151915080821115610ca657600080fd5b5061096185828601610c15565b60006020808385031215610cc657600080fd5b82516001600160401b03811115610cdc57600080fd5b8301601f81018513610ced57600080fd5b8051610cfb610740826107e8565b81815260059190911b82018301908381019087831115610d1a57600080fd5b928401925b82841015610d3857835182529284019290840190610d1f565b979650505050505050565b600060208284031215610d5557600080fd5b81516001600160401b03811115610d6b57600080fd5b6107ab84828501610c15565b604081526000610d8a60408301856108c9565b8281036020840152610b998185610ba2565b600060208284031215610dae57600080fd5b8151801515811461022b57600080fd5b6000808335601e19843603018112610dd557600080fd5b8301803591506001600160401b03821115610def57600080fd5b6020019150368190038213156109ac57600080fd5b60038110610e2257634e487b7160e01b600052602160045260246000fd5b9052565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6080815286516080820152602087015160a0820152604087015160c0820152606087015160e0820152608087015161010082015260018060a01b0360a088015116610120820152600060c088015160e0610140840152610eb36101608401826108c9565b9050610ec26020840189610e04565b8281036040840152610ed5818789610e26565b90508281036060840152610eea818587610e26565b999850505050505050505056fea264697066735822122096dc44866817a61d5bfe694739c795027bbfe64f44d6a719146166ff9b06c7e164736f6c63430008130033";

type Plonk_verifier_wrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: Plonk_verifier_wrapperConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Plonk_verifier_wrapper__factory extends ContractFactory {
  constructor(...args: Plonk_verifier_wrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _iverifier: AddressLike,
    _sampleInput: BytesLike,
    _sampleProof: BytesLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_iverifier, _sampleInput, _sampleProof, overrides || {});
  }
  override deploy(
    _iverifier: AddressLike,
    _sampleInput: BytesLike,
    _sampleProof: BytesLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_iverifier, _sampleInput, _sampleProof, overrides || {}) as Promise<
      Plonk_verifier_wrapper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Plonk_verifier_wrapper__factory {
    return super.connect(runner) as Plonk_verifier_wrapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Plonk_verifier_wrapperInterface {
    return new Interface(_abi) as Plonk_verifier_wrapperInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Plonk_verifier_wrapper {
    return new Contract(address, _abi, runner) as unknown as Plonk_verifier_wrapper;
  }
}
