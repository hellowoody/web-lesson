import {connect} from "./index.js"

export const get = async (filename) => {
    try {
        const client = await connect()
        const db = client.db("four_week")                  // use db_name
        const result = db.collection(filename).find()    // db.filename.find()
        const list = await result.toArray()
        return list
    } catch (error) {
        return error
    }
}

export const update = async (filename,list) => {
    try {
        const client = await connect()
        const db = client.db("four_week")
        // 先删除后插入
        await db.collection(filename).deleteMany({})
        if(list.length > 0) {
            await db.collection(filename).insertMany(list)
        }
    } catch (error) {
        console.log(error)
        throw(error)
    }
}

