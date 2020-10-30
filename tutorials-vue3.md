# Vue3.0

## vite

 - 安装

    ```
    $ npm init vite-app <project-name>
    $ cd <project-name>
    $ npm install
    $ npm run dev
    ```

## vite配置文件

 - 创建配置文件

    在项目根目录下创建一个名字雯vite.config.js文件。注意vue3是支持ts的，所以也可以将文件名后缀改为ts。

 - 以js后缀，并用commonjs语法为例

    ```
    const {resolve} = require("path")

    module.exports = {
        base:'./',
        alias:{
            '/@/':resolve(__dirname,"src")  //模仿webpack中“@”绝对路径的语法糖
        }
    }

    ```
 - 以ts后缀，并用typescript语法为例

    ```

    import { UserConfig } from "vite";
    import {resolve} from "path";

    const config : UserConfig = {
        base:'./',
        alias:{
            '/@/':resolve(__dirname,"src")  //模仿webpack中“@”绝对路径的语法糖
        },
    }

    export default config ; 

    ```
    
 - 推荐使用ts作为配置文件的类型后缀

## 入口文件main.js

 - 初始化app

    vue3中初始化app时，不再是用new修饰/实例化Vue对象，而是通过createApp方法进行初始化。

    ```
    import {createApp} from 'vue'

    createApp([vue组件])
    ```

 - 挂载dom节点

    vue3中的mount挂载节点，是通过调用mount方法，找到项目根目录下的index.html文件中id为“app”的div标签，执行innerHtml方法，进行挂载，或是称为追加。注意vue2中的挂载是“替换”。

    ```
    import {createApp} from 'vue'
    import App from './App.vue'

    createApp(App).mount('#app')
    ```
## setup组合api

   setup是vue3中新增加opthons属性

   ```
   export default {
      setup(){

      }
   }
   ```
## ref

## reactive

## ref和reactive区别

## toRaw

## 导入css

 - 位置不同：vue3.0中在<script>脚本中导入css文件
  ```
  <script>
  import "/@/assets/css/common.css"
  </script>
  ```
 - 导入语法不同：vue3.0中直接使用import进行导入，不需要像vue2中使用@import导入
 - 导入时需要明确文件的后缀

## 命名插槽-named slot

 - 定义命名插槽的方式和原先是一样的
  ```
  <slot name="插槽的名字"></slot>
  ```
 - 调用插槽的的语法与之前不一样
 
  ```
  <template v-slot:插槽的名字>
      <div style="height:100px;background-color:blue;">top bar</div>
  </template>
  ```


