import express,{Express} from "express";
import {server as gql_server} from "./graphql";
import {useRouter} from "./router"
import cors from "cors";
// 导入配置config，因为文件夹层级的关系，我们不能es6 or ts的import导入了。
const config = require("../config")

const app:Express = express()
// 加载中间件
app.use(express.json())  // 前后台交互时会发生报文传递，这一行会根据报文头head，将报文转成合法的json格式
app.use(express.urlencoded({extended:false}))  // 前后台交互时会发生报文传递，这一行会根据报文头head，将报文转成合法的表单格式
app.use(cors()) // 跨域
// app.use("前缀路径",express.static("你要发布静态资源的路径"))
app.use("/assets",express.static("./static"))

/*
跨域如何解决
1.跨域是浏览器或者客户端的安全机制，不用浏览器或客服端访问就能解决
    可以单独立转发服务器，你的页面和你的转发服务都在这台服务器（3001），
    转发服务器用http或rpc方式请求最终的目标服务器 （3001 -》 3000）
2.nodejs install cors()
    response.header("Access-Control-Allow-Origin", "*"); 
*/


useRouter(app)

gql_server.applyMiddleware({
    app,
    path:"/gql"
})

app.listen(config.port,() => console.log(`web server is starting , listen port ${config.port}`))