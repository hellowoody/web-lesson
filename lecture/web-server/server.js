var http = require("http");
var url = require("url")
var { URL } = require("url")

// http://localhost:3000/a?b=1&c=2

http.createServer(function(req, resp) {
    // url 过时
    // console.log("url.parse(string).query " + url.parse(req.url).query );
    // console.log("url.parse(string).pathname " + url.parse(req.url).pathname );
    // console.log("url.parse(string).path " + url.parse(req.url).path );
    const urlObj = new URL(`http://localhost:3000${req.url}`);
    // console.log(urlObj)
    console.log("urlObj.search " + urlObj.search );
    console.log("urlObj.pathname " + urlObj.pathname );
    console.log("urlObj.searchParams " + urlObj.searchParams );
    console.log("urlObj.searchParams b " + urlObj.searchParams.get("b") );
    console.log("urlObj.searchParams c " + urlObj.searchParams.get("c") );

    resp.writeHead(200, {"Content-Type": "text/plain"});
    resp.write("Hello World");
    resp.end();
}).listen(3000,() => console.log("server starting ... "));