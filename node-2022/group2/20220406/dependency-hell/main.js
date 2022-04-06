// const a_id = require.resolve("./a") // a文件的绝对路径
// console.log("cache a:",require.cache[a_id])
// require("./a");
// console.log("cache a:",require.cache[a_id].exports)

const a = require("./a");
const b = require("./b");

console.log("a->",JSON.stringify(a,null,2))
console.log("b->",JSON.stringify(b,null,2))

/*

commonjs 的解决“依赖地狱”的方案

1.可以解决（不会报错），但解决的方案并不完美
2.执行结果，取决require的导入顺序

*/ 
