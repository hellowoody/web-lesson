const http = require("http")

http.createServer((req,resp) => {
    const body = "hello世界"
    // resp.setHeader("Transfer-Encoding","chunked") // 默认 http 1.1
    // resp.setHeader("Content-Length",body.length)       // 字符长度 ：7 
    // resp.setHeader("Content-Length",2)       // 字符长度 ：7 
    resp.setHeader("Content-Length",Buffer.byteLength(body))  // 字节长度 ：11 Content-length 要求字节数
    resp.setHeader("Content-Type","text/html;charset=utf-8")  // 字节长度 ：11 Content-length 要求字节数
    resp.end(body)
}).listen(3000,() => console.log("test content-length server running..."))