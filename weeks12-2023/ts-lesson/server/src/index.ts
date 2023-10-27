import express from "express";

const app = express()

app.get("/",(req,resp) => {
    resp.send("ok")
})

app.listen(3000,() => console.log("express ts server listen port 3000..."))