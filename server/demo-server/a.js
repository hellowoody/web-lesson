const express = require("express")
const {defaultapi} = require("./controller")
const app = express()

app.get("/api",defaultapi)

app.listen(9000,()=>{
    console.log("9000 PORT successfully started up!")
})