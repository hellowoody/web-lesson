const http = require("http")
const {URL} = require("url")
const items = []

const server = http.createServer((req,resp) => {
    console.log(req.method)
    switch(req.method){
        case "POST":
            let item = ""
            req.setEncoding("utf8")
            req.on("data",chunk => item += chunk)

            req.on("end",() => {                               
                items.push(item)
                resp.end("OK\n")
            })
            break;
        case "GET":
            items.forEach((item,i) => resp.write(i+")"+item+"\n"))
            resp.end()
            break;
        case "DELETE":
            const urlObj = new URL(req.url,"http://localhost:3000")
            const path = urlObj.pathname;
            const i = parseInt(path.slice(1),10)

            if(isNaN(i)){
                resp.statusCode = 400;
                resp.end("Invalid item id")
            }else if(!items[i]){
                resp.statusCode = 404;
                resp.end("Item not found")
            }else{
                items.splice(i,1);
                resp.end("OK\n")
            }
            break;
        default:
            resp.end("default response")
    }
})
server.listen(3000)