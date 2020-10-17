/*
观察者范式
1.主题 被订阅 被观察者 subject
2.观察者  observer
*/

// 观察者
function Observer(name){ this.name = name }

// Observer.prototype.update =  () => console.log(this)  // arrow function 箭头函数本身不绑定也没有this，所以箭头函数中的this的指向，请去方法中this的上一层就找
Observer.prototype.update =  function(data){
    console.log("观察者-"+this.name+",关注的superstart更新微博了，更新的内容是："+data)
}

// 主题 被观察者（例如微博中的明星） subject 

function Subject(){ this.observers = [] }

Subject.prototype.add = function(observer){
    this.observers.push(observer)
}

Subject.prototype.remove = function(observer){
    this.observers = this.observers.filter(item=>item.name != observer.name)
}

Subject.prototype.notify = function(data){
    this.observers.forEach(observer => {
        observer.update(data)
    })
}

let ob1 = new Observer("粉丝1")
let ob2 = new Observer("粉丝2")
let ob3 = new Observer("粉丝3")

let superstart = new Subject()

superstart.add(ob1)
superstart.add(ob2)
superstart.add(ob3)

superstart.notify("微博新专辑发布，请支持")


