import {Connect} from "./db/mongo";
const {protocal,ip,port,imgs_url} = require("../config");

export const Good = async (parent:any, args:any) => {
    try {
        const client = await Connect()
        try {
            const db = client.db("twelve_weeks");
            const query:any = {
                id:args.id
            }
            const result = await db.collection("goods").findOne(query)
            return result
        } catch (err) {
            return err
        } finally {
            client.close();
        }
    } catch (e) {
        return e
    }
}

export const Goods = async (parent:any, args:any, context:any, info:any) => {
    // console.log("parent:",parent);
    // console.log("args:",args);
    // console.log("context:",context);
    // console.log("info:",info);
    try {
        const client = await Connect()
        try {
            const db = client.db("twelve_weeks");
            const query:any = {}
            // switch (1===1) {
            //     case args.type != null:
            //         query.type = args.type
            //         break;
            //     case args.name != null:
            //         query.name = {
            //             $regex:args.name
            //         }
            //         break;
            //     default:
            //         break;
            // }
            if(args.type) {
                query.type = args.type
            }
            if(args.name) {
                query.name = {
                    $regex:args.name
                }
            }
            const res = await db.collection("goods").find(query).limit(args.count).skip(args.start).toArray()
            return res
        } catch (err) {
            return err
        } finally {
            client.close()
        }
    } catch (e) {
        return e
    }
}

export const GoodType = async (parent:any, args:any) => {
    try {
        const client = await Connect()
        try {
            const db = client.db("twelve_weeks");
            /*
                {
                    id:1,
                    name:"大类01", // 天津市 北京市 
                    list:[
                        {
                            id:1,
                            name:"小类01" // xx区
                        }，
                        {
                            id:2,
                            name:"小类02"
                        }，
                    ]
                }

                mongodb，想查询出上面的小类的结果数组，需要使用aggregate
            */
    
            const aggregate:any = [
                {$unwind:"$items"},
                {$match:{
                    id:args.id, // 大类的id,
                    "items.id":parent.type
                }},
                {$project:{"items":1}},
            ]
            const res = await db.collection("dict").aggregate(aggregate).toArray()
            return res[0].items
        } catch (err) {
            return err
        } finally {
            client.close()
        }
    } catch (e) {
        return e
    }
}

export const HomeImgs = () => {
    // url 
    const baseUrl = `${protocal}://${ip}:${port}${imgs_url}`
    return [
        baseUrl+"/home01.png",
        baseUrl+"/home02.png",
        baseUrl+"/home03.png",
    ]
}

export const Categorys = async (parent:any, args:any) => {
    try {
        const client = await Connect()
        try {
            const db = client.db("twelve_weeks");
            const aggregate:any = [
                {$unwind:"$items"},
                {$match:{
                    id:args.id, // 大类的id,
                    "items.id":{
                        $in:args.type   // ["03","04"]  id in ("03","04")
                    }
                }},
                {$project:{"items":1}},
            ]
            const result = await db.collection("dict").aggregate(aggregate).toArray()
            const res:any = []
            result.forEach(item => {
                res.push(item.items)
            })
            return res
        } catch (err) {
            return err
        } finally {
            client.close()
        }
    } catch (error) {
        return error
    }
}

export const GoodsCategory = async (parent:any, args:any) => {
    /*
        上一步的结果是
        [
            {id:"03",name:"鞋类"}，
            {id:"04",name:"潮服"}
        ]
        所以这个方法执行时，第一额参数parent的值
        {id:"03",name:"鞋类"}
    */ 
    // console.log("parent:",parent)
    try {
        const client = await Connect()
        try {
            const db = client.db("twelve_weeks");
            const query:any = {
                type:parent.id
            }
            const res = await db.collection("goods").find(query).skip(args.start).limit(args.count).toArray()
            return res
        } catch (err) {
            return err
        } finally {
            client.close()
        }
    } catch (error) {
        return error
    }
}

export const Cart = async (parent:any, args:any, context:any, info:any) => {
    try {
        // console.log(context)
        if(!context.checkToken()){
            throw new Error('非法token');
        }
        
        const client = await Connect()
        try {
            const db = client.db("twelve_weeks");
            const query:any = {
                userId:args.userId
            }
            const res = await db.collection("cart").find(query).toArray()
            return res
        } catch (err) {
            return err
        } finally {
            client.close()
        }
    } catch (e) {
        return e
    }
}

export const OrderList = async (parent:any, args:any, context:any, info:any) => {
    try {
        // console.log(context)
        // if(!context.checkToken()) throw new Error('非法token');

        const client = await Connect()
        try {
            const db = client.db("twelve_weeks");
            const query:any = {
                userId:args.userId
            }
            const res = await db.collection("order").find(query).limit(args.count).skip(args.start).toArray()
            return res
        } catch (err) {
            return err
        } finally {
            client.close()
        }
    } catch (e) {
        return e
    }
}

export const OrderStatus = async (parent:any, args:any) => {
    try {
        const client = await Connect()
        try {
            const db = client.db("twelve_weeks");
    
            const aggregate:any = [
                {$unwind:"$items"},
                {$match:{
                    id:args.id, // 大类的id,
                    "items.id":parent.status
                }},
                {$project:{"items":1}},
            ]
            const res = await db.collection("dict").aggregate(aggregate).toArray()
            return res[0].items
        } catch (err) {
            return err
        } finally {
            client.close()
        }
    } catch (e) {
        return e
    }
}

export const delGood = async (parent:any, args:any) => {
    try {
        const client = await Connect()
        try {
            const db = client.db("twelve_weeks");
            const res = await db.collection("goods").deleteOne({id:args.id})
            // console.log(res)
            if(res.deletedCount > 0){
                return {
                    code:1,
                    msg:"删除成功"
                }
            }else{
                return {
                    code:2,
                    msg:"删除失败"
                }
            }
        } catch (err:any) {
            return {
                code:3,
                msg:err.message
            }
        } finally {
            client.close()
        }
    } catch (e:any) {
        return {
            code:4,
            msg:e.message
        }
    }
}