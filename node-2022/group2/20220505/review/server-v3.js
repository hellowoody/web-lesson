import express from "express";

const app = express()

// 中间件 
app.use(express.urlencoded({extended:true})) 
app.use(express.json()) 

/*
传递接受参数方式
方式一(显式):
    a: get请求，将参数用？和 & 拼接

        url: http://localhost:3000/?p1=1&p2=2&name=张三

        express 中使用req.query

        curl 'http://localhost:3000/?p1=1&p2=2&name=张三'

    b: delete请求 ，将参数作为url地址的一部分

        url: http://localhost:3000/del/id_01

        express 中使用req.params

        curl -X DELETE http://localhost:3000/del/id_01

方式二(隐式)：将参数写在报文体（body）中，POST

    在express中 req.body （注意 直接获取不了，需要使用中间件）

    app.use(express.urlencoded({extended:true})) 
    
    curl -d "content=123" http://localhost:3000
    上面的命令是模拟下面的标签
    <form action="/" method="post" enctype="application/x-www-form-urlencoded">
        <input name="content" value="123" >
        <input type="submit" value="提交" >
    </form>


    app.use(express.json()) 

    curl -d '{"p1":1,"p2":2}' -H "Content-Type:application/json" http://localhost:3000
    上面的命令是模拟下面的标签
    <form action="/" method="post" enctype="application/json">
        <input name="p1" value="1" >
        <input name="p2" value="2" >
        <input type="submit" value="提交" >
    </form>

*/

app.get("/",(req,resp) => {
    console.log("query:",req.query)
    resp.send("hello express")
})

app.post("/",(req,resp) => {
    console.log("body:",req.body)
    resp.send({a:1,b:2})
})

app.delete("/del/:id",(req,resp) => {
    console.log(req.params)
    resp.send("delete响应")
})

app.put("/",(req,resp) => {
    resp.send("put响应")
})


app.listen(3000,() => console.log("server is running"))