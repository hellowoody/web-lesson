import * as api from "./api.js"

export const useRouter = app => {
    
    app.get("/",api.DefaultApi)

    app.post("/queryfood",api.QueryFood)

    app.post("/hometoplist",api.HomeTopList)

}