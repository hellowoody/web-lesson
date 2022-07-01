// import {get} from "../db/db.js"
import {get} from "../db/api.js"

export default async (req,resp,next) => {
    const params = req.body
    const tokenId = params.tokenId
    const sessionList = await get("session")
    // console.log(sessionList)
    for(const session of sessionList){
        if(session.tokenId === tokenId){
            const diff = Date.now() - session.actionTime
            const valid_duration = 7*24*60*60*1000; // 单位时毫秒 一周的有效期
            if(diff <= valid_duration){
                req.body.userId = session.userId
                next()
                return
            }
        }
    }
    resp.send({
        data:"登陆失效,重新登陆",
        code:"03"
    })
}