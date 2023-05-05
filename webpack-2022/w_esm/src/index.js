import defaultExport,{m1} from "./about.js"
import * as about from "./about.js"

console.log("about",about)
console.log("m1",m1)

console.log("a",defaultExport)
console.log("a",defaultExport.a)
console.log("b",defaultExport.b)

console.log("a",about.default.a)
console.log("b",about.default.b)
