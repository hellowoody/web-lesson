// commomjs

const express = require('express')

const app = express()

app.use("/pages",express.static("/Users/admin/Documents/code/lesson/web-lesson/vite/admin-app/dist"))

const port = 3001

app.listen(port,()=>console.log(`server started,listening port : ${port} `))