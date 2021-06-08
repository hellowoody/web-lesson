import "@/antd"
import "@/assets/css/common.css";

import Vue from 'vue'; 
import router from "@/router";
import store from "@/store";
import App from '@/App.vue';

Vue.config.productionTip = false // mode 

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app') // 挂载
