function sum(a,b,success,fail){
    if(typeof a !== "number" || typeof b !== "number" ){
        fail("类型不对")
        return
    }
    success(a+b)
}

// const ok = msg => console.log(msg)

// const err = msg => console.error(msg)

// sum(1,2,ok,err)

sum("10",2,function(msg){
    console.log(msg)
},function(err){
    console.error(err)
})