import {createServer} from "http"

createServer((req,resp) => {
    // http code 302 重定向
    resp.statusCode = 302
    resp.setHeader("Location","https://baidu.com")
    resp.setHeader("Content-Type","text/html")
    resp.end("<h1>hello statuscode</h1>")
})
.listen(3000,() => console.log("您的服务已经启动，正在监听3000端口..."))
.on("error",err => console.error("捕获错误:",err))