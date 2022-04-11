console.log("加载b.js")
let {count,msg,add} = require("./a")

count = 1000  // 此刻的count是a文件中内容的副本，不对原内容产生影响
add("b")

console.log("b文件中count:",count)  // 1000
console.log("b文件中count:",msg)
console.log("加载完毕b.js")

