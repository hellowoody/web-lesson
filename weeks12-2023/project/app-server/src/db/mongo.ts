import {MongoClient} from "mongodb";
import config from "../config.json"
// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6
// mongodb://localhost:27017/
// const uri = "mongodb://127.0.0.1:27017"
// const uri = "mongodb://0.0.0.0:27017" 
const uri = config.db_url

const options = {
    serverSelectionTimeoutMS:10000, // 10s
}

export const createClient = () => {
    return new MongoClient(uri,options)
}