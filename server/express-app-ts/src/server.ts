import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {server as gql_server} from './graphql'
const config = require("../config");

const app = express()

gql_server.applyMiddleware({
    app,
    path:config.gql_url
})

// app.use('*',(req,resp,next)=>{
//     resp.header("Access-Control-Alow-Orgin","*")
//     next()
// })

const corsOptions = {
    "orgin":"*",
    "method":"GET,POST",
    "optionsSuccessStatus":200,
    // 'allowedHeaders': ['Content-Type']
}

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors(corsOptions))

app.use("/html",express.static("./pages"))

export {
    app,
    gql_server
}