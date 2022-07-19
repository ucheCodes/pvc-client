<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
        <nav class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
            <div class="nav-title">
                <div class="header-items">
                    <img src="@/assets/img/flag1.jpg" alt="vote"/>
                   <div>E - PVC Dapp</div>
                </div>
            </div>
        </div>

        <div class="nav-btn">
            <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
        <div class="nav-links">
            <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/about">About</RouterLink></li>
                <li><RouterLink to="/vote">Vote</RouterLink></li>
                <li><RouterLink to="/result">Results</RouterLink></li>
                <li><RouterLink to="/admin">Admin</RouterLink></li>
            </ul>
        </div>
    </nav>
    
    <RouterView/>
</template>