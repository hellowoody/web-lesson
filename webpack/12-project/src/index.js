// es6 import / export 
import "@/css/index.css"; // ./ 当前目录
import "@/fonts/iconfont.css" // 引入iconfont
// 相对路径 （参照物） -》 绝对路径 （怎么动态获取绝对路径）
// @ -》 绝对路径 d:/lesson/12-project/src
// 字符串拼接 @（d:/lesson/12-project/src） + /assets/css/index.css
import abc from "@/left-part.js" //特别小 2kb  import 将左侧“”下的路径文件引入进来
// import { RightPart } from "@/right-part.js"  //特别大 1mb
const add = function(a,b){
    return a+b
}

console.log(add(10,2)) // 30
console.log(abc.LeftPart.template) // <h1>hello left part</h1>
// console.log(RightPart.template) //  div this is right part

// 异步加载 ， 懒加载 ， 异步引用

import(/* webpackChunkName:'R' */"@/right-part.js")
    .then(function({RightPart}){
        console.log(RightPart.template)
    })
    .catch(function(e){
        console.log(e)
    })

