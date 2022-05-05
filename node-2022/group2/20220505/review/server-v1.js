import express from "express";

const app = express()

/*

http.createServer((req,resp) => {
    const u = new URL(req.url,`http://localhost:${port}`)
    resp.setHeader("Content-Type","text/html;charset=utf-8")
    switch(req.method){
        case "GET":
            if(u.pathname === "/"){
                resp.end(todos.toString())
            }
            else if(u.pathname === "/getdata"){
                resp.end(todos.toString())
            }
            else if(u.pathname === "/detail"){
                resp.end(todos.toString())
            }
            break;

*/

/*

curl http://localhost:3000
curl http://localhost:3000/getdata
curl http://localhost:3000/detail

*/

app.get("/",(req,resp) => {
    resp.send("get / api")
})

app.get("/getdata",(req,resp) => {
    resp.send("get /getdata api")
})

app.get("/detail",(req,resp) => {
    resp.send("get /detail api")
})


app.listen(3000,() => console.log("server is running"))