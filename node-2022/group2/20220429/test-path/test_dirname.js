/*
    CommonJS 语法

    __dirname 目录名称

    - 在commonjs中 __dirname 可以直接拿来用
    - 可以得到当前文件所在目录的绝对路径

    path.resolve(_,_,_,...)
    
    - resolve方法会把参数拼接起来，解析成一个绝对路径
    - 如果某一个是绝对路径，那么这个参数前面的参数将忽略

    path.join(_,_,_,...)

    - join方法会把参数拼接起来
    
*/ 

// console.log("__dirname:",__dirname) // d://doc

const fs = require("fs")
const {resolve,join} = require("path")

// const new_path = resolve(__dirname,"/1","2","/3","1.txt") // ！注意绝对路径
// const new_path = resolve(__dirname,"1.txt")
// const new_path = resolve(__dirname,"./1.txt")
// const new_path = join(__dirname,"1.txt")
// const new_path = join(__dirname,"./1.txt")
const new_path = join(__dirname,"/1.txt")
console.log("new_path:",new_path)
fs.readFile(new_path,"utf-8",(err,data) => {
    if(err) return console.log(err)

    console.log("data:",data)
})