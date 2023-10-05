import { encryptDataWithECIESandAES, decryptDataWithECIESandAES } from "../src/secretInputOperation";
import { encrypt, decrypt, PrivateKey } from "eciesjs";

const data = Buffer.from("this is the data that we wish to encrypt");

async function main(): Promise<string> {
  const sk = new PrivateKey(Buffer.from("ca9cbf143a43e422a307b03ec61a82ce99c053290c3053655d0ad69e863a18c4", 'hex'));
  const pk = sk.publicKey.toHex();
  // const addrss = pk.getAddress();

  // Encrypt data
  const result = await encryptDataWithECIESandAES(data, pk);

  // Decrypt data
  const decryptedData = await decryptDataWithECIESandAES(result.encryptedData, result.aclData, sk.secret);

  console.log({ data: data.toString(), decryptedData: decryptedData.toString() });
  return "Done";
}

main().then(console.log).catch(console.log);
