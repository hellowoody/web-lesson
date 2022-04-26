import {createServer} from "http"
import {URL} from "url"

const blogs = []

createServer((req,resp) => {
    switch (req.method) {
        case "GET":
            resp.setHeader("Content-Type","text/plain")
            blogs.forEach(item => resp.write(item+"\n"))
            resp.end("查询成功\n")
            break;
        case "POST":
            req.setEncoding("utf8")
            let item = ""
            req.on("data",chunk => {
                console.log(`chunk:`,chunk)
                item += chunk
            })

            req.on("end",() => {
                blogs.push(item)
                resp.end("OK")
            })
            break;
        case "DELETE":
            // curl -X DELETE http://localhost:3000/100
            const u = new URL(req.url,"http://localhost:3000");
            const pathname = u.pathname       // /1 /a
            const id = pathname.slice(1)      // 1 but string a
            const index = parseInt(id,10) - 1 // 1-1=0 is number NaN
            if(isNaN(index)){
                resp.statusCode = 400;
                resp.end("非法参数")
            }else if(blogs.length <= index){
                resp.statusCode = 404
                resp.end("要删除的博文没有找到")
            }else{
                blogs.splice(index,1) //删除一条
                resp.end("删除成功")
            }
            break;
        default:
            resp.end("其他请求")
            break;
    }
}).listen(3000,() => console.log("rest server is running..."))
.on("error",e => console.log(e))