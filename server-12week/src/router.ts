import {Express} from "express"
import * as api from "./api"

export const useRouter = (app:Express) => {
    app.get("/",(req,resp) => resp.send("hello ts"))

    app.get("/pingdb",api.PingDb)

    // curl -X POST http://localhost:3000/search 
    app.post("/search",api.Search)
}