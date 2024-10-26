/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, ContractTransactionResponse, Interface } from "ethers";
import type { Signer, BytesLike, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  Tee_verifier_wrapper,
  Tee_verifier_wrapperInterface,
} from "../../../../contracts/verifierWrappers/tee_verifier_wrapper.sol/Tee_verifier_wrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "contract IAttestationVerifier",
        name: "_av",
        type: "address",
      },
      {
        internalType: "bytes[]",
        name: "_proverPcrs",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AttestationAutherAttestationTooOld",
    type: "error",
  },
  {
    inputs: [],
    name: "AttestationAutherImageNotInFamily",
    type: "error",
  },
  {
    inputs: [],
    name: "AttestationAutherImageNotWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "AttestationAutherKeyNotVerified",
    type: "error",
  },
  {
    inputs: [],
    name: "AttestationAutherMismatchedLengths",
    type: "error",
  },
  {
    inputs: [],
    name: "AttestationAutherPCRsInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "AttestationAutherPubkeyLengthInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [],
    name: "InferredImageIdIsDifferent",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "invalidSignerAddress",
        type: "address",
      },
    ],
    name: "InvalidEnclaveSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInputs",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "imageId",
        type: "bytes32",
      },
    ],
    name: "MustBeAnEnclave",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyAdminCanCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "imageId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "family",
        type: "bytes32",
      },
    ],
    name: "EnclaveImageAddedToFamily",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "imageId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "family",
        type: "bytes32",
      },
    ],
    name: "EnclaveImageRemovedFromFamily",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "imageId",
        type: "bytes32",
      },
    ],
    name: "EnclaveImageRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "imageId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "PCR0",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "PCR1",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "PCR2",
        type: "bytes",
      },
    ],
    name: "EnclaveImageWhitelisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "enclaveAddress",
        type: "address",
      },
    ],
    name: "EnclaveKeyRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "enclaveAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "imageId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "enclavePubKey",
        type: "bytes",
      },
    ],
    name: "EnclaveKeyVerified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "enclaveAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "imageId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "enclavePubKey",
        type: "bytes",
      },
    ],
    name: "EnclaveKeyWhitelisted",
    type: "event",
  },
  {
    inputs: [],
    name: "ATTESTATION_MAX_AGE",
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
    inputs: [],
    name: "ATTESTATION_VERIFIER",
    outputs: [
      {
        internalType: "contract IAttestationVerifier",
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
        name: "_proverPcr",
        type: "bytes",
      },
    ],
    name: "addEnclaveImageToFamily",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        internalType: "string[]",
        name: "inputs",
        type: "string[]",
      },
      {
        internalType: "string",
        name: "proof",
        type: "string",
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
        internalType: "string[]",
        name: "inputs",
        type: "string[]",
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
        internalType: "string",
        name: "proof",
        type: "string",
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
    inputs: [
      {
        internalType: "address",
        name: "_key",
        type: "address",
      },
    ],
    name: "getVerifiedKey",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_imageId",
        type: "bytes32",
      },
    ],
    name: "getWhitelistedImage",
    outputs: [
      {
        components: [
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
        ],
        internalType: "struct AttestationAuther.EnclaveImage",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "imageId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "family",
        type: "bytes32",
      },
    ],
    name: "isImageInFamily",
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
        name: "",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "enclavePubKey",
            type: "bytes",
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
            name: "timestampInMilliseconds",
            type: "uint256",
          },
        ],
        internalType: "struct IAttestationVerifier.Attestation",
        name: "attestation",
        type: "tuple",
      },
    ],
    name: "verifyEnclaveKey",
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
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
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
  {
    inputs: [
      {
        internalType: "bytes",
        name: "attestation_data",
        type: "bytes",
      },
    ],
    name: "verifyKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "proverData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "proofData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "proofSignature",
        type: "bytes",
      },
    ],
    name: "verifyProofForTeeVerifier",
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
  "0x60c06040523480156200001157600080fd5b50604051620024e6380380620024e6833981016040819052620000349162000503565b6001600160a01b03821660805261ea6060a05260005b8151811015620001635760008060008484815181106200006e576200006e62000601565b60200260200101518060200190518101906200008b919062000617565b919450925090506000620000a18484846200018d565b9050620000ae81620001c8565b620000d3576040516306356cb360e01b81526004810182905260240160405180910390fd5b600062000100604051806060016040528087815260200186815260200185815250620001fe60201b60201c565b5090508181146200012457604051630c5a1aab60e11b815260040160405180910390fd5b62000150827f2b74d99c5c40123d35c0fe4ec1bc736a31a80b7051721193118dc1517e5c793f6200037a565b5050600190940193506200004a92505050565b5050600580546001600160a01b0319166001600160a01b03939093169290921790915550620008c5565b600080848484604051602001620001a793929190620006a8565b60408051808303601f19018152919052805160209091012095945050505050565b6000811580620001f757507fcd2e66bf0b91eeedc6c648ae9335a78d7c9a4ab0ef33612a824d91cdc68a4f2182145b1592915050565b60008082600001515160301480156200021c57508260200151516030145b80156200022e57508260400151516030145b6200024c576040516342630ddb60e11b815260040160405180910390fd5b60008360000151846020015185604001516040516020016200027193929190620006a8565b60408051601f1981840301815291815281516020928301206000818152928390529120805491925090620002a590620006f1565b159050620002b7579360009350915050565b60408051606081018252855181526020808701518183015286830151828401526000848152908190529190912081518190620002f4908262000782565b50602082015160018201906200030b908262000782565b506040820151600282019062000322908262000782565b50905050807f52b29bbdd97ab983419f50fa1590e5ab75e9942279e95e10a08607b06c23238b85600001518660200151876040015160405162000368939291906200087c565b60405180910390a29360019350915050565b600081815260026020908152604080832085845290915281205460ff1615620003a65750600062000401565b6000828152600260209081526040808320868452825291829020805460ff19166001179055905183815284917fbfb126e742ce9618b5bf6b54839916926f5c397752be35404c8368ddcf68c10a910160405180910390a25060015b92915050565b6001600160a01b03811681146200041d57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171562000461576200046162000420565b604052919050565b60005b83811015620004865781810151838201526020016200046c565b50506000910152565b600082601f830112620004a157600080fd5b81516001600160401b03811115620004bd57620004bd62000420565b620004d2601f8201601f191660200162000436565b818152846020838601011115620004e857600080fd5b620004fb82602083016020870162000469565b949350505050565b6000806000606084860312156200051957600080fd5b8351620005268162000407565b809350506020808501516200053b8162000407565b60408601519093506001600160401b03808211156200055957600080fd5b818701915087601f8301126200056e57600080fd5b81518181111562000583576200058362000420565b8060051b6200059485820162000436565b918252838101850191858101908b841115620005af57600080fd5b86860192505b83831015620005f057825185811115620005cf5760008081fd5b620005df8d89838a01016200048f565b8352509186019190860190620005b5565b809750505050505050509250925092565b634e487b7160e01b600052603260045260246000fd5b6000806000606084860312156200062d57600080fd5b83516001600160401b03808211156200064557600080fd5b62000653878388016200048f565b945060208601519150808211156200066a57600080fd5b62000678878388016200048f565b935060408601519150808211156200068f57600080fd5b506200069e868287016200048f565b9150509250925092565b60008451620006bc81846020890162000469565b845190830190620006d281836020890162000469565b8451910190620006e781836020880162000469565b0195945050505050565b600181811c908216806200070657607f821691505b6020821081036200072757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200077d576000816000526020600020601f850160051c81016020861015620007585750805b601f850160051c820191505b81811015620007795782815560010162000764565b5050505b505050565b81516001600160401b038111156200079e576200079e62000420565b620007b681620007af8454620006f1565b846200072d565b602080601f831160018114620007ee5760008415620007d55750858301515b600019600386901b1c1916600185901b17855562000779565b600085815260208120601f198616915b828110156200081f57888601518255948401946001909101908401620007fe565b50858210156200083e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600081518084526200086881602086016020860162000469565b601f01601f19169290920160200192915050565b6060815260006200089160608301866200084e565b8281036020840152620008a581866200084e565b90508281036040840152620008bb81856200084e565b9695505050505050565b60805160a051611bed620008f9600039600081816102690152610ca80152600081816102ae0152610d140152611bed6000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80637d8ad42b116100ad578063a76c055111610071578063a76c0551146102a1578063cd79f906146102a9578063d2e89832146102e8578063f6ea9962146102fb578063f851a4401461030e57600080fd5b80637d8ad42b1461023657806381fd3f571461023e5780638e760afe146102515780639aec990e14610264578063a6dfbc7f1461028b57600080fd5b806310a54279116100f457806310a54279146101ae5780632410f6ba146101b65780635be559af146101d65780636b5b21a6146101f657806375847b841461022357600080fd5b806301d58fa31461012657806302f77d19146101625780630707591f146101865780631084d65c1461019b575b600080fd5b61014f6101343660046110f9565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b61017661017036600461120d565b50600190565b6040519015158152602001610159565b610199610194366004611249565b610321565b005b6101996101a936600461120d565b61032f565b610176610432565b6101c96101c43660046112ba565b6104cd565b6040516101599190611323565b6101e96101e4366004611422565b6106c6565b6040516101599190611485565b610176610204366004611498565b6000908152600260209081526040808320938352929052205460ff1690565b6101766102313660046114ba565b610703565b6101e9610716565b6101e961024c36600461120d565b6107a4565b61017661025f36600461120d565b6107cd565b61014f7f000000000000000000000000000000000000000000000000000000000000000081565b610176610299366004611249565b600192915050565b6101e961084d565b6102d07f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610159565b6101766102f63660046115c3565b61085a565b6101e961030936600461164a565b61095a565b6005546102d0906001600160a01b031681565b61032b828261096d565b5050565b6005546001600160a01b0316331461035a576040516353fc776b60e11b815260040160405180910390fd5b60008060008380602001905181019061037391906116c3565b9194509250905060006103878484846109c7565b905061039281610a00565b6103b7576040516306356cb360e01b8152600481018290526024015b60405180910390fd5b60006103dc604051806060016040528087815260200186815260200185815250610a35565b5090508181146103ff57604051630c5a1aab60e11b815260040160405180910390fd5b610429827f2b74d99c5c40123d35c0fe4ec1bc736a31a80b7051721193118dc1517e5c793f610ba1565b50505050505050565b60006104c86004805461044490611740565b80601f016020809104026020016040519081016040528092919081815260200182805461047090611740565b80156104bd5780601f10610492576101008083540402835291602001916104bd565b820191906000526020600020905b8154815290600101906020018083116104a057829003601f168201915b505050505050600190565b905090565b6104f160405180606001604052806060815260200160608152602001606081525090565b6000828152602081905260409081902081516060810190925280548290829061051990611740565b80601f016020809104026020016040519081016040528092919081815260200182805461054590611740565b80156105925780601f1061056757610100808354040283529160200191610592565b820191906000526020600020905b81548152906001019060200180831161057557829003601f168201915b505050505081526020016001820180546105ab90611740565b80601f01602080910402602001604051908101604052809291908181526020018280546105d790611740565b80156106245780601f106105f957610100808354040283529160200191610624565b820191906000526020600020905b81548152906001019060200180831161060757829003601f168201915b5050505050815260200160028201805461063d90611740565b80601f016020809104026020016040519081016040528092919081815260200182805461066990611740565b80156106b65780601f1061068b576101008083540402835291602001916106b6565b820191906000526020600020905b81548152906001019060200180831161069957829003601f168201915b5050505050815250509050919050565b60606106d18361095a565b6106da836107a4565b6040516020016106eb92919061177a565b60405160208183030381529060405290505b92915050565b600061070f8383610c2b565b9392505050565b6003805461072390611740565b80601f016020809104026020016040519081016040528092919081815260200182805461074f90611740565b801561079c5780601f106107715761010080835404028352916020019161079c565b820191906000526020600020905b81548152906001019060200180831161077f57829003601f168201915b505050505081565b6060816040516020016107b79190611485565b6040516020818303038152906040529050919050565b6000806000838060200190518101906107e6919061179f565b9150915060008060008380602001905181019061080391906116c3565b9250925092508280519060200120858051906020012014610837576040516379a67d5b60e11b815260040160405180910390fd5b61084283838361085a565b979650505050505050565b6004805461072390611740565b600080848460405160200161087092919061177a565b60405160208183030381529060405280519060200120905060006108e1826040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b905060006108ef8286610e19565b90506001600160a01b03811661092357604051632880cb7f60e01b81526001600160a01b03821660048201526024016103ae565b61094d817f2b74d99c5c40123d35c0fe4ec1bc736a31a80b7051721193118dc1517e5c793f610e43565b5060019695505050505050565b6060816040516020016107b791906117f8565b600080808080806109808789018961185c565b9550955095509550955095506109bc866040518060a0016040528088815260200187815260200186815260200185815260200184815250610c2b565b505050505050505050565b6000808484846040516020016109df93929190611935565b60408051808303601f19018152919052805160209091012095945050505050565b6000811580610a2e57507fcd2e66bf0b91eeedc6c648ae9335a78d7c9a4ab0ef33612a824d91cdc68a4f2182145b1592915050565b6000808260000151516030148015610a5257508260200151516030145b8015610a6357508260400151516030145b610a80576040516342630ddb60e11b815260040160405180910390fd5b6000836000015184602001518560400151604051602001610aa393929190611935565b60408051601f1981840301815291815281516020928301206000818152928390529120805491925090610ad590611740565b159050610ae6579360009350915050565b60408051606081018252855181526020808701518183015286830151828401526000848152908190529190912081518190610b2190826119c8565b5060208201516001820190610b3690826119c8565b5060408201516002820190610b4b90826119c8565b50905050807f52b29bbdd97ab983419f50fa1590e5ab75e9942279e95e10a08607b06c23238b856000015186602001518760400151604051610b8f93929190611a87565b60405180910390a29360019350915050565b600081815260026020908152604080832085845290915281205460ff1615610bcb575060006106fd565b6000828152600260209081526040808320868452825291829020805460ff19166001179055905183815284917fbfb126e742ce9618b5bf6b54839916926f5c397752be35404c8368ddcf68c10a910160405180910390a250600192915050565b600080826020015183604001518460600151604051602001610c4f93929190611935565b60408051601f1981840301815291815281516020928301206000818152928390529120805491925090610c8190611740565b9050600003610ca357604051631c62560b60e11b815260040160405180910390fd5b610ccd7f000000000000000000000000000000000000000000000000000000000000000042611aca565b6103e88460800151610cdf9190611aeb565b11610cfd57604051630cb02f0560e11b815260040160405180910390fd5b60405163eac708a360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063eac708a390610d4b9087908790600401611b0d565b60006040518083038186803b158015610d6357600080fd5b505afa158015610d77573d6000803e3d6000fd5b505050506000610d8a8460000151610ef4565b6001600160a01b03811660009081526001602052604090205490915015610db6576000925050506106fd565b6001600160a01b03811660008181526001602052604090819020849055855190518492917fbb4d6428d53ea924d94be0488473deb5c0a70c979f8477d21911cb5bee4037fd91610e069190611485565b60405180910390a3506001949350505050565b600080600080610e298686610f24565b925092509250610e398282610f71565b5090949350505050565b6001600160a01b03821660009081526001602052604090205480610e7a57604051633dd8ca9560e01b815260040160405180910390fd5b60008181526020819052604090208054610e9390611740565b9050600003610eb557604051631c62560b60e11b815260040160405180910390fd5b600082815260026020908152604080832084845290915290205460ff16610eef57604051634866258160e11b815260040160405180910390fd5b505050565b60008151604014610f185760405163bd9c80c160e01b815260040160405180910390fd5b50805160209091012090565b60008060008351604103610f5e5760208401516040850151606086015160001a610f508882858561102a565b955095509550505050610f6a565b50508151600091506002905b9250925092565b6000826003811115610f8557610f85611ba1565b03610f8e575050565b6001826003811115610fa257610fa2611ba1565b03610fc05760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610fd457610fd4611ba1565b03610ff55760405163fce698f760e01b8152600481018290526024016103ae565b600382600381111561100957611009611ba1565b0361032b576040516335e2f38360e21b8152600481018290526024016103ae565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084111561106557506000915060039050826110ef565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa1580156110b9573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166110e5575060009250600191508290506110ef565b9250600091508190505b9450945094915050565b60006020828403121561110b57600080fd5b81356001600160a01b038116811461070f57600080fd5b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b038111828210171561115a5761115a611122565b60405290565b604051601f8201601f191681016001600160401b038111828210171561118857611188611122565b604052919050565b60006001600160401b038211156111a9576111a9611122565b50601f01601f191660200190565b600082601f8301126111c857600080fd5b81356111db6111d682611190565b611160565b8181528460208386010111156111f057600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561121f57600080fd5b81356001600160401b0381111561123557600080fd5b611241848285016111b7565b949350505050565b6000806020838503121561125c57600080fd5b82356001600160401b038082111561127357600080fd5b818501915085601f83011261128757600080fd5b81358181111561129657600080fd5b8660208285010111156112a857600080fd5b60209290920196919550909350505050565b6000602082840312156112cc57600080fd5b5035919050565b60005b838110156112ee5781810151838201526020016112d6565b50506000910152565b6000815180845261130f8160208601602086016112d3565b601f01601f19169290920160200192915050565b60208152600082516060602084015261133f60808401826112f7565b90506020840151601f198085840301604086015261135d83836112f7565b925060408601519150808584030160608601525061137b82826112f7565b95945050505050565b600082601f83011261139557600080fd5b813560206001600160401b03808311156113b1576113b1611122565b8260051b6113c0838201611160565b93845285810183019383810190888611156113da57600080fd5b84880192505b85831015611416578235848111156113f85760008081fd5b6114068a87838c01016111b7565b83525091840191908401906113e0565b98975050505050505050565b6000806040838503121561143557600080fd5b82356001600160401b038082111561144c57600080fd5b61145886838701611384565b9350602085013591508082111561146e57600080fd5b5061147b858286016111b7565b9150509250929050565b60208152600061070f60208301846112f7565b600080604083850312156114ab57600080fd5b50508035926020909101359150565b600080604083850312156114cd57600080fd5b82356001600160401b03808211156114e457600080fd5b6114f0868387016111b7565b9350602085013591508082111561150657600080fd5b9084019060a0828703121561151a57600080fd5b611522611138565b82358281111561153157600080fd5b61153d888286016111b7565b82525060208301358281111561155257600080fd5b61155e888286016111b7565b60208301525060408301358281111561157657600080fd5b611582888286016111b7565b60408301525060608301358281111561159a57600080fd5b6115a6888286016111b7565b606083015250608083013560808201528093505050509250929050565b6000806000606084860312156115d857600080fd5b83356001600160401b03808211156115ef57600080fd5b6115fb878388016111b7565b9450602086013591508082111561161157600080fd5b61161d878388016111b7565b9350604086013591508082111561163357600080fd5b50611640868287016111b7565b9150509250925092565b60006020828403121561165c57600080fd5b81356001600160401b0381111561167257600080fd5b61124184828501611384565b600082601f83011261168f57600080fd5b815161169d6111d682611190565b8181528460208386010111156116b257600080fd5b6112418260208301602087016112d3565b6000806000606084860312156116d857600080fd5b83516001600160401b03808211156116ef57600080fd5b6116fb8783880161167e565b9450602086015191508082111561171157600080fd5b61171d8783880161167e565b9350604086015191508082111561173357600080fd5b506116408682870161167e565b600181811c9082168061175457607f821691505b60208210810361177457634e487b7160e01b600052602260045260246000fd5b50919050565b60408152600061178d60408301856112f7565b828103602084015261137b81856112f7565b600080604083850312156117b257600080fd5b82516001600160401b03808211156117c957600080fd5b6117d58683870161167e565b935060208501519150808211156117eb57600080fd5b5061147b8582860161167e565b600060208083016020845280855180835260408601915060408160051b87010192506020870160005b8281101561184f57603f1988860301845261183d8583516112f7565b94509285019290850190600101611821565b5092979650505050505050565b60008060008060008060c0878903121561187557600080fd5b86356001600160401b038082111561188c57600080fd5b6118988a838b016111b7565b975060208901359150808211156118ae57600080fd5b6118ba8a838b016111b7565b965060408901359150808211156118d057600080fd5b6118dc8a838b016111b7565b955060608901359150808211156118f257600080fd5b6118fe8a838b016111b7565b9450608089013591508082111561191457600080fd5b5061192189828a016111b7565b92505060a087013590509295509295509295565b600084516119478184602089016112d3565b84519083019061195b8183602089016112d3565b845191019061196e8183602088016112d3565b0195945050505050565b601f821115610eef576000816000526020600020601f850160051c810160208610156119a15750805b601f850160051c820191505b818110156119c0578281556001016119ad565b505050505050565b81516001600160401b038111156119e1576119e1611122565b6119f5816119ef8454611740565b84611978565b602080601f831160018114611a2a5760008415611a125750858301515b600019600386901b1c1916600185901b1785556119c0565b600085815260208120601f198616915b82811015611a5957888601518255948401946001909101908401611a3a565b5085821015611a775787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b606081526000611a9a60608301866112f7565b8281036020840152611aac81866112f7565b90508281036040840152611ac081856112f7565b9695505050505050565b818103818111156106fd57634e487b7160e01b600052601160045260246000fd5b600082611b0857634e487b7160e01b600052601260045260246000fd5b500490565b604081526000611b2060408301856112f7565b8281036020840152835160a08252611b3b60a08301826112f7565b905060208501518282036020840152611b5482826112f7565b91505060408501518282036040840152611b6e82826112f7565b91505060608501518282036060840152611b8882826112f7565b9150506080850151608083015280925050509392505050565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220e5cab4cb832e192c7b09356ec350967dbd4bb17ff98a76e114b5b76dbae12bca64736f6c63430008180033";

type Tee_verifier_wrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: Tee_verifier_wrapperConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Tee_verifier_wrapper__factory extends ContractFactory {
  constructor(...args: Tee_verifier_wrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _admin: AddressLike,
    _av: AddressLike,
    _proverPcrs: BytesLike[],
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_admin, _av, _proverPcrs, overrides || {});
  }
  override deploy(_admin: AddressLike, _av: AddressLike, _proverPcrs: BytesLike[], overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(_admin, _av, _proverPcrs, overrides || {}) as Promise<
      Tee_verifier_wrapper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Tee_verifier_wrapper__factory {
    return super.connect(runner) as Tee_verifier_wrapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Tee_verifier_wrapperInterface {
    return new Interface(_abi) as Tee_verifier_wrapperInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Tee_verifier_wrapper {
    return new Contract(address, _abi, runner) as unknown as Tee_verifier_wrapper;
  }
}
