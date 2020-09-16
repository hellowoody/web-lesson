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
   console.log("接收到了")
   console.log(req.body)
    resp.send({msg:"接收到了"})
//    resp.json({msg:"接收到了"})
})

app.post("/api/register",(req,resp)=>{
    console.log(req.body)
    console.log(req.body.mail)
    resp.send({msg:"注册成功"})
})


app.listen(3000,()=>console.log("express-app-ts listening port 3000,you can visit url : http://127.0.0.1:3000 "))
