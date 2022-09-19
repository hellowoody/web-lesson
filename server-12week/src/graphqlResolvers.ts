import {Connect} from "./db/mongo";

export const Goods = async (parent:any, args:any, context:any, info:any) => {
    // console.log("parent:",parent);
    // console.log("args:",args);
    // console.log("context:",context);
    // console.log("info:",info);
    try {
        const client = await Connect()
        try {
            const db = client.db("twelve_weeks");
            const query:any = {
                name:{
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