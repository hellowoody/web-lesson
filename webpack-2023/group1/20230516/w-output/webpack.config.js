const {resolve} = require("path")

module.exports = {
    // mode:"development",
    mode:"production",
    // entry:"./src/index.js",
    entry:{
        index:"./src/index.js",
        about:"./src/about.js",
    },
    output:{
        // filename:"built.js", 
        // filename:"[fullhash].js", 
        // filename:"[fullhash:6].js", 
        // filename:"[id].js",  // mode 开发模式main.js 生产模式 一个数字
        // filename:"output.[fullhash:6].js",
        // filename:"[name].[fullhash:6].js",
        // filename:"[name].[fullhash].js", //fullhash 针对这个项目这一次打包时生成一个统一的hash码
        filename:"[name].[chunkhash].js",   //chunkhash 为某一个chunk文件生成一个“它”自己的hash码
        path:resolve(__dirname,"build"),
        clean:true
    }
}