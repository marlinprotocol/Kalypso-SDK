import {
  encryptDataWithECIESandAES,
  decryptDataWithECIESandAES,
  encryptECIES,
  decryptECIES,
  encryptAES,
  decryptAES,
} from "../src/secretInputOperation";
import { encrypt, decrypt, PrivateKey } from "eciesjs";

const data = Buffer.from("this is the data that we wish to encrypt");

async function main(): Promise<string> {
  const sk = new PrivateKey(Buffer.from("ca9cbf143a43e422a307b03ec61a82ce99c053290c3053655d0ad69e863a18c4", "hex"));
  const pk = sk.publicKey.toHex();
  console.log({ pk });

  // Encrypt data
  const result = await encryptDataWithECIESandAES(data, pk);

  // Decrypt data
  const decryptedData = await decryptDataWithECIESandAES(result.encryptedData, result.aclData, sk.secret);

  console.log({ data: data.toString(), decryptedData: decryptedData.toString() });
  return "Done";
}

async function test_ecies_enc(): Promise<String> {
  const cipher_string = "0000111100001111000011110000111100001111000011110000111100001111";
  const cipher = Buffer.from(cipher_string, "hex");

  const sk = new PrivateKey(Buffer.from("ca9cbf143a43e422a307b03ec61a82ce99c053290c3053655d0ad69e863a18c4", "hex"));
  const pk = sk.publicKey.toHex();

  const encrypted_cipher = encryptECIES(pk, cipher);
  const encrypted_cipher_string = encrypted_cipher.toString("hex");

  console.log({ encrypted_cipher_string });

  return "Done2";
}

async function test_ecis_dec(): Promise<String> {
  const encrypt_cipher_string =
    "04480eeff4e73e244cc4c039be5a488e2e8327c159e81040e040676d7301b4227201cfecd421c5c8fb303f0535d34f069e62e8103b53351241f00f24640d75e155ce1fe475404e62c5888b85d136ec6a76936f921c63d31698cbfb27d3a513810d44fa371d42c18b6b2b5f6250796e3eed885eae918afbfe16a0fe7990aa6a0615";
  const encrypted_cipher = Buffer.from(encrypt_cipher_string, "hex");

  const sk = Buffer.from("ca9cbf143a43e422a307b03ec61a82ce99c053290c3053655d0ad69e863a18c4", "hex");
  const cipher = decryptECIES(sk, encrypted_cipher);

  const cipher_string = cipher.toString("hex");
  console.log({ cipher_string });
  return "Done3";
}

async function test_aes_enc(): Promise<String> {
  // generatored by other language
  let expected_encrypted_hex_string =
    "dffc6c2d36b611fc380f85067928d45f36da63f40c6fc66071dc82d2c5c4de25f473f463bbee3eaf1ad2681fab47c29ce26907e1f90bbc57042536237e51d1a7";

  let cipher_hex_string = "0000111100001111000011110000111100001111000011110000111100001111";
  let cipher = Buffer.from(cipher_hex_string, "hex");

  const data = Buffer.from("this is the data that we wish to encrypt");

  let encrypted_data = encryptAES(data, cipher);
  let encrypted_data_hex = encrypted_data.toString("hex");

  // the values won't match because there is IV used, in middle. which will give randomness to output, only way to check is via decrypting
  console.log({ expected_encrypted_hex_string, encrypted_data_hex });
  return "Done4";
}

async function test_aes_dec(): Promise<String> {
  let expected_encrypted_hex_string =
    "dffc6c2d36b611fc380f85067928d45f36da63f40c6fc66071dc82d2c5c4de25f473f463bbee3eaf1ad2681fab47c29ce26907e1f90bbc57042536237e51d1a7";
  let encrypted_buffer = Buffer.from(expected_encrypted_hex_string, "hex");

  let cipher_hex_string = "0000111100001111000011110000111100001111000011110000111100001111";
  let cipher = Buffer.from(cipher_hex_string, "hex");

  const actual_data = "this is the data that we wish to encrypt";

  let decrypted_data = decryptAES(encrypted_buffer, cipher);
  let decrypted = decrypted_data.toString();

  console.log({ decrypted, actual_data });
  return "Done";
}

main().then(test_ecies_enc).then(test_ecis_dec).then(test_aes_enc).then(test_aes_dec).then(console.log).catch(console.log);
