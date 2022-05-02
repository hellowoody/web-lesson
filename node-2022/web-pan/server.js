import express from "express";
import {generateDir} from "./generateDir.js"
import {dirname, resolve} from "path"
import {fileURLToPath} from "url"
import { readFileSync } from "fs";
import mammoth from "mammoth";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use("/files",express.static('assets'));

app.get("/dir",(req,resp) => {
    const data = readFileSync(resolve(__dirname,"./dir.json"),"utf-8")
    resp.json(JSON.parse(data))
})

app.get("/getfile",(req,resp) => {
    const filename = req.query.path
    const suffix = filename.slice(filename.lastIndexOf(".") + 1)
    switch (suffix) {
        case "doc":
        case "docx":
            mammoth.convertToHtml({path: req.query.path})
            .then(function(result){
                var html = result.value; // The generated HTML
                // console.log(html)
                resp.send(html)
            })
            .done();
            break;
        case "xls":
        case "xlsx":
            const content = readFileSync(filename)
            resp.send(content)
            break;
        default:
            const data = readFileSync(req.query.path,"utf-8")
            resp.send(data)
            break;
    }
})

app.listen(port,() => console.log(`Server listen on ${port},\nyou can access url: http://localhost:${port}`))
    .on("error",e => console.log(e))

generateDir(resolve(__dirname,"./assets"))