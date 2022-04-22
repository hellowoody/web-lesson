import http from "http";

// 创建服务
const server = http.createServer((req,resp) => {
    resp.write("hello world.\n")
    resp.write("hello nodejs.")
    resp.end()

    // resp.end("hello nodejs")
})

// 服务绑定端口
const server1 = server.listen(3000,() => console.log("server is running ... "))
server1.on("error",(err) => {
    console.log("捕获错误:",err)
})

// http://localhost:3000
// http://127.0.0.1:3000
// http://0.0.0.0:3000