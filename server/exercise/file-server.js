'use strict'

let http = require("http")
let fs = require("fs")
let path = require("path")
// let url = require("url")

let root = path.resolve(process.argv[2] || ".")
// console.log(root)

let server = http.createServer((req,resp)=>{
    let pathname = req.url
    // let pathname = url.parse(req.url).pathname
    let filepath = path.join(root,pathname)

    fs.stat(filepath,(err,stat)=>{
        if (!err && stat.isFile()) {
            resp.writeHead(200)
            fs.createReadStream(filepath).pipe(resp)
        }else{
            resp.writeHead(404,{'Content-Type':'text/html;charset=utf-8'})
            resp.end('<h1>没有找到</h1>')
        }
    })
})

server.listen(3000)

console.log('server is running at http://127.0.0.1:3000/')