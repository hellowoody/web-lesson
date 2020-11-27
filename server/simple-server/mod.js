const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()

app.use(bodyParser.urlencoded({extended:false})); //application/x-www-form-urlencoded
app.use(bodyParser.json()); //application/json
app.use(cors({
    "orgin":"*",
    "method":"GET,POST"
}))

app.use("/",express.static("./pages"))  //静态文件发布器

app.get("/api",(req,resp)=>{
    resp.send("hello api")
})

app.post("/api/dataList",(req,resp)=>{
    const p = req.body
    console.log(p)
    resp.json([
        {
            id:0,
            name:"aaa123"
        },
        {
            id:1,
            name:"bbb123"
        },
        {
            id:2,
            name:"ccc123"
        },
    ])
})

app.listen(3000,()=>console.log("server started"))

