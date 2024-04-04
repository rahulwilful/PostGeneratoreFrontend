import DefaultView from "../views/DefaultView.vue";
import DashboardView from "../views/DashboardView.vue";
import PostGeneration from "../pages/PostGeneratore3.vue";
import Duo from "../pages/Duo.vue";
import BreakingNews from "../pages/BreakingNews.vue";
import Login from "../pages/Login.vue";

import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/postgeneration",
  },
  {
    path: "/",
    component: DefaultView,
    children: [
      {
        path: "/login",
        component: Login,
      },
    ],
  },
  {
    path: "/",
    component: DashboardView,
    children: [
      {
        path: "/postgeneration",
        component: PostGeneration,
      },
      {
        path: "/duo",
        component: Duo,
      },
      {
        path: "/breaking_news",
        component: BreakingNews,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
