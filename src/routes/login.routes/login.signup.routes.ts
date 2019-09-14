export const LOGIN_SIGNUP_ROUTES = [
  {
    path: '/login/signup',
    name: 'signup',
    component: () =>
      import(
        /* webpackChunkName: "about" */ './../../views/login.view/login.signup.view/login.signup.view.vue'
      )
  },
  {
    path: '/login/signup/intro/:step',
    name: 'signup/intro',
    component: () =>
      import(
        /* webpackChunkName: "about" */ './../../views/login.view/login.signup.view/login.signup.view.vue'
      )
  },
  {
    path: '/login/signup/code/:code',
    name: 'signup/code',
    component: () =>
      import(
        /* webpackChunkName: "about" */ './../../views/login.view/login.signup.view/login.signup.view.vue'
      )
  },
  {
    path: '/login/signup/pet',
    name: 'signup/pet',
    component: () =>
      import(
        /* webpackChunkName: "about" */ './../../views/login.view/login.signup.view/login.signup.view.vue'
      )
  },
  {
    path: '/login/signup/user',
    name: 'signup/pet',
    component: () =>
      import(
        /* webpackChunkName: "about" */ './../../views/login.view/login.signup.view/login.signup.view.vue'
      )
  },
  {
    path: '/login/signup/terms',
    name: 'signup/terms',
    component: () =>
      import(
        /* webpackChunkName: "about" */ './../../views/login.view/login.signup.view/login.signup.view.vue'
      )
  }
];
