import {Request,Response} from "express"
import {createClient} from "./db/mongo"
import config from "./config.json"
import jwt from "jsonwebtoken"
import moment from "moment"

export const ping = (req:Request,resp:Response) => {
    resp.send("pong")
}

export const pingdb = async (req:Request,resp:Response) => {
    const client = createClient()
    try {
        const db = client.db("weeks12")       // use 数据库名字
        const res = await db.command({ping:1}) //db.runCommand({ping:1})
        if(res && res.ok && res.ok === 1){
            resp.send("db connect ok")
        }else{
            resp.send("db connect fail")
        }
    } catch (error) {
        resp.json(error)
        // resp.send((<Error>error).message)
    } finally {
        await client.close()
    }
}

export const register = async (req:Request,resp:Response) => {
    const p = req.body
    try {
        const client = createClient()
        try {
            const db = client.db("weeks12");
            const query = {
                id:p.id
            }

            const insert = {
                ...p,
                status:1,
                avatar:"mockavatar.png",
                role:"customer",
            }

            const options = {
                upsert:true
            }

            const res = await db.collection("user").updateOne(query,{
                // "$setOnInsert":insert,     // 存在不操作，不存在则新增
                "$set":insert,                // 存在则更新，不存在则新增
            },
            options)
            if(res.upsertedCount === 1){
                resp.json({
                    code:1,
                    msg:"注册成功",
                    data:{}
                })
            }else if(res.upsertedCount === 0 && res.matchedCount > 0 && res.modifiedCount > 0){
                resp.json({
                    code:1,
                    msg:"重新注册成功",
                    data:{}
                })
            }else {
                resp.json({
                    code:3,
                    msg:"未知原因,注册失败",
                    data:{}
                })
            }
        } catch (err:any) {
            console.log(err)
            resp.json({
                code:2,
                msg:"注册失败",
                data:{}
            })
        }finally{
            client.close()
        }
    } catch (error) {
        console.log(error)
        resp.json({
            code:4,
            msg:"数据库连接失败",
            data:{}
        })
    }
    
}

export const login = async (req:any,resp:any) => {
    const p = req.body
    try {
        const client = createClient()
        try {
            const db = client.db("weeks12")
            const query = {
                id:p.id,
            }
            const user = await db.collection("user").findOne(query)
            if(user){
                if(user.role !== p.role){
                    resp.json({
                        code:6,
                        msg:"用户的权限不符",
                        data:{}
                    })
                    return
                }
                if(user.pwd === p.pwd){
                    const prefix = config.protocal+"://"+config.ip+":"+config.port+config.imgs_url+"/"
                    /*
                        const token = `${user.id},2023-10-31`
                        const token_base64 = Buffer.from(token)
                        console.log(token_base64)
                    */
                    // const token = jwt.sign({id:user.id},"hello",{expiresIn:10}) // 10s
                    const token = jwt.sign({id:user.id},config.secretOrPrivateKey,{expiresIn:"24h"})

                    resp.json({
                        code:1,
                        msg:"登录成功",
                        data:{
                            id:user.id,
                            username:user.username,
                            avatar:prefix+user.avatar,
                            role:user.role,
                            token
                            // token:token_base64.toString('base64')
                        }
                    })
                }else{
                    resp.json({
                        code:5,
                        msg:"密码错误",
                        data:{}
                    })
                }
            }else{
                resp.json({
                    code:3,
                    msg:"无此用户",
                    data:{}
                })
            }
        } catch (err) {
            console.log(err)
            resp.json({
                code:2,
                msg:"登陆失败",
                data:{}
            })
        } finally {
            client.close()
        }
    } catch (error) {
        console.log(error)
        resp.json({
            code:4,
            msg:"数据库连接失败",
            data:{}
        })
    }
}

export const uploadImg = async (req:Request,resp:Response)=>{
    const p = req.body
    const file = req.file 
    try {
        const client = createClient()
        try {
            const db = client.db("weeks12")
            const query = {
                id:p.userId,
            }
            const avatarPath = file ? "./avatar/"+file.filename : "mockavatar.png"
            const insert = {
                avatar:avatarPath
            }

            const options = {
                upsert:false   // 存在则更新，不存在不更新
            }

            const res = await db.collection("user").updateOne(query,{
                "$set":insert,                
            },
            options)
            if(res.modifiedCount === 1 && res.matchedCount === 1 ){
                const prefix = config.protocal+"://"+config.ip+":"+config.port+config.imgs_url+"/"
                resp.json({
                    code:1,
                    msg:"上传成功",
                    data:{
                        avatar:prefix + avatarPath
                    }
                })
            }else{
                resp.json({
                    code:2,
                    msg:"上传失败",
                    data:{}
                })
            }
        } catch (err) {
            resp.json({
                code:3,
                msg:"数据库更新异常",
                data:{}
            })
        }
    } catch (e) {
        console.log(e)
        resp.json({
            code:4,
            msg:"数据库连接失败",
            data:{}
        })
    }
}

