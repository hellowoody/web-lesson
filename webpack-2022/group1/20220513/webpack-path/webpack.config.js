// commonjs 语法
const {resolve,join} = require("path")
// __dirname webpack.config.js所在目录的绝对路径

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"built.js",
        clean:true,
        // path:__dirname+"/dist",
        // path:resolve(__dirname,"./build"),  // 必须是绝对路径
        // path:resolve(__dirname,"build")     // 必须是绝对路径
        // path:join(__dirname,"output")          // 必须是绝对路径
        path:resolve(__dirname,"output[fullhash:6]")          // 必须是绝对路径
    }
}