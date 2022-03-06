var http = require("http");
var { URL } = require("url")

// http://localhost:3000/a?b=1&c=2

http.createServer(function(req, resp) {

    if(req.url === "/favicon.ico"){
        resp.end()
        return
    }

    const urlObj = new URL(`http://localhost:3000${req.url}`);
    console.log("searchParams b " + urlObj.searchParams.get("b") );
    console.log("searchParams c " + urlObj.searchParams.get("c") );
    resp.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    resp.write("Hello World");
    resp.write("<br>")
    resp.write("<h1>你好</h1>")
    resp.end();
}).listen(3000,() => console.log("server starting ... "));