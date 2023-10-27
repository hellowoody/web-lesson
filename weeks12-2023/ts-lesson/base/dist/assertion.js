"use strict";
// assertion 断言 强制转型
function sub(p1, p2) {
    return p1 + p2;
}
var num1 = "100";
var num2 = 3.14;
// console.log(sum(num1,num2))
console.log("1==>>", sub(num1, num2));
console.log("2==>>", sub(num1, num2));
function fn(p1, p2) {
    var arr = [];
    arr.push(p1);
    arr.push(p2);
    var arr2 = [{}, false];
    // return arr2 as [string,number]   // 强制转型(开发时语法校验先成功)
    return arr2; // 强制转型(开发时语法校验先成功)
}
console.log(fn("hello", 100));
