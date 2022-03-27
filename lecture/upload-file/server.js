const http = require("http")
const os = require("os")
const {resolve} = require("path")
const formidable = require("formidable")

const server = http.createServer((req,resp) => {
    switch(req.method){
        case "POST":
            upload(req,resp)
            break;
        case "GET":
            show(resp)
            break;
        default:
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
                <h1>upload file</h1>
                <form method="post" action="/" enctype="multipart/form-data">
                    <div><input type="text" name="name"></div>
                    <div><input type="file" name="file"></div>
                    <div><input type="submit" value="Upload"></div>
                </form>
            </body>
        </html>
        `
    resp.setHeader("Content-Type","text/html")
    resp.setHeader("Content-Length",Buffer.byteLength(html))
    resp.end(html)
}

function upload_old(req,resp){
    if(!isformData(req)){
        resp.statusCode = 400;
        resp.end("bad request:expecting multipart/form-data")
        return;
    }
    const form = new formidable.IncomingForm();
    form.on("field",(field,value) => {
        console.log(field)
        console.log(value)
    })
    form.on("file",(name,file) => {
        console.log(name)
        console.log(file)
    })
    form.on("end",() => {
        resp.end("upload complete!")
    })
    form.parse(req)
}

function upload(req,resp){
    if(!isformData(req)){
        resp.statusCode = 400;
        resp.end("bad request:expecting multipart/form-data")
        return;
    }
    const form = formidable({
        uploadDir:resolve(__dirname,"files"),
        keepExtensions:true,
    });
    // console.log(resolve(__dirname,"files"))
    // console.log(os.tmpdir())
    form.parse(req,(err,fields,files) => {
        // console.log(fields)
        // console.log(files)
        resp.end("upload complete!")
    })

    form.on("progress",(bytesReceived,bytesExpected) => {
        const percent = Math.floor(bytesReceived/bytesExpected*100)
        console.log(percent)
    })
}

function isformData(req){
    const type = req.headers["content-type"] || "";
    return 0 == type.indexOf("multipart/form-data")
}