const routes = [
  {
    path: "/",
    component: () => import("layouts/main-layout/MainLayout.vue"),
    meta: {
      authRequired: true,
    },
    children: [
      {
        path: "",
        name: "index",
        component: () => import("pages/index-page/IndexPage.vue"),
      },
      {
        path: "directions",
        name: "directions",
        component: () =>
          import("pages/directions/list-page/DirectionsPage.vue"),
      },
      {
        path: "admin-panel",
        name: "admin-panel",
        meta: {
          adminOnly: true,
        },
        component: () => import("pages/admin-panel-page/AdminPanelPage.vue"),
      },
    ],
  },

  {
    path: "/",
    component: () => import("layouts/auth-layout/AuthLayout.vue"),
    children: [
      {
        path: "sign-in",
        name: "sign-in",
        component: () => import("pages/sign-in-page/SignInPage.vue"),
      },
      {
        path: "sign-up",
        name: "sign-up",
        component: () => import("pages/sign-up-page/SignUpPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/error-not-found/ErrorNotFound.vue"),
  },
];

export default routes;
