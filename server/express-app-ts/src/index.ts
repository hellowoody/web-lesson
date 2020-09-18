import {app,gql_server} from './server';
import {router} from './router';

const config = require("../config");

router(app)

app.listen(config.port,()=>console.log(`
*********************************************************
    express-app-ts start listen port:${config.port}; \n
    you can visit url : ${config.url+":"+config.port}; \n
    graphql path : ${config.url+":"+config.port+gql_server.graphqlPath}
*********************************************************    
`))
