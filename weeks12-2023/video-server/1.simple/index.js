const express = require("express")
const {resolve} = require("path")

const app = express()
console.log("__dirname",__dirname)
app.use("/",express.static(resolve(__dirname,"static/pages")))
app.use("/",express.static(resolve(__dirname,"static/videos")))
// app.use(express.static("static/pages"))

app.get("/ping",(req,resp) =>{
    resp.send("pong")
})

app.listen(3000,() => console.log("1.simpke server is listening 3000..."))