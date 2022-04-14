/*
    process.argv 返回的一个数组

    ["node安装路径","执行文件的绝对路径","第一个参数","第二个参数"...]
        index:0          index:1        index:2    index:3
*/
console.log("process.argv:",process.argv) // 数组

console.log("获取参数:",process.argv.slice(2)) // 参数数组

console.log("获取第一个参数:",process.argv[2] ? process.argv[2] : "空") // 第一个参数

// {a:1,b:2}   obj.a obj.b
const args_arr = process.argv.slice(2)
const p = {}
args_arr.forEach(v => {
    // console.log(v)
    const arr = v.split("=")
    // console.log(arr)
    const key = arr[0]
    const value = arr[1]
    p[key] = value
})

console.log("p:",p) // {a:1,b:2} 
console.log("p.a:",p.a)
console.log("p.b:",p.b)

console.log("========================")

const obj = {
    a:1,
    b:2,
    "a b":3,
    "10":10
}

console.log("obj:",obj)
console.log("obj.a",obj.a)
console.log("obj.b",obj.b)
console.log("obj['a']",obj["a"])
console.log("obj['10']",obj["10"])
console.log("obj['a b']",obj["a b"])

const o = {}
// const key = "a"
// const value = "1"

function setKV(obj,k,v){
    obj[k] = v
}

setKV(o,"a",1)
setKV(o,"b",2)
setKV(o,"aaa",111)
setKV(o,"10",10)

console.log(o)