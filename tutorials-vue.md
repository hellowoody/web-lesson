# vue 学习

## 1.环境
  
```
node -v  //v12.16.2
npm -v   //6.14.7
npx vue -V  //@vue/cli 4.5.2
```

## 2.vscode插件

- vetur
- vue-peek

## 3.创建一个单页面vue项目

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

## 4.vue后缀的文件中，样式style的scoped问题

```
<style></style> // 在style标签里设置的样式是全局的

<style scoped></style> // 在style标签里设置的样式是只在本文件的组件内生效
```

## 5.如何引用css文件

一般css文件会放在assets（静态资源）文件下面

```
<style>
@import "./assets/css/commom.css";
</style>
```

## 6.引用iconfont

- 登陆iconfont网站，选择需要的图片
- 点击“下载代码”
- 解压下载的文件，放置在assets(静态资源文件夹中)
- 如何引用,一般放在App.vue文件中
```
<style>
@import "./assets/icon/iconfont.css";
</style>
```

## 7.PC端网页中字体支持的最小像素是多少？（面试）

最小像素12px

## 8.创建tabbar组件

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

## 9.如何用vue语法糖导入组件路径

```
<script>
import TabBar from '@/components/tabbar/TabBar.vue'
</script>
```

## 10.vue-router

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

## 11. 封装路由

- 在src下创建一个router文件夹
- 在router文件夹下创建一个index.js，router/index.js
- 将原先我们在main.js里所写的有关router的代码复制过来，同时需要注意还需要导入vue

```
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/tabs/Home';
import Product from '@/components/tabs/Product';
import Order from '@/components/tabs/Order';
import Account from '@/components/tabs/Account';


Vue.use(VueRouter) 

const routes = [
  {path:'/',redirect:{path:"/home"}},
  {path:'/home',component:Home},
  {path:'/product',component:Product},
  {path:'/order',component:Order},
  {path:'/account',component:Account},
]

const router = new VueRouter({
  routes
})

export default router

```
- 还需注意index.js需要导出，导出需要使用es6语法：export default router
- 最后在main.js中导入router/index.js,并将导入的模块（router），放置vue对象中

```
import router from './router'

new Vue({
  router, // important 重要！
  render: h => h(App),
}).$mount('#app')

```

## 12.router histroy build 和 dev

- 不建议使用vue-router 的histroy-mode 形式，因为这种方式一般是为了后端渲染的，如果是nginx发布的话，需要单独配置
- histroy-mode模式 在dev开发时是没有问题的，但打包build之后问题就显现出来。

## 13.如何实现顶部组件TopBar

- 在src根目录下创建topbar文件夹,同时在文件夹下创一个TopBar.vue
- 利用学过的插槽slot，去实现本次的组件
- 根据原型，需要本组件内容放置左， 中，右三个插槽
  ```
  <div>
    <slot name="left"></slot>
    <slot name="middle"></slot>
    <slot name="right"></slot>
  </div>
  ```
- 再利用css当中的flex布局，将三个slot设计一下

```
.top-bar {
    background-color:#fff;
    height:60px;
    box-shadow: 0px 1px 2px rgba(40,40,40,0.2);
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 18px 0px 18px;
}
```

- 应该再middle的slot，写上默认的内容，默认的内容就是input

## 14.引用阿里的Ant-D 第三方原型库

- 安装antd 如果npm慢，官网推荐cnpm
- 安装封装路由方式，去封装和加载antd
- 创建antd文件，再src根目录,创建antd/index.js
- 在index.js

```
import Vue from 'vue'
import { 
    Input ,
    Icon
}  from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Input)
Vue.use(Icon)

```
- 需要main.js 导入进来

```

import './antd'

```

## 15.如何antd组件

- 推荐，一定要看官网
- 根据官网的input的例子，直接把代码考到我们项目
- 定制化修改第三方库的样式，一般都是在浏览器用开发者找到渲染后的标签的样式名，进行修改
```
//style 是全局的 而不是 scoped
<style> 
.ant-input {
    background-color : rgb(172 172 172 / 0.1) !important;
    border: none !important;
    border-radius: 8px !important;
}
<style>
```

## 16.修改路由策略，使用子路由

- 目的是一级页面现实底部选项卡，二级页面以及之后的页面“隐藏”底部选项卡

```
const routes = [
  {path:'/',redirect:{path:"/main/home"}},
  {path:'/main',component:Main,children:[
    {path:'home',component:Home},
    {path:'product',component:Product},
    {path:'order',component:Order},
    {path:'account',component:Account},
  ]},
  {path:'/cart',name:'cart',component:Cart},
]
```

- 需要注意的是，子路由中的path是不需要写斜杠'/'前缀的


## 17.实现一个跳转事件

```
    methods:{
        goto(path){
            this.$router.push({path})  //{path} 相当于 {path:path}
        }
    }
```

