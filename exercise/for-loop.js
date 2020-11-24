/*
1.for-loop :
for(let i = 0;i<10; i++){

}
arr = ["a","b","c"]
arr = {
    age:10,
    name:zhang
}
2.for of:

for(let item of arr){

}

3.for in:

for(let key in arr){
}

4.forEach
arr.forEach()

*/

let arr = []
const NUM = 10000;
for(let i=0 ;i<NUM ;i++){
    arr.push(i)
}




let date1 = new Date()
for(let i =0 ;i<arr.length;i++){}
let date2 = new Date()
console.log("for-loop time : ",date2-date1)

let date3 = new Date()
for(let item of arr){}
let date4 = new Date()
console.log("for-of time : ",date4-date3)

let date5 = new Date()
for(let item in arr){}
let date6 = new Date()
console.log("for-in time : ",date6-date5)

let date7 = new Date()
arr.forEach(()=>{})
let date8 = new Date()
console.log("foreach time : ",date8-date7)