export const modifyCart = async (req:Request,resp:Response) => {
    const p = req.body
    try {
        const client = createClient()
        try {
            const db = client.db("weeks12")
            const query = {
                id:p.good.id,
                userId:p.userId
            }
            delete p.good.count
            delete p.good.checked  // 把页面中为复选框服务的checked 属性删掉
            const insert = {
                ...p.good,
                userId:p.userId,
                sysdate:new Date()
            }

            const update = {
                count:p.ifIncrease ? 1 : -1
            }

            const options = {
                upsert:true   // 存在则更新，不存在则新增
            }
            /*
                1.用户该商品第一次加入购物车 (INSERT)
                2.用户的购物车中有该商品，修改该条记录的count的值 （UPDATE）
            */
            const res = await db.collection("cart").updateOne(query,{
                "$setOnInsert":insert,         // 存在不操作，不存在则新增
                // "$set":insert,              // 存在则更新，不存在则新增
                "$inc":update             
            },
            options)
            // 插入一条 或者 修改一条
            if(res.upsertedCount === 1 || res.modifiedCount === 1){
                resp.json({
                    code:1,
                    msg:"添加成功",
                    data:{}
                })
            }else{
                resp.json({
                    code:2,
                    msg:"添加失败",
                    data:{}
                })
            }

        } catch (err:any) {
            resp.json({
                code:3,
                msg:err.message,
                data:{}
            })
        }
    } catch (e) {
        console.log(e)
        resp.json({
            code:4,
            msg:"数据库连接失败",
            data:{}
        })
    }
}

export const removeItemCart = async (req:Request,resp:Response) => {
    const p = req.body
    try {
        const client = createClient()
        try {
            const db = client.db("weeks12")
            const filter = {
                id:p.id,
                userId:p.userId
            }
            const res = await db.collection("cart").deleteOne(filter)
            if(res.deletedCount > 0){
                resp.json({
                    code:1,
                    msg:"删除成功",
                    data:{}
                })
            }else{
                resp.json({
                    code:2,
                    msg:"删除失败",
                    data:{}
                })
            }
        } catch (err:any) {
            console.log(err)
            resp.json({
                code:3,
                msg:err.message,
                data:{}
            })
        }
    }catch (e) {
        console.log(e)
        resp.json({
            code:4,
            msg:"数据库连接失败",
            data:{}
        })
    }
}

export const removeBatchCart = async (req:Request,resp:Response) => {
    const p = req.body
    try {
        const client = createClient()
        try {
            const db = client.db("weeks12")
            const goodIds:any = p.cart.reduce((acc:any,item:any) => {
                acc.push(item.id)
                return acc
            },[])
            const filter = {
                id:{
                    $in:goodIds
                },
                userId:p.userId
            }
            const res = await db.collection("cart").deleteMany(filter)
            if(res.deletedCount > 0){
                resp.json({
                    code:1,
                    msg:"删除成功",
                    data:{}
                })
            }else{
                resp.json({
                    code:2,
                    msg:"删除失败",
                    data:{}
                })
            }
        } catch (err:any) {
            console.log(err)
            resp.json({
                code:3,
                msg:err.message,
                data:{}
            })
        }
    }catch (e) {
        console.log(e)
        resp.json({
            code:4,
            msg:"数据库连接失败",
            data:{}
        })
    }
}

export const createOrder = async (req:Request,resp:Response) => {
    const p = req.body
    try {
        const client = createClient()
        const id = "OR"+Date.now()
        try {    
            const db = client.db("weeks12")
            const order = {
                ...p.order,
                id,
                createTime:moment().format("YYYY-MM-DD HH:mm:ss"),
                sysdate:new Date()
            }
            const res = await db.collection("order").insertOne(order)
            if(res.acknowledged){
                resp.json({
                    code:1,
                    msg:"创建订单成功",
                    data:{
                        id
                    }
                })
            }else{
                resp.json({
                    code:2,
                    msg:"创建订单失败",
                    data:{}
                })
            }
        } catch (err:any) {
            console.log(err)
            resp.json({
                code:3,
                msg:err.message,
                data:{}
            })
        }
    } catch (e) {
        console.log(e)
        resp.json({
            code:4,
            msg:"数据库连接失败",
            data:{}
        })
    }
}

export const modifyGood = async (req:Request,resp:Response) => {
    const p = req.body
    const file = req.file
    try {
        const client = createClient()
        try {
            const db = client.db("weeks12")
            const id = p.id === "" ? "GO"+Date.now() : p.id

            const query = {
                id
            }
            
            const insert = {
                id
            }

            delete p.id
            console.log("file",file)
            const update = {
                ...p,
                imgpath:file?.path.substring(14)
            }
            if(!file){
                delete update.imgpath
            }

            const options = {
                upsert:true   // 存在则更新，不存在则新增
            }
            /*
                1.用户该商品第一次加入购物车 (INSERT)
                2.用户的购物车中有该商品，修改该条记录的count的值 （UPDATE）
            */
            const res = await db.collection("goods").updateOne(query,{
                "$setOnInsert":insert,         // query 没有匹配到，会将insert update 里面所有属性进行插入
                "$set":update,                 // query 匹配到 只会执行update中的内容进行覆盖
            },
            options)
            // 插入一条 或者 修改一条
            if(res.upsertedCount === 1 ){
                resp.json({
                    code:1,
                    msg:"添加成功",
                    data:{}
                })
            }else if(res.modifiedCount === 1){
                resp.json({
                    code:1,
                    msg:"更新成功",
                    data:{}
                })
            }
            else{
                resp.json({
                    code:2,
                    msg:"添加失败",
                    data:{}
                })
            }

        } catch (err:any) {
            resp.json({
                code:3,
                msg:err.message,
                data:{}
            })
        }
    } catch (e) {
        console.log(e)
        resp.json({
            code:4,
            msg:"数据库连接失败",
            data:{}
        })
    }
}