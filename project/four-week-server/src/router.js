import * as api from "./api.js"
import ifLogin from "./middleware/ifLogin.js"

export const useRouter = app => {
    
    app.get("/",api.DefaultApi)

    app.post("/queryfood",api.QueryFood)

    app.post("/gooddetail",api.GoodDetail)

    app.post("/hometoplist",api.HomeTopList)

    app.post("/homecards",api.HomeCards)

    app.post("/login",api.Login)

    app.post("/logout",api.Logout)

    app.post("/editaddress",ifLogin,api.EditAddress)

    app.post("/getaddress",ifLogin,api.GetAddress)

}