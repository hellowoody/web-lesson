const fs = require("fs")

const content = fs.readFileSync("../w-output-lib/output/built.js","utf-8")

// console.log(content)

eval(content)

console.log($)
console.log($.sum(1,2))