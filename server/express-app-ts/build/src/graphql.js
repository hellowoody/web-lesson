"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var apollo_server_express_1 = require("apollo-server-express");
var gr = __importStar(require("./graphqlResolvers"));
var config = require("../config");
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query {\n        hello : String,\n        good(id:Int!) : Good\n        goods(start:Int!,count:Int!,type:String,name:String,desc:String) : [Good]\n        goodpop(count:Int!): [Good]\n        categorys(type:[String]!) : [Category]\n        homeImgs:[String]\n        user(id:String!) : User\n        userVisited(userid:String!,start:Int!,count:Int!) : [Good]\n        userCart(userid:String!) : [Good]\n        userOrder(userid:String!,start:Int!,count:Int!) : [Order]\n    }\n    \n    type Good {\n        id:Int,\n        name:String,\n        price:Float,\n        gooddesc:String,\n        type:Dict,\n        imgpath:String,\n        count:Int,\n        visitedcount:Int,\n        countbuy:Int\n    }\n\n    type Dict {\n        id:String,\n        dictid:String,\n        name:String,\n        sort:Int\n    }\n\n    type Category {\n        id:String,\n        dictid:String,\n        name:String,\n        goods(count:Int!):[Good]\n    }\n\n    type User {\n        id:String,\n        name:String,\n        visitedGoods(start:Int!,count:Int!):[Good]\n    }\n\n    type Order {\n        id:String,\n        price:Float,\n        goodcount:Int,\n        orderdate:String,\n        status:Dict\n        goodList:[Good]\n    }\n\n"], ["\n    type Query {\n        hello : String,\n        good(id:Int!) : Good\n        goods(start:Int!,count:Int!,type:String,name:String,desc:String) : [Good]\n        goodpop(count:Int!): [Good]\n        categorys(type:[String]!) : [Category]\n        homeImgs:[String]\n        user(id:String!) : User\n        userVisited(userid:String!,start:Int!,count:Int!) : [Good]\n        userCart(userid:String!) : [Good]\n        userOrder(userid:String!,start:Int!,count:Int!) : [Order]\n    }\n    \n    type Good {\n        id:Int,\n        name:String,\n        price:Float,\n        gooddesc:String,\n        type:Dict,\n        imgpath:String,\n        count:Int,\n        visitedcount:Int,\n        countbuy:Int\n    }\n\n    type Dict {\n        id:String,\n        dictid:String,\n        name:String,\n        sort:Int\n    }\n\n    type Category {\n        id:String,\n        dictid:String,\n        name:String,\n        goods(count:Int!):[Good]\n    }\n\n    type User {\n        id:String,\n        name:String,\n        visitedGoods(start:Int!,count:Int!):[Good]\n    }\n\n    type Order {\n        id:String,\n        price:Float,\n        goodcount:Int,\n        orderdate:String,\n        status:Dict\n        goodList:[Good]\n    }\n\n"])));
var resolvers = {
    Query: {
        hello: function () { return "hello woody"; },
        good: gr.good,
        goods: gr.goods,
        categorys: gr.categorys,
        homeImgs: function () {
            var url = config.url + ":" + config.port + config.static_imgs_url;
            return [
                url + "/home01.png",
                url + "/home02.png",
                url + "/home03.png",
            ];
        },
        user: gr.user,
        userVisited: gr.userVisited,
        userCart: gr.userCart,
        userOrder: gr.userOrder,
        goodpop: gr.goodpop,
    },
    Good: {
        type: gr.goodtype,
    },
    Category: {
        goods: gr.goodsCategory
    },
    User: {
        visitedGoods: gr.visitedGoods
    },
    Order: {
        orderdate: gr.formatOrderdate,
        price: gr.sumPrice,
        goodcount: gr.countGood,
        status: gr.orderStatus,
        goodList: gr.goodList
    }
};
exports.server = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    playground: config.gql_playground
});
var templateObject_1;
