<script setup lang="ts">
  import data from "../assets/candidates";
  import {storeToRefs} from "pinia";
  import {useVoteStore} from "../stores/votes";
  import {ref} from "vue";

  const stateCategory = ref<boolean>(false);
  const voteStore = useVoteStore();
  const {connect, getAllVotesFromBlockChain, GetAllUsersFromBlockChain, AddUserToBlockChain, addVoteToBlockChain} = useVoteStore();
  const {votesArray, usersArray, privateKey, walletAddress, mnemonic, nin, name, isWalletCreated} = storeToRefs(voteStore); 
</script>
<template>
  <div class="row">
    <section id="vote">
      <h1 class="title">Cast a vote</h1>
      <div class="select btns">
          <h4>Select Election Category</h4>
          <select name="category" id="category">
            <option value="presidential">Presidential</option>
            <option value="state">State</option>
            <option value="local">Local</option>
          </select>
        </div>
      <div class="vote">
        <div>
          <div
            v-for="aspirant in data"
            :key="aspirant.key"
            class="aspirants card"
          >
            <div class="top">
              <img :src="aspirant.photo" alt="aspirants" />
              <div class="aspirants-info">
                <span>
                  Name : <label>{{ aspirant.name }}</label>
                </span>
                <span>
                  Political Party : <label>{{ aspirant.party }}</label>
                </span>
                <span> Role : <label>Presidency</label> </span>
              </div>
            </div> 
            <div>
              <p>
                {{ aspirant.goal }}
              </p>
              <div class="btns" v-if="isWalletCreated">
                <button class="btn"  @click="addVoteToBlockChain(walletAddress, aspirant.name, aspirant.key, aspirant.party,aspirant.photo, aspirant.goal,'presidential',nin.toString())">Cast Vote</button>
              </div>
              <div class="btns" v-else>
               <router-link :to="{ name: 'wallet' }">
                 <button class="btn">Create Wallet</button>
               </router-link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="btns">
        <router-link :to="{ name: 'result' }">
          <button class="btn">View Results</button>
        </router-link>
      </div>
    </section>
  </div>
</template>
