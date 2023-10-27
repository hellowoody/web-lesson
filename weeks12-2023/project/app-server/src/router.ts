import {Router,Request,Response} from "express"
import jwt from "jsonwebtoken"
import * as api from "./api";
import { secretOrPrivateKey } from "./config.json"
import { checkToken } from "./middleware/token"
import { uploadImg,uploadGoodImg } from "./middleware/upload"

const router = Router()

router.get("/ping",api.ping)

router.get("/pingdb",api.pingdb)

router.post("/register",api.register)

router.post("/login",api.login)

router.post("/uploadimg",uploadImg.single("file"),checkToken,api.uploadImg)

router.post("/modifycart",checkToken,api.modifyCart)

router.post("/removeitemcart",checkToken,api.removeItemCart)

router.post("/removebatchcart",checkToken,api.removeBatchCart)

router.post("/createorder",checkToken,api.createOrder)

router.post("/modifygood",uploadGoodImg.single("file"),api.modifyGood)

router.post("/test",(req:Request,resp:Response) => {
    console.log(req.body)
    // const buff = Buffer.from(req.body.token,"base64")
    // console.log(buff.toString()) 
    try {
        const decoded = jwt.verify(req.body.token,secretOrPrivateKey)
        console.log(decoded)
        // 我如何证明这一次的请求时已经登陆的用户
        resp.json({
            code:"ok"
        })
    } catch (error:any) {
        resp.json({
            code:"failed",
            msg:error.message
        })
    }
    


    
})

export default router