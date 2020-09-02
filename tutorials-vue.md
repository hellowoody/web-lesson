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

## 3.vue后缀的文件中，样式style的scoped问题

```
<style></style> // 在style标签里设置的样式是全局的

<style scoped></style> // 在style标签里设置的样式是只在本文件的组件内生效
```

## 4.如何引用css文件

一般css文件会放在assets（静态资源）文件下面

```
<style>
@import "./assets/css/commom.css";
</style>
```

## 5.引用iconfont

- 登陆iconfont网站，选择需要的图片
- 点击“下载代码”
- 解压下载的文件，放置在assets(静态资源文件夹中)
- 如何引用,一般放在App.vue文件中
```
<style>
@import "./assets/icon/iconfont.css";
</style>
```

## 6.PC端网页中字体支持的最小像素是多少？（面试）

最小像素12px

## 7.创建tabbar组件

- fixed定位，并设置宽高

```
  position: fixed;
  bottom:0px;
  left:0px;
  right:0px;
  height:58px;
  box-shadow: 0px 0px 8px #E3E3E3;
```

- flex布局,并设置居中

```
  display: flex;
  align-items: center;
```

## 8.如何用vue语法糖导入组件路径

```
<script>
import TabBar from '@/components/tabbar/TabBar.vue'
</script>
```

## 9.vue-router

- 安装

```
//版本 vue-router 3.4.3
npm i --save vue-router
```
- 引用

```

import VueRouter from 'vue-router';

Vue.use(VueRouter)
// vue.prototype.$router = xxx
// vue.prototype.$route = xxx
// this.$router --全局路由
// this.$route  --当前路由栈最新的那个路由


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
  render: h => h(App)
}).$mount('#app')

```

- 使用

```
    <router-link to="/">a</router-link>
    <router-link to="/b">b</router-link>
    <router-link to="/c">c</router-link>
    <router-link to="/d">d</router-link>
    <router-view></router-view>
```