## 18.父组件向子组件传递一个回调函数(注意：不是$emit)

- 父组件，在调用子组件时向子组件传递一个focusFunc

```
<top-bar :focusFunc="search" >
</top-bar>
```

- 子组件

```

<a-input ref="searchinput"  size="large" @focus="focusFunc" placeholder="请输入查询内容"></a-input>

export default {
    props:{
        focusFunc:{
            type:Function,
            default:function(){}
        },
    },
}

```

## 19.封装localStoreage函数

- 在项目src目录下创建kits文件夹
- 在kits文件夹下创建LocalStorage.js（/src/kits/LocalStorage.js）
- 注意使用ES6语法导出
- 注意localStorage默认只支持字符串格式的存储和输出

```

export const getArray = (key)=>{
    let val = localStorage.getItem(key)
    return val === null ? [] : val.split(',')
}

export const setArray = (key,val)=>{
    let arr = getArray(key)
    arr.push(val)
    localStorage.setItem(key,arr.toString())
}

```
## 20.如何用【prototype-原型】的方式装载antd的某些组件

```
import { 
    message,
}  from 'ant-design-vue';

// message.config 是配置全局属性，可以配置也可以不配置
message.config({
    top: `70px`,
    duration: 2,
    maxCount: 3,
});

Vue.prototype.$message = message;
```
## 21.如何使用$emit方式,从子组件向父组件传值

- 在父组件中声明需要被子组件调用的方法

```
data(){
      return {
          searchInput:"",  //如果有业务场景实际需求的话，可以声明属性，以便在方法中使用
        }
  },
methods:{
        searchInputChange(content){
            this.searchInput = content
        }
    }
```

- 在父组件中调用子组件标签时,将刚才声明的方法进行绑定

```
<template>
    <div>
        <top-bar @searchInputChangeHandle="searchInputChange" >
        </top-bar>
    </div>
```

- 在子组件中如何调用刚才绑定的方法

```
this.$emit("searchInputChangeHandle",newVal)
```

## 22.使用better-scroll实现横向滚动

- 源码链接：https://github.com/ustbhuangyi/better-scroll
- 安装
    ```
    npm install better-scroll --save
    ```
- 导入
  ```
  <script>
  import BScroll from 'better-scroll'
  </script>
  ```
- 使用

  ```
  <template>
    <div class="wrapper" ref="wrapper" >
        <ul class="list" ref="list">
            <div v-for="item in 5" :key="item" style="flex-shrink: 0;margin-right: 12px;width:119px;height:90px;border-radius:15px;background-color:#E5E5E5"></div>
        </ul>
    </div>
  </template>

  <script>
    mounted() {
      this.$nextTick(() => { // 使用 this.$nextTick 为了确保组件已经渲染完毕
        let itemWidth = 138 // 这里是设置列表每一项的宽度
        let margin = 0
        // width是整个列表的宽度
        let width = (itemWidth + margin) * 5 - margin
        // console.log(width)
        this.$refs.list.style.width = width + 'px' // 设置.list的宽度的宽度
        this.$nextTick(() => {
            if (!this.picScroll) {
                this.picScroll = new BScroll(this.$refs.wrapper, {
                    scrollX: true,
                    eventPassthrough: 'vertical' // 忽略竖直方向的滚动
                })
            } else {
                this.picScroll.refresh()
            }
        })
      })
    }
  </script>

  <style scoped>
    .wrapper {
      overflow: hidden;
      white-space: nowrap; /*当子元素超过父元素宽度的时候，不会折行*/
      margin-left: 24px;
      margin-top:12px;
    }

    .wrapper .list {
        display: flex;
        padding:0px;
    }
  </style>
  ```




## 23.使用vue内置transition实现滑动跳转效果

- 是实际开发中动画效果的跳转过渡一般都是框架实现，并且实现过程比较复杂，这里用一个简单的例子展现如何手动实现此效果
- 在App.vue文件中,添加transition设置

template
```
<transition :name="transitionName" >
  <router-view></router-view>
</transition>
```

style

```
.fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: .3s;
  }
  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: .3s;
  }
  @keyframes fold-left-in {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-left-out {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: hidden; */
    }
  }
  .fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: .3s;
  }
  .fold-right-leave-active {
    animation-name: fold-right-out;
    animation-duration: .3s;
  }
  @keyframes fold-right-in{
    0% {
      width: 100%;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fold-right-out  {
    0% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: hidden; */
    }
  }

```

script

```
watch:{
    '$route' (to, from) {
      //此时假设从index页面跳转到pointList页面
      // console.log(to); // "/pointList"
      // console.log(from); // “/index”

      if ((to.path == "/search" && from.path == "/main/home") || (to.path == "/main/home" && from.path == "/search")) {
        const routeDeep = ['/main/home', '/search'];
        const toDepth = routeDeep.indexOf(to.path)
        const fromDepth = routeDeep.indexOf(from.path)
        if (fromDepth >= 0 ){
          this.transitionName = toDepth > fromDepth ? 'fold-left' : 'fold-right'
        }
      }else{
          this.transitionName = ""
      }
    }
},
```

