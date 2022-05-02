import { createReadStream } from "fs";
import http from "http"
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import formidable from "formidable";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const port = 3000

http.createServer((req,resp) => {
    resp.setHeader("Content-Type","text/html;charset=utf-8")
    switch (req.method) {
        case "GET":
            const filename = join(__dirname,"public","index.html")
            createReadStream(filename).pipe(resp)
            break;
        case "POST":
            upload(req,resp)
            break;
        default:
            resp.end("其他请求")
            break;
    }
}).listen(port,() => console.log(`started! u can viste url: http://localhost:${port}`))


function upload(req,resp){

    const type = req.headers["content-type"]
    if(!type || type.indexOf("multipart/form-data") !== 0){
        resp.end("上传方式不对")
        return
    }

    const form = new formidable.IncomingForm({
        uploadDir:join(__dirname,"files"),
        keepExtensions:true
    })

    form.parse(req)

    form.on("field",(field,value) => {
        console.log("field:",field)
        console.log("value:",value)
    })

    form.on("file",(name,file) => {
        console.log("name:",name)
        console.log("filepath:",file.filepath)
        console.log("newFilename:",file.newFilename)
        console.log("originalFilename:",file.originalFilename)
        console.log("size:",file.size)
    })

    form.on("end",() => {
        resp.end("上传完成")
    })

}