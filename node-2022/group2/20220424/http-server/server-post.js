import http from "http"
let count = 0
const server = http.createServer((req,resp) => {
    req.setEncoding("utf8")
    req.on("data",(chunk) => {
        count++
        console.log(`chunk ${count}:`,chunk)
    })

    req.on("end",() => {
        console.log("读取请求内容结束")
        resp.end()
    })
})

server.listen(3000,() => console.log("server-post is starting..."))
    .on("error",err => console.log("捕获错误:",err))

// curl -d "buy item1" http://localhost:3000 

// curl http://localhost:3000 -F "file=@/Users/admin/Movies/2022-04-24 14-01-49.mp4"  -H "token:222" -v