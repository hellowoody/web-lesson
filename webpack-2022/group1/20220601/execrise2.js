/*
    面试题:
    分析输出的顺序

*/
console.log(1)
setTimeout(function(){
    console.log(2);
    let promise = new Promise(function(resolve, reject) {
            console.log(7);
            resolve()
    }).then(function(){
        console.log(8)
    });
},1000);
setTimeout(function(){
    console.log(10);
    let promise = new Promise(function(resolve, reject) {
            console.log(11);
            resolve()
    }).then(function(){
        console.log(12)
    });
},0);
let promise = new Promise(function(resolve, reject) {
        console.log(3);
        resolve()
}).then(function(){
    console.log(4)
}).then(function(){
    console.log(9)
});
console.log(5)