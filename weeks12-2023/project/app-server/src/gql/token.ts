import jwt from "jsonwebtoken"
import {secretOrPrivateKey} from "../config.json"

export const checkToken = (p:any) => {
    const res:any = new Object()
    res.toString = () => {
        // console.log(res)
        return `checkToken:code ${res.code},msg ${res.msg}`
    }
    if(p.token){
        try {
            const decoded:any = jwt.verify(p.token,secretOrPrivateKey)
            if(decoded.id === p.userId){
                res.code = 100
                res.msg = "authenticated" 
                return res
            }else{
                res.code = 103
                res.msg = "非法token,请重新登陆" 
                return res
            }
        } catch (err:any) {
            res.code = 102
            res.msg = err.message
            return res
        }
    }else{
        res.code = 101
        res.msg = "token不存在,请登录"
        return res
    }
}