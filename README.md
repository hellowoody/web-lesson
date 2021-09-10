# 12周目标

 - vue3.x 制作适配手机端的商城app

 - vue3.x 制作后台管理服务以及接口

# 涉及到的技术

 - vue2.x 和 vue3.x

 - nodejs express

 - 数据库 monogodb 或 mysql

 - 静态网站和动态网站区别

 - 常用的第三方工具库

 - typescript

 - deno

 - serverless

 - 前端面试题

# 面试题

 - 匿名函数和箭头函数区别

 - 为什么vue 2.x 组件中定义双向绑定的变量为什么时以函数形式？

 - var let const 区别

 - 仿照vue3中reactive方法实现一个自己代理方法（proxy）

 - Vue3 官方为什么推荐使用vite脚手架，而不是webpack？(vite和webpack的区别) 
  
    参考project/web-static项目

# Vue3 知识点

 - 1.vue3 使用时不再new vue()了，而是使用静态方法createApp
 - 2.vue3 语法的核心思想时函数式编程，而vue2约定配置式编程
 - 3.vue3 组合api中 不存在this
 - 4.vue3 在template中既可以使用vue2声明的data以及mehtods，同时也可以使用setup中的return后的属性和方法。
    - 但是在setup中，你不能拿到vue2声明的data以及mehtods
        setup
        beforeCreate
        created
        mounted
 - 5.vue3 template中不再强制根节点的要求
 - 6.vue3 vue3是在vue2基础上做了优化
    - 运行时速度快,在版本3中，你可以声明不需要双向绑定的变量（这个变量不会被监控），同时这个变量也可以在模板中直接使用
    - vue3和vue2实现双向绑定的方式不一样
      - vue2 的ES5 观察者模式（Observer）
      - vue3 的ES7 代理模式 （Proxy）
     
        云开发clound（docker 虚拟机 分布式） k8s 2.5w 
        serverless无服务 11ty deno react vue3.2 
 - 7.vue3 声明双向绑定变量的方式一共有两种 ref and reactive
    - ref是在reactive基础上的一层封装
    - 用reactive创建双向绑定变量时不能传基本类型（简单类型） string number boolean
    - 用ref创建时，可以传入任何类型（基本类型，引用类型）
 
 - 8.vue3 侦听有两种方式watcheffect和watch，在实际开发中使用watch比较没有坑，但不表示watcheffect不好，所以要酌情使用

 - 9.vue3 侦听数组
   - 如果你想侦听整个数组的增加或减少的话，你要在第一个参数返回值中，用到浅拷贝
   - 如果你想侦听数组中某一个值的话，那就在第一个参数的返回值中直接返回你需要监控的值
  
 - 10.vue3 组件通讯

   - 父组件向子组件传值时，子组件可以通过setup函数中第一个参数props拿到相应的值

   - 子组件调用父组件时，子组件可以通过setup函数中第二个参数context中的emit方法调用父组件中对应的事件

   - 注意，在组件通讯时，无论时“父传子”还是“子调用父”，在子组件中都需要使用option的形式声明相应的属性，如props，emits。而props和emits都支持数组和对象的形式进行定义

   - 重要提示！以上我们所提到的组件通讯中需要注意的点是Vue3.0和Vue3.1的内容，而后面的实战中Vue3.2会有稍许不同

 - 11.vue3 生命周期钩子函数

   - 在setup中使用生命周期钩子函数，需要在原先钩子函数名称前加个“on”

   - setup中没有生命周期前两个钩子函数，beforeCreate，created，因为setup比这两个钩子函数更早执行，
     你也可以这么认为：在vue3中，setup()就是原先beforeCreate，created的综合体，它包含了这两个钩子函数所要做的内容

 - 12.使用vite创建项目

    - 如果npm是6.x版本，你需要执行

      ```
      npm init vite your-project-name --template vue
      ```

    - 如果npm是7+版本，你需要执行(需要额外的双横线)

      ```
      npm init vite your-project-name -- --template vue
      ```

    - 注意：因为前端框架实时都在更新，最终都要以官网为准，下面为别是Vue官网的vite环节以及Vite官网中的使用环节链接

      https://v3.cn.vuejs.org/guide/installation.html#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7-cli
      
      https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project

    - 注意：如果你npm install时很慢

      ```
      npm i --registry https://registry.npm.taobao.org
      ```

      这个命令是临时替换源，而不是永久替换



 - 13.修改vite.config.js

    - 在defineConfig方法的参数中，增加base:"./"的配置属性
 
 - 14.如果你的vscode,报template根节点的错误，从左侧扩展插件中找到vetur，点击extentions setting，打开设置页面后，找到Vetur > Validation:Template,把对勾去掉

 - 15.nginx注意以下几个问题

    - nginx文件夹不能放在中文或有空格的文件夹下

    - conf配置文件中配置alias路径时，需要把反斜杠换成两个正斜杠

 - 16.antd按需加载

    - 安装 unplugin-vue-components

      vite-plugin-components has been renamed to unplugin-vue-components
    
    - 使用 unplugin-vue-components ,前提nodejs版本必须是v14+

      https://github.com/antfu/unplugin-vue-components/issues/136
 
 - 17.升级nodejs

    ```

    npm install -g n

    n stable  // 安装稳定版

    n latest  // 安装最新版

    ```
  
 - 18.Vue3.2 &lt;script setup&gt;中，父子组件通讯

    - 父转子时，子组件使用defineProps()方法，进行参数定义，注意defineProps方法可以接受对象或数组参数

    - 子调用父时，子组件使用defineEmits()方法，进行父组件事件名称定义，注意defineEmits方法可以接受对象或数组参数
    
 ## 备注:js类型中，基本类型 （string number boolean） <-> 引用类型 (json object ,array)
 

