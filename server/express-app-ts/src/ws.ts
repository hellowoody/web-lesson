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
            try {
                const m_jsonObj= JSON.parse(message.toString())
                if(m_jsonObj.hasOwnProperty("init")){
                    //第一次连接 先不做处理
                }else{
                    // ws.send(`对 ${m_jsonObj.to} 说: ${m_jsonObj.msg}`)
                    wss.clients.forEach(client=>{
                        client.send(`对 ${m_jsonObj.to} 说: ${m_jsonObj.msg}`)
                    })
                }
            } catch (e) {
                console.log(e)
            }
        })
        ws.on('close',()=>console.log("当前在线人数减少一位."))
    })
}

export default wsInstance