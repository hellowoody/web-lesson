import Vue from 'vue';  // vue/dist/run.runtime.js
// import Vue from 'vue/dist/vue.js';
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: function (h) { return h(App) },
// }).$mount('#app')

new Vue({
  el:"#app",
  render: function (h) { return h(App) },
})

// new Vue({
//   el:"#app",
//   render: function (h) { return h("div",{
//     style:"width:100px;height:100px;background-color:red"
//   }) },
// })
