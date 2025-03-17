import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/dashboard/Dashboard.vue";
import User from "../views/user/User.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/user",
      name: "Master Data User",
      component: User,
    },
  ],
});

export default router;
