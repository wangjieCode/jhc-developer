import Vue from 'vue';
import './plugins/axios';
import Element from 'element-ui';
import App from './App.vue';
import router from './router';
import './element-variables.scss';
import './assets/style/reste.css';
import store from './store';

// router.beforeEach( (to,from,next) => {
// 	console.log(to)
// 	if (to.fullPath !== "/document/interface") {
// 		next()
// 		console.log("mm")
// 	}
// })

Vue.config.productionTip = false;
Vue.use(Element);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
