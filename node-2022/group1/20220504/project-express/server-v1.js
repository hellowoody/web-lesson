import express from "express";

const app = express()

/*
curl http://localhost:3000
curl http://localhost:3000/getdata
curl http://localhost:3000/detail
*/
app.get("/",(req,resp) => {
    resp.send("express get 接口")
})
app.get("/getdata",(req,resp) => {
    resp.send("express get /getdata 接口")
})
app.get("/detail",(req,resp) => {
    resp.send("express get /detail 接口")
})

app.listen(3000,() => console.log("express server is running..."))