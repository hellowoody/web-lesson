// ts中 ESM的包管理的语法
/*
    让ts识别express包里的所有类型
    需要安装官方出的关于express包的声明文件包
    @types/express
    因为 graphql 包已经把ts的声明文件整合到包里，所以就不用安装@types/graphql
    
*/ 
import express, { Request, Response } from "express" 
import {expressMiddleware} from "@apollo/server/express4"
import {gql_server} from "./gql"
import cors from "cors" 
import router from "./router"
import config from "./config.json"
import { checkToken } from "./gql/token"

const app = express()
const port:number= config.port

app.use(express.json())                            // Content-Type: application/json
app.use(express.urlencoded({extended:false}))      // Content-Type: application/x-www-form-urlencoded
app.use(cors()) // cors 是为了解决前后端分离时 产生的跨域问题的
// 自己实现处理的跨域问题
// app.use((req,resp,next) => {
  
//     var allowedOrigins = [
//         'http://127.0.0.1:3100', 
//         'http://localhost:3100', 
//     ];
//     var origin = req.headers.origin;
//     if(allowedOrigins.indexOf(<string>origin) >= 0 ){
//          resp.setHeader('Access-Control-Allow-Origin', <string>origin);
//     }

//     // resp.setHeader("Access-Control-Allow-Origin","*")                     // 让浏览器全部放开 
//     // resp.header("Access-Control-Allow-Origin","http://localhost:3100") // 域名太少
//     // 预请求的method是OPTIONS
//     if(req.method === 'OPTIONS'){
//         resp.setHeader("Access-Control-Allow-Headers","content-type")   
//         resp.statusCode = 204
//         resp.end();
//         return 
//     }
//     next()
// })
// app.use(express.static("static/pages"))
app.use("/",express.static("static/pages"))
app.use("/shopmall",express.static("static/dist"))
app.use("/imgs",express.static("static/upload"))

app.use(router)

// app.listen(port,() => console.log(`app-server is listening port ${port}`))
gql_server.start().then(() => {
    // app.use("/gql",apollo为express出中间件)

    app.use("/gql",expressMiddleware(gql_server,{
        context: async ({ req }) => checkToken(req.body),
    }))
    app.listen(port,() => console.log(`app-server is listening port ${port}`))
})
