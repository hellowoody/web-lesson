import {createServer} from "http";
import {URL,fileURLToPath} from "url";
import {dirname,join} from "path";
import fs from "fs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const port = 3000
const todos = []

createServer((req,resp) => {
    /*
        1.允许用户访问静态文件   GET
        2.支持post提交         POST
    */ 
    const u = new URL(req.url,`http://localhost:${port}`)
    switch (req.method) {
        case "GET":
            if(u.pathname === "/getdata"){
                resp.setHeader("Content-Type","text/plain;charset=utf-8")
                resp.end(todos.toString())
            }else{
                renderPage(u,resp)
            }
            break;
        case "POST":
            if(u.pathname === "/add"){
                add(req,resp)
            }else{
                resp.end("该接口未实现")
            }
            break;
        default:
            resp.end("其他请求")
            break;
    }
}).listen(port,() => console.log("server is running..."))
.on("error",e => console.log(e))


function renderPage(u,resp){
    const filename = join(__dirname,"public",u.pathname)
    resp.setHeader("Content-Type","text/html;charset=utf-8")
    fs.stat(filename,(err,stat) => {
        if(err) {
            resp.statusCode = 404
            resp.end("not found")
            return
        }
        if(stat.isFile()){
            const readStream = fs.createReadStream(filename)
            readStream.pipe(resp)
        }else{
            resp.end("文件夹不能读取")
        }
    })
}

function add(req,resp){
    let content = ""
    req.setEncoding("utf8")
    req.on("data",chunk => {
        // console.log("chunk:",decodeURI(chunk))
        content += decodeURI(chunk).split("=")[1]
    })
    req.on("end",() => {
        console.log("接受到的内容：",content)
        todos.push(content)
        resp.statusCode = 302
        resp.setHeader("Location","http://localhost:3000/index.html")
        resp.end()
    })
}