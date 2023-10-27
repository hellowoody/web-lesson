import express from "express"
//ESM 导入时，不能省略后缀
import {gql_server} from "./gql/graphql.js"
import {expressMiddleware} from "@apollo/server/express4"
// import {useRouter} from "./router_bak.js"
import router from "./router/index.js"

const app = express() // 生成一个“单例”singleinstance（特殊的实例instance - 对象object - {} ）

// 下面两行是为了支持 POST请求报文的格式
app.use(express.json())                       // 按application/json 请求的报文
app.use(express.urlencoded({extended:false})) // 按application/x-www-form-urlencoded 请求的报文

app.use("/",express.static("./pages"))

app.use(router)   // 十二周实训 配置路由的方式
// useRouter(app) // 上学期express 配置路由的方式

// app.listen(3000,() => console.log("express & graphql server is listen port 3000 ..."))
// express server1
// gql     server2
//  先启动server2，再启动server1
gql_server.start().then((res) => {
    app.use("/gql",expressMiddleware(gql_server))
    app.listen(3000,() => console.log("express & graphql server is listen port 3000 ..."))
})