import http from "http"
import {URL} from "url"

const blogs = []

http.createServer((req,resp) => {
    console.log("method:",req.method) // GET POST DELETE PUT
    // console.log("url:",req.url)       // /123
    // const u = new URL(req.url,"http://localhost:3000")  // http://localhost:3000/123
    // console.log("u:",u)
    // resp.end()
    resp.setHeader("Content-Type","text/plain;charset=utf-8")
    switch (req.method) {
        case "GET":
            blogs.forEach(item => resp.write(item+"\n"))
            resp.end("查询完毕")
            break;
        case "POST":
            let content = ""
            req.setEncoding("utf8")
            req.on("data",(chunk) => {
                console.log("chunk:",chunk)
                content += chunk
            })
            req.on("end",() => {
                blogs.push(content)
                resp.end("创建成功")
            })
            break;
        case "DELETE":
            // curl -v -X DELETE http://localhost:3000/1  删除第几条博文
            // curl -X DELETE http://localhost:3000/1  删除第几条博文
            const u = new URL(req.url,"http://localhost:3000") 
            const pathname = u.pathname
            const id = pathname.slice(1)
            const index = parseInt(id,10) - 1
            if(isNaN(index)){
                resp.statusCode = 400;
                resp.end("非法的参数")
            }else if(blogs.length <= index){
                resp.statusCode = 404
                resp.end("要删除的博文没有找到")
            }else{
                blogs.splice(index,1)
                resp.end("删除成功")
            }
            break;
        default:
            resp.end("其他请求")
            break;
    }

}).listen(3000,() => console.log("blogs server is running ..."))
.on("error",e => console.log(e))