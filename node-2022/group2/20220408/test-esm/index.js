console.log("加载index.js")
import {count,msg,add,updateMsg} from "./a.js";
import "./b.js"

add("index") // 0+1=1
// updateMsg()

console.log("index文件中count:",count)
console.log("index文件中msg:",msg)
console.log("加载完毕index.js")