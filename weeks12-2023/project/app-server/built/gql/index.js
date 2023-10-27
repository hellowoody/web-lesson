"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gql_server = void 0;
var server_1 = require("@apollo/server");
var default_1 = require("@apollo/server/plugin/landingPage/default");
var api = __importStar(require("./resolvers"));
var config_json_1 = __importDefault(require("../config.json"));
var typeDefs = "#graphql\ntype Query {\n    hello:String\n    good(id:ID!):Good\n    goods(name:String,start:Int!,count:Int!):[Good]\n}\n\ntype Good {\n    id:ID,\n    name:String,\n    price:Float,\n    count:Int,\n    gooddesc:String,\n    type:String,\n    imgpath:String,\n}\n\n";
var resolvers = {
    Query: {
        hello: function () { return "hello gql"; },
        goods: api.goods
    },
    Good: {
        imgpath: function (parent) {
            console.log("parent", parent);
            var prefix = config_json_1.default.protocal + "://" + config_json_1.default.ip + ":" + config_json_1.default.port + config_json_1.default.imgs_url + "/";
            return prefix + parent.imgpath;
        }
    }
};
exports.gql_server = new server_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    plugins: [
        process.env.NODE_ENV === "prod" ?
            (0, default_1.ApolloServerPluginLandingPageProductionDefault)({ footer: false }) :
            (0, default_1.ApolloServerPluginLandingPageLocalDefault)({ footer: false })
    ],
});
