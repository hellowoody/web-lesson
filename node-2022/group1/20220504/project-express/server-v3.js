import express from "express";

const app = express()
// 中间件
app.use(express.urlencoded({extended:true}))  // application/x-www-form-urlencoded    name=value
app.use(express.json())                       // application/json                     {name:value}

/*
接受参数方式
方式一，将参数现在url上
    a：get请求，将参数用？和&符 拼接参数

        url: http://localhost:3000/?p1=1&p2=2&name=张三

        curl：curl 'http://localhost:3000/?p1=1&p2=2&name=张三'

    b:delete请求 ， 将参数作为url地址的一部分

        url: http://localhost:3000/first_blog

        curl -X DELETE http://localhost:3000/del/first_blog


方式二，将参数写在报文体（body）中 POST

    curl -d "content=123" http://localhost:3000
    上面的命令是模拟下面的标签
    <form method="post" action="/" enctype="application/x-www-form-urlencoded">
        <input name="content">
        <input type="submit" value="提交" >
    </form>

    curl -d '{"p1":1,"p2":2}' -H 'Content-Type:application/json' http://localhost:3000
    上面的命令是模拟下面的标签
    <form method="post" action="/" enctype="application/json">
        <input name="content">
        <input type="submit" value="提交" >
    </form>

*/
app.get("/",(req,resp) => {
    console.log("query:",req.query)
    resp.send("express get 接口")
})

app.post("/",(req,resp) => {
    console.log("body:",req.body)
    resp.send({a:1,b:2})
})

app.delete("/del/:name/:name2",(req,resp) => {
    console.log("params:",req.params)
    resp.send("express delete 接口")
})

app.put("/",(req,resp) => {
    resp.send("express put 接口")
})

app.listen(3000,() => console.log("express server is running..."))