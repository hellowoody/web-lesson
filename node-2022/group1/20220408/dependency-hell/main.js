/*
    commonJS的特点/规则

    1.是动态执行/顺序执行
    2.require一旦加载，以后再require同一个文件，直接从cache中获取

    commonJS比之前闭包IIFE能解决更多的“不正常”的场景
    commonJS可以解决循环依赖（能运行，不报错），解决的不完美，最终的结果取决于调用require的顺序

*/

const a = require("./a")
const b = require("./b")

console.log("a:",JSON.stringify(a,null,2))
console.log("b:",JSON.stringify(b,null,2))


