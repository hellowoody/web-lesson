import http from "http";

// http.createServer 继承extends  EventEmitter
http.createServer((req,resp) => {

    const body = `

    hello node.
    hello server.
    `
    resp.setHeader("Content-Length",body.length)
    // resp.setHeader("Content-Type","text/plain") // text/plain 纯文本渲染
    // resp.setHeader("Content-Type","text/html") // text/html 按html渲染
    // ================ 以下是报文体内容 ======================
    resp.end(body) // resp返回页面/客户端的方法
})
.listen(3000,() => console.log("你的服务正在监听3000端口号..."))
.on("error",err => console.log("捕获错误:",err))
    


