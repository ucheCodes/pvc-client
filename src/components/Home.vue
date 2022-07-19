<script setup lang="ts">
import metamask from "@/components/Metamask.vue";
const isMetamaskInstalled = false;
    function hello() {
        alert("hello world");
    }
</script>
<template>
    <div class="banner">
        <div class="content">
            <h1>E - PVC Decentralized Voting System</h1>
            <p>E - Pvc is a decentralized voting platform developed to enhance a free and fair election primarily 
                for the Independent  Nigerian Electoral Commission (INEC) for the 2023 Election. It is a fully decentralized platform backed 
                up on the ethereum blockchain hence it operates independent of any third party individual or organization. This means that any
                result generated on this platform cannot be altered, remains legit and is forever transparent, open and accessible to the general populace.
            </p>
            <div v-if="isMetamaskInstalled" class="btn">
                <button type="button"><span></span> Connect Wallet</button>
                <a href="https://faucet.polygon.technology"><button type="button"><span></span> Get Matic Token</button></a>
            </div>
            <div v-else class="btn">
                <router-link :to="{ name:'metamask'}">
                    <button>Explore</button>
                </router-link>
            </div>
        </div>
    </div>
</template>