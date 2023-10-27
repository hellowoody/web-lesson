"use strict";
var t0 = "3";
var t1 = "123";
console.log(typeof t1); // string
t1 = 3.14;
console.log(typeof t1); // number
t1 = false;
console.log(typeof t1); // boolean
var t2 = "HELLO";
// t2 = 100
t2 = "100";
var t3 = 3.14;
var t4 = true;
var t5 = [1, 2, 3];
var t6 = [1, 2, 3];
var t9 = { name: 123 };
var t10 = { name: 123 };
var t7 = null;
var t8;
// 元组 
var t11 = [1, "h", false];
console.log(t2, t3, t4, t5, t6);
var obj1 = {};
var obj2 = {};
var obj3 = {};
var obj4 = { a: 1 };
console.log(obj1, obj2, obj3, obj4);
function fn_test(callback) {
    callback();
}
function cb() {
    console.log("我是回调");
}
fn_test(cb);
