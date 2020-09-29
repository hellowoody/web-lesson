/**
 call 
 apply
 bind 
 */

 global.name = "123"


var obj = {
    name:"里面的名字",
    fn:function(a,b){
        console.log(a,b,"======",this.name)
    }
}

var obj2 = {
    name:"new name"
}

var obj3 = {
    name:"bind test example"
}

// es6 （let  （）=>（）） 之前
// es5  

// obj.fn()

// var a = obj.fn
// a()

// call

// a.call(obj,1,2)

// apply

// a.apply(obj2,[3,4])

// bind

// a.bind(obj3)(1,5)

// es5 es6

let fn1 = {
    name:"fn1 name",
    print:function (){
        return ()=>console.log(this.name)
    }
}

let fn2 = {
    name: "fn2 name"
}

fn1.print()() //  fn1 name

fn1.print().apply(fn2) // fn1 name

fn1.print.apply(fn2)() //  fn2 name


// fn1.print()
// fn1.print.call()
// fn1.print.apply()
// fn1.print.bind()()

