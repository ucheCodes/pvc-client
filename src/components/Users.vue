<script setup lang="ts">
    import {storeToRefs} from "pinia";
    import { onMounted } from "vue";
    import moment from "moment";
    import {useVoteStore} from "../stores/votes";

    const voteStore = useVoteStore();
    const {connect, getAllVotesFromBlockChain, GetAllUsersFromBlockChain, AddUserToBlockChain, addVoteToBlockChain} = useVoteStore();
    const {votesArray, usersArray, privateKey, walletAddress, mnemonic, nin, name, isWalletCreated} = storeToRefs(voteStore); 

    onMounted(() => {
    })
</script>
<template>
    <div>
        <h1 class="title">E - PVC Dapp registered users</h1>
        <div>
        <table class="table">
          <thead>
            <th>S / N</th>
            <th>User's Address</th>
            <th>User's NIN</th>
            <th>User's Name</th>
            <th>Date registered</th>
            <th>Time registered</th>
          </thead>
          <tbody>
            <tr v-for="(user, count) in usersArray" :key="user.walletAddress">
              <td data-label="S / N">{{count + 1}}</td>
              <td class="long" data-label="Voter's Address">{{user.walletAddress}}</td>
              <td class="short" data-label="Voter's Address">{{user.walletAddress.slice(0,5)}} ... {{user.walletAddress.slice(user.walletAddress.length-5,user.walletAddress.length)}}</td>
              <td data-label="Voter's NIN">{{user.nin}}</td>
              <td data-label="Voter's Name">{{user.name}}</td>
              <td data-label="Date registered">{{moment(user.timestamp * 1000).format('ll')}}</td>
              <td data-label="Time registered">{{moment(user.timestamp * 1000).format('LT')}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>