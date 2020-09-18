import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {ApolloServer,gql} from 'apollo-server-express'

const typeDefs = gql `
    type Query {
        hello : String,
        name:String
    }
`
const resolvers = {
    Query:{
        hello:()=>"hello woody",
        name: ()=>"zhang"
    }
}

const gql_server = new ApolloServer({
    typeDefs,
    resolvers,
    playground:true 
})

const app = express()

gql_server.applyMiddleware({
    app,
    path:"/gql"
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