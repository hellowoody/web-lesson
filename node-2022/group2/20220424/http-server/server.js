import {createServer} from "http";

createServer((req,resp) => {
    const body = `
        <h1>hello http server!</h1>
    `
    // statusCode setHeader 都是需要在write/end之前写
    resp.statusCode = 200
    // resp.setHeader("Content-Type","text/plain")  // 纯文本
    resp.setHeader("Content-Type","text/html")  // 网页形式
    resp.write("<h1>hello nodejs </h1>")
    resp.end(body)
    
})
.listen(3000,() => console.log("您的服务已经启动，正在监听3000端口号..."))
.on("error",err => console.error("捕获错误:",err))
