import {ApolloServer} from "@apollo/server"
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault
} from "@apollo/server/plugin/landingPage/default"
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import * as api from "./resolvers.js"


const typeDefs = `#graphql
type Mutation {
    updateArea(id:ID!,area:Float!):ResData
}

type Query {
    hello:String
    msg:String
    num:Int
    price:Float
    flag:Boolean
    userId:ID
    arr:[String]
    arr2:[Int]
    product(id:ID,name:String):Product
    products(start:Int!,limit:Int!,name:String):[Product]
    homecasual:[String]
    list(staged:String):[Stu]
    user:User,
    province(id:ID):BigCategory,
    country(id:ID):SmallCategory
}

type ResData {
    code:String
    msg:String
    data:BigCategory
}

type BigCategory {
    id:ID,
    name:String
    area:Float
    areaShow:String
    smallList:[SmallCategory]
}

type SmallCategory {
    id:ID,
    name:String
    bigData:BigCategory
}

type Product {
    id:ID
    name:String
    price:Float
    count:Int
    timestamp:String
    status:String
    attrs:[String]
}

type Stu {
    name:String,
    score:Int,
    id:String,
    classname:String
}

type User {
    name:String,
    avatar:String,
    role:String
}

`

const resolvers = {
    Query:{
        hello:api.hello,
        msg:api.msg,
        homecasual:api.homecasual,
        list:api.list,
        user:api.user,
        num:() => 100,
        price:() => 3.14,
        flag:() => (Math.floor(Math.random()*10))%2 === 0 ? true : false,
        userId: () => "U100",
        arr: () => ["a","b"],
        arr2: () => [100,200,314],
        product:api.getProduct,
        products:api.productList,
        province:api.getProvince,
        country:api.getCountry,
    },
    BigCategory:{
        areaShow:api.formatUnit,
        smallList:api.smallList
    },
    SmallCategory:{
        bigData:api.getProvince
    },
    Mutation:{
        updateArea:api.updateArea
    }
}
console.log("===",process.env.NODE_ENV,"===")
export const gql_server = new ApolloServer({
    typeDefs,
    resolvers,
    // plugins:[ApolloServerPluginLandingPageDisabled()]
    // plugins:[ApolloServerPluginLandingPageProductionDefault()]
    // plugins:[ApolloServerPluginLandingPageLocalDefault()]
    plugins:[process.env.NODE_ENV === "dev" 
        ? ApolloServerPluginLandingPageLocalDefault({footer:false}) 
        : ApolloServerPluginLandingPageProductionDefault({footer:false})
    ]
})