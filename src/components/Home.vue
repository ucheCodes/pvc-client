<script setup lang="ts">
  import {storeToRefs} from "pinia";
  import {useVoteStore} from "../stores/votes";
  import {onMounted} from "vue";

  const voteStore = useVoteStore();
  const {connect, getAllVotesFromBlockChain, GetAllUsersFromBlockChain, AddUserToBlockChain, addVoteToBlockChain} = useVoteStore();
  const {votesArray, usersArray, privateKey, walletAddress, mnemonic, nin, name, isWalletCreated} = storeToRefs(voteStore); 

  onMounted(() => {
    connect();
  })
</script>
<template>
  <div class="banner">
    <div class="content">
      <h1>E - PVC Decentralized Voting System</h1>
      <p>
        E - Pvc is a decentralized voting platform developed to enhance a free
        and fair election primarily for the Independent Nigerian Electoral
        Commission (INEC) for the 2023 Election. It is a fully decentralized
        platform backed up on the polygon mumbai blockchain test network hence it operates
        independent of any third party individual or organization. This means
        that any result generated on this platform cannot be altered, remains
        legit, forever transparent, open and accessible to the general
        populace.
      </p>
      <p>The blockchain technology is a modern technology which is also one of the best technology to 
        facilitate a modern voting system. Voting with blockchain carries the potential to eliminate election 
        fraud and boost voter turn out. Blockchain technology makes votes impossible to tamper with, it's protocol
        would also maintain consistency and transparency in the electoral process, reduce personnels and official 
        needed to conduct the election and hence providing real time and instantaneous result. This would eliminiate
        the need for recounts or any real concern about fraud which might threaten the election.
        The most beautiful aspect is that the entire process is effortless, instantaneous and peaceful. All forms of 
        stress, election violence, riot and blood shed has been eradicated.
      </p>
      <div class="btn" v-if="!isWalletCreated">
        <router-link :to="{ name: 'wallet' }">
          <button>Get Started</button>
        </router-link>
      </div>
      <div class="btn" v-else>
        <router-link :to="{ name: 'result' }">
          <button>View Result</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
