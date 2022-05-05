import express from "express";

const app = express()

/*
http.createServer((req,resp) => {
    console.log("method:",req.method) // GET POST DELETE PUT
    resp.setHeader("Content-Type","text/plain;charset=utf-8")
    switch (req.method) {
        case "GET":
            break;
        case "POST":
            break;
        case "DELETE":
            break;
        default:
            resp.end("其他请求")
            break;
    }
})

*/

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

app.get("/",(req,resp) => {
    resp.send("hello express")
})

app.post("/",(req,resp) => {
    resp.send({a:1,b:2})
})

app.delete("/del",(req,resp) => {
    resp.send("delete响应")
})

app.put("/",(req,resp) => {
    resp.send("put响应")
})


app.listen(3000,() => console.log("server is running"))