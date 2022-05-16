// ESM 语法
// webpack 推荐使用ESM
// ESM 和 commonJS 对比时，ESM 有一个很强大的特点 "Tree shaking"
// ESM 静态加载 而 commonJS 动态加载
import {name} from "./m.js"

console.log("name:",name)
console.log("hello monday")


export const id = "我的jquery"

export const html = function(str){
    return document.querySelector(str).innerHTML
}