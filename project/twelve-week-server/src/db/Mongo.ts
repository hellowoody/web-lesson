import {MongoClient} from "mongodb";

// https://docs.mongodb.com/drivers/node/current/fundamentals/connection/
// const uri = "mongodb://username:pwd@url:27017/?authSource=dbname"
const uri = "mongodb://localhost:27017";

// https://github.com/mongodb/node-mongodb-native/releases/tag/v3.2.1
const options = {
    useUnifiedTopology: true
}

export const Connect = () : Promise<MongoClient> => {
    return new Promise((resolve,reject) => {
        // 单例  singleton 
        MongoClient.connect(uri,options,(err,db) => {
            if(err){
                reject(err)
            }else{
                resolve(db)
            }
        })
    })
}
