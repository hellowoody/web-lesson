/*
    面试题:
    分析输出的顺序
    output:
    1
    2
    3
    5
    4
*/

setTimeout(function() {
    console.log(4)
}, 0);

new Promise(function executor(resolve) {
    console.log(1);
    for( var i=0 ; i<10000 ; i++ ) {
        i == 9999 && resolve();
    }
    console.log(2);
}).then(function() {
    console.log(5);
});
console.log(3);