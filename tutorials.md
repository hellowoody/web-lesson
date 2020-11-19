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

  - vue-cli 脚手架
  - vite 脚手架
  - vue组件以及互相传值问题
  - vue-router
  - iconfont
  - localStorage
  - “ES6”语法 
    - 箭头函数
    - 导入导出
    - proxy代理
    - 计算型属性名
    - Promise
  - axios
  - graphql
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

![image](http://woodyhello.com/assets/imgs/lesson/vue/mvvm_new.png)

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

      npx使用,不需要全局装vue,但初学者不建议

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












## 9.进一步封装TopBar组件

  - 使用slot插槽，让TopBar在不同页面时显示不一样的布局和内容

    - slots 插槽

      - 普通/匿名插槽slot

        - 你有一个组件叫todo-button

          ```
          <button class="btn-primary">
            <slot></slot>
          </button>
          ```
        - 调用todo-button组件时

          ```
          <todo-button>
            Add todo
          </todo-button>
          ```

        - 当组件渲染时，Add todo会替换组件中的<slot>标签部分

          ```
          <!-- rendered HTML -->
          <button class="btn-primary">
            Add todo
          </button>
          ```


      - 命名插槽slot

        比如我们的TopBar组件,将按钮的监听方法放在父组件，目的是同样的按钮在不同页面执行不一样的逻辑事件

        - 声明

          ```
          <template>
            <div class="top-bar">
                <div class="left-wrapper">
                    <slot name="left"></slot>
                </div>
                <div class="middle-wrapper">
                    <input class="search-input" v-model="searchInput" placeholder="请输入查询内容" >
                </div>
                <div class="right-wrapper">
                    <div @click="search" >搜索</div>
                </div>
            </div>
          </template>
          ```
        
        - 调用

          Search.vue

          ```
          <template>
              <top-bar>
                  <template v-slot:left>
                      <div style="color:#fff" @click="back">返回</div>
                  </template>
              </top-bar>
              <h1>this is seacrh page</h1>
          </template>
          ```

  - 组件传值

    - 父传子

      - 父组件中传递

        ```
        <top-bar searchdefaultval="123456"></top-bar>
        ```

      - 子组件中接收

        ```
        props:{
            searchdefaultval:String
        },
        ```

        ```
        props:{
            searchdefaultval:{
              type:String,
              value:"默认值"
            }
        },
        ```



    - 子传父

      - 父组件中声明

        ```
        <top-bar @searchHandle="searchOnChange">
        <top-bar>
        ```

        ```
        searchOnChange(v){
            this.searchInput = v
        }
        ```

      - 子组件触发

        ```
        watch:{
            searchInput(newVal,oldVal){
                clearTimeout(this.timeout)
                this.timeout = setTimeout(()=>{
                    console.log(newVal,oldVal)
                    this.$emit("searchHandle",newVal)
                },500)
            }
        }
        ```


## 10.引用iconfont库

  - 官网

    https://www.iconfont.cn/

  - 操作

    - 选中你要的图标，添加到购物车

    - 点击右上角购物车图标，选择下载代码

    - 将下载的zip放到src/assets/fonts文件夹下，并解压

    - 打开文件夹中的demo_index.html页面查看使用方式

  - 以Font Class为例，介绍如何使用

    - 在App.vue中,将iconfont.css引用

      ```
      <script>
      import '@/assets/css/common.css';
      import '@/assets/fonts/iconfont.css'

      export default {
        name: 'App',
        components: {
        }
      }
      </script>
      ```
    - 在你需要使用图片的地方，通过class属性进行调用

      ```
      <top-bar @searchHandle="searchOnChange">
          <template v-slot:left>
              <div class="iconfont icon-back" style="color:#fff" @click="back"></div>
          </template>
          <template v-slot:right>
              <div @click="search" >搜索</div>
          </template>
      </top-bar>
      ```

## 11.优化TopBar组件中input部分

  - 实现一个效果：
    - 在首页的时候点击搜索按钮和焦点触发input框都只是使页面跳转，跳转到搜索页面(搜索入口)
    - 在搜索页面(搜索入口)中，input框可以正常输入，点击“搜索”按钮，页面跳转到搜结果页面

  - 增加foucs监听事件

    ```
    <div class="top-bar">
        ...
        <div class="middle-wrapper">
            <slot name="middle">
                <input class="search-input" v-model="searchInput" @focus="onFocus" placeholder="请输入查询内容" >
            </slot>
        </div>
        ...
    </div>
    ```

    ```
    methods:{
        onFocus(){
            console.log("触发input焦点")
        }
    },
    ```

  - 通过emit方式，将触发焦点事件传递给父组件

    TopBar.vue

    ```
    methods:{
        onFocus(){
            this.$emit("focusHandle")
        }
    },
    ```

    Home.vue

    ```
    <top-bar @focusHandle="goSearch">
      <template v-slot:right>
          <div class="iconfont icon-search" @click="goSearch" ></div>
      </template>
    </top-bar>
    ```

    ```
    methods:{
      goSearch(){
        this.$router.push("/search")
      }
    }
    ```
  
  - 增加搜索结果页面SearchResult.vue

    - 创建页面并在router配置文件中进行配置

      ```
      ...
      import SearchResult from '@/components/SearchResult.vue'

      export const router = createRouter({
          history:createWebHashHistory(),
          routes:[
              ...
              {
                  path:"/searchresult",
                  component:SearchResult,
              },
          ]
      })
      ```

    - 在搜索入口页面的搜索事件中，进行页面跳转，跳转到搜索结果页面

      ```
      methods:{
          ...
          search(){
              console.log(this.searchInput)
              this.$router.push("/searchresult")
          },
      }
      ```

    - 将topbar组件也引入到搜索结果页面中

      ```
      <template>
          <top-bar @searchHandle="searchOnChange">
              <template v-slot:left>
                  <div class="iconfont icon-back" style="color:#fff" @click="back"></div>
              </template>
              <template v-slot:right>
                  <div @click="search" >搜索</div>
              </template>
          </top-bar>
          <h1>搜索结果页面</h1>
      </template>

      <script>
      import TopBar from '@/components/TopBar.vue'

      export default {
          name:"SearchResult",
          components: {
              TopBar
          },
          methods:{
              back(){
                  this.$router.go(-1)
              },
              search(){
                  console.log("在当前页继续查询")
              },
          }
      }
      </script>

      <style>

      </style>
      ```





## 12. vue-router的值传递

  - 目的

    将搜索入口页面输入的值，传到搜索结果页面中

  - 两种方式传参接参

    - 查询路由/普通路由

      - 在搜索入口页面，页面跳转时，增加参数

        ```
        search(){
            console.log(this.searchInput)
            this.$router.push({path:"/searchresult",query:{
                searchInput:this.searchInput
            }})
        },
        
        ```
      
      - 搜索结果页面，接收参数

        ```
        this.$route.query.searchInput
        ```

        ```
        created(){
            console.log(this.$route.query.searchInput)
        },
        ```
      
      - 在搜索结果页面，将传来的值默认现在topbar组件的输入框中

        - 将TopBar组件的data修改为props

          ```
          export default {
              name:"TopBar",
              props:{
                  searchInput:{
                      type:String,
                      value:""
                  }
              },
              ...
          }
          ```
        - 在搜索结果页面，增加组件父传子的传值

          ```
          <top-bar @searchHandle="searchOnChange" :searchInput="searchInput">
          ```

          ```
          export default {
              name:"SearchResult",
              data(){
                  return {
                      searchInput:""
                  }
              },
              created(){
                  this.searchInput = this.$route.query.searchInput
                  console.log(this.$route.query.searchInput)
              },
              ...
          }
          ```

    - 命名路由

      - 修改router配置

        在需要被传参数的路由中，增加name属性

        ```
        export const router = createRouter({
            history:createWebHashHistory(),
            routes:[
                ...
                {
                    path:"/searchresult",
                    name:"searchresult",  //命名路由
                    component:SearchResult,
                },
            ]
        })
        ```
      - 在搜索入口页面，页面跳转时，增加参数

        ```
        search(){
            this.$router.push({name:"searchresult",params:{
                searchInput:this.searchInput
            }})
        },
        ```

      - 搜索结果页面，接收参数

        ```
        this.$route.params.searchInput
        ```

        ```
        created(){
            console.log(this.$route.params.searchInput)
        },
        ```

## 13.在搜索入口页面，增加本地缓存效果

  - localStorage

    - localStorage 允许在浏览器中存储 key/value 对的数据。

      使用 localStorage 创建一个本地存储的 name/value 对，name="lastname" value="Smith", 然后检索 "lastname" 的值，并插入到 id="result" 的元素上:

      ```
      // 存储
      localStorage.setItem("lastname", "Smith");
      // 检索
      localStorage.getItem("lastname");
      ```

    - 存储在 localStorage 的数据可以长期保留；而当页面会话结束——不会被清除

    - 另外，localStorage 中的键值对总是以字符串的形式存储。 (需要注意, 和js对象相比, 键值对总是以字符串的形式存储意味着数值类型会自动转化为字符串类型).


  - 用本地缓存记录，搜索入口页面搜索过的值

    - 封装localstorage

      因为localStorage 中的键值对总是以字符串的形式存储，而搜索词应该是个数组，所以需要自己封装一下localStorage的方法
    
    - 在src目录下创建一个kits文件夹

    - 创建一个kits/LocalStorage.js文件

      ```
      /*
      本地缓存
      优点：除非手动或者浏览器设置里清空缓存被激活，否则一直存在
      注意：1.loccalstorage 本身支持 字符串
          2.本身不支持双向绑定
      */
      //loccalstorage 本身支持 字符串
      //封装的目的：为了可替换
      export const getArray = (key)=>{
          let val = localStorage.getItem(key)
          return val === null ? [] : val.split(',')
      }

      export const setArray = (key,val)=>{
          let arr = getArray(key)
          if (arr.indexOf(val) < 0) {
              arr.push(val)
              localStorage.setItem(key,arr.toString())
          }
      }

      export const clearItem = (key)=>{
          localStorage.removeItem(key)
      }
      ```
    - 在搜索入口页面，引如kits/LocalStorage.js这个文件

      ```
      import {setArray} from '@/kits/LocalStorage.js'
      ```
    - 将搜索入口中输入的内容，存放到本地缓存中

      ```
      search(){
          setArray("searchhistory",this.searchInput)
          this.$router.push({path:"/searchresult",query:{
              searchInput:this.searchInput
          }})
      },
      ```
    - 通过chrome开发者工具中Application,查看localstorage的情况




  - 将历史搜索内容,显示到搜索入口页面

    - 将getArray方法也引入到搜索入口页面中

      ```
      import {setArray,getArray} from '@/kits/LocalStorage.js'
      ```
    
    - 在生命周期钩子函数created中，获取历史记录

      ```
      data(){
        return {
            searchInput:"",
            searchHistory:[]
        }
      },
      ...
      created(){
          this.searchHistory = getArray("searchhistory")
      },
      ```
    
    - 将搜索结果渲染到页面中

      ```
      <div class="search-history">
          <div class="search-history-item" v-for="(item,index) in searchHistory" :key="index">{{item}}</div>
      </div>
      ```

      ```
      <style>
      .search-history {
          display:flex;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: 8px 24px;
      }

      .search-history-item {
          padding:6px 10px;
          background-color: #fafafa;
          box-shadow: 0px 1px 8px rgba(40,40,40,0.2);
          border-radius: 8px;
          margin-top:8px;
      }
      </style>
      ```   
    
    - 优化页面

      ```
      <div class="search-top-bar">
          <div class="search-title">搜索历史</div>
          <div class="search-clear">清除</div>
      </div>
      ```

      ```
      .search-top-bar {
          display:flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 8px 24px;
          margin-top:16px;
      }

      .search-title {
          font-weight: bold;
          font-size: 16px;
      }

      .search-clear {
          font-size: 15px;
          color:#9267FD;
      }
      ```


    - 实现清除功能

      ```
      <div class="search-clear" @click="clearHistory">清除</div>
      ```

      ```
      import {setArray,getArray,clearItem} from '@/kits/LocalStorage.js'
      ```

      ```
      clearHistory(){
          clearItem("searchhistory")
          this.searchHistory = []
      }
      ```

## 14.vue 生命周期

  ![image](https://cn.vuejs.org/images/lifecycle.png)

  - 最好理解的场景是列表页面，根据生命周期在dom渲染完成后再去请求http api，不然会出现元素undefined错误，因为http是异步请求，有可能在dom还未渲染时，数据已经返回
 
  - 在vue里生命周期暴露出来的方法如(beforeCreate created beforeMount mounted beforeupdate updated beforedestroy destroyed),这里在术语上是hook钩子函数，其实可以简单理解为callback回调函数

  - hook和callback区别

    - 首先,都可以简单理解为是回调函数callback
    - 其次,callback可以理解为在调用之后执行，hook可以理解为在调用之前执行

  - created和mounted区别

    - created执行时，script脚本中的data，methods等都已创建完成，可以直接调用

    - mounted执行时，除了script中的内容创建完，template模板页面中的虚拟dom(v-dom)也已创建完

## 15.使用promise封装一个异步请求方法

  - 创建一个模拟测试的http请求文件

      src/kits/HttpMock.js

  - 利用promise实现一个异步操作的封装

    ```
    const baseUrl = "http://mockurl:8080";

    export const Http = (api,param)=>{
        let url = baseUrl+api
        console.log(url,param)
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve([
                    {
                        id:0,
                        name:"aaa"
                    },
                    {
                        id:1,
                        name:"bbb"
                    },
                    {
                        id:2,
                        name:"ccc"
                    },
                    {
                        id:3,
                        name:"ddd"
                    },
                    {
                        id:4,
                        name:"eee"
                    },
                    {
                        id:5,
                        name:"fff"
                    },
                    {
                        id:0,
                        name:"aaa"
                    },
                    {
                        id:0,
                        name:"aaa"
                    },
                ])
            },1000)
        })
    }
    ```

  - 在查询结果页面使用封装的mock方法进行查询

    ```
    data(){
        return {
            searchInput:"",
            dataList:[]
        }
    },
    methods:{
       ...
        async initData(){
            const res = await Http("/listData",{
                searchInput:this.searchInput
            })
            this.dataList = res
            console.log(res)
        }
    }
    ```  

    ```
    created(){
       ...
      this.initData()
    },
    ```

    ```
    <template>
        ...
        <h1>搜索结果页面</h1>
        <div v-for="item in dataList" :key="item.id">{{item.name}}</div>
    </template>
    ```



## 16.Graphql

  - 把Github当作一个免费的文本数据库

    将所需要的数据存入到github项目的issues中

  - 在github graphql explorer中查找

    - 地址

      https://developer.github.com/v4/explorer/

    - gql语句

      ```
      query { 
        repository(name:"web-lesson",owner:"hellowoody"){
            name,
            description,
            issues (first:1,labels:["db"]) {
                nodes {
                    id,
                    title,
                    body,
                    bodyHTML,
                    comments (last:5) {
                        nodes {
                            body,
                        },
                        pageInfo {
                            hasPreviousPage
                        }
                    }
                }
            },
        }
      }
      ```


## 17.使用Axios进行http请求

  - 安装

    ```
    npm i --save axios
    ```

  - 进行封装

    - 在kits文件夹下创建Http.js

    - 根据axios进行封装

      ```
      import axios from 'axios';

      const instanceGithub = axios.create({
          baseURL:"https://api.github.com",
          timeout:10000, //超时时间
          headers:{
              'Content-Type' : 'application/json',
              'Authorization':'bearer '+"2e779e62e16d6196ffb6aa2531955ea71cb7bc2f"
          }
      })

      instanceGithub.interceptors.request.use( config => config ,e => Promise.reject(e))

      instanceGithub.interceptors.response.use( resp => {
          if (resp.status === 200) {
              return Promise.resolve(resp)
          }else{
              return Promise.reject(resp)
          }
      },e =>{
          if (e.response.status) {
              return Promise.reject(e.response)
          }
      })

      export const HttpGql = (param)=>{
          return new Promise((resolve,reject)=>{
              instanceGithub.post("/graphql",param)
                  .then(res => {
                      resolve(res.data)
                  })
                  .catch(e => {
                      reject(e)
                  })
          })
      }

      ```

    - 在搜索页面进行调用

      ```
      import {HttpGql} from '@/kits/Http.js'
      ```

      ```
      methods:{
          search(){
              console.log("在当前页继续查询")
              this.initData()
          },
          async initData(){
              const pagenum = 5
              const res = await HttpGql({
                  query:`
                      query { 
                          repository(name:"web-lesson",owner:"hellowoody"){
                              name,
                              description,
                              issues (first:1,labels:["db"]) {
                                  nodes {
                                      id,
                                      title,
                                      body,
                                      bodyHTML,
                                      comments (last:${pagenum}) {
                                          nodes {
                                              body,
                                          },
                                          pageInfo {
                                              hasPreviousPage
                                          }
                                      }
                                  }
                              },
                          }
                      }
                  `
              })
              this.dataList = res.data.repository.issues.nodes[0].comments.nodes
              this.dataList = this.dataList.filter(item => item.body.indexOf(this.searchInput) > 0)
              console.log(res)
          }
      }
      ```


## 18.使用脚手架Vite

  Vite is a web development build tool that allows for lightning fast serving of code due its native ES Module import approach.
  Vite是一个Web开发构建工具，由于使用本地ES模块导入方法，因此可以闪电般快速地提供代码。
  Vue projects can quickly be set up with Vite by running the following commands in your terminal.
  通过在终端中运行以下命令，可以使用Vite快速设置Vue项目。

  - 使用vite创建项目

    ```
    npm init vite-app vite-demo
    cd vite-demo
    npm install
    npm run dev
    ```
  - 





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



