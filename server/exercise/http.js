'use strict';

let http = require("http")

let server = http.createServer((req,resp)=>{
    console.log(req.method + " : "+ req.url)
    resp.writeHead(200,{'Content-Type':'text/html'})
    resp.end('<h1>hello world</h1>')
})

server.listen(3001)

console.log("server is running and port is 3001 ")