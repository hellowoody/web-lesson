import express from "express";

const app = express()

app.get("/",(req,resp) => {
    resp.send("hello express")
})

app.listen(3000,() => console.log("My First express web server is running..."))