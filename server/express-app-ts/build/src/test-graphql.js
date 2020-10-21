"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
//schema 架构图 总述 概述
/*
//声明用什么方式 操作数据
type Query {
  hello:String //定义可被查询属性的类型
}
*/
var schema = graphql_1.buildSchema("\n  type Query {\n    hello: String,\n    goods:[Good]\n  }\n  type Good {\n    id:Int,\n    name:String,\n    price:Float,\n    type:String\n  }\n");
/*
解释可被查询的属性
*/
var root = {
    hello: function () {
        return 'Hello world!';
    },
    goods: function () {
        var arr = [
            {
                id: 1,
                name: '乔1',
                price: 1000,
                type: '03'
            },
            {
                id: 2,
                name: '乔2',
                price: 1000,
                type: '03'
            }
        ];
        return arr;
    }
};
var p = "\n  {\n    goods(count:10){\n      name,\n      price,\n      type\n    }\n  }\n";
var res = graphql_1.graphql(schema, p, root);
res.then(function (res) {
    console.log(JSON.stringify(res));
});
