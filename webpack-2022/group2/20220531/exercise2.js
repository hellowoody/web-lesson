/*
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

output
1
3
5
4
9
10
11
12
2
7
8


output
1
3
5
4
10
11
2
7
9
12
8


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