import {createServer} from "http"
const blogs = []
createServer((req,resp) => {
    // console.log("本次的请求类型:",req.method)
    switch (req.method) {
        case "GET":
            // console.log("switch case GET")
            // console.log("blogs ===>",blogs)
            resp.setHeader("Content-Type","text/plain")
            blogs.forEach(item => resp.write(item+"\n"))
            resp.end()
            break;
        case "POST":
            // console.log("switch case POST")
            req.setEncoding("utf8")
            let item = ""
            req.on("data",chunk => {
                console.log(`chunk:`,chunk)
                item += chunk
            })

            req.on("end",() => {
                // console.log("读取请求内容结束")
                blogs.push(item)
                resp.end("OK")
            })
            break;
        default:
            resp.end("默认请求")
            break;
    }
}).listen(3000,() => console.log("REST web server running ..."))
.on("error",e => console.log(e))