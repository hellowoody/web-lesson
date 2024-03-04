import express from "express"

const app = express()
// app.use 中间件
app.use(express.urlencoded({extended:true})) // application/x-www-form-urlencode   name=value
app.use(express.json())                      // application/json   {name:value}
// /pages/index.html
app.use("/pages",express.static("./assets"))
//  网络路径 /pages 
// http://localhost:3000/pages 
// 本地的文件夹assets

/*
app.get()
curl http://localhost:3000
app.post()
curl -d "123" http://localhost:3000
*/

/*
获取get 参数： http://localhost:3000?p1=1&p2=2&p3=姓名
requset.query
获取delete 参数： http://localhost:3000/3
request.params
获取post 参数 
*/
app.get("/order",(req,resp) => {
    console.log("query:",req.query)
    resp.send("查询成功")
})

app.post("/login",(req,resp) => {
    console.log("body:",req.body)
    resp.send("登陆成功")
})


app.listen(3000,() => console.log("web server is running ... "))

// http://localhost:3000/