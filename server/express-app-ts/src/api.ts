import crypto from 'crypto'
import {Do,DoNoConn,DoTx,FindFrist} from './mysql'

export const rootApi = (req:any,resp:any)=>{
    console.log(req.query.a)
    resp.send("hello world!")
}
export const defaultApi = (req:any,resp:any)=>{
    resp.send("hello api")
}

export const login = async (req:any,resp:any)=>{
    let p = req.body
    let res = await FindFrist("select * from user where id = ? ",[p.id])
    /**
     userid password
    userid 去数据库查询 查看是否存在这个用户
        存在: 拿到数据库中存储的密码，然和发送来的参数中的密码进行比较
            相同: 需要把用户的一些完整信息和token(身份认证)返回给前台
            不相同: 直接返回前端 并发送消息“密码错误”
        不存在：直接返回前端 并发送消息“无此用户/请注册”
    */
    if(res){
        let jsonObj = JSON.parse(JSON.stringify(res))
        if(p.pwd === jsonObj.pwd){
            let md5 = crypto.createHash('md5')
            let token = md5.update(jsonObj.id+jsonObj.pwd).digest('hex');
            resp.json({
                code:1,
                msg:"登陆成功",
                data:{
                    userId:jsonObj.id,
                    userName:jsonObj.name,
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
}

export const register = async (req:any,resp:any)=>{
    let p = req.body
    try {
        let res = await Do("insert into user values (?,?,?) ",[p.mail,p.username,p.pwd])
        let jsonObj = JSON.parse(JSON.stringify(res))
        if (jsonObj.affectedRows === 1) {
            resp.json({
                code:1,
                msg:"注册成功",
                data:""
            })
        }else{
            resp.json({
                code:2,
                msg:"注册失败(未知原因)",
                data:""
            })
        }
    } catch (error) {
        resp.json({
            code:3,
            msg:"注册失败",
            data:{
                error
            }
        })
    }
}

export const goods = async (req:any,resp:any)=>{
    let p = req.body
    try {
        let res = await Do("select * from goods where type = ? and name like '%"+p.name+"%' and gooddesc like '%"+p.desc+"%' ",[p.type])
        resp.json({
            code:1,
            msg:"",
            data:res
        })
    } catch (error) {
        resp.json({
            code:3,
            msg:"失败",
            data:{
                error
            }
        })
    }
    
}

export const visitedgood = async (req:any,resp:any)=>{
    const p = req.body
    const res = await FindFrist("select * from user_actions where userid =? and goodid =? and type = 1 ",[p.userid,p.goodid])
    let jsonObj = JSON.parse(JSON.stringify(res))  // 深拷贝  JSON.parse()  JSON.stringify()
    if (jsonObj && jsonObj.visitedcount) {
        let visitedcount = jsonObj.visitedcount + 1
        Do("update user_actions set visitedcount = ? where userid =? and goodid =? and type = 1  ",[visitedcount,p.userid,p.goodid])
    }else{
        Do("insert into user_actions (userid,goodid,type,visitedcount,sysdate) values (?,?,?,?,(select now())) ",[p.userid,p.goodid,1,1])
    }
    resp.json({
        code:1,
        msg:"成功",
        data:{}
    })
}

export const test2main = async (req:any,resp:any)=>{

    const p = req.body

    try {
        let res = await DoTx((conn)=>{
            let a = DoNoConn({
                conn,
                sql:"insert into test_main1 values (?,?) " , 
                params:[p.table1.id,p.table1.name]
            })
            let b = DoNoConn({
                conn,
                sql:"insert into test_main2 values (?,?) ",
                params:[p.table2.id,p.table2.name]
            })
            return [a,b]
        })
        resp.json(res)
    } catch (e) {
        resp.json(e)
    }
}

export const testmainlist = async (req:any,resp:any)=>{
    const p = req.body

    try {
        let res = await DoTx((conn)=>{
            let md5 = crypto.createHash('md5')
            let id = md5.update(p.main).digest('hex');
            let a = DoNoConn({
                conn,
                sql:"insert into test_main values (?,?) ",
                params:[id,p.main]
            }).then((res)=>{

                let arr :any[]= []
                for (let item of p.list) {
                    arr.push(DoNoConn({
                        conn,
                        sql:"insert into test_main_list values (?,?,?) ",
                        params:[item.id,id,item.name]
                    }))
                }
                return Promise.all(arr)
            })
            return [a]
        })
        resp.json(res)
    } catch (e) {
        resp.json(e)
    }
}