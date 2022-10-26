import express from "express"
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer"

const server = express()

server.get("/",(req,resp) => {
    const app = createSSRApp({
        data:() => ({count:1}),
        template: `<button @click="count++">{{ count }}</button>`
    })

    renderToString(app).then(html => {
        resp.send(`
        <!Doctype html>
        <html>
            <head>
                <title>Vue SSR</title>
            </head>
            <body>
                <div id="app">${html}</div>
            </body>
        </html>
        `)
    })

})

server.listen(3000,() => console.log("ssr starting..."))



