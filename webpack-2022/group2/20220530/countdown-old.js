function countdown(second,callback){
    setTimeout(() => {
        console.log(second)
        callback()
    },1000)
}

console.log("倒计时")
countdown("3s",() => {
    countdown("2s",() => {
        countdown("1s",() => console.log("倒计时结束"))
    })
})