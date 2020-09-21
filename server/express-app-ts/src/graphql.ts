import {ApolloServer,gql} from 'apollo-server-express'
import * as gr from './graphqlResolvers'

const config = require("../config");

const typeDefs = gql `
    type Query {
        hello : String,
        good(id:Int!) : Good
        goods(count:Int!,type:String,name:String,desc:String) : [Good]
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
`
const resolvers = {
    Query:{
        hello:()=>"hello woody",
        good:gr.good,
        goods:gr.goods,
    },
    Good:{
        type:gr.goodtype,
    }
}

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground:config.gql_playground 
})