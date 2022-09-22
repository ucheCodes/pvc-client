<script setup lang="ts">
import {onMounted, ref} from "vue";
import {storeToRefs} from "pinia";
import {useVoteStore} from "../stores/votes";
import wallet from "../assets/wallet";

  const voteStore = useVoteStore();
  const {connect, getAllVotesFromBlockChain, GetAllUsersFromBlockChain, AddUserToBlockChain, addVoteToBlockChain} = useVoteStore();
  const {votesArray, usersArray, privateKey, walletAddress, mnemonic, nin, name, isWalletCreated} = storeToRefs(voteStore); 
  const showKey = ref<boolean>(false);
function makeTempWallet(name : string){
  var wal = wallet.newWallet();
  localStorage.setItem(name, JSON.stringify(wal));
}
function viewKey(){
   showKey.value =! showKey.value;
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


function register(){
  var regForm = document.getElementById("regForm");
  var loginForm = document.getElementById("loginForm");
  var indicator = document.getElementById("indicator");
  if(regForm && loginForm && indicator){
      regForm.style.transform = "translateX(0px)";
      loginForm.style.transform = "translateX(0px)";
      indicator.style.transform = "translateX(100px)";
  }
}
function login(){
  var regForm = document.getElementById("regForm");
  var loginForm = document.getElementById("loginForm");
  var indicator = document.getElementById("indicator");
  if(regForm && loginForm && indicator){
      regForm.style.transform = "translateX(300px)";
      loginForm.style.transform = "translateX(300px)";
      indicator.style.transform = "translateX(0px)";
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
    <div class="row">
      <div class="col-2">
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
      </div>
      <div class="col-2" v-if="isWalletCreated">
        <h2 class="title">Your Wallet Info</h2>
        <div class="form-container">
            <form onsubmit="event.preventDefault()">
                <input type="text" :value="walletAddress">
                <input v-if="showKey" type="text" :value="privateKey">
                <input v-else type="text" value="xxxxxxx ... xxxxxx">
                <input type="text" :value="mnemonic">
                <button @click="viewKey" class="btn">View Private Key</button>
            </form>
        </div>
        </div>
      <div class="col-2" v-else>
          <h2 class="title">Create Wallet</h2>
          <div class="form-container">
              <div class="form-btn">
                  <span @click="login">Login</span>
                  <span @click="register">Register</span>
                  <hr id="indicator">
              </div>
              <form id="loginForm" onsubmit="event.preventDefault()">
                  <input type="text" placeholder="username">
                  <input type="password" placeholder="password">
                  <button class="btn" type="submit">Login</button>
                  <a href="">Forgot password</a>
              </form>
              <form id="regForm" onsubmit="event.preventDefault()">
                  <input v-model="nin" maxlength="10" type="number" placeholder="enter your NIN">
                  <input v-model="name" type="text" placeholder="enter your user name"/>
                  <input type="password" placeholder="password">
                  <input type="password" placeholder="confirm password">
                  <button class="btn" @click="createWallet" type="submit">Create Wallet</button>
                  <a href="">Forgot password</a>
              </form>
          </div>
      </div>
    </div>  
  </div>
</template>
