import {app,gql_server} from './server';
import {Ping} from './mysql'
const config = require("../config");

Ping().catch((e)=>{
    console.warn("数据库连不上！！！！！！！！！！")
    console.log(e)
})

app.listen(config.port,()=>console.log(`
***********************************************************************
    express-app-ts start listen port:${config.port};                       
                                                                           
    you can visit url : ${config.url+":"+config.port};                     
                                                                           
    graphql path : ${config.url+":"+config.port+gql_server.graphqlPath}   
***********************************************************************
`))
