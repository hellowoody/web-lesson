import {MongoClient} from "mongodb";

const uri = "mongodb://localhost:27017";

const options = {
    useUnifiedTopology:true
}

export const connect = () => {
    return new Promise((resolve,reject) => {
        MongoClient.connect(uri,options,(err,client) => {
            if(err){
                reject(err)
            }else{
                resolve(client)
            }
        })
    })
}