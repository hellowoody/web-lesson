const path = require("path")

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"tools.js",
        path:path.resolve(__dirname,"output"),
        // library:"$$" // 为浏览器或者html页面所用
        // library:{
        //     type:"commonjs",
        // }
        library:{
            type:"module",
        }
    },
    experiments:{
        outputModule:true
    }
}