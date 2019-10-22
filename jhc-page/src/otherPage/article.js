// import Vue from 'vue';
import '../plugins/axios';
import Element from 'element-ui';
import Article from './Article.vue';
import '../assets/style/reste.css';
import store from '../store';

Vue.config.productionTip = false;
Vue.use(Element);
new Vue({
  store,
  render: h => h(Article),
}).$mount('#article');
