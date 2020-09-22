import {ApolloServer,gql} from 'apollo-server-express'
import * as gr from './graphqlResolvers'

const config = require("../config");

/*

[
    {
        category:{
            id:"03",
            name:"鞋"
        },
        goods:[
            {},
            {},
            {},
        ]
    },
    {
        category:{
            id:"06",
            name:"衣服"
        },
        goods:[
            {},
            {},
            {},
        ]
    },
]

*/

const typeDefs = gql `
    type Query {
        hello : String,
        good(id:Int!) : Good
        goods(count:Int!,type:String,name:String,desc:String) : [Good]
        categorys(type:[String]!) : [Category]
    }
    
    type Good {
        id:Int,
        name:String,
        price:Float,
        gooddesc:String,
        type:Dict,
        imgpath:String,
    }

    type Dict {
        id:String,
        dictid:String,
        name:String,
        sort:Int
    }

    type Category {
        id:String,
        dictid:String,
        name:String,
        goods(count:Int!):[Good]
    }

`
const resolvers = {
    Query:{
        hello:()=>"hello woody",
        good:gr.good,
        goods:gr.goods,
        categorys:gr.categorys,
    },
    Good:{
        type:gr.goodtype,
    },
    Category:{
        goods:gr.goodsCategory
    }
}

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground:config.gql_playground 
})