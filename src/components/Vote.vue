<script setup lang="ts">
    import data from "@/assets/candidates";
    const isConnected = false;
    const stateCategory = false;
 </script>
<template>
    <div class="content">
        <section id="vote">
            <h1>Cast a vote</h1>
            <div class="vote">
                <div class="select">
                    <h4>Select Election Category</h4>
                    <select name="category" id="category">
                        <option value="presidential">Presidential</option>
                        <option value="state">State</option>
                        <option value="local">Local</option>
                    </select>
                </div>
                <div class="select">
                    <h4>Enter Your NIN</h4>
                    <input type="number">
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
                <div>
                    <h3>Political Aspirants</h3>
                    <div v-for="(aspirant, index) in data" :key="index" class="aspirants card">
                        <div class="top">
                            <img :src="aspirant.photo" alt="aspirants"/>
                            <div class="aspirants-info">
                                <span>
                                    Name : <label>{{aspirant.name}}</label>
                                </span>
                                <span>
                                    Political Party : <label>{{aspirant.party}}</label>
                                </span>
                                <span>
                                    Role : <label>Presidency</label>
                                </span>
                            </div>
                        </div>
                        <div>
                            <p>
                                {{aspirant.goal}}
                            </p>
                            <div class="btn">
                                <button v-if="isConnected">Vote</button>
                                <button v-else>Connect Metamask</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>