import {Connect} from "./db/Mongo"

export const Hello = (parent:any,args:any) => {
    return "hello graphql"
}

export const Goods = async (parent:any,args:any) => {
    try {
        const client = await Connect();
        try {
            const db = client.db("shop_app"); // 找到数据库
            // db.表名.find(json对象形式的查询语句)
            // db.goods.find({type:"03"}) 根据类型查 很多条记录 思考：能不能从中取出n条数据
            // db.goods.find({type:"03"}).limit(n) 可以使用limit 过滤出n条记录
            // db.goods.find({type:"03"}).limit(n).skip(start) 可以利用limit skip这两个方法达到从几条到第几条的数据的效果
            const result = await db.collection("goods").find().limit(3).skip(0).toArray()
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

