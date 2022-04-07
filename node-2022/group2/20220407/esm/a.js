console.log("a.js file")

const name = "我是a文件";
const num = 1000;
const obj = {
    a:1,
    b:2
}
const sum = (a,b) => a+b
// exports 是 commonjs的导出语法
// export 是 esm的导出语法
// 一个文件中export default最多使用一次
export default {
    name,
    num,
    obj,
    sum
}