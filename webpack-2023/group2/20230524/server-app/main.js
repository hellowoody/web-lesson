import express from "express"

const app = express()

app.use("/",express.static('static'))  // http fs net 

app.listen(3100,() => console.log("LISTENING port 3100..."))

