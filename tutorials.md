# 教程 Lesson

## 1.后端工程师如何学习前段

 - 一个正确的心态，也就是不要太轻视前端
 - 前端的知识不难，但也不容易
 - 前端的一大特点是解决一个问题没有严格标准化的形式

 ```
  .xxx:nth-of-type(x) {
    color:red;
  }
 ```

## 2.需要掌握了解的内容

  - vue脚手架
  - vue组件
  - vue-router
  - vue实战
  - ES6 ES7 语法 
  - webpack打包
  - nodejs 做服务，实现一个前后端分离的小demo
  - 微信小程序

## 3.为什么是vue

  - web component 
    
    ```
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title>web component test</title>
        </head>
        <body>
            <user-card></user-card>
            <template id="userCardTemplate">
                <img src="https://semantic-ui.com/images/avatar2/large/kristy.png">
                <div>
                    <p>User name</p>
                </div>
            </template>
            <script>
                class UserCard extends HTMLElement {
                    constructor(){
                        super()
                        let templateEle = document.getElementById("userCardTemplate")
                        let content = templateEle.content.cloneNode(true)
                        this.appendChild(content)
                    }
                }
                window.customElements.define('user-card',UserCard)
            </script>
        </body>
    </html>
    ```

  - vue 和 web component的关系
    - Alex Russell在2011年的Fronteers大会上首次提出Web组件。
    - vue 是2014提出第一版，但是我们实际使用最多的还是2.0版本，大概是2016年
    - 对比可以发现vue有一些web component的影子,看代码例子

  - vue 参考web-component的痕迹

      vue普通写法
      ```
      <template>
        <div>
          <h1 v-if="level == 1"></h1>
          <h2 v-if="level == 2"></h2>
          <h3 v-if="level == 3"></h3>
          <h4 v-if="level == 4"></h4>
          <h5 v-if="level == 5"></h5>
          <h6 v-if="level == 6"></h6>
        </div>
      </template>
      <script>
        export default {
          props: {
            level: {
              require: true,
              type: Number,
            }
          }
        };
      </script>
      ```
      vue render写法
      ```
      <script>
        export default {
          props: {
            level: {
              require: true,
              type: Number,
            }
          },
          render(createElement) {
            return createElement('h' + this.level);
          }
        };
      </script>
      ```
      createElement 第一个参数是必填的，可以是String | Object | Function
      createElement 第二个参数是选填的，一个与模板中属性对应的数据对象 常用的有class | style | attrs | domProps | on
      createElement 第三个参数是选填的，代表子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，正常来讲接收的是一个字符串或者一个数组，一般数组用的是比较多的

## 4.MVC和MVVM

简单的说 mvc跟所谓的“前端”并没有什么关系  
由于mvc一般是以服务端(server)角度出发,所以这里view，其实是模板，如jsp，asp等  
但是这种设计，有一点弊端就是后台和前端耦合性太强。所以才会有mvvm的出现  

