
function countdown(num){
    console.log("倒数计时：",num)
    if(num > 0){
        // setTimeout(() => countdown(num - 1),1000)
        // setTimeout(callback,delay,...args)
        setTimeout(countdown,1000,num-1)
        // const callback = (str1,str2,str3) => {
        //     console.log(str1,str2,str3)
        //     countdown(num-1)
        // }
        // setTimeout(callback,1000,"p1","p2","p3")
    }
}

countdown(5)