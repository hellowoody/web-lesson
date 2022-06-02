/*
    then方法如果没有传参数的话，会沿用上一步的then的返回值
    then()是幂等的
*/
new Promise((resolve,reject) => {
    resolve(1000)
}).then((res) => {
    console.log(res)  // 1000
    return 2000
})
.then()
.then((res) => {
    console.log(res)  // 2000
})

/*
output

1000
2000
*/

// countdown 1s 2s 3s 4s 5s