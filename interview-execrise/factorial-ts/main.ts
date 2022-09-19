function testt(n:number):number{
    if(n < 1){
        return 1
    }
    return n*testt(n-1)
}

console.log(testt(3))