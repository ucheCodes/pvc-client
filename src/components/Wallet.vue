<script setup lang="ts">
    // import {getWallet, wallet} from "@/assets/file1.js";
    // import {newWallet} from "@/assets/wallet.js";
    // import {ethers} from "ethers";
    // export default{
    //     mounted(){
    //        // const wallet = ethers.wallet.createRandom([ options = {} ]);
    //         // var email = document.getElementById("walletEmail");
    //         //  console.log(getWallet().age);
    //         //  console.log(wallet);
    //        // console.log(newWallet());
    //        //console.log(wallet);
    //     }
    // }
</script>
<template>
    <div>
    <h1>E PVC Decentralized voting platform for the Nigerian Electoral Commission</h1>
    <section class="wallet" id="wallet">
        <h2>Create Wallet</h2>
        <div>
            <input type="email" value="chimoo" id="walletEmail" placeholder="enter email address here"/>
            <input type="password" id="walletPassword1" placeholder="enter password here"/>
            <input type="password" id="walletPassword2" placeholder="enter password here"/>
            <button type="submit" id="walletBtn">Create Wallet</button>

            <label for="wallet">
                If your email address is valid and verified, you'll be sent a unique
                12 letter phrase for account and wallet recovery. Keep this 12 letter phrase very secured,
                because it is the only means you have to recover your wallet address.
            </label>
        </div>
    </section>
    </div>
</template>