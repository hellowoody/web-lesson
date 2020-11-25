setTimeout(()=>console.log(1000),3000)


let arr = []
const NUM = 10000000;
for(let i=0 ;i<NUM ;i++){
    arr.push(i)
}

let date5 = new Date()
for(let item in arr){}
let date6 = new Date()
console.log("for-in time : ",date6-date5)

