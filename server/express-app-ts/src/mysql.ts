import {createConnection,createPool} from 'mysql';
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

export const Do = (sql:any,params?:any) => {
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if (err) reject(err)
            connection.query(sql,params,(err,rows)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                    connection.release();
                }
            })
        })
    })
}

export const FindFrist = (sql:any,params?:any)=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if (err) reject(err)
            connection.query(sql,params,(err,rows)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(rows.length > 0 ? rows[0] : null)
                    connection.release();
                }
            })
        })
    })
}

// export const DoTx = (...p : Promise<any>[])=>{
//     return new Promise((resolve,reject)=>{
//         connection.beginTransaction(err => {
//             if (err) { reject(err) }
  
//             Promise.all(p)
//             .then(()=>{
//                 connection.commit(function(err) {
//                     resolve()
//                 })
//             })
//             .catch((error)=>{
//                 return connection.rollback(function() {
//                     reject(error)
//                 });
//             })
//         }) 
//     })
// }