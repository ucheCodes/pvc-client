<script setup lang="ts">
  import {storeToRefs} from "pinia";
  import {useVoteStore} from "../stores/votes";
  import {onMounted} from "vue";
  import  showSlides  from "../assets/slideshow.js";

  const voteStore = useVoteStore();
  const {connect, getAllVotesFromBlockChain, GetAllUsersFromBlockChain, AddUserToBlockChain, addVoteToBlockChain} = useVoteStore();
  const {votesArray, usersArray, privateKey, walletAddress, mnemonic, nin, name, isWalletCreated} = storeToRefs(voteStore); 

  onMounted(() => {
    connect();
    showSlides();
  });
</script>
<template>
    <div class="row">
        <div class="col-2">
            <h1>E - PVC Decentralized Application</h1>
            <p>Vote wisely with a system that can't be tampered with.</p>
            <div v-if="!isWalletCreated">
              <router-link :to="{ name: 'wallet' }">
                <button class="btn">Get Started</button>
              </router-link>
            </div>
            <div v-else>
              <router-link :to="{ name: 'result' }">
                <button class="btn">View Result</button>
              </router-link>
            </div>
        </div>
        <div class="col-2">
          <div class="slideshow-container">
            <div class="mySlides fade">
            <img src="../assets/img/b2.png" style="width:100%">
            </div>
            <div class="mySlides fade">
            <img src="../assets/img/flag1.jpg" style="width:100%">
            </div>
            <div class="mySlides fade">
            <img src="../assets/img/atiku.jpg" style="width:100%">
            </div>
            <div class="mySlides fade">
            <img src="../assets/img/kwankwaso.jpg" style="width:100%">
            </div>
            <div class="mySlides fade">
            <img src="../assets/img/obi1.jpg" style="width:100%">
            </div>
            <div class="mySlides fade">
            <img src="../assets/img/adebayo.jpg" style="width:100%">
            </div>
            <div class="mySlides fade">
            <img src="../assets/img/kola.jpg" style="width:100%">
            </div>
            <div class="mySlides fade">
            <img src="../assets/img/malik.jpg" style="width:100%">
            </div>
            <div class="mySlides fade">
            <img src="../assets/img/obi1.jpg" style="width:100%">
            </div>
            <div class="mySlides fade">
            <img src="../assets/img/tinubu.jpg" style="width:100%">
            </div>
          </div>
        </div>
    </div>
</template>
