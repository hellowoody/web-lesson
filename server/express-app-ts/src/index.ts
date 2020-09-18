import {http_server,gql_server} from './server';

const config = require("../config");


http_server.listen(config.port,()=>console.log(`
***********************************************************************
    express-app-ts start listen port:${config.port};                       
                                                                           
    you can visit url : ${config.url+":"+config.port};                     
                                                                           
    graphql path : ${config.url+":"+config.port+gql_server.graphqlPath}   
***********************************************************************
`))
