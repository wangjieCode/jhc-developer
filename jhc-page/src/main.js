import Vue from 'vue';
import './plugins/axios';
import Element from 'element-ui';
import App from './App.vue';
import router from './router';
import './element-variables.scss';
import './assets/style/reste.css';

Vue.config.productionTip = false;
Vue.use(Element);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
