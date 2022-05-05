import { createReadStream, stat } from "fs";
import http from "http";
import { dirname, join } from "path";
import { fileURLToPath, URL } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const port = 3001
const todos = []

http.createServer((req,resp) => {
    const u = new URL(req.url,`http://localhost:${port}`)
    resp.setHeader("Content-Type","text/html;charset=utf-8")
    switch(req.method){
        case "GET":
            if(u.pathname === "/getdata"){
                resp.end(todos.toString())
            }else{
                renderPage(u,resp)
            }
            break;
        case "POST":
            if(u.pathname === "/add"){
                add(req,resp)
            }else{
                resp.end("post 其他请求")
            }
            break;
        default:
            resp.end("其他请求")
            break;
    }

}).listen(port,() => console.log(`todo list server is listening ${port} port,\nu can visted url : http://localhost:${port}/index.html`))


function renderPage(u,resp){
    const filename = join(__dirname,"public",u.pathname)
    stat(filename,(err,stat) => {
        if(err){
            resp.statusCode = 404
            resp.end("找不到页面")
            return
        }

        if(stat.isFile()){
            createReadStream(filename).pipe(resp)
        }else{
            resp.end("文件夹不能读取")
        }
    })
}

function add(req,resp){
    let content = ""
    req.setEncoding("utf8")
    req.on("data",chunk => {
        console.log("chunk:",decodeURI(chunk))
        content += decodeURI(chunk).split("=")[1]
    })

    req.on("end",() => {
        console.log("接收到的内容:",content)
        todos.push(content)
        resp.statusCode = 302
        resp.setHeader("Location",`http://localhost:${port}/index.html`)
        resp.end("提交成功")
    })
}