/*
发布-订阅 更实用的一种方式
*/

function PubSub(){
    /*
    subscribers = {
        "eventName":[callback,callback,callback]
    }
    */
    const subscribers = {}  // 调度中心 

    const subscribe = (eventName,callback)=>{
        if (!Array.isArray(subscribers[eventName])) subscribers[eventName] = []

        subscribers[eventName].push(callback)
    }

    const publish = (eventName,data)=>{
        if (!Array.isArray(subscribers[eventName])) return 

        subscribers[eventName].forEach((fn)=>{
            fn(data)
        })
    }

    return {
        subscribe,
        publish
    }
}

function zhang(msg){
    console.log("老张!",msg)
}

function li(msg){
    console.log("老李!",msg)
}

const pubsub = PubSub()

pubsub.subscribe("new-paper",zhang)
pubsub.subscribe("new-paper",li)
pubsub.subscribe("tv-show",zhang)

pubsub.publish("new-paper","新闻报纸来了")
pubsub.publish("tv-show","订阅的节目开始了")

