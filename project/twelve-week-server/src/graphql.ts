import {ApolloServer,gql} from "apollo-server-express";
import * as gr from "./graphqlResolvers"

const typeDefs = gql `
type Query {
    hello:String
}
`

const resolvers = {
    Query:{
        hello: gr.Hello
    }
}

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground:true, // 开发时的测试页面，true开启
})


