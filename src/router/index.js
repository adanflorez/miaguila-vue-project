import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import auth from '@/auth/authService';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '',
    component: () => import('../views/pages/Main.vue'),
    children: [
      // =============================================================================
      // PAGES
      // =============================================================================
      {
        path: '/',
        redirect: '/inicio',
      },
      {
        path: '/inicio',
        name: 'Home',
        component: () => import('../views/pages/subpages/Home.vue'),
        meta: {
          authRequired: true,
        },
      },
      {
        path: '/usuarios',
        name: 'Users',
        component: () => import('../views/pages/subpages/Users.vue'),
        meta: {
          authRequired: true,
        },
      },
      {
        path: '/tareas',
        name: 'Tasks',
        component: () => import('../views/pages/subpages/Tasks.vue'),
        meta: {
          authRequired: true,
        },
      },
      /** 
       * Redirect to /login or if user is logged in redirect to /inicio 
       */
      {
        path: '*',
        redirect: '/login',
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const routes_after_login = ['/login'];

router.beforeEach((to, from, next) => {
  // If auth required, check login. If login fails redirect to login page
  if (to.meta.authRequired) {
    if (!auth.isAuthenticated()) {
      router.push({ path: '/login' });
    }
  } else {
    if (auth.isAuthenticated() && routes_after_login.includes(to.path)) {
      router.push({ path: '/inicio' });
    }
  }

  return next();
});

export default router;
