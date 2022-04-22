import http from "http";

// 创建服务
http.createServer((req,resp) => {
        // resp.write("hello world.\n")
        // resp.write("hello nodejs.")
        // resp.end()

        // resp.end("hello nodejs")


        const body = "<h1>hello node server</h1>"
        resp.setHeader("Content-Length",body.length)
        resp.setHeader("Content-Type","text/plain")  // MIME  xx/xx
        resp.end(body);
    })
    .listen(3000,() => console.log("server is running ... "))
    .on("error",(err) => console.log("捕获错误:",err))

// http://localhost:3000
// http://127.0.0.1:3000
// http://0.0.0.0:3000