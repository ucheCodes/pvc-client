<script setup lang="ts">
  import {storeToRefs} from "pinia";
  import moment from "moment";
  import { onMounted } from "vue";
  import {useVoteStore} from "../stores/votes";
  const stateCategory = false;

  const voteStore = useVoteStore();
  const {connect, getAllVotesFromBlockChain, GetAllUsersFromBlockChain, AddUserToBlockChain, addVoteToBlockChain} = useVoteStore();
  const {votesArray, usersArray, privateKey, walletAddress, mnemonic, nin, name, isWalletCreated} = storeToRefs(voteStore); 
  
  onMounted(() => {
  })
</script>
<template>
  <div class="row">
    <section id="results">
      <h3 class="title">All Votes Casted</h3>
      <div class="flex">
        <div class="select">
          <h4>Filter Votes By ...</h4>
          <select name="category" id="category">
            <option value="all">All</option>
            <option v-for="v in 6" value="state">State</option>
          </select>
        </div>
        <div class="select">
          <h4>Total Number of Votes</h4>
          <label for="votes">{{votesArray.length - 3}}</label>
        </div>
      </div>
      <div>
        <table class="table">
          <thead>
            <th>S / N</th>
            <th>Voter's Address</th>
            <th>Voter's NIN</th>
            <th>Political Party Voted</th>
            <th>Candidate Voted</th>
            <th>Candidate Photo</th>
            <th>Date of Vote</th>
            <th>Time of Vote</th>
          </thead>
          <tbody v-for="(votes, count) in votesArray" :key="votes._address">
            <tr v-if="votes.candidateName != 'candidateName'">
              <td data-label="S / N">{{count}}</td>
              <td class="long" data-label="Voter's Address">{{votes._address}}</td>
              <td class="short" data-label="Voter's Address">{{votes._address.slice(0,4)}} ... {{votes._address.slice(votes._address.length-4,votes._address.length)}}</td>
              <td data-label="Voter's NIN">{{votes.Nin}}</td>
              <td data-label="Political Party Voted">{{votes.candidateParty}}</td>
              <td data-label="Candidate Voted">{{votes.candidateName}}</td>
              <td data-label="Candidate Photo">
                <img :src="votes.imagePath" alt="photo" />
              </td>
              <td data-label="Date of Vote">{{moment(votes.timestamp * 1000).format('ll')}}</td>
              <td data-label="Time of Vote">{{moment(votes.timestamp * 1000).format('LT')}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
