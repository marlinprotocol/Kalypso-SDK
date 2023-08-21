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
      name: "AccessControlEnumerableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlEnumerableUpgradeable__factory>;
    getContractFactory(
      name: "AccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlUpgradeable__factory>;
    getContractFactory(
      name: "IAccessControlEnumerableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlEnumerableUpgradeable__factory>;
    getContractFactory(
      name: "IAccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlUpgradeable__factory>;
    getContractFactory(
      name: "IERC1822ProxiableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1967Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1967Upgradeable__factory>;
    getContractFactory(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeaconUpgradeable__factory>;
    getContractFactory(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable__factory>;
    getContractFactory(name: "Initializable", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "IERC20PermitUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20PermitUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(name: "ERC20", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(name: "IERC20", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "GeneratorRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GeneratorRegistry__factory>;
    getContractFactory(
      name: "InputAndProofFormatRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InputAndProofFormatRegistry__factory>;
    getContractFactory(
      name: "IGeneratorRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGeneratorRegistry__factory>;
    getContractFactory(name: "IPriorityLog", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.IPriorityLog__factory>;
    getContractFactory(
      name: "IProofMarketPlace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProofMarketPlace__factory>;
    getContractFactory(name: "IVerifier", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.IVerifier__factory>;
    getContractFactory(name: "Error", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.Error__factory>;
    getContractFactory(name: "MockToken", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.MockToken__factory>;
    getContractFactory(name: "MockVerifier", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.MockVerifier__factory>;
    getContractFactory(name: "PriorityLog", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.PriorityLog__factory>;
    getContractFactory(
      name: "PrivateInputRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PrivateInputRegistry__factory>;
    getContractFactory(
      name: "ProofMarketPlace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProofMarketPlace__factory>;
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
    getContractFactory(name: "I_plonk_vk", signerOrOptions?: ethers.Signer | FactoryOptions): Promise<Contracts.I_plonk_vk__factory>;
    getContractFactory(
      name: "Plonk_verifier_wrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Plonk_verifier_wrapper__factory>;
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

    getContractAt(
      name: "AccessControlEnumerableUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlEnumerableUpgradeable>;
    getContractAt(
      name: "AccessControlUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlUpgradeable>;
    getContractAt(
      name: "IAccessControlEnumerableUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlEnumerableUpgradeable>;
    getContractAt(
      name: "IAccessControlUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlUpgradeable>;
    getContractAt(
      name: "IERC1822ProxiableUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    getContractAt(
      name: "IERC1967Upgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1967Upgradeable>;
    getContractAt(
      name: "IBeaconUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeaconUpgradeable>;
    getContractAt(
      name: "ERC1967UpgradeUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    getContractAt(name: "Initializable", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.Initializable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "IERC20PermitUpgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20PermitUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
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
      name: "IERC165Upgradeable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(name: "ERC20", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.ERC20>;
    getContractAt(name: "IERC20Metadata", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.IERC20Metadata>;
    getContractAt(name: "IERC20", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.IERC20>;
    getContractAt(
      name: "GeneratorRegistry",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.GeneratorRegistry>;
    getContractAt(
      name: "InputAndProofFormatRegistry",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.InputAndProofFormatRegistry>;
    getContractAt(
      name: "IGeneratorRegistry",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IGeneratorRegistry>;
    getContractAt(name: "IPriorityLog", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.IPriorityLog>;
    getContractAt(
      name: "IProofMarketPlace",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IProofMarketPlace>;
    getContractAt(name: "IVerifier", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.IVerifier>;
    getContractAt(name: "Error", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.Error>;
    getContractAt(name: "MockToken", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.MockToken>;
    getContractAt(name: "MockVerifier", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.MockVerifier>;
    getContractAt(name: "PriorityLog", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.PriorityLog>;
    getContractAt(
      name: "PrivateInputRegistry",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.PrivateInputRegistry>;
    getContractAt(
      name: "ProofMarketPlace",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ProofMarketPlace>;
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
    getContractAt(name: "I_plonk_vk", address: string | ethers.Addressable, signer?: ethers.Signer): Promise<Contracts.I_plonk_vk>;
    getContractAt(
      name: "Plonk_verifier_wrapper",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Plonk_verifier_wrapper>;
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

    deployContract(
      name: "AccessControlEnumerableUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControlEnumerableUpgradeable>;
    deployContract(
      name: "AccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControlUpgradeable>;
    deployContract(
      name: "IAccessControlEnumerableUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControlEnumerableUpgradeable>;
    deployContract(
      name: "IAccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControlUpgradeable>;
    deployContract(
      name: "IERC1822ProxiableUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    deployContract(
      name: "IERC1967Upgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1967Upgradeable>;
    deployContract(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IBeaconUpgradeable>;
    deployContract(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    deployContract(name: "Initializable", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.Initializable>;
    deployContract(name: "UUPSUpgradeable", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.UUPSUpgradeable>;
    deployContract(
      name: "IERC20PermitUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20PermitUpgradeable>;
    deployContract(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Upgradeable>;
    deployContract(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ContextUpgradeable>;
    deployContract(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165Upgradeable>;
    deployContract(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165Upgradeable>;
    deployContract(name: "ERC20", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.ERC20>;
    deployContract(name: "IERC20Metadata", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IERC20Metadata>;
    deployContract(name: "IERC20", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IERC20>;
    deployContract(
      name: "GeneratorRegistry",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GeneratorRegistry>;
    deployContract(
      name: "InputAndProofFormatRegistry",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.InputAndProofFormatRegistry>;
    deployContract(
      name: "IGeneratorRegistry",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IGeneratorRegistry>;
    deployContract(name: "IPriorityLog", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IPriorityLog>;
    deployContract(
      name: "IProofMarketPlace",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IProofMarketPlace>;
    deployContract(name: "IVerifier", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IVerifier>;
    deployContract(name: "Error", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.Error>;
    deployContract(name: "MockToken", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.MockToken>;
    deployContract(name: "MockVerifier", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.MockVerifier>;
    deployContract(name: "PriorityLog", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.PriorityLog>;
    deployContract(
      name: "PrivateInputRegistry",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PrivateInputRegistry>;
    deployContract(name: "ProofMarketPlace", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.ProofMarketPlace>;
    deployContract(
      name: "BaseUltraVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseUltraVerifier>;
    deployContract(name: "UltraVerifier", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.UltraVerifier>;
    deployContract(name: "TransferVerifier", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.TransferVerifier>;
    deployContract(name: "XorVerifier", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.XorVerifier>;
    deployContract(name: "I_plonk_vk", signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.I_plonk_vk>;
    deployContract(
      name: "Plonk_verifier_wrapper",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Plonk_verifier_wrapper>;
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
      name: "AccessControlEnumerableUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControlEnumerableUpgradeable>;
    deployContract(
      name: "AccessControlUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControlUpgradeable>;
    deployContract(
      name: "IAccessControlEnumerableUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControlEnumerableUpgradeable>;
    deployContract(
      name: "IAccessControlUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControlUpgradeable>;
    deployContract(
      name: "IERC1822ProxiableUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    deployContract(
      name: "IERC1967Upgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1967Upgradeable>;
    deployContract(
      name: "IBeaconUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IBeaconUpgradeable>;
    deployContract(
      name: "ERC1967UpgradeUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
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
      name: "IERC20PermitUpgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20PermitUpgradeable>;
    deployContract(
      name: "IERC20Upgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Upgradeable>;
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
      name: "IERC165Upgradeable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165Upgradeable>;
    deployContract(name: "ERC20", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(name: "IERC20", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IERC20>;
    deployContract(
      name: "GeneratorRegistry",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GeneratorRegistry>;
    deployContract(
      name: "InputAndProofFormatRegistry",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.InputAndProofFormatRegistry>;
    deployContract(
      name: "IGeneratorRegistry",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IGeneratorRegistry>;
    deployContract(
      name: "IPriorityLog",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IPriorityLog>;
    deployContract(
      name: "IProofMarketPlace",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IProofMarketPlace>;
    deployContract(name: "IVerifier", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.IVerifier>;
    deployContract(name: "Error", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.Error>;
    deployContract(name: "MockToken", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.MockToken>;
    deployContract(
      name: "MockVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockVerifier>;
    deployContract(
      name: "PriorityLog",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PriorityLog>;
    deployContract(
      name: "PrivateInputRegistry",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PrivateInputRegistry>;
    deployContract(
      name: "ProofMarketPlace",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ProofMarketPlace>;
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
    deployContract(name: "I_plonk_vk", args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<Contracts.I_plonk_vk>;
    deployContract(
      name: "Plonk_verifier_wrapper",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Plonk_verifier_wrapper>;
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

    // default types
    getContractFactory(name: string, signerOrOptions?: ethers.Signer | FactoryOptions): Promise<ethers.ContractFactory>;
    getContractFactory(abi: any[], bytecode: ethers.BytesLike, signer?: ethers.Signer): Promise<ethers.ContractFactory>;
    getContractAt(nameOrAbi: string | any[], address: string | ethers.Addressable, signer?: ethers.Signer): Promise<ethers.Contract>;
    deployContract(name: string, signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<ethers.Contract>;
    deployContract(name: string, args: any[], signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<ethers.Contract>;
  }
}
