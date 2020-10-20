import {Express} from 'express'
import * as api from './api'
import multer from 'multer'
import path from 'path'

//配置multer的内容
const upload = multer({
    storage:multer.diskStorage({
        // destination(req,file,callback){
        //     callback(null,"assets/uploads")
        // },
        destination:"assets/uploads",
        filename(req,file,callback){
            const extname = path.extname(file.originalname)  //获取上传文件名的文件后缀（格式）
            callback(null,Date.now()+extname)
        },
    })
})

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

    app.post("/api/upload",upload.single("file"),api.upload)

    app.post("/api/test2main",api.test2main)

    app.post("/api/testmainlist",api.testmainlist)
}