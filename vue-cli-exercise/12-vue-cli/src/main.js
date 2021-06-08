import "@/antd";
import '@/assets/css/common.css';

import Vue from 'vue' // vue.runtime.js   缺少的一部分功能 渲染html
import router from "@/router";
import store from "@/store"
import App from '@/App.vue';

Vue.config.productionTip = false

//路由第三步:将路由实例，传入Vue实例中
new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')

