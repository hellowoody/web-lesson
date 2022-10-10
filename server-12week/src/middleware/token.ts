import {Request,Response,NextFunction} from "express";
import jwt from "jsonwebtoken"
// 导入commonjs语法的配置文件
const {secretOrPrivateKey} = require("../../config");

export const checkToken = (req:Request,resp:Response,next:NextFunction) => {
    // console.log("校验token是否有效",req.body)
    const p = req.body
    if(p.token){
        try {
            const decoded:any = jwt.verify(p.token,secretOrPrivateKey)
            // console.log("解码之后的内容：",decoded)
            if(decoded.id === p.userId){
                next() // 执行后续的业务api
            }else{
                resp.send({
                    code:102,
                    msg:"非法token,请重新登录",
                    data:{}
                })
            }
        } catch (e:any) {
            resp.send({
                code:102,
                msg:e.message,
                data:{}
            })
        }
    }else{
        resp.send({
            code:101,
            msg:"缺少token,请登录",
            data:{}
        })
    }
    
}