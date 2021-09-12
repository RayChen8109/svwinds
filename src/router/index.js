import { createRouter, createWebHistory } from "vue-router";
import { appPath } from "../app-path.const";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: appPath.home,
        component: () => import('../views/Home.vue')
      },
      {
        path: appPath.introduceband,
        component: () => import('../views/IntroduceBand.vue')
      },
      {
        path: appPath.introduceteam,
        component: () => import('../views/IntroduceTeam.vue')
      },
      {
        path: appPath.performanceinfo,
        component: () => import('../views/PerformanceInfo.vue')
      },
      {
        path: appPath.recruit,
        component: () => import('../views/Recruit.vue')
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
