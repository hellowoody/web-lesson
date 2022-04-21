/*
    异步的形式的callback
    流行的CPS风格
        a:callback 作为最后一个参数传入
        b:(err,res?) => {} callback参数顺序：第一个参数是错误信息
                                           第二个参数是结果信息(可选)
*/ 

function sumCps(){
    if(arguments.length < 3){
        throw new Error("参数太少！")
    }
    const callback = arguments[arguments.length-1]
    if(typeof callback !== "function"){
        throw new Error("callback not a function")
    }
    const items = Array.from(arguments).slice(0,arguments.length-1)
    // console.log("加数：",items)
    for(const item of items){
        if(typeof item !== "number" ){
            return callback(new Error("参数类型错误"))
        }
    }
    let res;
    setTimeout(() => {
        res = items.reduce((acc,v) => acc+v,0)
        callback(null,res)
    },500)
}
// fs.readFile writeFile
// sumCps("1",2,(e,res) => {
//     if(e){
//         //有错误
//         console.log("有错误:",e) 
//     }else{
//         // 成功
//         console.log("结果:",res)
//     }
// })

sumCps(1,2,3,-10,-1,2,3,4,5,6,(e,res) => {
    if(e){
        //有错误
        console.log("有错误:",e) 
        return 
    }
    console.log("结果:",res)
})
console.log("end")
