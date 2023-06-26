import express from "express"
import { useRouter } from "./router.js"

const app = express()
app.use(express.json())                         // 为了支持报文格式是               application/json
app.use(express.urlencoded({ extended: true })) // 为了支持报文格式是 传统表单格式   application/x-www-url-encoded
/*
    P1-"/static":url后面的网络路径
    P2-express.static("upload"): 项目根目录中的某一个文件夹（服务器真实的文件夹）
    http访问时 P1可以指向/映射到P2 
    http://127.0.0.1:3000/static -> upload
    http://127.0.0.1:3000/static/xxx.png -> upload/imgs/xxx.png
*/ 
app.use("/static",express.static("upload"))
const port = 3000

useRouter(app)

app.listen(port,() => console.log(`server is listening port is ${port} ...`))