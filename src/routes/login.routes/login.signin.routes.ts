export const LOGIN_SIGNIN_ROUTES = [
  {
    path: '/login/signin',
    name: 'signin',
    component: () =>
      import(
        /* webpackChunkName: "login-signin" */ './../../views/login.view/login.signin.view/login.signin.view.vue'
      )
  },
  {
    path: '/login/signin/modal/recovery/email/:email',
    name: 'signin/recovery/password',
    component: () =>
      import(
        /* webpackChunkName: "login-signin" */ './../../views/login.view/login.signin.view/login.signin.view.vue'
      )
  }
];
