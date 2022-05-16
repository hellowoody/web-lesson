// 在src 里面的文件，建议使用ESM模块管理的语法
/*
    1.webpack工具的目标：将一系列“JS”代码进行优化和自动化处理
    2.其实我们一值运行的仅仅是webpack.config.js ，
        src文件夹中内容并不是webpack-output项目的源代码
        而是要被分析和解析的“素材”
*/ 
// 静态加载
// import {a,b} from "./common.js"
// console.log("a:",a,"b:",b)

console.log("home源码")

// 动态加载 本质就是异步加载，而这里的异步是指promise
// import(“相对路径”)
// import(/* webpackChunkName:"xxx" */"relativePath")
// 增加语法
import(/* webpackChunkName:"common" */"./common.js").then(({a,b}) => {
    console.log("data:",a,b) // data是一个对象，就是common.js文件导出对象
})

import(/* webpackChunkName:"date" */"./kits/date.js").then(({date}) => console.log("date:",date))