// ESM
// 静态加载
// import  {name} from "./common.js"
// console.log("common name:",name)

console.log("home源码");

// import(“相对路径”) 叫动态加载 这个先可以不深入了解
// 动态加载文件 不用在webpack.config.js的入口entry中配置
// import(/* webpackChunkName:"你自己定义的名字" */relatePath)
import(/* webpackChunkName:"common" */"./utils/common.js").then(({name,desc}) => {
    console.log("common name&desc:",name,desc)
})

import(/* webpackChunkName:"date" */"./utils/date.js").then((res) => {
    console.log("date :",res.date)
})


