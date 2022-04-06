/*
    commonjs是node平台中内置模块管理的其中一种
    package.json配置文件中的type:"commonjs"，决定了commonjs是默认模块管理
    注意：commonjs跟html没有任何关系

    commonjs 的命令/函数 

    require          导入/加载/引入函数
    exports(推荐)     导出 只支持 exports.xxx = xxx
    module.exports   导出 即支持 module.exports.xxx = xxx 
                         还支持 module.exports = xxx
                         如果你要用module.exports = xxx这种形式
                         注意要把module.exports = xxx放在靠上的位置
*/ 

// require("相对路径")
// a.js -> a
/*
    require("./a")
    1.require.resolve("./a") 返回a.js文件的绝对地址

*/ 
// require的缓存
// const cache = {
//     "a":1,
//     "b":2,
//     "c":1,
//     "/Users/admin/Documents/code/lesson/web-lesson/node-2022/group1/20220406/project-commonjs/a.js":{hello:1000}
// }
// console.log("cache.a",cache.a)  //1
// console.log("cache.b",cache.b)  //2
// const k = require.resolve("./a")
// console.log(`cache["${k}"]`,cache[k])  //1

const id = require.resolve("./a")
// console.log("a_abs_path",id)
console.log("require.cache a:",require.cache[id])
console.log("===============")
const a = require("./a")   // require("./a.js") 
console.log("require.cache a:",require.cache[id].exports)
// 解构赋值，解构赋值是增强语法的一种
// const {add,arr} = require("./a")
const {
    add:sum,
    arr
} = require("./a")

console.log("a:",a)
console.log("a's add(10,2):",sum(10,2))
console.log("a's arr:",arr)

const b = require("./b")
const {sub} = require("./b")

console.log("b:",b)
console.log("b.sub(1,2)：",b.sub(1,2))
console.log("b's sub(10,1)：",sub(10,1))

// const msg = "我是一条消息"
// const prop = "我是属性"
// const o = {
//     name:"o对象",
//     // msg:msg
//     // 增强语法
//     msg,
//     prop // prop:prop
// }

// console.log(o)