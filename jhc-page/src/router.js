import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/About.vue'),
  },
  {
    path: '/document',
    name: 'document',
    component: () => import('./views/document.vue'),
  },
  {
	  path: '/registered',
	  name: 'registered',
	  component: () => import('./components/user/registered.vue'),
  },
  {
    path: '/',
    redirect: {
      name: 'home',
    },
  },
  ],
});
