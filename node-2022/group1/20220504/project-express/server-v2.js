import express from "express";

const app = express()

/*
app.get()
curl http://localhost:3000
app.post()
curl -d "123" http://localhost:3000
app.delete()
curl -X DELETE http://localhost:3000
app.put()
curl -X PUT http://localhost:3000

url : http://localhost:3000/
*/
app.get("/",(req,resp) => {
    resp.send("express get 接口")
})

app.post("/",(req,resp) => {
    resp.send({a:1,b:2})
})

app.delete("/",(req,resp) => {
    resp.send("express delete 接口")
})

app.put("/",(req,resp) => {
    resp.send("express put 接口")
})

app.listen(3000,() => console.log("express server is running..."))