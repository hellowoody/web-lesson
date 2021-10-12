import {Connect} from "./db/Mongo"

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
