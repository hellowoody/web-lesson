const http = require("http")
const {URLSearchParams} = require("url")
const items = []

const server = http.createServer((req,resp) => {
    if("/" === req.url){
        switch(req.method){
            case "POST":
                add(req,resp)
                break;
            case "GET":
                show(resp)
                break;
            default:
                badRequest(resp)
        }
    }else{
        notFound(resp)
    }
})
server.listen(3000,() => console.log("server starting..."))

function show(resp){
    var html = `<!Doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>todo list</title>
            </head>
            <body>
                <h1>Todo List</h1>
                <ul>
                    ${items.map(item => "<li>"+item+"</li>").join("")}
                </ul>
                <form method="post" action="/">
                    <div><input type="text" name="item"></div>
                    <div><input type="submit" value="add item"></div>
                </form>
            </body>
        </html>
        `
    resp.setHeader("Content-Type","text/html")
    resp.setHeader("Content-Length",Buffer.byteLength(html))
    resp.end(html)
}

function notFound(resp){
    resp.statusCode = 404;
    resp.setHeader("Content-Type","text/plain")
    resp.end("Not Found")
}

function badRequest(resp){
    resp.statusCode = 400;
    resp.setHeader("Content-Type","text/plain")
    resp.end("Bad Request")
}

function add(req,resp){
    let body = "";
    req.setEncoding("utf8")
    req.on("data",chunk => body+=chunk)
    req.on("end",() => {
        const params = new URLSearchParams(body)
        items.push(params.get("item"))
        show(resp)
    })
}


