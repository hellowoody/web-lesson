import express from "express"

const app = express()
// app.use 中间件
app.use(express.urlencoded({extended:true})) // application/x-www-form-urlencode   name=value
app.use(express.json())                      // application/json   {name:value}
// /pages/index.html
app.use("/pages",express.static("./assets"))
/*
app.get()
curl http://localhost:3000
app.post()
curl -d "123" http://localhost:3000
app.delete()
curl -X DELETE http://localhost:3000
app.put()
curl -X PUT http://localhost:3000
*/
/*
获取get 参数： http://localhost:3000?p1=1&p2=2&p3=姓名
requset.query
获取delete 参数： http://localhost:3000/3
request.params
获取post 参数 
*/
app.get("/",(req,resp) => {
    console.log("query:",req.query)
    resp.send("hello express")
})

app.post("/",(req,resp) => {
    console.log("body:",req.body)
    resp.send({a:1,b:2})
})
// curl -X DELETE  http://localhost:3000/del/firstblogs 
app.delete("/del/:name",(req,resp) => {
    console.log(req.params)
    resp.send("delete响应")
})

app.put("/",(req,resp) => {
    resp.send("put响应")
})


app.listen(3000,() => console.log("my first express web server is running ... "))