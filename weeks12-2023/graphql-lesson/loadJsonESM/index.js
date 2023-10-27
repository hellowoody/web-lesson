import express from "express"
import fs from "fs"
import {resolve,dirname} from "path"
import {fileURLToPath} from "url"

const filepath = fileURLToPath(import.meta.url) // 当前文件的所在操作系统的路径
const __dirname = dirname(filepath)

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

app.listen(3300,() => console.log("load json server listen port 3300"))



