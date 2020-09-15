"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var url_1 = __importDefault(require("url"));
http_1.default.createServer(function (req, resp) {
    if (req.url !== '/favicon.ico') {
        var url_parse = url_1.default.parse(req.url !== undefined ? req.url : "");
        console.log(url_parse.query);
        resp.writeHead(200, { "Content-type": "text/html;charset=utf-8" });
        resp.write("你好！");
    }
}).listen(3000);
console.log("server is running at http://localhost:3000 ");
