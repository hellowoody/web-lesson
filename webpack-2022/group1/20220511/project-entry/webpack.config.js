const path = require("path")

module.exports = {
    // entry:"./src/home.js",
    // entry:["./src/home.js","./src/about.js"],
    // entry:{
    //     home:"./src/home.js",
    //     about:"./src/about.js",
    // },
    // entry:function(){
    //     // todo
    //     return {
    //         home:"./src/home.js",
    //         about:"./src/about.js",
    //     }
    // },
    // entry:() => {
    //     return {
    //         home:"./src/home.js",
    //         about:"./src/about.js",
    //     }
    // },
    // 增强语法
    entry(){
        const res = {}
        // todo
        // if-else
        // switch-case
        // for-loop
        // npx webpack --env true 
        console.log("entry 动态赋值的获取参数:",process.argv.slice(2))
        const flag = process.argv[3]
        console.log("flag:",flag)
        if(flag === "true"){
            res["home"] = "./src/home.js"
            res["about"] = "./src/about.js"
        }else{
            res["home"] = "./src/home.js"
        }
        return res
    },
    // entry:{
    //     home:{
    //         import:"./src/home.js",
    //         filename:"pages/home.js"
    //     },
    //     about:"./src/about.js"
    // },
    mode:"development", // none | development | production
    output:{
        filename:"[name].js", // chunk文件
        path:path.resolve(__dirname,"dist")
    }
}