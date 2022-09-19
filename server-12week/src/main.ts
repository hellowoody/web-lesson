// 在ts中默认使用ESM包管理
import express,{Express} from "express";
import {server as gql_server} from "./graphql"
import {useRouter} from "./router"
import cors from "cors";
import {join} from "path"
// 导入commonjs语法的配置文件
const config = require("../config");

// const app:类型 = express();
// Object String Number Boolean Array Function
const app: Express = express();
const port = config.port;
// 为了拿到页面传的数据 express.json() -》 HttpKit中的"Content-Type":"application/json",
app.use(express.json())  
// 为了拿到页面传的数据 express.urlencoded({extended:false} -》 HttpKit中的"Content-Type":"application/x-www-form-urlencoded"                      
app.use(express.urlencoded({extended:false}))  
app.use(cors()) // 解决跨域 自动将所有的接口都会自动处理header中的信息
// app.use("静态资源对外提供的路径","将哪个文件夹发布")
// http://localhost:3000/static
// app.use("/static",express.static("./assets"))                   // 发布静态资源
app.use(config.assets_url,express.static(join(__dirname,"../assets")))  // 发布静态资源

useRouter(app)


gql_server.start().then((res) => {
    gql_server.applyMiddleware({
        app,
        path:"/gql"
    })
    app.listen(port,() => console.log(`web server is running,listen port ${port}`))
})





