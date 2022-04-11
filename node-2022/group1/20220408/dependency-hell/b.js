// const b_id = require.resolve("./b")
// console.log("b line 1:",require.cache[b_id].exports) // {}
exports.loaded = false
// console.log("b line 4:",require.cache[b_id].exports) // {loaded:false}
const a = require("./a") // {loaded:false}
// const a_id = require.resolve("./a")
// console.log("b line 7:",require.cache[a_id].exports)
// console.log("b文件中的a:",a)
// exports.loaded = true
// exports.a = a
// console.log("b line 11:",require.cache[b_id].exports) 
// {loaded:true,a:{loaded:false}}

module.exports = {
    loaded:true,
    a
}