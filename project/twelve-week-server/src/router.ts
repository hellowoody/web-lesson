import {Express} from "express"
import * as api from "./api";
import * as middleware from "./middleware"

export const useRouter = (app:Express) => {
    // app.get("路由匹配的规则,http访问你后台时的路径",callback)
    /*
        request  （请求）: 可以拿到前端向后台请求所有东西
        response （响应）: 将返回值返回给前端
    */
    app.get("/",api.RootApi)

    app.get("/list",api.GetList)  //localhost:3000/list

    app.get("/if",api.GetIf)

    app.get("/pingdb",api.PingDb)

    app.post("/mockapi",api.MockApi)

    app.post("/mockrole",api.MockRole)

    app.post("/api/login",api.Login)

    app.post("/api/register",api.Register)

    app.post("/api/uploadavatar",middleware.upload.single("file"),api.UploadAvatar)

}