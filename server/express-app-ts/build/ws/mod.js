"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = __importDefault(require("ws"));
var http_1 = __importDefault(require("http"));
var url_1 = __importDefault(require("url"));
var wss = new ws_1.default.Server({
    noServer: true
});
var server = http_1.default.createServer(function (req, resp) {
    var pathname = req.url;
    console.log("http url: ", pathname);
    if (pathname === "/send") {
        // console.log(wss.clients)
        wss.clients.forEach(function (client) {
            client.send("服务器主动发送消息！");
        });
    }
    resp.write("服务器主动发送消息！");
    resp.end('服务器主动发送消息！');
});
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        if (message == "Hello World!") {
            ws.send("你好 世界!");
        }
    });
    // console.log("client connection : ",ws)
    ws.send('后台已经知道连接成功了');
});
server.on("upgrade", function (req, socket, head) {
    var pathname = url_1.default.parse(req.url).pathname;
    console.log(pathname);
    if (pathname === '/wss') {
        wss.handleUpgrade(req, socket, head, function done(ws) {
            wss.emit('connection', ws, req);
        });
    }
});
server.listen(8081, function () { return console.log("长连接服务启动了..."); });
