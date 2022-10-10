const http = require("http")
const url = require("url")
const join = require("path").join;
const fs = require("fs");
const jwt = require("jsonwebtoken")
const secretOrPrivateKey = "hello"
console.log("secretOrPrivateKey:",secretOrPrivateKey)
console.log("timestamp:",Date.now())
const token = jwt.sign({name:"zhangsan"},secretOrPrivateKey,{
    expiresIn:100
})

console.log("token:",token)

const decoded = jwt.verify(token,secretOrPrivateKey)

console.log("decoded:",decoded)

setTimeout(() => {
    jwt.verify(token,secretOrPrivateKey,(err,decoded) => {
        console.log("callback:",err,decoded)
    })
},1000)

http.createServer((req,resp) => {
    const u = new url.URL(req.url,"http://localhost:3000")
    if(u.pathname === "/favicon.ico") return resp.end()
    if(u.pathname === "/index.html"){
        const path = join(__dirname,u.pathname)
        const stream = fs.createReadStream(path)
        stream.pipe(resp);
        stream.on("error",err => {
            resp.statusCode = 500;
            resp.end("internal server error")
        })
    }else{
        console.log(req.headers.authorization)
        const authorization = req.headers.authorization.split(" ")[1]
        console.log(authorization)
        const decoded = jwt.verify(authorization,secretOrPrivateKey)
        console.log("验证decoded:",decoded)
        resp.setHeader("Access-Control-Allow-Origin","*")
        resp.setHeader("Content-Type","application/json")
        resp.end(JSON.stringify({code:"ok"}))
    }

}).listen(3000)
