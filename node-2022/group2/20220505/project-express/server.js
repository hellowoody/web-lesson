import express from "express"

const app = express()

// 中间件 middleware - “拦截器”
const myLogger = function(req,resp,next){
    console.log(100)
    console.log(`log info: uri:${req.url} `)
    // resp.send("100000")  // 不要再中间件中resp.send() 提前返回
    next() // important !
}

const mockPostBody = (req,resp,next) => {
    req.body = {a:1,b:2}
    next()
}

const handleType = (req,resp,next) => {
    console.log(200)
    req.params.id = parseInt(req.params.id,10)
    next()
}
// app.use 在全局增加中间件
app.use(myLogger)
app.use(mockPostBody)

app.get("/:id",handleType,(req,resp) => {
    console.log(300)
    console.log("main callback:",typeof req.params.id)
    console.log("id:",req.params.id)
    console.log("body:",req.body)
    resp.send("hello express")
})

app.get("/getdata/:id",handleType,(req,resp) => {
    console.log("main callback:",typeof req.params.id)
    console.log("id:",req.params.id)
    console.log("body:",req.body)
    resp.send("hello express")
})


app.listen(3000,() => console.log("server is running..."))