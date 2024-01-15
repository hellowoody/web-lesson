/*

exp  true | false | 1 == 1 | 1 < 2 | 3 > 1

if(exp) {

}

*/

if(true){
    console.log("肯定会执行")
}

if(false){
    console.log("不会执行")
}

if(2>1){
    console.log("2>1")
}

if(1==1) console.log("1==1")

/*
if(exp){

}else{

}

内置的对象 Math
Math.random() 返回值 0-1

*/
let num = Math.floor(Math.random()*10)
console.log("num:",num)
if(num > 5){
    console.log("随机数大于5")
}else{
    console.log("随机数小于等于5")
}

/*
多条件分支
if(exp){

}else if(exp2){

}else if(exp3){
    
}else{

}

*/

if(num > 5){
    console.log("随机数大于5")
}else if(num == 5){
    console.log("随机数等于5")
}else{
    console.log("随机数小于5")
}

/*

鸡和兔共10只，把他们的脚绑一起32只，鸡和兔各有多少只？
2只脚
4只脚
鸡 x 兔 y
x + y = 10
2x + 4y = 32
*/

let x ; // 鸡
let y ; // 兔

// for(let x = 0 ; x <= 10 ; x++){
//     for(let y = 0 ; y <= 10 ; y++){
//         let a = x + y
//         let b = 2*x + 4*y
//         if(a == 10 && b == 32){
//             console.log("鸡的数量是:",x,"兔的数量是:",y)
//         }
//     }
// }

for(let x = 0 ; x <= 10 ; x++){
    y = 10-x
    let b = 2*x + 4*y
    if(b == 32){
        console.log("鸡的数量是:",x,"兔的数量是:",y)
        break; // 推出循环，如果多层循环，仅推出离他最近的循环
    }
}





