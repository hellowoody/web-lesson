import {MongoClient,MongoClientOptions} from "mongodb";

const uri = "mongodb://127.0.0.1:27017";

const options:MongoClientOptions = {
    serverSelectionTimeoutMS:10000,// 10s
}

export const Connect = () => new MongoClient(uri,options)