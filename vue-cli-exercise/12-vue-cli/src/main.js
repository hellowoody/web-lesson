import Vue from 'vue' // vue.runtime.js 
// import Vue from 'vue/dist/vue.js' // vue.js
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: function (h) { return h(App) },
// }).$mount('#app')

/*

vue.js             new vue 实例中 是不存在render
vue.runtime.js     new vue 实例中 只有render

*/
// new Vue({
//   el:"#app",
//   render: function (h) { return h("div",{
//     style:"width:100px;height:100px;background-color:red"
//   }) },
// })
new Vue({
  el:"#app",
  render: function (h) { return h(App) },
})
