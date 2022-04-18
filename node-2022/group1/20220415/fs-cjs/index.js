const fs = require("fs");

const str = `
    你好章三：
        收到你的来信。。。
`
fs.writeFile("./target1.txt",str, e => e ? console.trace(e) : console.log("已经写完") )

fs.writeFile("./target2.txt",str, {flag:"w"}, e => e ? console.trace(e) : console.log("已经写完") )