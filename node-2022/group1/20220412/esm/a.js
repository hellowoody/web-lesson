/*
    ESM 的默认导出 export default
    export default 在一个文件中最多出现1次
    默认导出的内容只能用 import xxx from "相对路径" 导入
    但是不能import {} from "相对路径" 这种方式
*/
console.log("a.js file")

const name = "a文件"

// export default xxx
// export default name
// export default 1000
// export default [1,2,3]
export default {
    name,
    num:1000,
    arr:[1,2,3]
}
// export default () => {
//     return 1+2
// }
// let a ;
// export default a = 1000
// export default 1000