"use strict";
function fn1(p1, p2) {
}
function fn2(p1, p2) {
    return p1 + p2 + "";
}
var fn2Res = fn2(1, 2);
console.log(fn2Res, typeof fn2Res); //3 string
function fn3(p1, p2) {
    // const arr:[string,number] = [p1,p2]
    // return arr
    var arr = [];
    arr.push(p1);
    arr.push(p2);
    var arr2 = [{}, false];
    return arr2; // 强制转型(开发时语法校验先成功)
    // return <[string,number]>arr2  // 强制转型(开发时语法校验先成功)
}
console.log(fn3("1", 2));
function fn4(p1) {
    var p_rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        p_rest[_i - 1] = arguments[_i];
    }
    console.log(arguments);
}
fn4("1");
fn4("1", "a");
fn4("1", "a", "b");
fn4("1", "a", "b", "c");
function fn5(p1) {
    var p_rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        p_rest[_i - 1] = arguments[_i];
    }
    console.log(p1, p_rest);
}
fn5("p1");
fn5("p1", "p2");
fn5("p1", "p2", "p3");
fn5("p1", "p2", "p3", "p4");
function fn6(p1, p2) {
    console.log(p1, p2);
}
fn6("hello", 100);
fn6("world");
function fn7(p1, p2) {
    if (p2 === void 0) { p2 = 314; }
    console.log(p1, p2);
}
fn7("hello", 100);
fn7("world");
var fn8 = function (p1) {
    return [p1];
};
