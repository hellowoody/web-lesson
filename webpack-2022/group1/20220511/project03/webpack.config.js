const path = require("path")

module.exports = {
    context:path.resolve(__dirname,"src"),  // 项目文件夹的绝对路径/src
    entry:"./index.js",
    mode:"development", // none | development | production
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist")
    }
}