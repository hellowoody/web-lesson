/*
发布-订阅范式  publish-subscribe pattern

1.发布者
2.订阅者
3.消息分发器（调度中心）
*/

//消息分发器-调度中心
function Dispatcher(){
    const subscribers = {} //订阅者们的对象

    /*
    subscribers 数据类型
    {
        "eventName":["sub1","sub2","sub3"],
        "eventName":["sub1","sub2","sub3"],
        "eventName":["sub1","sub2","sub3"],
        "eventName":["sub1","sub2","sub3"],
    }
    */
    
    const subscribe = (eventName,name)=>{
        if(!Array.isArray(subscribers[eventName])){
            subscribers[eventName] = []
        }
        subscribers[eventName].push(name)
    }

    const publish = (eventName,callback) => {
        if (!Array.isArray(subscribers[eventName])) return 

        subscribers[eventName].forEach((item)=>{
            callback(item)
        })
    }

    const tt = ()=>{
        console.log(subscribers)
    }

    return {
        subscribe,
        publish,
        tt
    }
}

// 发布者
function Publisher(name,dispatcher){
    this.name = name
    this.dispatcher = dispatcher

    const publish = (eventName,callback)=>{
        this.dispatcher.publish(eventName,callback)
    }

    return {
        publish
    }
}

// 订阅者
function Subscriber(name,dispatcher){
    this.name = name
    this.dispatcher = dispatcher
    const subscribe = (eventName)=>{
        this.dispatcher.subscribe(eventName,this.name)
    }
    return {
        subscribe
    }
}

let dispatcher = Dispatcher()

// let sub = Subscriber("订阅者",dispatcher)
// let pub = Publisher("发布者",dispatcher)

// sub.subscribe("新闻")
// sub.subscribe("体育")
// sub.subscribe("tv show")

// pub.publish("新闻",(name)=>console.log(name+"!,"+"看新闻吧"))
// pub.publish("体育",(name)=>console.log(name+"!,"+"c罗感染了"))
// pub.publish("tv show",(name)=>console.log(name+"!,"+"选秀节目开始了"))

let Mr_Zhang = new Subscriber("老张",dispatcher)
let Mr_Li = new Subscriber("老李",dispatcher)
let Mr_Wang = new Subscriber("老王",dispatcher)

let pub1 = new Publisher("电影咨询",dispatcher)
let pub2 = new Publisher("综合新闻",dispatcher)

Mr_Zhang.subscribe("天津新闻")
Mr_Li.subscribe("电影")
Mr_Li.subscribe("nba")
Mr_Wang.subscribe("nba")

pub1.publish("电影",name=>console.log(name+"!,春节档电影消息"))
pub2.publish("天津新闻",name=>console.log(name+"!,都市报道新闻"))
pub2.publish("nba",name=>console.log(name+"!,nba球星詹姆斯第四次夺冠"))