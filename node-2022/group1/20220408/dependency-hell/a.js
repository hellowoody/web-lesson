// const a_id = require.resolve("./a")
// console.log("a line 1:",require.cache[a_id].exports) // {}
exports.loaded = false
// console.log("a line 4:",require.cache[a_id].exports) // {load:false}
const b = require("./b")
// console.log("a line 6:" ,b)
// exports.loaded = true
// console.log("a line 8:",require.cache[a_id].exports) // {load:true}
// exports.b = b
// console.log("a line 10:",require.cache[a_id].exports) 
// {load:true,b:{loaded:true,a:{loaded:false}}}
module.exports = {
    loaded:true,
    b
}