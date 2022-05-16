// commonJS 语法
// 因为在编写webpack.config配置文件，
// 大量的绝对路径和一些commonJS直接能拿到的一些变量
// __dirname ...
const {resolve} = require("path")

module.exports = {
    // entry:"字符串",
    // entry:"./src/index.js",
    entry:"./src/lib.js",
    mode:"development",
    // mode:"production",
    output:{
        filename:"lib.js",
        path:resolve(__dirname,"dist"),
        library:{
            type:"module",
        },
        clean:true
    },
    experiments:{
        outputModule:true
    }
}