// 推荐使用commonJS语法 
// 我们经常使用到 绝对路径 __dirname,而commonJS语法中可以直接拿来用

const path = require("path")

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"built.js",
        path:path.resolve(__dirname,"dist")
    }
}