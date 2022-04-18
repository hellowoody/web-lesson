import fs from "fs";

const str = "你好，writeFileSync同步方法\n\r"

try {
    fs.writeFileSync("./t1.txt",str,{flag:"a"})

    console.log("写入成功")
} catch (e) {
    console.log("写入错误:",e)
}


console.log("======")
console.log("======")
console.log("======")
console.log("======")
console.log("======")
console.log("======")
