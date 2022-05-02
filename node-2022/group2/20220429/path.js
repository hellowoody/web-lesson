const {resolve,join} = require("path")

// const resolve_path = resolve("./test-path","1.txt")
// console.log("resolve_path:",resolve_path)
// const join_path = join("./test-path","1.txt")
// console.log("join_path:",join_path)

const resolve_path = resolve("./a","b","1.txt")
console.log("resolve_path:",resolve_path)
const join_path = join("./a","b","1.txt")
console.log("join_path:",join_path)