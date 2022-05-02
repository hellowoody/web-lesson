import { createReadStream } from "fs";
import http from "http";
import { dirname, join } from "path";
import { fileURLToPath, URL } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const port = 3000

http.createServer((req,resp) => {
    const u = new URL(req.url,`http://localhost:${port}`)
    const filename = join(__dirname,"public",u.pathname)
    createReadStream(filename).pipe(resp)

}).listen(port,() => console.log(`todo list server is listening ${port} port,\nu can visted url : http://localhost:${port}/index.html`))