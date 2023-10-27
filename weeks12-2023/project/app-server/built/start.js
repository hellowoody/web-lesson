"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ts中 ESM的包管理的语法
/*
    让ts识别express包里的所有类型
    需要安装官方出的关于express包的声明文件包
    @types/express
    因为 graphql 包已经把ts的声明文件整合到包里，所以就不用安装@types/graphql
    
*/
var express_1 = __importDefault(require("express"));
var express4_1 = require("@apollo/server/express4");
var gql_1 = require("./gql");
var cors_1 = __importDefault(require("cors"));
var router_1 = __importDefault(require("./router"));
var config_json_1 = __importDefault(require("./config.json"));
var app = (0, express_1.default)();
var port = config_json_1.default.port;
app.use(express_1.default.json()); // Content-Type: application/json
app.use(express_1.default.urlencoded({ extended: false })); // Content-Type: application/x-www-form-urlencoded
app.use((0, cors_1.default)()); // cors 是为了解决前后端分离时 产生的跨域问题的
// 自己实现处理的跨域问题
// app.use((req,resp,next) => {
//     var allowedOrigins = [
//         'http://127.0.0.1:3100', 
//         'http://localhost:3100', 
//     ];
//     var origin = req.headers.origin;
//     if(allowedOrigins.indexOf(<string>origin) >= 0 ){
//          resp.setHeader('Access-Control-Allow-Origin', <string>origin);
//     }
//     // resp.setHeader("Access-Control-Allow-Origin","*")                     // 让浏览器全部放开 
//     // resp.header("Access-Control-Allow-Origin","http://localhost:3100") // 域名太少
//     // 预请求的method是OPTIONS
//     if(req.method === 'OPTIONS'){
//         resp.setHeader("Access-Control-Allow-Headers","content-type")   
//         resp.statusCode = 204
//         resp.end();
//         return 
//     }
//     next()
// })
// app.use(express.static("static/pages"))
app.use("/", express_1.default.static("static/pages"));
app.use("/shopmall", express_1.default.static("static/dist"));
app.use("/imgs", express_1.default.static("static/upload"));
app.use(router_1.default);
// app.listen(port,() => console.log(`app-server is listening port ${port}`))
gql_1.gql_server.start().then(function () {
    // app.use("/gql",apollo为express出中间件)
    app.use("/gql", (0, express4_1.expressMiddleware)(gql_1.gql_server));
    app.listen(port, function () { return console.log("app-server is listening port ".concat(port)); });
});
