/*
    用console.log打印九九乘法表
*/  

// for-loop  (最主流的)
// while
// for-of
// for-in
// Array.forEach
// Array.map
// Array.filter

/*
exp1
exp2
exp3
这三个表达式是可选的
但那两个分号是必须的
for(exp1;exp2;exp3){

}

exp1 声明循环的计数器
exp2 定义退出循环的边界值,for每次会执行exp2的表达式值是否为真
exp3 让exp1中的计数器改变
*/
// 无限循环
// let i = 0
// for(;;){
//     console.log(i)
//     i = i + 1;
// }

for(let i = 0;i < 3;i = i + 1){
    console.log(i)
}

for(let i = 10;i < 13;){
    console.log(i)
    i = i + 1
}

console.log("=========================")

for(let i = 1 ; i <= 9 ; i++ ){
    let content = ""
    for(let j = 1 ; j <= i ; j++){
        // content = content + (i + "*" + j + "=" + (i*j) + " \t")
        // 反引号 模版引号
        // content = content + `${i}*${j}=${i*j} \t`
        // 如果是在同一个变量基础上去追加修改
        content += `${i}*${j}=${i*j} \t`
    }
    console.log(content)
}
  
