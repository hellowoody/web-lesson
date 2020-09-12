// commomjs

const express = require('express')

const app = express()

app.use("/pages",express.static("./static"))

app.listen(3000,()=>console.log("server started,listening port : 3000 "))