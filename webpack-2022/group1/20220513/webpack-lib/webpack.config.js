// commonjs
const {resolve} = require("path")

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"main.js",
        clean:true,
        path:resolve(__dirname,"dist"),
        library:{
            type:"module",  // var | this | window | global | commonjs | module | commonjs2 
        }
    },
    experiments:{
        outputModule:true
    }
}

// rollup 以最小的空间，最快的速度，将你的“JS”文件打包成库（library）
// 所以工作中webpack中的library用的不是很多，因为并不如rollup的效果好