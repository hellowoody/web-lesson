import {Connect} from "./db/Mongo"
import {MD5} from "crypto-js";

export const RootApi = (req:any,resp:any) => {
    resp.send("这是首页")
}

export const GetList = (req:any,resp:any) => {
    resp.send([
        {n:1},
        {n:2},
        {n:3},
    ])
}

export const GetIf = (req:any,resp:any) => {
    if(req.query.a){
        resp.send("你确实传参数了...")
    }else{
        resp.send("没传！")
    }
}

export const PingDb = async (req:any,resp:any) => {
    try {
        const client = await Connect();
        const db = client.db("test")
        const res = await db.command({ping:1})
        if(res.ok === 1){
            resp.send("mongo connect success")
        }else{
            resp.send("mongo connect failed ")
        }
    } catch (e) {
        console.log(e)
        resp.send("数据库连接失败")
    }
}

export const MockApi = (req:any,resp:any) => {
    console.log("query => ",req.query)
    console.log("params => ",req.params)
    console.log("body => ",req.body)
    console.log("body msg => ",req.body.msg)
    console.log("this is post api")
    // resp.header("Access-Control-Allow-Origin", "*"); 
    // resp.header("Access-Control-Allow-Origin", "127.0.0.1:3000"); 
    resp.json(
        [
            {id:1,menu:"首页"},
            {id:2,menu:"商品列表"},
            {id:3,menu:"个人设置"},
        ]
    )

}

export const MockRole = (req:any,resp:any) => {
    switch(req.body.id){
        case 1 :
            resp.json({
                msg:"首页的权限"
            })
            break;
        case 2 :
            resp.json({
                msg:"商品的权限"
            })
            break;
        case 3:
            resp.json({
                msg:"个人的权限"
            })
            break;
        default:
            resp.json({
                msg:"没有匹配到"
            })
            break;
    }
}

export const Login = async (req:any,resp:any) => {
    const p = req.body // {id:1,pwd:2}
    try {
        const client = await Connect();
        const db = client.db("shop_app");
        const user = await db.collection("user").findOne({id:p.id});
        if(user){
            if(user.pwd === p.pwd){
                /*
                待实现 
                生成加密后的token 令牌 “信物”
                */
                const token = MD5(p.id+p.pwd).toString()
                resp.json({
                    code:1,
                    msg:"登陆成功",
                    data:{
                        userId:user.id,
                        userName:user.name,
                        imgpath:user.imgpath,
                        token
                    }
                })
            }else{
                resp.json({
                    code:2,
                    msg:"密码不正确",
                    data:""
                })
            }
        }else{
            resp.json({
                code:3,
                msg:"无此用户",
                data:""
            })
        }
    } catch (error) {
        console.log(error)
        resp.rend({
            code:-1,
            msg:"数据库连接失败",
            data:""
        })
    }
}

export const Register = async (req:any,resp:any) => {
    const p = req.body // {username:0,id:1,pwd:2}
    try {
        const client = await Connect();
        const db = client.db("shop_app");
        const res = await db.collection("user").insertOne({
            _id:p.id,
            id:p.id,
            pwd:p.pwd,
            name:p.username,
            imgpath:""
        });
        // console.log(res)
        if(res.insertedCount === 1){
            resp.json({
                code:1,
                msg:"注册成功",
                data:""
            })
        } else {
            resp({
                code:2,
                msg:"注册失败(未知原因)",
                data:""
            })
        }
    } catch (error) {
        console.log(error)
        resp.rend({
            code:-1,
            msg:"数据库连接失败",
            data:""
        })
    }
}

export const UploadAvatar = async (req:any,resp:any) => {
    const {file,body} = req
    console.log("上传后的文件名:" + file.filename);
    console.log("上传者的用户名:" + body.userid);
    try {
        const client = await Connect();
        const db = client.db("shop_app");
        const query:any = {
            id:body.userid
        }
        const update:any = {
            $set:{
                imgpath:file.filename
            }
        }
        const res = await db.collection("user").updateOne(query,update)
        // console.log(res)
        if(res.result.ok === 1 && res.result.n === 1){
            resp.json({
                code:1,
                msg:"上传成功",
                data:{
                    filename:file.filename
                }
            })
        }else{
            resp.json({
                code:2,
                msg:"上传失败(未知原因)",
                data:""
            })
        }
    } catch (error) {
        resp.rend({
            code:-1,
            msg:"数据库连接失败",
            data:""
        })
    }
}
