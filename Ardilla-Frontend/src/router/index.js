import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import BlankLayout from "../layouts/BlankLayout.vue";
import HomeLayout from "../layouts/HomeLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomeLayout,
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: Home,
        },
        {
          path: "/calculator",
          name: "calculator",
          component: () => import("../views/Calculator.vue"),
        },
        {
          path: "/careers",
          name: "careers",
          component: () => import("../views/Careers.vue"),
        },
        {
          path: "/products",
          name: "products",
          component: () => import("../views/Products.vue"),
        },
        {
          path: "/business",
          name: "business",
          component: () => import("../views/Business.vue"),
        },
        {
          path: "/company",
          name: "company",
          component: () => import("../views/Company.vue"),
        },
        {
          path: "/learn",
          name: "learn",
          component: () => import("../views/Learn.vue"),
        }
      ],
    },
    {
      path: "/landing",
      name: "landing",
      component: BlankLayout,
      redirect: "/landing-page",
      children: [
        {
          path: "/landing-page",
          name: "landing-page",
          component: () => import("../views/Landing.vue"),
        },
      ],
    },
  ],
});

export default router;
