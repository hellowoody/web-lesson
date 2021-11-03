import {Connect} from "./db/Mongo"
import moment from "moment";
import {MD5} from "crypto-js";

export const Hello = (parent:any,args:any) => {
    return "hello graphql"
}

export const Good = async (parent:any,args:any) => {
    try {
        const client = await Connect();
        try {
            const db = client.db("shop_app"); // 找到数据库
            const query:any = {
                id:args.id
            };
            const result = await db.collection("goods").findOne(query)
            return result
        } catch (e) {
            return e
        } finally {
            client.close();
        }
    } catch (error) {
        return error
    }
}

export const Goods = async (parent:any,args:any) => {
    try {
        const client = await Connect();
        try {
            const db = client.db("shop_app"); // 找到数据库
            const query:any = {};
            if (args.type) query.type = { $in:args.type }  // 语法糖的写法
            if (args.name) {
                query.name = {
                    $regex:args.name
                }
            } 
            // db.表名.find(json对象形式的查询语句)
            // db.goods.find({type:"03"}) 根据类型查 很多条记录 思考：能不能从中取出n条数据
            // db.goods.find({type:"03"}).limit(n) 可以使用limit 过滤出n条记录
            // db.goods.find({type:"03"}).limit(n).skip(start) 可以利用limit skip这两个方法达到从几条到第几条的数据的效果
            const result = await db.collection("goods").find(query).skip(args.start).limit(args.count).toArray()
            return result
        } catch (e) {
            return e
        } finally {
            client.close();
        }
    } catch (error) {
        return error
    }
}

export const Categorys = async (parent:any,args:any) => {
    try {
        const client = await Connect();
        try {
            const db = client.db("shop_app"); // 找到数据库
            // 下面写的是mongodb的一种特殊查询语法,aggregate一般用在嵌套的数据结构，而且你还想查询或返回内层的数据
            const aggregate:any = [
                {$unwind:"$items"},
                {$match:{
                    // id:"goods_type",
                    id:args.id,
                    "items.id":{
                        $in:args.type
                    }
                }},
                {$project:{"items":1}}
            ]
            const result = await db.collection("dict").aggregate(aggregate).toArray()
            const res:any = [];
            result.forEach((item)=>{
                res.push(item.items)
            })
            return res
        } catch (e) {
            return e
        } finally {
            client.close();
        }
    } catch (error) {
        return error
    }
}

export const goodsCategory = async (parent:any,args:any) => {
    /*
        上一步的结果是
        [
            { id: '03', name: '鞋类', sort: '1' },
            { id: '04', name: '潮服', sort: '4' }
        ]
    */ 
    // console.log(parent) // 上一步的结果迭代的某一个值 { id: '03', name: '鞋类', sort: '1' } or { id: '04', name: '潮服', sort: '4' }
    try {
        const client = await Connect();
        try {
            const db = client.db("shop_app"); // 找到数据库
            const query:any = {
                type:parent.id
            };
            const result = await db.collection("goods").find(query).skip(args.start).limit(args.count).toArray()
            return result
        } catch (e) {
            return e
        } finally {
            client.close();
        }
    } catch (error) {
        return error
    }
}

export const goodtype = async (parent:any,args:any) => {
    // console.log(parent) // 上一步的结果
    try {
        const client = await Connect();
        try {
            const db = client.db("shop_app"); // 找到数据库
            // 下面写的是mongodb的一种特殊查询语法,aggregate一般用在嵌套的数据结构，而且你还想查询或返回内层的数据
            const aggregate:any = [
                {$unwind:"$items"},
                {$match:{
                    id:args.id,
                    "items.id":parent.type
                }},
                {$project:{"items":1}}
            ]
            const result = await db.collection("dict").aggregate(aggregate).toArray()
            return result[0].items;
        } catch (e) {
            return e
        } finally {
            client.close();
        }
    } catch (error) {
        return error
    }
}

export const userOrder = async (parent:any,args:any) => {
    try {
        const client = await Connect();
        try {
            const db = client.db("shop_app"); // 找到数据库
            const query:any = {
                userid:args.userid
            }
            const result = await db.collection("order").find(query).skip(args.start).limit(args.count).toArray()
            return result;
        } catch (e) {
            return e
        } finally {
            client.close();
        }
    } catch (error) {
        return error
    }
}

export const orderstatus = async (parent:any,args:any) => {
    try {
        const client = await Connect();
        try {
            const db = client.db("shop_app"); // 找到数据库
            // 下面写的是mongodb的一种特殊查询语法,aggregate一般用在嵌套的数据结构，而且你还想查询或返回内层的数据
            const aggregate:any = [
                {$unwind:"$items"},
                {$match:{
                    id:args.id,
                    "items.id":parent.status
                }},
                {$project:{"items":1}}
            ]
            const result = await db.collection("dict").aggregate(aggregate).toArray()
            return result[0].items;
        } catch (e) {
            return e
        } finally {
            client.close();
        }
    } catch (error) {
        return error
    }
}

export const countGood = async (parent:any,args:any) => {
    return parent.details.length
}

export const formatOrderdate = async (parent:any,args:any) => {
    return moment(parent.sysdate).format("yyyy-MM-DD HH:mm:ss");
}

export const setGood = async (parent:any,args:any) => {
    try {
        // 1.连接mongodb
        const client = await Connect();
        try {
            // 2.获取前台传的参数
            // console.log(args)
            let date = new Date();
            let id = args.id ? args.id : MD5(date.getUTCMilliseconds().toString()).toString()
            const record:any = {
                id,
                name:args.name,
                price:args.price,
                count:args.count,
                type:args.type,
                imgpath:args.imgpath,
                sysdate:args.publishDate
            }
            // 3.切换数据库
            const db = client.db("shop_app")
            // 4.执行增删改的操作
            const result = await db.collection("goods").updateOne(
                {id:id},
                {$set:record},
                {upsert:true}
            )
            const res:any = {}
            if(result.result.ok === 1 && result.result.n === 1){
                res.id = id
            }else{
                res.id = ""
            }
            return res
        } catch (error) {
            return error
        } finally {
            client.close();
        }
    } catch (error) {
        return error
    }
}

