const express = require("express")
const fs = require("fs")
const {resolve} = require("path")

const app = express()

function loadJson(path){
    const p = resolve(__dirname,path)
    const data = fs.readFileSync(path,"utf-8")
    const obj = JSON.parse(data)
    return obj
}

app.get("/",(req,resp) => { 
    const res = loadJson("data.json")
    resp.json(res)
})

app.listen(3200,() => console.log("load json server listen port 3200"))



