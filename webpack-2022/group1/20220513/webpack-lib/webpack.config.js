// commonjs
const {resolve} = require("path")

module.exports = {
    entry:"./src/index.js",
    mode:"development",
    output:{
        filename:"main.js",
        clean:true,
        path:resolve(__dirname,"dist"),
        // library: '$',
        // library:{
        //     name:"$$",
        //     type:"commonjs",  // var | this | window | global | commonjs | module | commonjs2 
        // }
        library:{
            // note there's no `name` here
            type:"commonjs2",  // var | this | window | global | commonjs | module | commonjs2 
        }
        // library:{
        //     // do not specify a `name` here
        //     type:"module",  // var | this | window | global | commonjs | module | commonjs2 
        // }
    },
    // 配合library type module 
    // experiments:{
    //     outputModule:true
    // }
}
// https://webpack.js.org/configuration/output/#outputlibrary
// rollup 以最小的空间，最快的速度，将你的“JS”文件打包成库（library）
// 所以工作中webpack中的library用的不是很多，因为并不如rollup的效果好