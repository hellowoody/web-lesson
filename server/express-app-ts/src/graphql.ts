import {ApolloServer,gql} from 'apollo-server-express'
const config = require("../config");

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

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground:config.gql_playground 
})