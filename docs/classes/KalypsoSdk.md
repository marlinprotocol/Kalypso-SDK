[kalypso-sdk](../README.md) / [Exports](../modules.md) / KalypsoSdk

# Class: KalypsoSdk

## Table of contents

### Constructors

- [constructor](KalypsoSdk.md#constructor)

### Properties

- [config](KalypsoSdk.md#config)
- [signer](KalypsoSdk.md#signer)

### Methods

- [Admin](KalypsoSdk.md#admin)
- [Generator](KalypsoSdk.md#generator)
- [MarketPlace](KalypsoSdk.md#marketplace)
- [SecretInputOperations](KalypsoSdk.md#secretinputoperations)
- [getImageIdFromAttestation](KalypsoSdk.md#getimageidfromattestation)
- [getPubKeyAndAddressFromAttestation](KalypsoSdk.md#getpubkeyandaddressfromattestation)
- [getRlpedPcrsFromAttestation](KalypsoSdk.md#getrlpedpcrsfromattestation)

## Constructors

### constructor

• **new KalypsoSdk**(`signer`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `AbstractSigner`<``null`` \| `Provider`\> |
| `config` | `KalspsoConfig` |

#### Defined in

[index.ts:13](https://github.com/marlinprotocol/Kalypso-SDK/blob/33179a1/src/index.ts#L13)

## Properties

### config

• `Private` **config**: `KalspsoConfig`

#### Defined in

[index.ts:11](https://github.com/marlinprotocol/Kalypso-SDK/blob/33179a1/src/index.ts#L11)

___

### signer

• `Private` **signer**: `AbstractSigner`<``null`` \| `Provider`\>

#### Defined in

[index.ts:10](https://github.com/marlinprotocol/Kalypso-SDK/blob/33179a1/src/index.ts#L10)

## Methods

### Admin

▸ **Admin**(): `Admin`

#### Returns

`Admin`

#### Defined in

[index.ts:22](https://github.com/marlinprotocol/Kalypso-SDK/blob/33179a1/src/index.ts#L22)

___

### Generator

▸ **Generator**(): `Generator`

#### Returns

`Generator`

#### Defined in

[index.ts:26](https://github.com/marlinprotocol/Kalypso-SDK/blob/33179a1/src/index.ts#L26)

___

### MarketPlace

▸ **MarketPlace**(): `MarketPlace`

#### Returns

`MarketPlace`

#### Defined in

[index.ts:30](https://github.com/marlinprotocol/Kalypso-SDK/blob/33179a1/src/index.ts#L30)

___

### SecretInputOperations

▸ `Static` **SecretInputOperations**(): `SecretInputOperations`

#### Returns

`SecretInputOperations`

#### Defined in

[index.ts:18](https://github.com/marlinprotocol/Kalypso-SDK/blob/33179a1/src/index.ts#L18)

___

### getImageIdFromAttestation

▸ `Static` **getImageIdFromAttestation**(`attesationData`): `BytesLike`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attesationData` | `BytesLike` |

#### Returns

`BytesLike`

#### Defined in

[index.ts:46](https://github.com/marlinprotocol/Kalypso-SDK/blob/33179a1/src/index.ts#L46)

___

### getPubKeyAndAddressFromAttestation

▸ `Static` **getPubKeyAndAddressFromAttestation**(`attesationData`): [`string`, `string`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `attesationData` | `BytesLike` |

#### Returns

[`string`, `string`]

#### Defined in

[index.ts:34](https://github.com/marlinprotocol/Kalypso-SDK/blob/33179a1/src/index.ts#L34)

___

### getRlpedPcrsFromAttestation

▸ `Static` **getRlpedPcrsFromAttestation**(`attesationData`): `BytesLike`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attesationData` | `BytesLike` |

#### Returns

`BytesLike`

#### Defined in

[index.ts:55](https://github.com/marlinprotocol/Kalypso-SDK/blob/33179a1/src/index.ts#L55)
