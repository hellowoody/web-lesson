import {createConnection} from 'mysql';
const config = require("../config");

export const connection = createConnection({
    host : config.db_host,
    user : config.db_user,
    password : config.db_password,
    database : config.db_database
})

export const Do = (sql:any,params?:any) => {
    return new Promise((resolve,reject)=>{
        connection.query(sql,params,(err,rows)=>{
            if(err){
                reject(err)
            }else{
                resolve(rows)
            }
        })
    })
}

export const FindFrist = (sql:any,params?:any)=>{
    return new Promise((resolve,reject)=>{
        connection.query(sql,params,(err,rows)=>{
            if(err){
                reject(err)
            }else{
                resolve(rows.length > 0 ? rows[0] : null)
            }
        })
    })
}