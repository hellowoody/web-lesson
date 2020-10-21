"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var mysql_1 = require("./mysql");
var config = require("../config");
mysql_1.Ping().catch(function (e) {
    console.warn("数据库连不上！！！！！！！！！！");
    console.log(e);
});
server_1.app.listen(config.port, function () { return console.log("\n***********************************************************************\n    express-app-ts start listen port:" + config.port + ";                       \n                                                                           \n    you can visit url : " + (config.url + ":" + config.port) + ";                     \n                                                                           \n    graphql path : " + (config.url + ":" + config.port + server_1.gql_server.graphqlPath) + "   \n***********************************************************************\n"); });