![image](http://woodyhello.com/assets/imgs/lesson/vue/mvc.png)

![image](http://woodyhello.com/assets/imgs/lesson/vue/mvvm.png)

## 5.Proxy实现双向绑定

  ```
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"></meta>
        <meta content="width=device-width,initial-scale=1" name="viewport">
        <title>proxy 双向绑定</title>
      </head>
      <body>
            <input id="inputid" oninput="onHandle(this)">
            <br/>
            <div id="showdiv"></div>
      </body>
    </html>
    <script>
    function proxyObj(target){
        return new Proxy(target,{
            get(obj,prop){
                return obj[prop]
            },
            set(obj, prop, value){
                obj[prop] = value
                document.getElementById("showdiv").innerText = obj[prop] 
                return
            },
        })
    }

    let obj = {
        value:"hello world"
    }

    let obj_proxy = proxyObj(obj)

    ;(function(){
        document.getElementById("showdiv").innerText = obj_proxy.value
    })()

    function onHandle(e){
        obj_proxy.value = e.value
    }

    </script>
  ```

## 6.用vue-cli脚手架去创建一个vue3.0的项目

  - 安装node环境

  - 安装vscode ide

    - 安装vue的plugin插件

      - 安装Vetur


  - 安装vue-cli

    - 官网 https://cli.vuejs.org/zh/

    - 全局安装

      ```
      npm install -g @vue/cli
      ```

    - 局部安装

      ```
      npm install -D @vue/cli
      // npm install --save-dev @vue/cli
      ```
    
    - 创建项目

      ```
      npx vue create cli-demo
      ```

    - package.json配置文件

    - webpack的配置项
      
      - node_modules文件夹中的@vue/cli-service/lib/*.js

      - 通过命令将开发环境和生产环境的配置文件暴露出来

        ```

        npx vue-cli-service inspect --mode=development > webpack.dev.js
        npx vue-cli-service inspect --mode=production > webpack.prod.js

        ```

      - vue.config.js配置文件

        ```
        module.exports = {
            publicPath:"./"
        }
        ```
        目的是让打包build之后的文件可以找到js和css的引用路径。

      - 引用路径的语法糖-"@"

    - 如何应用外部的css文件

      ```
      
      <script>
      import '@/assets/css/common.css';
      </script>

      ```


## 7.制作一个顶部搜索框组件

  - 将脚手架创建的项目中没有用的文件删除

  - 创建一个名字为TopBar.vue的组件文件

    在src/components/TopBar.vue的文件
  
  - 在App.vue中引用并装载TopBar组件

    ```
    <script>
    import TopBar from '@/components/TopBar.vue' //引用

    export default {
      name: 'App',
      components: {
        TopBar  // "TopBar":TopBar  装载
      }
    }
    </script>
    ```
  
  - 在TopBar中增加样式和方法

    ```
    <template>
      <div class="top-bar">
          <input class="search-input" v-model="searchInput" placeholder="请输入查询内容" >
          <button class="search-btn" @click="search" >搜索</button>
      </div>
    </template>

    <script>

    export default {
        name:"TopBar",
        data(){
            return {
                searchInput:""
            }
        },
        methods:{
            search(){
                console.log(this.searchInput)
                console.log("this is search btn")
            }
        },
        watch:{
            searchInput(newVal,oldVal){
                console.log(newVal,oldVal)
            }
        }
    }
    </script>

    <style>
    .top-bar {
        height:60px;
        background-color: #9267FD;
        box-shadow: 0px 1px 2px rgba(40,40,40,0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:12px 24px;
        box-sizing: border-box;
    }

    .search-input {
        height:100%;
        width:80%;
        border-radius: 10px;
    }

    .search-btn {
        height: 100%;
    }
    </style>

    ```
  
## 8.安装vue-router使页面可以跳转

  - 安装vue-router

    - 进入vue3的官网,可能有点慢

      https://v3.vuejs.org/

    - 在顶部菜单栏找到vue3生态中的vue-router，点击进入到vue-router页面

      或者你可以直接访问 https://next.router.vuejs.org/

    - 安装

      ```
      npm i vue-router@next
      ```

  - 在vue3项目中装载vue-router

    ```
    import { createApp } from 'vue'
    import { createRouter, createWebHashHistory } from 'vue-router';
    import App from './App.vue'

    const router = createRouter({
        history:createWebHashHistory(),  //前端渲染的设置
        routes:[
          ...
        ]
    })

    const app = createApp(App)
    app.use(router)
    app.mount('#app')
    ```

  - 调整项目目录和结构，目的是为了配合router

    - 创建一个首页的页面-Home.vue

    - 然后将“之前”的App.vue文件中的内容拷贝到Home.vue中

      这时能体现@语法糖的优势

    - 修改main.js中路由的部分

      ```
      const router = createRouter({
          history:createWebHashHistory(),
          routes:[
              {
                  path:"/",
                  redirect:{
                      path:"/home"
                  }
              },
              {
                  path:"/home",
                  component:Home,
              },
          ]
      })
      ```
  
  - 添加一个搜索页面，同时在路由中增加配置

    - 在components文件夹下创建一个Search.vue的文件

    - 在main.js中增加路由配置

      ```

      import Search from './components/Search.vue'

      export const router = createRouter({
          history:createWebHashHistory(),
          routes:[
              {
                  path:"/",
                  redirect:{
                      path:"/home"
                  }
              },
              {
                  path:"/home",
                  component:Home,
              },
              {
                  path:"/search",
                  component:Search,
              },
          ]
      })

      ```

    - 验证路由配置成功可以手动修改url进行访问

      http://localhost:8080/#/search

  - 通过搜索按钮触发进行页面跳转

      - vue-router的跳转的方法

        ```

        this.$router.push("/search")
        
        ```
      - 修改TopBar.vue中search方法

        ```

        search(){
            console.log(this.searchInput)
            console.log("this is search btn")
            this.$router.push("/search")
        }

        ```
      - 在搜索页面增加一个简单的返回按钮

        ```
        <template>
          <h1>this is seacrh page</h1>
          <button @click="back">返回上一页</button>
        </template>

        <script>
        export default {
            name:"Search",
            methods:{
                back(){
                    this.$router.go(-1)
                }
            }
        }
        </script>
        ```
    





  - 封装router

    为了不频繁的修改入口文件main.js，需要把router的内容单独抽离出并进行封装

    - 在src下创建一个router的文件夹，并在文件夹中创建一个index.js文件

      src/router/index.js

    - 将main.js文件中的路由部分剪切到src/router/index.js文件中

      - main.js

        ```
        import { createApp } from 'vue'
        import { router } from './router'
        import App from './App.vue'

        const app = createApp(App)
        app.use(router)
        app.mount('#app')

        ```
      
      - router/index.js

        ```
        import { createRouter, createWebHashHistory } from 'vue-router';
        import Home from '@/components/Home.vue'
        import Search from '@/components/Search.vue'

        export const router = createRouter({
            history:createWebHashHistory(),
            routes:[
                {
                    path:"/",
                    redirect:{
                        path:"/home"
                    }
                },
                {
                    path:"/home",
                    component:Home,
                },
                {
                    path:"/search",
                    component:Search,
                },
            ]
        })
        ```



## 6.npx使用,不需要全局装vue,但初学者不建议





## 16.vue 生命周期

- 最好理解的场景是列表页面，根据生命周期在dom渲染完成后再去请求http api，不然会出现元素undefined错误，因为http是异步请求，有可能在dom还未渲染时，数据已经返回
- 在vue里生命周期暴露出来的方法如(beforeCreate created beforeMount mounted beforeupdate updated beforedestroy destroyed),这里在术语上是hook钩子函数，其实可以简单理解为callback回调函数







## 22.http post 4种提交方式

- application/x-www-form-urlencoded
  这应该是最常见的 POST 提交数据的方式了。浏览器的原生 <form> 表单，如果不设置 enctype 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。
- multipart/form-data
  一个常见的 POST 数据提交的方式。我们使用表单上传文件时，必须让 <form> 表单的 enctype 等于 multipart/form-data。
- application/json
  application/json 这个 Content-Type 作为响应头大家肯定不陌生。实际上，现在越来越多的人把它作为请求头，用来告诉服务端消息主体是序列化后的 JSON 字符串。
- text/plain or text/xml

## 23.区分简单请求

- 某些请求不会触发 CORS 预检请求，这样的请求被称为简单请求，若请求满足所有下述条件，则该请求可以被视为简单请求.

- 使用下列方法之一
  - GET
  - HEAD
  - POST

- Fetch 规范定义了对 CORS 安全的首部字段集合,不得人为设置该集合之外的其他首部字段，该集合为
  - ACCEPT（用于告知客户端可以处理的内容类型）
  - Accept-Language（用于告知客户端可以处理的自然语言）
  - Content-Language（用于说明访问者希望采用的语言或语言组合）
  - Content-Type (请求体的类型说明，并且该字段有额外限制）
  - DPR（用于告知客户端当前设备的像素比率）
  - Save-Data
  - Viewport-Width
  - Width

- Content-Type 的值被限定为以下三种之一
  - text/plain（普通文本）
  - multipart/form-data
  - application/x-www-form-urlencoded

- 满足上述条件的都被视为简单请求



