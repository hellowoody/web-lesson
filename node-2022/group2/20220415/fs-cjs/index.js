const fs = require("fs");
const {myOpenRead} = require("./utils")

const str = `
你好张三
    收到你的来信。。。
`
// fs.writeFile 异步方法
// 如果文件不存在会帮我们自动创建再写入
// fs.writeFile 会帮创建不存在的文件 但不会帮我们创建不存在的文件夹
fs.writeFile("./target1.txt",str, e => e ? console.trace("写入错误:",e) : console.log("写入成功"))

/*
    第三个参数 config string ｜ object
    "utf-8"
    {
        encoding:"utf-8",
        mode:666,
        flag: 
             "w" - write  - 覆盖写  默认值
             "a" - append - 追加写
             "r" - read   - 读取
        signal:忽略
    }

*/
fs.writeFile("./target2.txt",str,{flag:"a"},e => {
    if(e){
        console.trace("写入错误:",e)
        return
    }
    console.log("写入成功")
})


fs.readFile("./target1.txt","utf-8",(err,data) => err ? console.log(err) : console.log("读取target1.txt:",data))

myOpenRead("./target2.txt")
