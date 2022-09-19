const ROW = 9;

// for(let i = 1 ; i <=ROW ; i++ ){
//     let str = ""
//     for(let j = 1 ; j <= i ; j++){
//         str += `${i}*${j}=${i*j} \t`
//     }
//     console.log(str)
// }

// 循环行
for(let i = 1 ; i <= ROW ; i++){
    //循环列
    for(let j = 1 ; j <= i ; j++){
        process.stdout.write(`${i}*${j}=${i*j} `)
    }
    process.stdout.write("\n")  // 在列打印完后，换行
}