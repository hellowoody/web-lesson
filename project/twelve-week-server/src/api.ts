import {Connect} from "./db/Mongo"
import {MD5} from "crypto-js";

/*
    1.nodejs -> express (基于nodejs封装了一套很好的http请求和返回的api)
    2.后端返回给页面信息，resp的最常用的两个方法返回页面，send和json
*/

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
    const p = req.body // {id:1,pwd:2,role:"admin|null|undefined|''"}
    if(p.role === "admin" && p.id !== "admin"){
        resp.json({
            code:4,
            msg:"权限不足",
            data:""
        })
        return
    }
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
        /*
            1.测试这个分支是否走的通
            2.结果发现两个问题
                a.resp.send 拼写错误
                b.当拼写改正之后，这个分支开始走不通
            3.为什么这个分支没有正常的返回给页面
                因为页面与后台的超时时间 和 后台与mongodb的超时时间 矛盾了，导致页面没有正常拿到返回值
                解决方案：调整这两个时间就行，让它们合理
        */ 
        resp.send({
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
        resp.send({
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
        resp.send({
            code:-1,
            msg:"数据库连接失败",
            data:""
        })
    }
}

export const CreateOrder = async (req:any,resp:any) => {
    // 1.拿到页面传来的参数
    const p = req.body // {details:[],userid:""} object
    try {
        // 2.连接数据库
        const client = await Connect();
        // 3.切换数据库
        const db = client.db("shop_app");
        // 4.通过db创建订单 = 插入数据
        const date = new Date()
        p.id = MD5(date.getUTCMilliseconds().toString()).toString()
        p.status = "1";
        p.sysdate = new Date()
        const res = await db.collection("order").insertOne(p)
        // console.log(res)
        if(res.insertedCount === 1){
            resp.json({
                code:1,
                msg:"创建成功",
                data:{}
            })
        }else{
            resp.json({
                code:2,
                msg:"创建订单失败",
                data:{}
            })
        }
    } catch (error) {
        resp.send({
            code:-1,
            msg:"连接数据库失败",
            data:{}
        })
    }
    
}
