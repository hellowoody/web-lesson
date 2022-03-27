import http from "http"
import {URL,fileURLToPath} from "url"
import {join,dirname} from "path"
import fs from "fs";


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const root = __dirname

const server = http.createServer((req,resp) => {
    if(req.url === "/favicon.ico"){
        resp.end()
        return
    }
    const urlObj = new URL(req.url,"http://localhost:3000")
    const path = join(root,urlObj.pathname)
    console.log(path)
    const stream = fs.createReadStream(path)
    stream.on("data",chunk => resp.write(chunk))
    stream.on("end",() => resp.end())
})
server.listen(3000,() => console.log("static web starting..."))