## 24.封装http异步操作(一)

```
//利用promise 实现异步操作
const baseUrl = "http://127.0.0.1:8080/api"

let resData = {
    "code":"",
    "msg":"",
    "data":{}
}

export const Http = (api,param)=>{
    let url = baseUrl+api
    console.log(url,param)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let r = Math.random()
            if(r>0.1 && r<0.9){
                switch(api) {
                    case "/register":
                        resData.code = "ok"
                        resData.msg = "注册成功"
                        break;
                    case "/login":
                        resData.code = "ok"
                        resData.msg = "登录成功"
                        resData.data = {
                            token : "123456",
                            user:{
                                userid:"abc@mail.com",
                                username:"张三"
                            }
                        }
                        break;
                    default:
                } 
                resolve(resData)
            }else{
                resData.code = "fail"
                resData.msg = "该邮箱已被注册"
                reject(resData.msg)
            }
        },1000)
    })
}
```
如何使用

```
<script>

import {Http} from '@/kits/Http'

export default {
    name:"Login",
    methods:{
        async sub(formName){
            let res = await Http("/login",this.form)
            try {
                //成功的代码逻辑
                this.$router.replace({path:"/main/home"})
            } catch (e) {
                //失败的代码逻辑
            }
        }
    }
}
</script>
```

## 25.vuex

- 安装
  ```
  npm install vuex --save
  ```
- 引用和装载
  ```
  //在src下创建store文件夹
  //创建/src/store/index.js 文件
  import Vue from 'vue';
  import Vuex from 'vuex';

  Vue.use(Vuex)

  const store = new Vuex.Store({})

  export default store
  ```

  ```
  import store from './store'

  new Vue({
    store,
    render: h => h(App),
  }).$mount('#app')
  ```

- state:声明全局变量
  ```
  const store = new Vuex.Store({
    state:{
        count: 10,
    },
  })
  ```
- 使用全局变量
  ```
  //一旦在state这个属性里声明，那么这个属性就能在整个项目里任何地方(*.vue)使用
  $store.state.count
  //or
  this.$store.state.count
  ```
- mutations:修改全局变量(同步修改)

  ```
  const store = new Vuex.Store({
      state:{
          count: 0,
      },
      //同步修改
      mutations:{
          increase(state){
              state.count++
          },
          decrease(state){
              state.count--
          }
      },
  })
  ```
  还可以传参数

  ```
  mutations:{
      updateCount(state,val){
          state.count = val
      },
  },
  ```

  如何调用

  ```
  this.$store.commit("updateCount")
  //or
  this.$store.commit("updateCount",参数)
  ```

- actions:修改全局变量(异步修改)

  ```
    const store = new Vuex.Store({
      state:{
          count: 0,
      },
      //同步修改
      mutations:{
          updateCount(state,val){
              state.count = val
          },
      },
      actions:{
          updateCountAsync (context,obj) {
            setTimeout(() => {
              context.commit('updateCount',obj.newVal)
            }, 1000)
          }
      }
  })
  ```
  如何调用

  ```
  this.$store.dispatch('updateCountAsync', {
    newVal: 10
  })
  ```

- getters:全局变量的计算属性

  ```
  const store = new Vuex.Store({
      state:{
          count:10
      },

      getters:{
          squareCount:(state)=>{
              return state.count * state.count
          }
      }
  })
  ```
  如何调用

  ```
  <template>
    <div>{{$store.getters.squareCount}}</div>
  </template>
  ```

## 26.网络请求方式

  - XMLHttpRequest

  ```
  var xhr = new XMLHttpRequest();
  xhr.open("POST", '/server', true);

  //发送合适的请求头信息
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = function () { 
      // 请求结束后,在此处写处理代码 
  };
  xhr.send("foo=bar&lorem=ipsum"); 
  ```
  - ajax (JQuery)

  ```
  $.ajax({
      type:'POST',
      url:baseurl+apiname,
      data:p,
      dataType:"json",
      // contentType:"application/json",
      contentType:"application/x-www-form-urlencoded",
      success:(data,status,config)=>{
          console.log(data)
          if(typeof(success_callback) === 'function'){
              success_callback(data)
          }
      },
      error:(data,err)=>{
          console.log(err)
      }
  })

  ```

  - fetch

  ```
  fetch("http://127.0.0.1:3000/api/login",{
    body:JSON.stringify({id:1,pwd:2}),
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-type':'application/json',
    }
  })
  ```  
 
  - axios (最终解决方案)

    - 网址

      ```
      https://github.com/axios/axios
      ```

    - 安装

      ```
      npm install axios --save
      ```