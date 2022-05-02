import http from "http"
import fs from "fs";
import {URL,fileURLToPath} from "url"
import {dirname,join} from "path";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

http.createServer((req,resp) => {
    const u = new URL(req.url,"http://localhost:3001")
    resp.setHeader("Content-Type","text/html;charset=utf-8")
    if(u.pathname === "/" || u.pathname === "/favicon.ico") return resp.end()
    // try {
    //     const data = fs.readFileSync(join(__dirname,"public",u.pathname))
    //     resp.end(data)
    // } catch (error) {
    //     resp.statusCode = 500
    //     resp.end("失败")
    // }
    // const stream = fs.createReadStream(join(__dirname,"public",u.pathname)) // “水桶”
    // stream.on("data",chunk => {
    //     try {
    //         // console.log(abc)
    //         // throw new Error("100")
    //         resp.write(chunk)
    //     } catch (error) {
    //         console.log("捕获到了")
    //         resp.end("页面发生错误")
    //         return
    //     }
    // }).on("end",() => {
    //     resp.end()
    // }).on("error",() => {
    //     console.log("createReadStrea捕获错误")
    //     resp.end()
    // })
    const stream = fs.createReadStream(join(__dirname,"public",u.pathname))
    stream.pipe(resp)

}).listen(3001,() => console.log("static server is running"))
.on("error",e => console.log(e))