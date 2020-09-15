import express from 'express'

const app = express()

app.get("/",(req,resp)=>{
    console.log(req.query.a)
    resp.send("hello world!")
})

app.get("/login",(req,resp)=>{
    resp.send("login api")
})

app.listen(3000,()=>console.log("express-app-ts listening port 3000,you can visit url : http://127.0.0.1:3000 "))