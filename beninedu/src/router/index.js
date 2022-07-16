import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import oVue from "../views/dash/o.vue";
import settingsVue from "../views/dash/profil-settings.vue";
import { authGuard } from "../_helpers/auth-guard";
import DashVue from "../views/Dash.vue";
import { loadScript } from "vue-plugin-load-script";
import inscriptioneleveVue from "../views/dash/inscriptioneleve.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: () => import('../views/SuperAdmin/SuperAdminLayout.vue'),
    //   children: [
    //     {path: '/', name: 'home9', component:() => import('../views/SuperAdmin/Home.vue') },
    //     {path: '/eleves', name: 'eleves', component:() => import('../views/SuperAdmin/eleves.vue') }
    //   ],
    //   beforeEnter: authGuard
    // },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
    {
      path: "/",
      name: "dash",
      component: () => import("../views/Dash.vue"),
      children: [
        {
          path: "",
          name: "home5",
          component: oVue,
          meta: {
            title: "BeninEdu | Menu ",
          },
        },
        {
          path: "parametres",
          name: "home1",
          component: settingsVue,
          meta: {
            title: "Parametres du compte",
          },
        },
        {
          path: "inscrire-un-eleve",
          name: "inscrire-un-eleve",
          component: inscriptioneleveVue,
          meta: {
            title:'BeninEdu | Inscrire un élève'
          }

        }
      ],
    },
    {
      path: "/cours",
      name: "cours",
      beforeEnter: authGuard,
    },
    {
      path: "/classes",
      name: "classes",
      component: () => import("../views/classes.vue"),
      beforeEnter: authGuard,
    },
    {
      path: "/profs",
      name: "profs",
      component: () => import("../views/profs.vue"),
      beforeEnter: authGuard,
    },
    {
      path: "/edt",
      name: "edt",
      component: () => import("../views/edt.vue"),
      beforeEnter: authGuard,
    },
    {
      path: "/evaluations",
      name: "evaluations",
      component: () => import("../views/evaluation.vue"),
      beforeEnter: authGuard,
    },
    {
      path: "/cou",
      name: "cou",
      component: () => import("../views/cou.vue"),
      beforeEnter: authGuard,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta.title || "BeninEdu";
  next();
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
      next("/");
      return;
    }
  }

  next();
});

export default router;
