import http from "http"
import fs from "fs";
import {URL,fileURLToPath} from "url"
import {dirname,join} from "path";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

http.createServer((req,resp) => {
    const u = new URL(req.url,"http://localhost:3001")
    resp.setHeader("Content-Type","text/html;charset=utf-8")
    const filename = join(__dirname,"public",u.pathname);  // 绝对路径
    fs.stat(filename,(err,stat) => {
        if(err){
            if(err.code === "ENOENT"){
                resp.statusCode = 404
                resp.end("页面找不到")
            }else{
                resp.statusCode = 500
                resp.end("服务器错误")
            }
            return
        }

        console.log("isFile:",stat.isFile())
        console.log("isDirectory:",stat.isDirectory())

        if(stat.isFile()){
            const stream = fs.createReadStream(filename)
            stream.pipe(resp)
        }else{
            resp.end("文件夹不能读取")
        }
    })
}).listen(3001,() => console.log("static server is running"))
.on("error",e => console.log(e))