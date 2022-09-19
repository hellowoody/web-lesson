import {Request,Response} from "express";
import {Connect} from "./db/mongo";

/*
    Post请求无论是成功还是失败
    我们都返回给页面同一个数据结构
    {
        code:1     2        3     
        msg:成功   没有权限   没有登陆
        data:
    }

    restful post
*/
export const Search = async (req:Request,resp:Response) => {
    // 获取post请求的参数
    const params = req.body;
    try {
        const client = await Connect()
        const db = client.db("twelve_weeks");
        const query:any = {
            name:{
                $regex:params.searchContent
            }
        }
        const res = await db.collection("goods").find(query).toArray()
        resp.send({
            code:1,
            msg:"成功",
            data:res
        })
    } catch (err) {
        resp.send({
            code:2,
            msg:"数据库查询失败",
            data:err
        })
    }
    // resp.header("Access-Control-Allow-Origin", "*"); // 这么写比较方便，但安全性太差
    // resp.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173"); 
    // resp.send(["abc1","123","汉堡1","衣服2","可乐3"])
}

// async-await
export const PingDb = async (req:Request,resp:Response) => {
    try {
        // 连接数据库时异步
        const client = await Connect()
        // 切换数据库是同步
        const db = client.db("twelve_weeks")    // use twelve_weeks
        // ping一下数据库是否能正常的读取
        const res = await db.command({ping:1})  // db.runCommand({ping:1})
        console.log(res)
        if(res.ok === 1){
            resp.send("mongo connect success")
        }else{
            resp.send("mongo connect failed")
        }
    } catch (e) {
        console.log(e)
        resp.send("数据库连接失败")
    }
}
