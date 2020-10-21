import WebSocket from 'ws';
import http from 'http';

const wsInstance = (server:http.Server)=>{
    const wss = new WebSocket.Server({
        path:"/ws",
        server
    });
    wss.on('connection',ws => {
        ws.on('message',message => {
            console.log('接收到的消息: %s', message);
        })
        ws.on('close',()=>console.log("当前在线人数减少一位."))
    })
}

export default wsInstance