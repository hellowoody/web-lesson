function cd(){
    // 3秒倒计时
    let n = 1
    for(let i = 3 ; i > 0 ; i--){
        setTimeout(() => console.log(i),1000*n)
        n++
    }
}

// 递归版倒计时
function cdRecusion(num){
    if(num > 0){
        console.log(num)
        setTimeout(() => cdRecusion(num-1),1000)
    } 
}

cdRecusion(5)