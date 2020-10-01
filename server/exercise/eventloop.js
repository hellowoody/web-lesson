// var i = 0

//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// i = 1
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// i = 2
//      setTimeout(function () {
//         console.log(i);
//     }, 1000);
// i = 3

// event loop 


// for (let i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1);
// }


// function a(){
//     var i = 0
//     setTimeout(function () {
//         console.log(i);
//     }, 1);
// }

// function b(){
//     var i = 1
//     setTimeout(function () {
//         console.log(i);
//     }, 1);
// }

// function c(){
//     var i = 2
//     setTimeout(function () {
//         console.log(i);
//     }, 1);
// }

// a()
// b()
// c()



let a = 100

setTimeout(()=>console.log(a),10000)

{
    let arr = []
    for(let i =0 ; i<100000000; i++){
        arr.push(i)
    }
    let start = new Date()
    for(let item of arr){}
    let end = new Date()
    console.log(end-start)
}

setTimeout(()=>console.log(3000),2000)

a = 200

