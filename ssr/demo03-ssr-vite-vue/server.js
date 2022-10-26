import express from "express";
import { resolve,dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from "fs";

const createServer =  async (isProd = process.env.NODE_ENV === 'production',hmrPort=3600) => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const app = express()

    let vite;

    if(!isProd){
        const root = process.cwd();
        vite = await ( await import("vite")).createServer({
            base: '/test/',
            root,
            logLevel: "error",
            server: {
                middlewareMode: true,
                watch: {
                    // During tests we edit the files too fast and sometimes chokidar
                    // misses change events, so enforce polling for consistency
                    usePolling: true,
                    interval: 100
                },
                hmr: {
                    port:hmrPort
                }
            },
            appType: 'custom'
        })
        app.use(vite.middlewares)
    }else{
        app.use((await import("compression")).default())
        app.use("/test",express.static("./dist/client"))
    }
    
    app.use("*",async (req,resp) => {
        try {
            console.log(req.originalUrl)
            const url = req.originalUrl.replace('/test/', '/')
            const manifest = isProd ? 
                (await import('./dist/client/ssr-manifest.json', {assert: { type: 'json' }})).default : 
                {}
            let template,render;

            if(!isProd){
                template = fs.readFileSync(resolve(__dirname,"index.html"),"utf-8")
                template = await vite.transformIndexHtml(url,template)
                render = ( await vite.ssrLoadModule("/src/entry-server.js")).render
            } else {
                template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
                render = (await import('./dist/server/entry-server.js')).render
            }

            const [appHtml, preloadLinks] = await render(url, manifest)

            const html = template
              .replace(`<!--preload-links-->`, preloadLinks)
              .replace(`<!--app-html-->`, appHtml)

            resp.status(200).set({ 'Content-Type': 'text/html' }).end(html)
        } catch (e) {
            vite && vite.ssrFixStacktrace(e)
            console.log(e.stack)
            resp.status(500).end(e.stack)
        }
    })

    return { app,vite }
}



createServer().then(({ app }) => {
    const port = 3100
    app.listen(port,() => console.log(`http://localhost:${port}`))
})