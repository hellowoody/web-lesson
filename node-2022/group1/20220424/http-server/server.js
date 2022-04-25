import http from "http";

// http.createServer 继承extends  EventEmitter
const server = http.createServer((req,resp) => {
    resp.write("hello world.\n")
    resp.write("hello node.\n")
    resp.write("hello server.")
    resp.end() // resp返回页面/客户端的方法

    // resp.end("hello nodejs server.")
})

//  服务监听3000端口号
const server1 = server.listen(3000,() => console.log("你的服务正在监听3000端口号..."))

server1.on("error",err => {
    console.log("====")
    console.log("====")
    console.log("====")
    console.log("捕获错误:",err)
})

console.log("server === server1:",server === server1)

// http://localhost:3000
// http://127.0.0.1:3000
// http://0.0.0.0:3000  (多网卡监听 有可能windows 下不行)