/*
    ESM
    import                导入
    export                导出-命名导出 
    export default        导出-默认导出
*/

// require("./a")  // commonJS
// import "相对路径"
// import "./a.js"
// select name from table_name
// const a = require("./a")
// import a from "./a.js"
import a from "./a.js"
// select name as new_name from table_name
import {name as b_name,arr} from "./b.js"

import c,{name as c_name,num,flag} from "./c.js"
// select * from table_name
import d,* as d_all from "./d.js"

console.log("a:",a)

console.log("b中name:",b_name)
console.log("b中arr:",arr)


console.log("c：",c);
console.log("c name:",c_name);
console.log("c num：",num);
console.log("c flag：",flag);


console.log("d_all:",d_all)
console.log("d_all sub1:",d_all.sub1(1,2))
console.log("d_all sub2:",d_all.sub2(-1,2))
console.log("d_all name:",d_all.default.name)
console.log("d_all name:",d.name)
