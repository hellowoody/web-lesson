const http = require("http");
const url = require("url");
const join = require("path").join;
const fs = require("fs");

const root = __dirname
const server = http.createServer((req,resp) => {
    // if(req.url === "/favicon.ico"){
    //     resp.end()
    //     return
    // }
    const urlObj = new url.URL(req.url,"http://localhost:3000")
    const path = join(root,urlObj.pathname)
    const stream = fs.createReadStream(path)
    // stream.on("data",chunk => resp.write(chunk))
    // stream.on("end",() => resp.end())
    stream.pipe(resp);
    stream.on("error",err => {
        resp.statusCode = 500;
        resp.end("internal server error")
    })
})
server.listen(3000,() => console.log("static web starting..."))   