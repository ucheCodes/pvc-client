<script setup lang="ts">
import funding from "@/components/Funding.vue";
</script>
<template>
  <div>
    <h1>Connect to metamask</h1>
    <p>
      Metamask serves as a crypto Wallet and a gateway to access blockchain
      related applications. To be able to perform any transaction on this E -
      PVC decentralized application, you need to register an account with
      metamask. You'll be assigned a private key, a hashed cryptographic address
      and a unique 12 word phrase. Secure the 12 word phrase to the best of your
      ability because that is the only means you have to recover your account if
      you eventually lose your password.
    </p>
    <div class="btn">
      <a href="https://metamask.io"
        ><button type="button"><span></span> Visit Metamask</button></a
      >
    </div>
  </div>
  <div>
    <funding />
  </div>
</template>
