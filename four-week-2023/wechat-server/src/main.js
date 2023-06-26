import * as http from 'http';
import url from "url"
import {WebSocketServer } from 'ws';
import {app} from "./express-server.js"

const port = 3000
const server = http.createServer(app);
const wss = new WebSocketServer ({ server });

const map = new Map(); // 缓存

wss.on('connection', (ws,req) => {
    var urlObj = url.parse(req.url ,true);
    var query = urlObj.query;
    console.log(query)
    map.set(query.id, ws);
    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {

        //log the received message and send it back to the client
        const msg = JSON.parse(message)
        console.log(msg)
        console.log('received: %s', message);
        // ws.send(`Hello, you sent -> ${message}`);
        const target_ws = map.get(msg.toId)
        target_ws.send(msg.fromId+":"+msg.content)
    });

    //send immediatly a feedback to the incoming connection    
    ws.send('Hi there, I am a WebSocket server');
});

server.listen(port, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});