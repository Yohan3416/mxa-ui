import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import mxa from "../node_modules/mxa-ui/dist/mxa-ui.umd";
import "../node_modules/mxa-ui/dist/mxa-ui.css";



Vue.use(VueRouter);
Vue.config.productionTip = false

Vue.use(mxa);

const router = new VueRouter({
  mode: 'history',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
