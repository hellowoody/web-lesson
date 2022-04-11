console.log("加载b.js")
import {count,msg,add,updateMsg} from "./a.js"

// count = count + 1   //报错
// add("b")
// updateMsg()
console.log("b文件中count:",count)
console.log("b文件中msg:",msg)
console.log("加载完毕b.js")

