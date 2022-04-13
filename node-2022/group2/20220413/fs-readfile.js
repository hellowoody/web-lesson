// 通过commonjs 语法将fs模块导入进来
// commonjs的require("相对路径/文件夹名字")
const fs = require("fs");
console.log(process.argv[0]) // node在本机安装的位置

// 多态-》多种形态
/*
    fs.readFile 异步方法 async 类似 setTimeout
*/
fs.readFile("./console.js",function(err,data){
    if(err){
        console.error(err)
    }else{
        console.log(data)
    }
})


console.log("===========================")

fs.readFile("./console23.txt","utf-8",(err,data) => {
    if(err) {
        console.trace(err)
        return
    }

    console.log(data)
})



