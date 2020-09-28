import {ApolloServer,gql} from 'apollo-server-express'
import * as gr from './graphqlResolvers'

const config = require("../config");

const typeDefs = gql `
    type Query {
        hello : String,
        good(id:Int!) : Good
        goods(start:Int!,count:Int!,type:String,name:String,desc:String) : [Good]
        categorys(type:[String]!) : [Category]
        homeImgs:[String]
    }
    
    type Good {
        id:Int,
        name:String,
        price:Float,
        gooddesc:String,
        type:Dict,
        imgpath:String,
        count:Int
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
        homeImgs:()=>{
            let url = config.url + ":" + config.port + config.static_imgs_url
            return [
                url + "/home01.png",
                url + "/home02.png",
                url + "/home03.png",
            ]
        }
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