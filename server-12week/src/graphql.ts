import {ApolloServer,gql} from "apollo-server-express";
import {ApolloServerPluginLandingPageGraphQLPlayground, Context, ContextFunction} from "apollo-server-core"
import * as gr from "./graphqlResolvers"
const {protocal,ip,port,imgs_url,secretOrPrivateKey} = require("../config");
import jwt from "jsonwebtoken"

const typeDefs = gql `
type Query {
    hello:String
    num:Float
    arr:[String]
    good (id:String!): Good
    goods (name:String,type:String,start:Int!,count:Int!):[Good]
    homeImgs:[String]
    categorys (id:String!,type:[String]!):[Category]
    cart (userId:String!):[Good]
}

type Good {
    id:String,
    name:String,
    price:Float,
    imgpath:String,
    gooddesc:String,
    count:Int,
    type (id:String):Dict
    userId:String
}

type Dict {
    id:String,
    name:String,
    sort:Int
}

type Category {
    id:String,
    name:String
    goods (start:Int!,count:Int!):[Good]
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
        good:gr.Good,
        goods:gr.Goods,
        homeImgs:gr.HomeImgs,
        categorys:gr.Categorys,
        cart:gr.Cart
    },
    Good:{
        // imgpath:(parent:any) => `http://localhost:3000/static/upload/`+parent.imgpath,
        imgpath:(parent:any) => `${protocal}://${ip}:${port}${imgs_url}/`+parent.imgpath,
        type:gr.GoodType
    },
    Category:{
        goods:gr.GoodsCategory
    }
}

const context:ContextFunction = ({req}) => {
    return {
        checkToken:() => {
            // console.log("gql token:",req.body)
            const p = req.body
            let res = false
            if(p.token){
                try {
                    const decoded:any = jwt.verify(p.token,secretOrPrivateKey)
                    // console.log("解码之后的内容：",decoded)
                    if(decoded.id === p.userId){
                        res = true
                    }
                } catch (e:any) {
                }
            }
            return res
        }
    }
}

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ],
    context
})