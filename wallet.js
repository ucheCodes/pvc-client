import { ethers } from "ethers";

function newWallet() {
  const wallet = ethers.wallet.createRandom([(options = {})]);

  const response = {
    privateKey: wallet.privateKey,
    address: wallet.address,
    mnemonic: wallet._mnemonic().phrase,
  };
  return response;
}
function hello() {
  console.log("chzai");
}
export default { hello, newWallet };
