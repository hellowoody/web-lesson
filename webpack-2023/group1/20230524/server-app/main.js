
const express = require("express")
const app = express()

// const app = require("express")()\

app.use("/",express.static("static"))

app.listen(3100,() => console.log("listening port 3100..."))

// http://127.0.0.1:3100/index.html