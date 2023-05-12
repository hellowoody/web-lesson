const {resolve} = require("path")

module.exports = {
    mode:"development",
    // mode:"production",
    // entry:"./src/index.js",
    entry:{
        home:"./src/home.js",
        index:"./src/index.js",
    },
    output:{
        // filename:"built.js", 
        // filename:"[name].js", 
        // filename:"[id].js", // 开发模式下时默认名字 生产环境随机数值
        // filename:"[hash].js", 
        // filename:"[chunkhash].js", 
        filename:"[name]_[hash:6].js", 
        // filename:"[name]_[hash].js", 
        // filename:"[name]_[chunkhash].js", 
        path:resolve(__dirname,"output"),
        clean:true
    }
}