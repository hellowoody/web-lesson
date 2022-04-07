/*
    ESM中的语法
    import            导入/加载 写在文件的最上方/一开始的位置
    export            导出
    export default    默认导出  在一个文件中最多使用一次
*/
// import "./a .js"  // 这种写法往往加载媒体文件的
// const a = require("./a.js")
import a from "./a.js";
// select id as myid from table_name
// const {name:b_name,arr} = require("./b.js")
import {name as b_name,arr} from "./b.js";
import c,{name as c_name,num as c_num,flag} from "./c.js"
// ESM 中通配符* 代表所导入文件中所有的导出的变量
//                               既有export也有export default
//                               export default导出的内容包含在default属性里面
import d,* as d_export_all from "./d.js"
/*
    解构赋值时，只能获取export导出的内容，
    export default导出的不能直接通过default获取，因为语法会报错
*/
// import {sub1,sub2,default} from "./d.js"
// 如果a是默认导出export default导出的，那么需要按下面解构赋值
const {name,num,obj,sum} = a  // 不推荐

console.log("a:",a)
console.log("a解构赋值:",name)
console.log("a解构赋值:",sum(10,20))

console.log("b解构赋值",arr)
console.log("b解构赋值",b_name)

console.log("c:",c)
console.log("c解构赋值:",c_name)
console.log("c解构赋值:",c_num)
console.log("c解构赋值:",flag)

console.log("d通配符:",d_export_all)
console.log("d通配符:",d_export_all.sub1(1,2))
console.log("d通配符:",d_export_all.sub2(2,1))
console.log("d通配符add:",d_export_all.default.add1(1,2))
console.log("d add:",d.add1(1,2))
console.log("d add:",d.add1(3,2))
