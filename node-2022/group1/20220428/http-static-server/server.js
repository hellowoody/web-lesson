import http from "http"
import {URL,fileURLToPath} from "url"
import { resolve,dirname,join } from "path";
import fs from "fs"

// console.log("import.meta.url: ",import.meta.url)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const root = __dirname
http.createServer((req,resp) => {
    // http://localhost:3000/index.html
    const u = new URL(req.url,"http://localhost:3000")
    // console.log(u)
    console.log("pathname:",u.pathname)
    if(u.pathname === "/favicon.ico") return resp.end()
    /*
        join: 将参数进行拼接，不需要注意参数路径的“正斜杠”问题,
        resolve:将参数进行拼接，之后会解析成一个绝对路径，传递的参数如果首字符是正斜杠的话，会忽略之前的参数
    */ 
    // console.log("join:",join("assets",u.pathname))
    // console.log("resolve:",resolve("assets",u.pathname.slice(1)))
    // const filename = resolve(root,"assets",u.pathname.slice(1))
    const filename = join(root,"assets",u.pathname)
    // console.log("index.html path: ",filename) 
    // 同步方法
    // try {
    //     const data = fs.readFileSync(filename,"utf-8")
    //     resp.end(data)
    // } catch (error) {
    //     console.log(error)
    //     resp.statusCode = 500
    //     resp.setHeader("Content-Type","text/html;charset=utf-8;")
    //     resp.end("读取失败")
    // }
    // 异步方法
    // fs.readFile(filename,(err,data) => {
    //     if(err) {
    //         console.log(error)
    //         resp.statusCode = 500
    //         resp.setHeader("Content-Type","text/html;charset=utf-8;")
    //         resp.end("读取失败")
    //         return
    //     }
    //     // resp.setHeader("Content-Length",Buffer.byteLength(data))
    //     resp.end(data)        
    // })
    // I/O流
    // const stream = fs.createReadStream(filename)
    // stream.on("data",chunk => {
    //     resp.write(chunk)
    // })
    // stream.on("end",() => {
    //     resp.end()
    // })
    // stream.on("error",e => console.log(e))
    // 流 pipe
    const stream = fs.createReadStream(filename)
    stream.pipe(resp)

}).listen(3000,() => console.log("static server is running ... "))
.on("error",e => console.log(e))