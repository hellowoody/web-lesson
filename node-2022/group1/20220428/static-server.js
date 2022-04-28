const http = require("http");
const {URL} = require("url");
const {resolve} = require("path")
const fs = require("fs")

const root = __dirname
http.createServer((req,resp) => {
    // http://localhost:3000/index.html
    const u = new URL(req.url,"http://localhost:3000")
    // console.log(u)
    console.log("pathname:",u.pathname)
    if(u.pathname === "/favicon.ico") return resp.end()
    const filename = resolve(root,"public",u.pathname.slice(1))
    console.log("index.html path: ",filename) 
    try {
        const data = fs.readFileSync(filename,"utf-8")
        resp.end(data)
    } catch (error) {
        resp.statusCode = 500
        resp.end("读取失败")
    }
}).listen(3000,() => console.log("static server is running ... "))
.on("error",e => console.log(e))