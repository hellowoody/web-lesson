// import {count} from "./a.js"
let {count,msg} = require("./a")

count = count + 1

console.log("b文件中count:",count)
console.log("b文件中count:",msg)

