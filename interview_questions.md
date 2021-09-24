# 面试题

 > 匿名函数和箭头函数区别

 > 为什么vue 2.x 组件中定义双向绑定的变量为什么时以函数形式？

 > var let const 区别

 > 仿照vue3中reactive方法实现一个自己代理方法（proxy）

 > Vue3 官方为什么推荐使用vite脚手架，而不是webpack？(vite和webpack的区别) 
  
    参考project/web-static项目

 > webpack中loader和plugins的区别

    https://zhuanlan.zhihu.com/p/322002543

 > 下面两个导入语句如何理解

    export let a = 100;
    export const b = 200;
    export const c = function(){
        console.log(300)
    }

    export const d = {
        name:"zhang"
    }

    export default {
        classname:"3,4 class",
        year:"2020"
    }

    import * as aaa from "a.js";   // 除了默认导出的之外，可以导出所有命名暴露出的变量，函数或对象
    import bbb from "xxx";        // 只能导出默认暴露(导出)的内容