'use strict'

let fs = require("fs")

let arr = []

function initArr(){
    for(let i=0;i < 10 ;i++){
        arr.push(Math.floor(Math.random()*50))
    }
    console.log(arr)
    return arr
}

function acc_1(){
    let res = 0
    for(let item of arr){
        res += item
    }
    res = "method1 结果为:" + res
    console.log(res)
    fs.writeFile("acc结果.txt",res+"\n", err =>{
        if (err) {
            console.log("写入失败")
        }else{
            console.log("写入成功")
        }
    })
    return res+"\n"
}

function acc_2(){
    let res = "method2 结果为:" + arr.reduce((acc,item)=>(acc += item),0)
    console.log(res)
    // fs.appendFile("acc结果.txt","method2 结果为:"+res+"\n", err =>{
    //     if (err) {
    //         console.log("写入失败")
    //     }else{
    //         console.log("写入成功")
    //     }
    // })
    fs.appendFile("acc结果.txt",res+"\n", err =>{
        if (err) {
            console.log("写入失败")
        }else{
            console.log("写入成功")
        }
    })
    return res+"\n"
}

/*
    递归方法
    数组递归
    特点1-公式：F(a1,a2,....an) = a1 + F(a2,a3,....an)
    特点2-边界: n
*/
function acc_3(p_arr){
    if (p_arr.length === 0){
        return 0
    }else if (p_arr.length === 1){
        return p_arr[0]
    }else{
        return p_arr[0] + acc_3(p_arr.slice(1))
    }
}

initArr()
let ws = fs.createWriteStream("acc结果2.txt",'utf-8')
ws.write(acc_1())
ws.write(acc_2())
ws.end()
console.log("递归:",acc_3(arr))