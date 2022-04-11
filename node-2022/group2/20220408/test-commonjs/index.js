console.log("加载index.js")
let {count,msg} = require("./a")
require("./b")

// msg = "index修改了msg"

console.log("index文件中count:",count)
console.log("index文件中msg:",msg)
console.log("加载完毕index.js")