/*
    __dirname 是nodejs内置的
    它的作用是什么呢？
    就是无论在哪个文件夹下执行命令，__dirname始终获取的是该文件所在的文件夹

    commonJS 模块管理下 __dirname 直接使用的
*/
const fs = require("fs");
const path = require("path")
console.log("__dirname",__dirname)

console.log("path.resolve /file.txt ",path.resolve(__dirname,"/file.txt"))
console.log("path.resolve ./file.txt",path.resolve(__dirname,"./file.txt"))
console.log("path.resolve file.txt",path.resolve(__dirname,"file.txt"))

// fs.readFile("./file.txt","utf-8",(err,data) => {
fs.readFile(path.resolve(__dirname,"./file.txt"),"utf-8",(err,data) => {
    if(err) return console.log(err)
    console.log("======== file content =============")
    console.log(data)
})

