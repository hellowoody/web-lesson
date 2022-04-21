/*
    观察者模式 Observer-pattern

    主题（subject） - 观察者（observer）

    通知的方法 emit

    关注的方法 add
*/ 

// 观察者
function Observer(name){
    this.name = name
    this.showmsg = function(data){
        console.log(`观察者:${this.name} 收到了关注主题的新消息：${data}`)
    }
}

// 主题
function Subject(){
    this.observers = []
}

Subject.prototype.add = function(observer){
    this.observers.push(observer)
}

Subject.prototype.emit = function(data){
    this.observers.forEach(observer => observer.showmsg(data))
}

const fan1 = new Observer("张三")
const fan2 = new Observer("李四")
const fan3 = new Observer("王武")

const subject = new Subject()

subject.add(fan1)
subject.add(fan2)
subject.add(fan3)

subject.emit("五一劳动节又来了")


