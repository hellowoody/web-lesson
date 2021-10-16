import {ApolloServer,gql} from "apollo-server-express";
import * as gr from "./graphqlResolvers"
const config = require("../config");

const typeDefs = gql `
type Query {
    hello:String
    homeImgs:[String]
    good (id:String!) :Good
    goods (start:Int!,count:Int!,type:[String],name:String) :[Good]
    categorys (id:String!,type:[String]!) :[Category]
}

type Good {
   id: Int,
   name:String,
   price:Float,
   imgpath:String,
   gooddesc:String
   count:Int,
   type (id:String):Dict
}

type Dict {
    id:String,
    name:String,
    sort:Int
}

type Category {
    id:String,
    name:String,
    goods(start:Int!,count:Int!):[Good]
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
        good: gr.Good,
        goods: gr.Goods,
        categorys:gr.Categorys
    },
    Good:{
        type:gr.goodtype
    },
    Category:{
        goods:gr.goodsCategory
    }
}

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground:true, // 开发时的测试页面，true开启
})


