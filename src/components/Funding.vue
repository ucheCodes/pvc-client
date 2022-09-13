<template>
  <div class="funding content">
    <h1>Get Free Ethereum Funds</h1>
    <p>
      Every transaction performed on the blockchain requires some amount of
      money to be spent. Therefore to be able to vote and use this application,
      the system requires that some form of digital fund (Token) be spent but
      not to worry, none of your money will be spent while using this
      application because it is just a prototype, hence all you need is also a
      form of prototype fund to use this application. To get a prototype crypto
      fund on the mumbai polygon network, copy your private key from metamask,
      click on the button below, copy and paste your private key on the redirected
      address to get your free Matic token to be able to use this application
    </p>
    <div class="btn">
      <a href="https://faucet.polygon.technology"
        ><button type="button"><span></span> Get Matic Token</button></a
      >
    </div>
    <div class="btn">
      Gotten your free ethereum fund?? <br>
        <router-link :to="{ name: 'vote' }">
          <button class="btn">Click Here to vote</button>
        </router-link>
    </div>
    <p>
      The system is transparent so you can view the results anytime, go to the
      navigation menu, click results and explore.
    </p>
    <p>Cheers !!!</p>
  </div>
</template>
