import http from "http";
// like DB
const blogs = [
    {
        id:1,
        author:"zhang",
        title:"blog 1",
        content:"内容一内容一内容一"
    },
    {
        id:2,
        author:"zhang",
        title:"blog 2",
        content:"内容二内容二内容二"
    },
]

http.createServer((req,resp) => {
    resp.setHeader("Content-Type","application/json")
    // blogs.forEach(item => resp.write(JSON.stringify(item)))
    // resp.end()
    resp.end(JSON.stringify(blogs))
}).listen(3000,() => console.log("Get Server running ..."))
.on("error",err => console.log(err))

// CURL get
// curl http://localhost:3000