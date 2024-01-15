/*
iteration

for-loop (首选)
while
for-of
for-in
Array.forEach
Array.map
Array.filter

for-loop的语法结构
exp1  声明循环的计数器  let i = 0
exp2  退出循环的判断语句  i < 3
exp3  更新循环里的计数器  i = i + 1

for(exp1;exp2;exp3){

}

for(let i = 0;i < 3;i = i + 1){

}

*/

for(let i = 0;i < 3;i = i + 1){
    let count = i + 1
    console.log("计数器:",i)
    console.log("循环次数:",count)
    console.log("--------------------")
}

/*

exp1
for(;exp2;exp3){

}

*/
console.log("===============")
let i = 0
for(;i < 3;i = i + 1){
    let count = i + 1
    console.log("循环次数:",count)
}


/*

for(exp1;exp2;){
    exp3
}

*/
console.log("===============")

for(let i = 0 ; i < 3 ; ){
    console.log("计数器",i)
    i = i + 1
}
console.log("===============")
for(let i = 0 ; i < 3 ; ){
    console.log("计数器",i)
    // i = i + 1
    i++
}

let j = 0 
for(; j < 3 ; ){
    console.log("计数器",j)
    j++
}

console.log("===============")

// for(;;){
//     console.log("无限循环")
// }
