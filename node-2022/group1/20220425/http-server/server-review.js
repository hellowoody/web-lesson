import http from "http";

http.createServer((req,resp) => {

    const body = `
    <h1>hello world.</h1>
    hello node.
    hello server.
    `
    // statusCode 和 setHeader 必须写在 write和end之前
    resp.statusCode = 200
    resp.setHeader("Content-Length",body.length)
    // resp.setHeader("Content-Type","text/plain") // text/plain 纯文本渲染  MIME
    resp.setHeader("Content-Type","text/html") // text/html 按html渲染      MIME
    // ================ 以下是报文体内容 ======================
    resp.end(body) // resp返回页面/客户端的方法
    
})
.listen(3000,() => console.log("你的服务正在监听3000端口号..."))
.on("error",err => console.log("捕获错误:",err))
    


