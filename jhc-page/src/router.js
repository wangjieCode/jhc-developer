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
    redirect: '/document/interface',
    children: [{
      path: 'interface',
      name: 'interface',
      component: () => import('./components/interface/interface.vue'),
    }],
  },
  {
    path: '/registered',
    name: 'registered',
    component: () => import('./components/user/registered.vue'),
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: () => import('./views/notFound.vue'),
  },
  {
	  path: '/learnCenter',
	  name: 'learnCenter',
	  component: () => import('./views/learnCenter.vue'),
  },
  {
    path: '*',
    redirect(to) {
      if (to.path === '/') {
        return '/home';
      }
      return '/notFound';
    },
  },
  ],
});
