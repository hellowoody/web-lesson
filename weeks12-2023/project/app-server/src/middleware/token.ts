import {Request,Response,NextFunction} from "express"
import jwt from "jsonwebtoken"
import {secretOrPrivateKey} from "../config.json"

export const checkToken = (req:Request,response:Response,next:NextFunction) => {
    const p = req.body
    // console.log(">>>>>>>>>>>>>>>",p)
    if(p.token){
        try {
            const decoded:any = jwt.verify(p.token,secretOrPrivateKey)
            if(decoded.id === p.userId){
                next()
            }else{
                response.send({
                    code:103,
                    msg:"非法token,请重新登陆",
                    data:{}
                })
            }
        } catch (err:any) {
            response.send({
                code:102,
                msg:err.message,
                data:{}
            })
        }
    }else{
        response.send({
            code:101,
            msg:"token不存在,请登录",
            data:{}
        })
    }
}