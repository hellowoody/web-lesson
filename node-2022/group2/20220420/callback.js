function sum(a,b,callback){
    const res = a+b
    callback(res)
}


sum(1,2,(val) => {console.log(val)})

