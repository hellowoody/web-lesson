import {ApolloServer,gql} from "apollo-server-express";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import * as gr from "./graphqlResolvers"
const {protocal,ip,port,imgs_url} = require("../config");

const typeDefs = gql `
type Query {
    hello:String
    num:Float
    arr:[String]
    goods (name:String,start:Int!,count:Int!):[Good]
}

type Good {
    id:String,
    name:String,
    price:Float,
    imgpath:String,
    gooddesc:String,
    count:Int,
    type (id:String):Dict
}

type Dict {
    id:String,
    name:String,
    sort:Int
}
`

const resolvers = {
    Query:{
        hello:() => {
            return "hello gql"
        },
        num:() => {
            return 3.14
        },
        arr:() => {
            return ["1","hello","你好"]
        },
        goods:gr.Goods
    },
    Good:{
        // imgpath:(parent:any) => `http://localhost:3000/static/upload/`+parent.imgpath,
        imgpath:(parent:any) => `${protocal}://${ip}:${port}${imgs_url}/`+parent.imgpath,
        type:gr.GoodType
    }
}

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})