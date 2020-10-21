import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {server as gql_server} from './graphql'
import {router} from './router';
import http from 'http'

const config = require("../config");

const app = express()

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

app.use(bodyParser.urlencoded({extended:false}))  //x-www-form-urlencoded
app.use(bodyParser.json())  //application/json
app.use(cors(corsOptions))

gql_server.applyMiddleware({
    app,
    path:config.gql_url
})

app.use("/html",express.static("./pages"))

app.use("/uploads",express.static("./assets/uploads"))

router(app)

const http_server = http.createServer(app)

export {
    http_server,
    gql_server
}