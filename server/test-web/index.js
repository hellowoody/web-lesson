const express = require("express")

const app = express()

app.use("/",express.static("./pages"))

app.listen(3001,()=>console.log("test-web is started!"))