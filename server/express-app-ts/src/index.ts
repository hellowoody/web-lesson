import express from 'express'
import cors from 'cors'

const app = express()

// app.use('*',(req,resp,next)=>{
//     resp.header("Access-Control-Alow-Orgin","*")
//     next()
// })
const corsOptions = {
    "orgin":"*",
    "method":"GET,POST",
    "optionsSuccessStatus":200
}

app.use(cors(corsOptions))

app.use("/html",express.static("./pages"))

app.get("/",(req,resp)=>{
    console.log(req.query.a)
    resp.send("hello world!")
})

app.get("/api",(req,resp)=>{
    resp.send("hello api")
})

app.post("/api/login",(req,resp)=>{
    /*
    1.获取参数
    2.解析参数
    3.进行业务逻辑
    4.返回给前端
    */
   console.log("接收到了")
//    resp.send(JSON.stringify({msg:"接收到了"}))
    resp.send({msg:"接收到了"})
//    resp.json({msg:"接收到了"})
})

app.post("/api/register",(req,resp)=>{
    resp.send({msg:"注册成功"})
})


app.listen(3000,()=>console.log("express-app-ts listening port 3000,you can visit url : http://127.0.0.1:3000 "))
