import {Express} from "express"
import * as api from "./api"
import {checkToken} from "./middleware/token"
import {uploadImg} from "./middleware/upload"

export const useRouter = (app:Express) => {
    app.get("/",(req,resp) => resp.send("hello ts"))

    app.get("/pingdb",api.PingDb)

    // curl -X POST http://localhost:3000/search 
    app.post("/search",api.Search)

    app.post("/api/register",api.Register)

    app.post("/api/login",api.Login)

    app.post("/api/loginbystate",api.LoginByState)

    app.post("/api/addcart",checkToken,api.AddCart)

    app.post("/api/uploadimg",uploadImg.single("file"),checkToken,api.UploadImg)
}