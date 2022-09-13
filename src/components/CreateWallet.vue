<script setup lang="ts">
import {onMounted, ref} from "vue";
import {storeToRefs} from "pinia";
import {useVoteStore} from "../stores/votes";
import wallet from "../assets/wallet";

  const voteStore = useVoteStore();
  const {connect, getAllVotesFromBlockChain, GetAllUsersFromBlockChain, AddUserToBlockChain, addVoteToBlockChain} = useVoteStore();
  const {votesArray, usersArray, privateKey, walletAddress, mnemonic, nin, name, isWalletCreated} = storeToRefs(voteStore); 

function makeTempWallet(name : string){
  var wal = wallet.newWallet();
  localStorage.setItem(name, JSON.stringify(wal));
}

function createWallet() {
  if (nin.value && name.value) {
    var wal = wallet.newWallet();
    walletAddress.value = wal.address;
    privateKey.value = wal.privateKey;
    mnemonic.value = wal.mnemonic;
    const data = {
        ...{"nin" : nin.value, "name" : name.value,"walletAddress":walletAddress.value, "privateKey":privateKey.value,"mnemonic":mnemonic.value}
    };
    addToLocalStorage(data);
    AddUserToBlockChain(walletAddress.value,privateKey.value,mnemonic.value,name.value,nin.value.toString());
  }
  else{
    alert("The NIN and name fields are compulsory fields. make sure you fill them")
  }
}
function addToLocalStorage(data : object) {
  if (localStorage.getItem("wallet") == null) {
    localStorage.setItem("wallet", JSON.stringify(data));
  }
}

onMounted(() => {
  //addVoteToBlockChain("0x86393e30A3638909B2197D13a14d27Ba0ce897c2", "candidateName", "candidateKey", "candidateParty", "imagePath", "goal", "categoryOfElection", "nin3");
   var getWalletData = localStorage.getItem("wallet");
  if (getWalletData == null) {
    isWalletCreated.value = false;
  } else {
    var data = JSON.parse(getWalletData);
    nin.value = data.nin;
    walletAddress.value = data.walletAddress;
    privateKey.value = data.privateKey
    mnemonic.value = data.mnemonic;
    isWalletCreated.value = true;
  }
})
</script>
<template>
  <div>
    <h1>Create Wallet</h1>
    <p>
      You need a crypto wallet to perform transactions on the blockchain
      network. Supply your Name and National Identification Number in the input field
      below then click on the button below to create your digital wallet. The
      NIN defines your citizenship as a Nigerian. A private key will be
      generated, keep the key private and never disclose to anyone, the wallet
      address will be used to send your information to the blockchain, a 12 word
      phrase will be generated also, this is the only ticket you have to recover
      your account in case you lose your account. By default, E - PVC dApp will
      keep your record on the current browser used to surf this application and
      use it whenever you come on board. For security purposes and to prevent
      loss of funds, Do not use the wallet information generated on this
      platform to perform transaactions (buy or sell crypto) on the ethereum mainnet. If you do this,
      you do so at your own risk.
    </p>
    <div v-if="isWalletCreated">
      <h1>Your Wallet data</h1>
      <div class="select">
        <h4>address:  </h4>
        <label>{{walletAddress}}</label>
      </div>
      <div class="select">
        <h4>Private Key:  </h4>
        <label>{{privateKey}}</label>
      </div>
      <div class="select">
        <h4>Security phrase:</h4>
        <textarea v-model="mnemonic"></textarea>
      </div>
      <div class="btn">
        <router-link :to="{ name: 'result' }">
          <button>View Result</button>
        </router-link>
      </div>
    </div>
    <div v-else>
      <div class="select">
        <h4>User Information</h4><br>
        <input v-model="nin" maxlength="10" type="number" placeholder="enter your NIN" /> <br>
        <input v-model="name" type="text" placeholder="enter your Name" />
      </div>
      <div>
        <span>NIN :  {{ nin }}</span>
        <span>Name :  {{ name }}</span>
      </div>
      <div class="btn">
        <button @click="createWallet" type="button">
          <span></span> Create Wallet
        </button>
      </div>
    </div>
  </div>
</template>
