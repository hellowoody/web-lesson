import {Express} from "express"
import * as api from "./api"
import {checkToken} from "./middleware/token"
import {uploadImg,uploadProductImg} from "./middleware/upload"

export const useRouter = (app:Express) => {
    app.get("/",(req,resp) => resp.send("hello ts"))

    app.get("/pingdb",api.PingDb)

    // curl -X POST http://localhost:3000/search 
    app.post("/search",api.Search)

    app.post("/api/register",api.Register)

    app.post("/api/login",api.Login)

    app.post("/api/loginbystate",api.LoginByState)

    app.post("/api/addcart",checkToken,api.AddCart)

    app.post("/api/removecart",checkToken,api.RemoveCart)

    app.post("/api/removecartsingle",checkToken,api.RemoveCartSingle)

    app.post("/api/uploadimg",uploadImg.single("file"),checkToken,api.UploadImg)

    app.post("/api/createorder",checkToken,api.CreateOrder)

    app.post("/api/createorderbytx",checkToken,api.CreateOrderByTx)

    app.post("/api/modifyproduct",uploadProductImg.single("file"),api.ModifyProduct)

}