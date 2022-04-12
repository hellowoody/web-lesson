/*
    process.argv 返回一个数组
    ["node安装的路径","当前运行文件的绝对路径","第一个参数","第二个参数",...]
     index:0          index:1              index:2    index:3
*/ 
console.log("process.argv：",process.argv)    // 数组

console.log("获取参数:",process.argv.slice(2)) // 参数数组

console.log("获取参数:",process.argv[2] ? process.argv[2] : "没有参数") // 参数数组

const args_arr = process.argv.slice(2) // [ 'a=1', 'b=2' ]
const args_obj = {}
args_arr.forEach(v => {
    const arr = v.split("=")
    args_obj[arr[0]] = arr[1]
})
console.log("args_obj:",args_obj) // {a:1,b:2}
console.log(args_obj.a + args_obj.b)