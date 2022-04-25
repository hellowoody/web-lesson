import http from "http";

const blogs = []

const server = http.createServer((req,resp) => {
    switch (req.method) {
        case "GET":
            // console.log("GET 请求")
            resp.setHeader("Content-Type","charset=utf-8")
            blogs.forEach(item => resp.write(item+"\n"))
            resp.end("查询完毕")
            break;
        case "POST":
            let content = ""
            // console.log("POST 请求")
            // req.setEncoding("utf8")
            req.on("data",(chunk) => {
                console.log("chunk:",chunk)
                content += chunk
            })
            req.on("end",() => {
                blogs.push(content)
                resp.end("创建成功")
            })
            break;
        default:
            resp.end("默认请求")
            break;
    }
})

server.listen(3000,() => console.log("server-post is starting..."))
    .on("error",err => console.log("捕获错误:",err))

// curl post
// curl -d "buy item1" http://localhost:3000 


// curl get
// curl http://localhost:3000
