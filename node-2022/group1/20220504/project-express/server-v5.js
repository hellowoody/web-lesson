import express from "express";

const app = express()
// 自定义中间件
const myLogger = function(req,resp,next){
    console.log("Logger info")
    next()
}

const showTime = (req,resp,next) => {
    req.showTime = Date.now()
    next()
}
// 定义全局中间件
app.use(myLogger)
app.use(showTime)

app.get("/",(req,resp) => {
    resp.send("hello express!"+req.showTime)
})

app.get("/getdata",(req,resp) => {
    resp.send("hello express!"+req.showTime)
})

app.listen(3000,() => console.log("express server is running..."))