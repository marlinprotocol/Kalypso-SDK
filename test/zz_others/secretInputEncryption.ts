import {
  encryptDataWithECIESandAES,
  decryptDataWithECIESandAES,
  encryptECIES,
  decryptECIES,
  encryptAES,
  decryptAES,
  encryptAesGcm,
  decryptAesGcm,
  encryptWithLibsodium,
} from "../../src/helper/secretInputOperation";
import { PrivateKey } from "eciesjs";

const data = Buffer.from("this is the data that we wish to encrypt");

async function main(): Promise<string> {
  const sk = new PrivateKey(Buffer.from("ca9cbf143a43e422a307b03ec61a82ce99c053290c3053655d0ad69e863a18c4", "hex"));
  const pk = sk.publicKey.toHex();
  console.log({ pk });

  // Encrypt data
  const result = await encryptDataWithECIESandAES(data, pk);
  const data2 = Buffer.from("market");

  // Decrypt data
  const decryptedData = await decryptDataWithECIESandAES(result.encryptedData, result.aclData, sk.secret, data2);

  console.log({ data: data.toString(), decryptedData: decryptedData.toString() });
  return "Done1";
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
  let encrypted_hex_string =
    "e88f31251e149a65ce71c495cb8a2db74522d5532bdfd564d2fdb099898dbdbc05093df93151cdd7119e79c643e57979274b489fad42ffb517b87920b941b988";
  let encrypted_buffer = Buffer.from(encrypted_hex_string, "hex");

  let cipher_hex_string = "0000111100001111000011110000111100001111000011110000111100001111";
  let cipher = Buffer.from(cipher_hex_string, "hex");

  const actual_data = "this is the data that we wish to encrypt";

  let decrypted_data = decryptAES(encrypted_buffer, cipher);
  let decrypted = decrypted_data.toString();

  console.log({ decrypted, actual_data });
  return "Done6";
}

async function test_aes_gcm_enc(): Promise<string> {
  let expected_encrypted_hex_string =
    "5194c886c27a03d7b918b20cf30034284487ef4631a2f0c733721f0f4abeb7457a3fb2535fc88b9317cd4d61f27343cde24029bac7d65d5b349afe2cec16be387afb7cdb";
  let cipher_hex_string = "0000111100001111000011110000111100001111000011110000111100001111";
  let cipher = Buffer.from(cipher_hex_string, "hex");

  const data = Buffer.from("this is the data that we wish to encrypt");
  const data2 = Buffer.from("market");

  let encrypted_data = encryptAesGcm(data, cipher, data2);
  let encrypted_data_hex = encrypted_data.toString("hex");

  // values won't match
  console.log({ expected_encrypted_hex_string, encrypted_data_hex });
  return "Done7";
}

async function test_aes_gcm_dec(): Promise<string> {
  let encrypted_hex_string =
  "2a6d82a2e497fc2da4e6c7a6966145821aadb94c60e9bd5611204d455d066230137203e5a72ff1ba14440fa7a9cb8c4d58849c7f14199eeafb7a520e7afaf85e464bfb4f";
  let encrypted_buffer = Buffer.from(encrypted_hex_string, "hex");

  let cipher_hex_string = "0000111100001111000011110000111100001111000011110000111100001111";
  let cipher = Buffer.from(cipher_hex_string, "hex");
  const data2 = Buffer.from("market");
  
  const actual_data = "this is the data that we wish to encrypt";

  let decrypted_data = decryptAesGcm(encrypted_buffer, cipher, data2);
  let decrypted = decrypted_data.toString();

  console.log({ decrypted, actual_data });
  return "Done8";
}

async function test_aes_gcm_enc_with_libsodium(): Promise<string> {

  let cipher_hex_string = "0000111100001111000011110000111100001111000011110000111100001111";
  let cipher = Buffer.from(cipher_hex_string, "hex");

  const data = Buffer.from("this is the data that we wish to encrypt");

  let encrypted_data = await encryptWithLibsodium(data, cipher);
  let encrypted_data_hex = encrypted_data.toString("hex");

  // values won't match
  console.log({ encrypted_data_hex });
  return "Done9";
}

async function test_libsodium_generated_data_decrypt_from_crypto(): Promise<string> {
  let encrypted_hex_string =
    "bc01aa0ba9c0f81be948e77df97980dad4bdfc6a1bbd708d4414dd51ecfc267a0f7b0aac53bba846928cdcfe1a65656170503590c9e3f52131aed9f805095a9474e4c6a4";
  let encrypted_buffer = Buffer.from(encrypted_hex_string, "hex");

  let cipher_hex_string = "0000111100001111000011110000111100001111000011110000111100001111";
  let cipher = Buffer.from(cipher_hex_string, "hex");

  const actual_data = "this is the data that we wish to encrypt";
  const data2 = Buffer.from("market");
  let decrypted_data = decryptAesGcm(encrypted_buffer, cipher, data2);
  let decrypted = decrypted_data.toString();

  console.log({ decrypted, actual_data });
  return "Done10";
}

main()
  .then((data) => {
    console.log(data);
    return test_ecies_enc();
  })
  .then((data) => {
    console.log(data);
    return test_ecis_dec();
  })
  .then((data) => {
    console.log(data);
    return test_aes_enc();
  })
  .then((data) => {
    console.log(data);
    return test_aes_dec();
  })
  .then((data) => {
    console.log(data);
    return test_aes_gcm_enc();
  })
  .then((data) => {
    console.log(data);
    return test_aes_gcm_dec();
  })
  .then((data) => {
    console.log(data);
    return test_aes_gcm_enc_with_libsodium();
  })
  .then((data) => {
    console.log(data);
    return test_libsodium_generated_data_decrypt_from_crypto();
  })
  .then(console.log)
  .catch(console.log);
