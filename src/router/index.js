import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '',
    name: 'Main',
    component: () => import('../views/pages/Main.vue'),
    children: [
      {
        path: "/",
        redirect: "/inicio"
      },
      {
        path: "/inicio",
        name: "Home",
        component: () => import("../views/pages/subpages/Home.vue"),
      },
      {
        path: "/usuarios",
        name: "Users",
        component: () => import("../views/pages/subpages/Users.vue"),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
