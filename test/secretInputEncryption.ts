import { KalypsoSdk } from "../src";
import * as fs from "fs";

const { encryptDataWithRSAandAES, decryptDataWithRSAandAES, base64ToHex, hexToBase64 } = KalypsoSdk.SecretInputOperations();

const data = "this is the that we wish to encrypt";

async function main(): Promise<string> {
  const publicKey = fs.readFileSync("./test/public_key.pem", "utf-8");
  const result = await encryptDataWithRSAandAES(data, publicKey);
  console.log(result);

  const aclHex = base64ToHex(result.aclData);
  const aclBase64 = hexToBase64(aclHex);

  console.log({ acl: result.aclData, aclBase64, aclHex });
  const privatekey = fs.readFileSync("./test/private_key.pem", "utf-8");

  const decryptedData = await decryptDataWithRSAandAES(result.encryptedData, result.aclData, privatekey);

  console.log({ data, decryptedData });
  return "Done";
}

main().then(console.log).catch(console.log);
