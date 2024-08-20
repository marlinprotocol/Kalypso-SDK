/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlUpgradeable__factory>;
    getContractFactory(name: "Initializable", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "PausableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableUpgradeable__factory>;
    getContractFactory(
      name: "ReentrancyGuardUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyGuardUpgradeable__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "IERC1822Proxiable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822Proxiable__factory>;
    getContractFactory(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Errors__factory>;
    getContractFactory(name: "IERC20Errors", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.IERC20Errors__factory>;
    getContractFactory(name: "IERC721Errors", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.IERC721Errors__factory>;
    getContractFactory(name: "IBeacon", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.IBeacon__factory>;
    getContractFactory(name: "ERC1967Utils", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.ERC1967Utils__factory>;
    getContractFactory(name: "ERC20", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(name: "IERC20Permit", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(name: "IERC20", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.IERC20__factory>;
    getContractFactory(name: "SafeERC20", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.SafeERC20__factory>;
    getContractFactory(name: "Address", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.Address__factory>;
    getContractFactory(name: "ECDSA", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.ECDSA__factory>;
    getContractFactory(name: "IERC165", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "EntityKeyRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EntityKeyRegistry__factory>;
    getContractFactory(
      name: "GeneratorRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GeneratorRegistry__factory>;
    getContractFactory(name: "IVerifier", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.IVerifier__factory>;
    getContractFactory(name: "SetPmp", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.SetPmp__factory>;
    getContractFactory(name: "Dispute", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.Dispute__factory>;
    getContractFactory(name: "Error", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.Error__factory>;
    getContractFactory(
      name: "MockAttestationVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockAttestationVerifier__factory>;
    getContractFactory(name: "MockToken", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.MockToken__factory>;
    getContractFactory(name: "MockVerifier", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.MockVerifier__factory>;
    getContractFactory(name: "UC_Rekt", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.UC_Rekt__factory>;
    getContractFactory(name: "UC", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.UC__factory>;
    getContractFactory(name: "UC_with_rg", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.UC_with_rg__factory>;
    getContractFactory(
      name: "AttestationAuther",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AttestationAuther__factory>;
    getContractFactory(
      name: "AttestationAutherUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AttestationAutherUpgradeable__factory>;
    getContractFactory(
      name: "AttestationVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AttestationVerifier__factory>;
    getContractFactory(
      name: "InputAndProofFormatRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InputAndProofFormatRegistry__factory>;
    getContractFactory(
      name: "IAttestationVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAttestationVerifier__factory>;
    getContractFactory(name: "PriorityLog", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.PriorityLog__factory>;
    getContractFactory(
      name: "ProofMarketplace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProofMarketplace__factory>;
    getContractFactory(
      name: "IVerifier_zksync",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVerifier_zksync__factory>;
    getContractFactory(
      name: "BaseUltraVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseUltraVerifier__factory>;
    getContractFactory(name: "UltraVerifier", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.UltraVerifier__factory>;
    getContractFactory(
      name: "TransferVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TransferVerifier__factory>;
    getContractFactory(name: "XorVerifier", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.XorVerifier__factory>;
    getContractFactory(name: "ZkbVerifier", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.ZkbVerifier__factory>;
    getContractFactory(
      name: "ZkSyncVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ZkSyncVerifier__factory>;
    getContractFactory(name: "I_plonk_vk", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.I_plonk_vk__factory>;
    getContractFactory(
      name: "Plonk_verifier_wrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Plonk_verifier_wrapper__factory>;
    getContractFactory(
      name: "Tee_verifier_wrapper_factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Tee_verifier_wrapper_factory__factory>;
    getContractFactory(
      name: "Tee_verifier_wrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Tee_verifier_wrapper__factory>;
    getContractFactory(
      name: "I_transfer_verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.I_transfer_verifier__factory>;
    getContractFactory(
      name: "Transfer_verifier_wrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Transfer_verifier_wrapper__factory>;
    getContractFactory(
      name: "I_xor2_verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.I_xor2_verifier__factory>;
    getContractFactory(
      name: "Xor2_verifier_wrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Xor2_verifier_wrapper__factory>;
    getContractFactory(
      name: "I_zksync_verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.I_zksync_verifier__factory>;
    getContractFactory(
      name: "Zksync_verifier_wrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Zksync_verifier_wrapper__factory>;

    getContractAt(
      name: "AccessControlUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlUpgradeable>;
    getContractAt(name: "Initializable", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.Initializable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "PausableUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableUpgradeable>;
    getContractAt(
      name: "ReentrancyGuardUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentrancyGuardUpgradeable>;
    getContractAt(name: "IAccessControl", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "IERC1822Proxiable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822Proxiable>;
    getContractAt(name: "IERC1155Errors", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.IERC1155Errors>;
    getContractAt(name: "IERC20Errors", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.IERC20Errors>;
    getContractAt(name: "IERC721Errors", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.IERC721Errors>;
    getContractAt(name: "IBeacon", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.IBeacon>;
    getContractAt(name: "ERC1967Utils", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.ERC1967Utils>;
    getContractAt(name: "ERC20", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.ERC20>;
    getContractAt(name: "IERC20Metadata", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.IERC20Metadata>;
    getContractAt(name: "IERC20Permit", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.IERC20Permit>;
    getContractAt(name: "IERC20", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.IERC20>;
    getContractAt(name: "SafeERC20", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.SafeERC20>;
    getContractAt(name: "Address", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.Address>;
    getContractAt(name: "ECDSA", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.ECDSA>;
    getContractAt(name: "IERC165", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.IERC165>;
    getContractAt(
      name: "EntityKeyRegistry",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.EntityKeyRegistry>;
    getContractAt(
      name: "GeneratorRegistry",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.GeneratorRegistry>;
    getContractAt(name: "IVerifier", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.IVerifier>;
    getContractAt(name: "SetPmp", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.SetPmp>;
    getContractAt(name: "Dispute", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.Dispute>;
    getContractAt(name: "Error", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.Error>;
    getContractAt(
      name: "MockAttestationVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockAttestationVerifier>;
    getContractAt(name: "MockToken", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.MockToken>;
    getContractAt(name: "MockVerifier", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.MockVerifier>;
    getContractAt(name: "UC_Rekt", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.UC_Rekt>;
    getContractAt(name: "UC", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.UC>;
    getContractAt(name: "UC_with_rg", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.UC_with_rg>;
    getContractAt(
      name: "AttestationAuther",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AttestationAuther>;
    getContractAt(
      name: "AttestationAutherUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AttestationAutherUpgradeable>;
    getContractAt(
      name: "AttestationVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AttestationVerifier>;
    getContractAt(
      name: "InputAndProofFormatRegistry",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.InputAndProofFormatRegistry>;
    getContractAt(
      name: "IAttestationVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IAttestationVerifier>;
    getContractAt(name: "PriorityLog", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.PriorityLog>;
    getContractAt(
      name: "ProofMarketplace",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ProofMarketplace>;
    getContractAt(
      name: "IVerifier_zksync",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IVerifier_zksync>;
    getContractAt(
      name: "BaseUltraVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseUltraVerifier>;
    getContractAt(name: "UltraVerifier", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.UltraVerifier>;
    getContractAt(
      name: "TransferVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.TransferVerifier>;
    getContractAt(name: "XorVerifier", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.XorVerifier>;
    getContractAt(name: "ZkbVerifier", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.ZkbVerifier>;
    getContractAt(name: "ZkSyncVerifier", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.ZkSyncVerifier>;
    getContractAt(name: "I_plonk_vk", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.I_plonk_vk>;
    getContractAt(
      name: "Plonk_verifier_wrapper",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Plonk_verifier_wrapper>;
    getContractAt(
      name: "Tee_verifier_wrapper_factory",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Tee_verifier_wrapper_factory>;
    getContractAt(
      name: "Tee_verifier_wrapper",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Tee_verifier_wrapper>;
    getContractAt(
      name: "I_transfer_verifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.I_transfer_verifier>;
    getContractAt(
      name: "Transfer_verifier_wrapper",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Transfer_verifier_wrapper>;
    getContractAt(
      name: "I_xor2_verifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.I_xor2_verifier>;
    getContractAt(
      name: "Xor2_verifier_wrapper",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Xor2_verifier_wrapper>;
    getContractAt(
      name: "I_zksync_verifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.I_zksync_verifier>;
    getContractAt(
      name: "Zksync_verifier_wrapper",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Zksync_verifier_wrapper>;

    deployContract(
      name: "AccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControlUpgradeable>;
    deployContract(name: "Initializable", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.Initializable>;
    deployContract(name: "UUPSUpgradeable", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.UUPSUpgradeable>;
    deployContract(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ContextUpgradeable>;
    deployContract(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165Upgradeable>;
    deployContract(
      name: "PausableUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PausableUpgradeable>;
    deployContract(
      name: "ReentrancyGuardUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ReentrancyGuardUpgradeable>;
    deployContract(name: "IAccessControl", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IAccessControl>;
    deployContract(
      name: "IERC1822Proxiable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1822Proxiable>;
    deployContract(name: "IERC1155Errors", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IERC1155Errors>;
    deployContract(name: "IERC20Errors", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IERC20Errors>;
    deployContract(name: "IERC721Errors", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IERC721Errors>;
    deployContract(name: "IBeacon", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IBeacon>;
    deployContract(name: "ERC1967Utils", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.ERC1967Utils>;
    deployContract(name: "ERC20", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.ERC20>;
    deployContract(name: "IERC20Metadata", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IERC20Metadata>;
    deployContract(name: "IERC20Permit", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IERC20Permit>;
    deployContract(name: "IERC20", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IERC20>;
    deployContract(name: "SafeERC20", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.SafeERC20>;
    deployContract(name: "Address", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.Address>;
    deployContract(name: "ECDSA", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.ECDSA>;
    deployContract(name: "IERC165", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IERC165>;
    deployContract(
      name: "EntityKeyRegistry",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.EntityKeyRegistry>;
    deployContract(
      name: "GeneratorRegistry",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GeneratorRegistry>;
    deployContract(name: "IVerifier", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IVerifier>;
    deployContract(name: "SetPmp", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.SetPmp>;
    deployContract(name: "Dispute", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.Dispute>;
    deployContract(name: "Error", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.Error>;
    deployContract(
      name: "MockAttestationVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockAttestationVerifier>;
    deployContract(name: "MockToken", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.MockToken>;
    deployContract(name: "MockVerifier", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.MockVerifier>;
    deployContract(name: "UC_Rekt", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.UC_Rekt>;
    deployContract(name: "UC", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.UC>;
    deployContract(name: "UC_with_rg", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.UC_with_rg>;
    deployContract(
      name: "AttestationAuther",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AttestationAuther>;
    deployContract(
      name: "AttestationAutherUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AttestationAutherUpgradeable>;
    deployContract(
      name: "AttestationVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AttestationVerifier>;
    deployContract(
      name: "InputAndProofFormatRegistry",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.InputAndProofFormatRegistry>;
    deployContract(
      name: "IAttestationVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAttestationVerifier>;
    deployContract(name: "PriorityLog", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.PriorityLog>;
    deployContract(name: "ProofMarketplace", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.ProofMarketplace>;
    deployContract(name: "IVerifier_zksync", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IVerifier_zksync>;
    deployContract(
      name: "BaseUltraVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseUltraVerifier>;
    deployContract(name: "UltraVerifier", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.UltraVerifier>;
    deployContract(name: "TransferVerifier", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.TransferVerifier>;
    deployContract(name: "XorVerifier", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.XorVerifier>;
    deployContract(name: "ZkbVerifier", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.ZkbVerifier>;
    deployContract(name: "ZkSyncVerifier", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.ZkSyncVerifier>;
    deployContract(name: "I_plonk_vk", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.I_plonk_vk>;
    deployContract(
      name: "Plonk_verifier_wrapper",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Plonk_verifier_wrapper>;
    deployContract(
      name: "Tee_verifier_wrapper_factory",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Tee_verifier_wrapper_factory>;
    deployContract(
      name: "Tee_verifier_wrapper",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Tee_verifier_wrapper>;
    deployContract(
      name: "I_transfer_verifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.I_transfer_verifier>;
    deployContract(
      name: "Transfer_verifier_wrapper",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Transfer_verifier_wrapper>;
    deployContract(name: "I_xor2_verifier", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.I_xor2_verifier>;
    deployContract(
      name: "Xor2_verifier_wrapper",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Xor2_verifier_wrapper>;
    deployContract(
      name: "I_zksync_verifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.I_zksync_verifier>;
    deployContract(
      name: "Zksync_verifier_wrapper",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Zksync_verifier_wrapper>;

    deployContract(
      name: "AccessControlUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControlUpgradeable>;
    deployContract(
      name: "Initializable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Initializable>;
    deployContract(
      name: "UUPSUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UUPSUpgradeable>;
    deployContract(
      name: "ContextUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ContextUpgradeable>;
    deployContract(
      name: "ERC165Upgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165Upgradeable>;
    deployContract(
      name: "PausableUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PausableUpgradeable>;
    deployContract(
      name: "ReentrancyGuardUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ReentrancyGuardUpgradeable>;
    deployContract(
      name: "IAccessControl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControl>;
    deployContract(
      name: "IERC1822Proxiable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1822Proxiable>;
    deployContract(
      name: "IERC1155Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Errors>;
    deployContract(
      name: "IERC20Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Errors>;
    deployContract(
      name: "IERC721Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Errors>;
    deployContract(name: "IBeacon", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IBeacon>;
    deployContract(
      name: "ERC1967Utils",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1967Utils>;
    deployContract(name: "ERC20", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20Permit",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Permit>;
    deployContract(name: "IERC20", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IERC20>;
    deployContract(name: "SafeERC20", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.SafeERC20>;
    deployContract(name: "Address", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.Address>;
    deployContract(name: "ECDSA", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.ECDSA>;
    deployContract(name: "IERC165", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IERC165>;
    deployContract(
      name: "EntityKeyRegistry",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.EntityKeyRegistry>;
    deployContract(
      name: "GeneratorRegistry",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GeneratorRegistry>;
    deployContract(name: "IVerifier", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IVerifier>;
    deployContract(name: "SetPmp", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.SetPmp>;
    deployContract(name: "Dispute", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.Dispute>;
    deployContract(name: "Error", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.Error>;
    deployContract(
      name: "MockAttestationVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockAttestationVerifier>;
    deployContract(name: "MockToken", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.MockToken>;
    deployContract(
      name: "MockVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockVerifier>;
    deployContract(name: "UC_Rekt", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.UC_Rekt>;
    deployContract(name: "UC", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.UC>;
    deployContract(name: "UC_with_rg", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.UC_with_rg>;
    deployContract(
      name: "AttestationAuther",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AttestationAuther>;
    deployContract(
      name: "AttestationAutherUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AttestationAutherUpgradeable>;
    deployContract(
      name: "AttestationVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AttestationVerifier>;
    deployContract(
      name: "InputAndProofFormatRegistry",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.InputAndProofFormatRegistry>;
    deployContract(
      name: "IAttestationVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAttestationVerifier>;
    deployContract(
      name: "PriorityLog",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PriorityLog>;
    deployContract(
      name: "ProofMarketplace",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ProofMarketplace>;
    deployContract(
      name: "IVerifier_zksync",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVerifier_zksync>;
    deployContract(
      name: "BaseUltraVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseUltraVerifier>;
    deployContract(
      name: "UltraVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UltraVerifier>;
    deployContract(
      name: "TransferVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.TransferVerifier>;
    deployContract(
      name: "XorVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.XorVerifier>;
    deployContract(
      name: "ZkbVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ZkbVerifier>;
    deployContract(
      name: "ZkSyncVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ZkSyncVerifier>;
    deployContract(name: "I_plonk_vk", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.I_plonk_vk>;
    deployContract(
      name: "Plonk_verifier_wrapper",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Plonk_verifier_wrapper>;
    deployContract(
      name: "Tee_verifier_wrapper_factory",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Tee_verifier_wrapper_factory>;
    deployContract(
      name: "Tee_verifier_wrapper",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Tee_verifier_wrapper>;
    deployContract(
      name: "I_transfer_verifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.I_transfer_verifier>;
    deployContract(
      name: "Transfer_verifier_wrapper",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Transfer_verifier_wrapper>;
    deployContract(
      name: "I_xor2_verifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.I_xor2_verifier>;
    deployContract(
      name: "Xor2_verifier_wrapper",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Xor2_verifier_wrapper>;
    deployContract(
      name: "I_zksync_verifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.I_zksync_verifier>;
    deployContract(
      name: "Zksync_verifier_wrapper",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Zksync_verifier_wrapper>;

    // default types
    getContractFactory(name: string, signerOrOptions?: ethers.Signer | FactoryOptions): Promise<ethers.ContractFactory>;
    getContractFactory(abi: any[], bytecode: ethers.BytesLike, signer?: ethers.Signer): Promise<ethers.ContractFactory>;
    getContractAt(nameOrAbi: string | any[], address: string | ethers.Addressable, signer?: ethers.Signer): Promise<ethers.Contract>;
    deployContract(name: string, signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<ethers.Contract>;
    deployContract(name: string, args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<ethers.Contract>;
  }
}
