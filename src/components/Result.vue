<script setup lang="ts">
  import {storeToRefs} from "pinia";
  import { onMounted, ref } from "vue";
  import {useVoteStore} from "../stores/votes";
  import data from "../assets/candidates";
  import moment from "moment";
  const stateCategory = false;

  const result = ref([] as any);
  const sortedResult = ref([] as any);
  const voteStore = useVoteStore();
  const {connect, getAllVotesFromBlockChain, GetAllUsersFromBlockChain, AddUserToBlockChain, addVoteToBlockChain} = useVoteStore();
  const {votesArray, usersArray, privateKey, walletAddress, mnemonic, nin, name, isWalletCreated} = storeToRefs(voteStore); 
  
  onMounted(() => {
    getResult();
  });
  function getResult(){
    data.forEach((element : any) => {
      const res = votesArray.value.filter((r : any) => r.candidateName == element.name);
      if(res.length){
        console.log(res.length);
        const obj = {
          name : element.name,
          votesCount : res.length,
          imagePath : element.photo,
          party : element.party
        }
        result.value.push(obj);
        }
    });
    sortedResult.value = result.value.sort((a:any,b:any) => {
       return b.votesCount - a.votesCount;
    });
  }
</script>
<template>
  <div class="content">
    <section id="results">
      <h3>Election Results In Real Time</h3>
      <div>
        <div class="select">
          <h4>Select Election Category</h4>
          <select name="category" id="category">
            <option value="presidential">Presidential</option>
            <option value="state">State</option>
            <option value="local">Local</option>
          </select>
        </div>
        <div v-if="stateCategory" class="select">
          <h4>Select State</h4>
          <select name="category" id="category">
            <option value="abia">Abia</option>
            <option value="adamawa">Adamawa</option>
            <option value="local">Local</option>
            <option value="gorvernorship">Gorvernorship</option>
          </select>
        </div>
      </div>
      <div>
        <label for="votes Casted"><b>Total Number of votes casted : {{votesArray.length}}</b></label><br>
        <label><b>Results last computed on {{moment(new Date()).format("LLL")}}</b></label><br>
        <label for="test">N:B : 3 random sample data was added to the blockchain during development for test purposes only</label>
        <table class="table">
          <thead>
            <th>S / N</th>
            <th>Name of Aspirant</th>
            <th>Photo</th>
            <th>Political Party</th>
            <th>Votes Casted</th>
            <th>Contesting</th>
            <th>Position</th>
          </thead>
          <tbody v-if="sortedResult.length">
            <tr v-for="(r, count) in sortedResult" :key="r.name">
              <td data-label="S / N">{{count + 1}}</td>
              <td data-label="Name">{{r.name}}</td>
              <td data-label="Photo">
                <img :src="r.imagePath" alt="photo" />
              </td>
              <td data-label="Party">{{r.party}}</td>
              <td data-label="Votes Casted">{{r.votesCount}}</td>
              <td data-label="Contesting">Presidency</td>
              <td v-if="count == 0" data-label="Position"><b>{{count + 1}}st</b></td>
              <td v-else-if="count == 1" data-label="Position"><b>{{count + 1}}nd</b></td>
              <td v-else-if="count == 2" data-label="Position"><b>{{count + 1}}rd</b></td>
              <td v-else data-label="Position"><b>{{count + 1}}th</b></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
