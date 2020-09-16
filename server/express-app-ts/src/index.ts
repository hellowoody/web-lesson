import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

// app.use('*',(req,resp,next)=>{
//     resp.header("Access-Control-Alow-Orgin","*")
//     next()
// })

const corsOptions = {
    "orgin":"*",
    "method":"GET,POST",
    "optionsSuccessStatus":200,
    // 'allowedHeaders': ['Content-Type']
}

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// app.use(cors(corsOptions))

app.use("/html",express.static("./pages"))

app.get("/",(req,resp)=>{
    console.log(req.query.a)
    resp.send("hello world!")
})

app.get("/api",(req,resp)=>{
    resp.send("hello api")
})

app.post("/api/login",cors(corsOptions),(req,resp)=>{
    console.log(req.body)
    /**
     userid password

     userid 去数据库查询 查看是否存在这个用户
        存在: 拿到数据库中存储的密码，然和发送来的参数中的密码进行比较
            相同: 需要把用户的一些完整信息和token(身份认证)返回给前台
            不相同: 直接返回前端 并发送消息“密码错误”
        不存在：直接返回前端 并发送消息“无此用户/请注册”
    */
    resp.send({msg:"接收到了"})
})

app.post("/api/register",(req,resp)=>{
    console.log(req.body)
    console.log(req.body.mail)
    resp.send({msg:"注册成功"})
})


app.listen(3000,()=>console.log("express-app-ts listening port 3000,you can visit url : http://127.0.0.1:3000 "))
