// 递归写一个倒数计时器

function countdown(num){
    console.log("倒计时:",num)
    if(num > 0){
        // countdown(num-1)
        // setTimeout(() => countdown(num-1),1000)

        // const callback = () => countdown(num-1)
        // setTimeout(callback,1000)

        setTimeout(countdown,1000,num-1)

    }
}

countdown(5)

/*
    setTimeout(callback,delay,...args)

    setTimeout((a,b,c) => console.log(a,b,c),1000,"p10","p11","p12")
*/ 



