/*
    双层循环

    for(let i = 0 ; i < 3; i++){
        for(let j = 0 ; j < 2; j++){

        }
    }
*/

let step = 0
for(let i = 0 ; i < 3; i++){
    console.log("外层循环的i:",i)
    for(let j = 0 ; j < 2; j++){
        console.log("本次对应的是外层循环i：",i,"内层循环的j:",j)
        step = step + 1
        console.log("步数:",step)
    }
}

/*

1*1 = 1
2*1 = 2  2*2 = 4
3*1 = 3  3*2 = 6  3*3 = 9
4*1 = 4  4*2 = 8  4*3 = 12  4*4 = 16
5*1 = 5  5*2 =10  5*3 = 15  5*4 = 20  5*5 = 25

*/

console.log("=========================")

// for(let i = 1 ; i < 10 ; i++){
for(let i = 1 ; i <= 9 ; i++){
    let content = ""
    for(let j = 1 ; j <= i ; j++){
        // content = content+i+"*"+j+"="+(i*j)+"\t"
        // content = content + `${i}*${j}=${i*j} \t` 
        content += `${i}*${j}=${i*j} \t` 
    }
    console.log(content)
}
