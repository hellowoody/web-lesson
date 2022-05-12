// commonjs 语法
// 在webpack中，把打包/构建出来的文件成为chunk文件
const {resolve} = require("path")

module.exports = {
    // entry:"./src/index.js",
    // entry:["./src/home.js","./src/about.js"],
    // entry:{
    //     home:"./src/home.js",
    //     about:"./src/about.js"
    // },
    // entry:function(){
    //     const res = {}
    //     console.log("====>",process.argv.slice(2))
    //     // for-loop
    //     // if-else
    //     // switch-case
    //     res["home"] = "./src/home.js"
    //     res["about"] = "./src/about.js"
    //     return res
    // },
    // entry:() => {
    //     const res = {}
    //     console.log("====>",process.argv.slice(2))
    //     // for-loop
    //     // if-else
    //     // switch-case
    //     res["home"] = "./src/home.js"
    //     res["about"] = "./src/about.js"
    //     return res
    // },
    // 增强语法
    // entry(){
    //     const res = {}
    //     console.log("====>",process.argv.slice(2))
    //     // for-loop
    //     // if-else
    //     // switch-case
    //     res["home"] = "./src/home.js"
    //     res["about"] = "./src/about.js"
    //     return res
    // },
    entry:{
        home:{
            import:"./src/home.js",
            filename:"./pages/home.js"
        },
        about:"./src/about.js"
    },
    mode:"development", // none | development | production
    output:{
        filename:"[name].js",
        path:resolve(__dirname,"dist") //必须是绝对路径 
    }
}