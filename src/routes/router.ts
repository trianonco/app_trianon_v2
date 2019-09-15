import Vue from 'vue';
import Router from 'vue-router';

import { INDEX_ROUTES } from './index.routes/index.routes';
import { LOGIN_SIGNIN_ROUTES } from './login.routes/login.signin.routes';
import { LOGIN_SIGNUP_ROUTES } from './login.routes/login.signup.routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    //...INDEX_ROUTES,
    //...LOGIN_SIGNIN_ROUTES,
    //...LOGIN_SIGNUP_ROUTES,
    {
      path: '*', // or '/index.html'
      beforeEnter: (to: any, from: any, next: any) => {
        next('/');
      }
    }
  ]
});
