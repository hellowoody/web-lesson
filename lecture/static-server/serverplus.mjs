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
    fs.stat(path,(err,stat) => {
        if(err){
            if("ENOENT" == err.code){
                resp.statusCode = 404;
                resp.end("not found")
            }else{
                resp.statusCode = 500;
                resp.end("Internal server error")
            }
        } else {
            resp.setHeader("Content-Length",stat.size)
            const stream = fs.createReadStream(path)
            stream.pipe(resp);
            stream.on("error",err => {
                resp.statusCode = 500;
                resp.end("internal server error")
            })
        }
    }) 
})
server.listen(3000,() => console.log("static web starting..."))