exports.loaded = false
// const a_id = require.resolve("./a") // a文件的绝对路径
// console.log("cache a:",require.cache[a_id].exports)
const a = require("./a")  // { loaded: false }
console.log("在b文件中，获取到的a文件是已经执行过的a文件的内容，有可能不是全部:",a)
module.exports = {
    a,
    loaded:true
}