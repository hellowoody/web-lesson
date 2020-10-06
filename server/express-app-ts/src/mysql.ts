import {createPool,PoolConnection} from 'mysql';
const config = require("../config");

const configDb = {
    connectionLimit : config.db_limit,
    host : config.db_host,
    user : config.db_user,
    password : config.db_password,
    database : config.db_database
}

/*
连接池
*/

const pool = createPool(configDb)

// export const connection = createConnection({
//     host : config.db_host,
//     user : config.db_user,
//     password : config.db_password,
//     database : config.db_database
// })

interface TxCallback {
    (conn:PoolConnection) : Promise<any>[]
}

interface NoConnOptions {
    conn : PoolConnection,
    sql : any,
    params? : any
}

export const Ping = () => {
    return new Promise((reslove,reject)=>{
        pool.getConnection((err,connection)=>{
            if (err){
                reject(err)
            }else{
                connection.ping((e)=>{
                    if (e) {
                        reject(e)
                    }else{
                        console.log("数据库连接成功 ! ")
                        reslove("database response pong ! ")
                    }
                })
            }
        })
    })
}

export const Do = (sql:any,params?:any) => {
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if (err) {
                reject(err)
            }else{
                connection.query(sql,params,(err,rows)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(rows)
                        connection.release();
                    }
                })
            }
        })
    })
}

export const DoNoConn = ({conn,sql,params} : NoConnOptions) => {
    return new Promise((resolve,reject)=>{
        conn.query(sql,params,(err,rows)=>{
            if (err) {
                reject(err)
            }else{
                resolve(rows)
            }
        })
    })

}

export const FindFrist = (sql:any,params?:any) =>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if (err) {
                reject(err)
            }else{
                connection.query(sql,params,(err,rows)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(rows.length > 0 ? rows[0] : null)
                        connection.release();
                    }
                })
            }
        })
    })
}

export const DoTx = (callback : TxCallback)=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if (err) {
                reject(err)
            }else{
                connection.beginTransaction(err => {
                    if (err) { 
                        reject(err) 
                    }else{
                        const p = callback(connection)
                        Promise.all(p)
                            .then(()=>{
                                connection.commit(function(err) {
                                    if (err) {
                                        connection.rollback(()=>console.log("*** this db action rollback! ***"));
                                        reject(err)
                                    }else{
                                        resolve({
                                            code:1
                                        })
                                        connection.release()
                                    }
                                })
                            })
                            .catch((error)=>{
                                connection.rollback(()=>console.log("*** this db action rollback! ***"));
                                reject(error)
                            })
                    }
                }) 
            }
        })
    })
}