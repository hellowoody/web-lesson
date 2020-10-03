import {app,gql_server} from './server';
// import {connection} from './mysql'
const config = require("../config");

// connection.connect((e)=>{
//     if(e){
//         console.warn("数据库连不上！！！！！！！！！！")
//     }else{
//         console.info("数据库连接成功！")
//     }
// })

app.listen(config.port,()=>console.log(`
***********************************************************************
    express-app-ts start listen port:${config.port};                       
                                                                           
    you can visit url : ${config.url+":"+config.port};                     
                                                                           
    graphql path : ${config.url+":"+config.port+gql_server.graphqlPath}   
***********************************************************************
`))
