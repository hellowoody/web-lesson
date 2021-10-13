import {ApolloServer,gql} from "apollo-server-express";
import * as gr from "./graphqlResolvers"
const config = require("../config");

const typeDefs = gql `
type Query {
    hello:String
    homeImgs:[String]
    goods:[Good]
}

type Good {
   id: Int,
   name:String,
   price:Float,
   imgpath:String,
   count:Int,
   type:Dict
}

type Dict {
    id:String,
    name:String,
    sort:Int
}
`

const resolvers = {
    Query:{
        hello: gr.Hello,
        homeImgs: () => {
            const urlBase = `http://${config.ip}:${config.port}${config.imgs_url}`
            return [
                urlBase + "/home01.png",
                urlBase + "/home02.png",
                urlBase + "/home03.png",
            ]
        },
        goods: gr.Goods
    }
}

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground:true, // 开发时的测试页面，true开启
})


