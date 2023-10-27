const express = require("express")

const app = express()

// CJS 
const d = require("./data.json") // 第一次加载
console.log(d)

app.get("/",(req,resp) => {
    const data = require("./data.json") 
    resp.json(data)
})

app.listen(3100,() => console.log("load json server listen port 3100"))



