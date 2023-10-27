import {createClient} from "../db/mongo"

export const good = async (parent:any,args:any) => {
    const client = createClient()
    try {
        const db = client.db("weeks12")                    // use weeks12
        const id = args.id
        const query:any = {
            id
        }
    
        const item = await db.collection("goods").findOne(query)

        return item
    } catch (e) {
        return e
    } finally{
        client.close()
    }
}

export const goods = async (parent:any,args:any) => {
    const client = createClient()
    try {
        const db = client.db("weeks12")                    // use weeks12
        const {start,count} = args
        const query:any = {}
        if(args.name){
            query.name = {
                $regex:args.name
            }
        }
        if(args.categoryId){
            query.type = args.categoryId
        }
    
        if(parent && parent.id){
            query.type = parent.id
        }
        const list = await db.collection("goods").find(query).limit(count).skip(start).toArray()
        return list
    } catch (e) {
        return e
    } finally{
        client.close()
    }
}

export const homeCarousel = async () => {
    const client = createClient()
    try {
        // use weeks12
        const db = client.db("weeks12")
        const list = await db.collection("homeCarousel").find().toArray()
        return list
    } catch (err) {
        return err
    } finally {
        client.close()
    }
}

export const categorys = async (parent:any,args:any) => {
    const client = createClient()
    try {
        // use weeks12
        const db = client.db("weeks12")
        const pipeline = [
            {$unwind:"$items"},
            {
                $match:{
                    "id":args.id,             // 大类的id
                    "items.id":{
                        $in:args.type         // 小类的id ["03","04"]
                    }
                }
            },
            {$project:{"items":1}},
        ]
        const list = await db.collection("dict").aggregate(pipeline).toArray()
        // console.log(list)
        const res:any = []
        list.forEach(v => {
            res.push(v.items)
        })
        return res
    } catch (err) {
        return err
    } finally {
        client.close()
    }
}

export const cart = async (parent:any,args:any,context:any) => {
    // console.log("cart>> ",context)
    if(context.code !== 100) throw new Error(context)

    const client = createClient()
    try {
        // use weeks12
        const db = client.db("weeks12")
        const query = {
            userId:args.userId,
        }
        const list = await db.collection("cart").find(query).toArray()
        return list
    } catch (err) {
        return err
    } finally {
        client.close()
    }
}

export const orderList = async (parent:any,args:any,context:any) => {
    // console.log("cart>> ",context)
    if(context.code !== 100) throw new Error(context)

    const client = createClient()
    try {
        // use weeks12
        const db = client.db("weeks12")
        const query = {
            userId:args.userId,
        }
        const list = await db.collection("order")
                                            .find(query)
                                            .limit(args.count)
                                            .skip(args.start)
                                            .toArray()
        return list
    } catch (err) {
        return err
    } finally {
        client.close()
    }
}

export const orderStatusName = async (parent:any,args:any) => {

    const client = createClient()
    try {
        // use weeks12
        const db = client.db("weeks12")
        const pipeline = [
            {$unwind:"$items"},
            {
                $match:{
                    "id":"order_status",             // 大类的id
                    "items.id":parent.status
                }
            },
            {$project:{"items":1}},
        ]
        const list = await db.collection("dict").aggregate(pipeline).toArray()
        return list[0].items.name
    } catch (err) {
        return err
    } finally {
        client.close()
    }
}

export const delGood = async (parent:any,args:any) => {
    const client = createClient()
    try {
        // use weeks12
        const db = client.db("weeks12")
        const query = {id:args.id}
        const res = await db.collection("goods").deleteOne(query)
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
}
