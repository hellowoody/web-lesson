const express = require("express")
const {resolve} = require("path")
const fs = require("fs")


const app = express()
console.log("__dirname",__dirname)
app.use("/",express.static(resolve(__dirname,"static/pages")))
app.use("/",express.static(resolve(__dirname,"static/videos")))
// app.use(express.static("static/pages"))

app.get("/ping",(req,resp) =>{
    resp.send("pong")
})

app.get("/getvideo",(req,resp) => {
    const videoPath = resolve(__dirname,"static/videos/a.mp4")
    // fs 读取a.mp4
    const readStream = fs.createReadStream(videoPath)
    readStream.pipe(resp)
})

app.listen(3000,() => console.log("1.simpke server is listening 3000..."))