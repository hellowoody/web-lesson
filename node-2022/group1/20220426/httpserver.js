const http = require("http");

http.createServer((req,resp) => {
    const body = "hello世界";
    // resp.setHeader("Transfer-Encoding","chunked") // http 1.1
    // resp.setHeader("Content-Length",body.length)  // 直接用length获取长度不行
    console.log("body.length 字符长度:",body.length)
    console.log("Buffer.byteLength(body) 字节长度:",Buffer.byteLength(body))
    resp.setHeader("Content-Length",Buffer.byteLength(body))  // Content-Length 接收的单位 字节
    resp.setHeader("Content-Type","text/html;charset=utf-8")
    resp.end(body)
}).listen(3000,() => console.log("test content-length sever is running..."))