// const diymodule = require("./tools.js")

// console.log(diymodule.sum)

/*
const fs = require("fs")

const code = fs.readFileSync("./m.js","utf-8")

console.log(typeof code)

eval(code)

console.log($$)
console.log($$.msg)
console.log($$.sum)
console.log($$.sub)

*/

const {readFileSync} = require("fs")

const code = readFileSync("./tools.js","utf-8")

eval(code)

console.log("+",$$.sum(1,2))
console.log("-",$$.sub(1,2))
console.log("txt",$$.msg)
