import http from "http";
// like DB
const blogs = []

http.createServer((req,resp) => {
    req.setEncoding("utf8")
    let item = ""
    req.on("data",chunk => {
        console.log(`chunk:`,chunk)
        item += chunk
    })

    req.on("end",() => {
        console.log("读取请求内容结束")
        blogs.push(item)
        resp.end()
    })
}).listen(3000,() => console.log("Post Server running ..."))
.on("error",err => console.log(err))

// CURL get
// curl http://localhost:3000

// CURL post
// curl -d "blog 1" http://localhost:3000
// curl -F "file=@文件的绝对路径" http://localhost:3000
// curl -F "file=@/Users/admin/Movies/2022-04-25 09-18-24.mp4" http://localhost:3000