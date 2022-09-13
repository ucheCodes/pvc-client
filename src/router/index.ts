import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Vote from "../components/Vote.vue";
import AllVotes from "../components/AllVotes.vue";
import Result from "../components/Result.vue";
import Admin from "../components/Admin.vue";
import Wallet from "../components/CreateWallet.vue";
import Users from "../components/Users.vue";
import CreateWallet from "../components/CreateWallet.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/vote",
      name: "vote",
      component: Vote,
    },
    {
      path: "/allvotes",
      name: "allvotes",
      component: AllVotes,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/result",
      name: "result",
      component: Result,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
    {
      path: "/users",
      name: "users",
      component: Users,
    },
    {
      path: "/wallet",
      name: "wallet",
      component: CreateWallet,
    },
  ],
});

export default router;
