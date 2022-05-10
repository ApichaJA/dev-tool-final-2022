import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/",
    name: "/",
    component: () => import("../views/Home.vue"),
  },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior () {
      return { left: 0, top: 0 }
    }
  })

export default router;
