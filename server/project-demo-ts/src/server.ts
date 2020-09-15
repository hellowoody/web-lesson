import http from 'http';
import url from 'url';

http.createServer((req,resp)=>{
    if(req.url !== '/favicon.ico'){
        const url_parse : url.UrlWithStringQuery = url.parse(req.url !== undefined ? req.url : "")
        console.log(url_parse.query)
        resp.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
        resp.write("你好！")
    }
}).listen(3000)

console.log("server is running at http://localhost:3000 ")