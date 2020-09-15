import http from 'http';
import url from 'url';

http.createServer((req,resp)=>{
    if(req.url !== '/favicon.ico'){
        const url_parse : url.UrlWithParsedQuery = url.parse(req.url !== undefined ? req.url : "",true)
        console.log(url_parse.query)
        console.log(url_parse.query.a)
        resp.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
        resp.write("你好！")
    }
}).listen(3000)

console.log("server is running at http://localhost:3000?a= ")