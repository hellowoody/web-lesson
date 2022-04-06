// require("file path")
const b = require("./b.js")  // require("./b")
const {a_name} = require("./b")
const c = require("./c.js")
// 增加语法
const {score} = require("./c.js")

console.log("我是A文件")
console.log("b:",b)
console.log("命名导出b:",a_name)
console.log("c：",c,c.name,c.className,c.score)
console.log("命名导出c：",score)