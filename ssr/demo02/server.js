import express from "express"
import { renderToString } from "vue/server-renderer"
import { createApp } from "./app.js"

const server = express()

server.get("/",(req,resp) => {
    const app = createApp()

    renderToString(app).then(html => {
        resp.send(`
        <!Doctype html>
        <html>
            <head>
                <title>Vue SSR</title>
                <script type="importmap">
                    {
                        "imports":{
                            "vue":"https://unpkg.com/vue@3/dist/vue.esm-browser.js"
                        }
                    }
                </script>
                <script type="module" src="./client.js"></script>
            </head>
            <body>
                <div id="app">${html}</div>
            </body>
        </html>
        `)
    })

})
server.use(express.static("."))

server.listen(3000,() => console.log("ssr starting..."))



