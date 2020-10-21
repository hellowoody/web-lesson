"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gql_server = exports.app = void 0;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var graphql_1 = require("./graphql");
Object.defineProperty(exports, "gql_server", { enumerable: true, get: function () { return graphql_1.server; } });
var router_1 = require("./router");
var config = require("../config");
var app = express_1.default();
exports.app = app;
// app.use('*',(req,resp,next)=>{
//     resp.header("Access-Control-Alow-Orgin","*")
//     next()
// })
var corsOptions = {
    "orgin": "*",
    "method": "GET,POST",
    "optionsSuccessStatus": 200,
};
app.use(body_parser_1.default.urlencoded({ extended: false })); //x-www-form-urlencoded
app.use(body_parser_1.default.json()); //application/json
app.use(cors_1.default(corsOptions));
graphql_1.server.applyMiddleware({
    app: app,
    path: config.gql_url
});
app.use("/html", express_1.default.static("./pages"));
app.use("/uploads", express_1.default.static("./assets/uploads"));
router_1.router(app);
