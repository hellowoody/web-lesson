const {join,resolve} = require("path")
// __dirname  当前js文件所在文件夹的绝对路径

console.log("./w-entry/src/index.js")

console.log(join("w-entry","src","index.js"))
console.log(join("./","w-entry","src","index.js"))

console.log("__dirname",__dirname)

console.log(join(__dirname,"w-entry","src","index.js"))
console.log("=======================")
console.log(resolve("w-entry","src","index.js"))
console.log(resolve(__dirname,"w-entry","src","index.js"))

console.log(resolve(__dirname,"w-entry","d:\\src","index.js"))




