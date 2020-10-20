import {Express} from 'express'
import * as api from './api'
import * as middleware from './middleware'

export const router = (app : Express)=>{
    
    app.get("/",api.rootApi)

    app.get("/api",api.defaultApi)

    app.post("/api/login",api.login)

    app.post("/api/register",api.register)

    app.post("/api/goods",api.goods)

    app.post("/api/visitedgood",api.visitedgood)

    app.post("/api/goodaddcart",api.goodaddcart)

    app.post("/api/createorder",api.createorder)

    app.post("/api/resetcart",api.resetcart)

    app.post("/api/upload",middleware.upload.single("file"),api.upload)

    app.post("/api/test2main",api.test2main)

    app.post("/api/testmainlist",api.testmainlist)
}