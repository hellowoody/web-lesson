import { createRouter as _createRouter,createWebHistory,createMemoryHistory} from "vue-router";

const base = "/demo/"

const pages = import.meta.glob("../pages/*.vue");

// console.log("import.meta.env",import.meta.env)

const routes = Object.keys(pages).map(path => {
    const name = path.match(/\.\.\/pages(.*)\.vue$/)[1].toLowerCase()

    return {
        path:name,
        component:pages[path]
    }
})

routes.unshift({
    path:"/",
    redirect:{path:"/home"}
})

console.log(routes)

export const createRouter = () => {
    return _createRouter({
        // ssr 的场景中，服务器和浏览器都会执行路由index.js文件，在浏览器执行时SSR的状态为true需要调用createMemoryHistory，这个方法中不会使用类似window的对象
        history:import.meta.env.SSR ? createMemoryHistory(base) : createWebHistory(base),
        routes
    })
}