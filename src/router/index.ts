import { createRouter, createWebHistory } from "vue-router";
import  Home  from "@/components/Home.vue";
import  About  from "@/components/About.vue";
import  Vote  from "@/components/Vote.vue";
import  Result  from "@/components/Result.vue";
import  Admin  from "@/components/Admin.vue";
import  Metamask  from "@/components/Metamask.vue";
import  Funding  from "@/components/Funding.vue";

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
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/result",
      name: "result",
      component: Result
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    },
    {
      path: "/metamask",
      name: "metamask",
      component: Metamask
    },
    {
      path: "/funding",
      name: "funding",
      component: Funding
    },
  ],
});

export default router;
