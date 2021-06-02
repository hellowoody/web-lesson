import "@/antd"
import "@/assets/css/common.css";

import Vue from 'vue'; 
import router from "@/router"
import App from '@/App.vue'

Vue.config.productionTip = false // mode 

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app') // 挂载
