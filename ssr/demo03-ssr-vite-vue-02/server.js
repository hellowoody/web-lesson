import express from "express";
import fs from "fs";
import { resolve,dirname } from "path";
import { fileURLToPath } from "url";

const createServer = async (isProd = process.env.NODE_ENV === "production",hmrPort = 3600,base = "/demo/") => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const app = express()

    let vite;
    let viteDevServer;

    if(!isProd){
        const root = process.cwd();
        vite = await import("vite");
        viteDevServer = await vite.createServer({
            base,
            root,
            logLevel:"error",
            server:{
                middlewareMode:true,
                watch:{
                    usePolling:true,
                    interval:100
                },
                hmr:{
                    port:hmrPort
                }
            },
            appType: 'custom'
        })
        app.use(viteDevServer.middlewares)
    }else{
        app.use((await import("compression")).default())
        app.use(base,express.static("./dist/client"))
    }

    app.use("*",async (req,resp) => {
        try {
            const url = req.originalUrl.replace(base,"/")
            const manifest = isProd ? (await import("./dist/client/ssr-manifest.json", {assert:{type:"json"}})).default : {}

            let template,render;
            if(!isProd){
                template = fs.readFileSync(resolve(__dirname,"index.html"),"utf-8")
                template = await viteDevServer.transformIndexHtml(url,template) // vite将index.html 页面模板编译 修改相关路径
                // ssrLoadModule import 区别 ？ssrLoadModule 可以识别esm import 导入语句
                render = ( await viteDevServer.ssrLoadModule("./src/entry-server.js")).render
            }else{
                template = fs.readFileSync(resolve(__dirname,"dist/client/index.html"),"utf-8")
                render = ( await import("./dist/server/entry-server.js")).render
            }
            const [appHtml,preloadLinks] = await render(url,manifest)
            const html = template
                            .replace("<!--preload-links-->",preloadLinks)
                            .replace("<!--app-html-->",appHtml)

            resp.status(200).set({'Content-Type':"text/html"}).end(html)
        } catch (e) {
            viteDevServer && viteDevServer.ssrFixStacktrace(e)
            console.log(e.stack)
            resp.status(500).end(e.stack)
        }
    })

    return { app,vite }
}

createServer().then(({ app }) => {
    const port = 3000;
    app.listen(port,() => console.log(`ssr server port ${port}`))
})
