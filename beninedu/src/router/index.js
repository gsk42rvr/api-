import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import { authGuard } from "../_helpers/auth-guard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('../views/Home.vue'),
      beforeEnter: authGuard
    },
    {
      path: "/login",
      name: "login",
      component: () => import('../views/login.vue'),
    },
    {
      path: "/eleves",
      name: "eleves",
      component: () => import('../views/eleves.vue'),
      beforeEnter: authGuard
    },
    {
      path: "/cours",
      name: "cours",
      beforeEnter: authGuard
    },
    {
      path: "/classes",
      name: "classes",
      component: () => import('../views/classes.vue'),
      beforeEnter: authGuard
    },
    {
      path: "/profs",
      name: "profs",
      component: () => import('../views/profs.vue'),
      beforeEnter: authGuard
    },
    {
      path: "/edt",
      name: "edt",
      component: () => import('../views/edt.vue'),
      beforeEnter: authGuard
    },
    {
      path: "/evaluations",
      name: "evaluations",
      component: () => import('../views/evaluation.vue'),
      beforeEnter: authGuard
    },
    {
      path: "/cou",
      name: "cou",
      component: () => import('../views/cou.vue'),
      beforeEnter: authGuard
    }
    
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.query.session_token) {
    localStorage.setItem("session_token", to.query.session_token);
    router.replace({ query: null });
  }

  const token = localStorage.getItem("session_token") || null;

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (token) {
    } else {
      next("/login");
      return;
    }
  } else if (to.matched.some((record) => record.name === "login")) {
    if (token) {
      next('/')
      return
    }
  }

  next();
});

export default router;
