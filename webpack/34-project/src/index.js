// src code is es6 not commonjs
import "@/css/index.css";
import "@/fonts/iconfont.css"
import {zhangsan} from "@/a.js";
import a from "@/left-part.js";  // 2kb  
// import RP,{RightPart,sub} from "@/right-part.js"; // 3.5mb

const add = function(a,b){
    return a+b
}

console.log(zhangsan,add(100,200)) // 3

console.log(a.template)

// console.log(RightPart.template)
// console.log(sub())
// console.log(RP.zhangsan)

const res = import(/* webpackChunkName: "RP" */"@/right-part.js")  // promise 形容异步操作
res.then(function({RightPart,sub}){
    console.log(RightPart.template)
    console.log(sub())
})