function SuperStar(name){
    this.name = name
    this.fans = []
}

SuperStar.prototype.emits = function(fan){
    this.fans.push(fan)
}

SuperStar.prototype.updateState = function(){
    for(const p of this.fans){
        p.observe("旅游了")
    }
}


function Person(name){
    this.name = name
}

Person.prototype.observe = function(msg){
    console.log(this.name,"喜欢的明星更新状态了",msg)
}

const star = new SuperStar("肖战")
const zhang = new Person("粉丝小张")
const li = new Person("粉丝小李")

star.emits(zhang)
star.emits(li)

star.updateState()