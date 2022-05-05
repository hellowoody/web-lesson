import { createReadStream, stat } from "fs";
import http from "http";
import { dirname, join } from "path";
import { fileURLToPath, URL } from "url";
import formidable from "formidable"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const port = 3001

http.createServer((req,resp) => {
    const u = new URL(req.url,`http://localhost:${port}`)
    resp.setHeader("Content-Type","text/html;charset=utf-8")
    switch(req.method){
        case "GET":
            renderPage(u,resp)
            break;
        case "POST":
            if(u.pathname === "/add"){
                resp.end("post add请求")
            }else if(u.pathname === "/upload"){
                upload(req,resp)
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

function upload(req,resp){
    if(!req.headers["content-type"] || req.headers["content-type"].indexOf("multipart/form-data") < 0){
        resp.statusCode = 400
        resp.end("请求方式不是multipart/form-data")
        return
    }
    const form = formidable({
        uploadDir:"./files",
        keepExtensions:true,
    })

    form.parse(req,(err,fields,files) => {
        if(err) {
            console.log(err)
            return resp.end("上传错误")
        }

        // console.log("fields：",fields)
        // console.log("files",files)
        resp.end("上传成功")
    })
}
