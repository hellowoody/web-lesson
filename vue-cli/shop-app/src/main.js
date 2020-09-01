import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import A from '@/components/tabs/A'
import B from '@/components/tabs/B'
import C from '@/components/tabs/C'
import D from '@/components/tabs/D';
Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path:'/',component:A},
  {path:'/b',component:B},
  {path:'/c',component:C},
  {path:'/d',component:D},
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


