import {Express} from 'express'
import * as api from './api'

export const router = (app : Express)=>{
    
    app.get("/",api.rootApi)

    app.get("/api",api.defaultApi)

    app.post("/api/login",api.login)

    app.post("/api/register",api.register)

    app.post("/api/goods",api.goods)
}