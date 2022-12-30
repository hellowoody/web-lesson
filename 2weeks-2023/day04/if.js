/*

exp true | false | 2 > 1 
if(exp){

}

*/
console.log("************************")
const exp = 2 > 1;

if(exp) {
    console.log("2 确实大于 1");
}
if(exp)
    console.log("2 确实大于 1");

if(exp) console.log("2 确实大于 1");


if(2 == 1){
    console.log("2 确实大于 1")
}else {
    console.log("2 怎么会不大于 1？")
}
let score = 70;

if(score >= 90) {
    console.log("优秀")
}else if(score >= 80 && score < 90) {
    console.log("良")
}else if(score >= 70 && score < 80) {
    console.log("一般")
}else{
    console.log("差")
}

/*
    鸡和兔子共10只，把他们的脚加起来共32只，问鸡和兔子分别有多少只
    let x,y; 
    x 代表鸡
    y 代表兔

    x + y = 10
    2x + 4*y = 32

*/  

let x;
let y;
for(x = 0; x <= 10 ; x++){
    for(y = 0 ; y <= 10 ; y++){
        let a = x + y;
        let b = 2*x + 4*y;
        if(a == 10 && b == 32){
            console.log(`鸡是${x}只，兔子是${y}只。`)
            break;
        }
    }
}


    

