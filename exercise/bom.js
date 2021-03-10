navigator.getBattery().then(b => console.log(b));

var nav = window.navigator

var battery = nav.getBattery()

battery.then(a => console.log(b));


/**
 
html css  
js
json格式一个对象

{
    "name":"张三",
    "age" : 10
}

es5 / es6 语法

es6 提出 promise 处理/形容 异步操作
es6 arrow function  箭头函数
*/
window.navigator = { 
    appName:"aaa",
    platform:"bbb",
    getBattery:function (){
        return new Promise(100)
    }
}


let nav = navigator.getBattery() 

nav.then(function(result){
    console.log(result)
})


