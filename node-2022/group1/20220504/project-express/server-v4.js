import express from "express";

const app = express()

/*
    http://localhost:3000/pages/index.html
    http://localhost:3000/pages/files/1.txt
*/ 

// 中间件 middleware
app.use("/pages",express.static("./public"))

app.listen(3000,() => console.log("express server is running..."))