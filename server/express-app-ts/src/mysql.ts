import {createConnection} from 'mysql';

export const connection = createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "12345678",
    database : "shop-app"
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