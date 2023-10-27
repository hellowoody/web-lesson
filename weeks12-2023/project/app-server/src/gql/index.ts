import {ApolloServer} from "@apollo/server"
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault} 
from "@apollo/server/plugin/landingPage/default"
import {ApolloServerPluginLandingPageDisabled} from "@apollo/server/plugin/disabled"
import * as api from "./resolvers"
import config from "../config.json"

const typeDefs = `#graphql
type Query {
    hello:String
    good(id:ID!):Good
    goods(categoryId:String,name:String,start:Int!,count:Int!):[Good],
    homeCarousel:[HomeCarousel]
    categorys(id:String!,type:[String]!):[Category]
    cart(userId:String!):[Good]
    orderList(userId:String!,start:Int!,count:Int!):[Order]
}

type Mutation {
    delGood(id:String!):ResData
}

type ResData {
    code:Int
    msg:String
}

type Order {
    id:ID,
    createTime:String,
    userId:String,
    status:String
    statusName:String
    list:[Good]
}

type Good {
    id:ID,
    name:String,
    price:Float,
    count:Int,
    gooddesc:String,
    type:String,
    imgpath:String,
    userId:String
}

type HomeCarousel {
    imgpath:String,
}

type Category {
    id:String,
    name:String,
    goods(start:Int!,count:Int!):[Good]
}

`
const resolvers = {
    Query:{
        hello:() => "hello gql",
        good: api.good,
        goods:api.goods,
        homeCarousel:api.homeCarousel,
        categorys:api.categorys,
        cart:api.cart,
        orderList:api.orderList
    },
    Mutation:{
        delGood:api.delGood
    },
    Good:{
        imgpath:(parent:any) => {
            // console.log("parent",parent)
            if(parent.imgpath.indexOf("http")>=0){
                return parent.imgpath
            }else{
                const prefix = config.protocal+"://"+config.ip+":"+config.port+config.imgs_url+"/"
                return prefix+parent.imgpath
            }
        }
    },
    HomeCarousel:{
        imgpath:(parent:any) => {
            // console.log("parent",parent)
            const prefix = config.protocal+"://"+config.ip+":"+config.port+config.imgs_url+"/"
            return prefix+parent.imgpath
        }
    },
    Category:{
        goods:api.goods
    },
    Order:{
        statusName:api.orderStatusName,
    }
}

export const gql_server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        process.env.NODE_ENV === "prod" ?
            ApolloServerPluginLandingPageProductionDefault({footer:false}) :
            ApolloServerPluginLandingPageLocalDefault({footer:false})
    ]
})