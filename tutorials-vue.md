# vue 学习

## 1.环境
  
```
node -v  //v12.16.2
npm -v   //6.14.7
npx vue -V  //@vue/cli 4.5.2
```

## 2.创建一个单页面vue项目

```
vue create shop-app

npx vue create shop-app

```

main.js

```
new Vue({
  render: h => h(App)
}).$mount('#app')
```

```
new Vue({
  el:'#app',
  components:{App},
  template:'<App/>'
})
```

```
new Vue({
   render: function (h) { return h('h2',null,['hello woody']) },
}).$mount('#app')
```

## 3.vue-router

```
//版本 vue-router 3.4.3
npm i --save vue-router
```


