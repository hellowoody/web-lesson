const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors({
    "orgin":"*",
    "method":"GET,POST"
}))

app.use("/pages",express.static("./pages/index.html"))

app.get("/api",(req,resp)=>{
    resp.send("hello api")
})

app.post("/api/dataList",(req,resp)=>{
    const p = req.body
    console.log(p)
    resp.json([
        {
            id:0,
            name:"aaa1"
        },
        {
            id:1,
            name:"bbb1"
        },
        {
            id:2,
            name:"ccc1"
        },
    ])
})

app.listen(3000,()=>console.log("server started"))

