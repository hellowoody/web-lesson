console.log("A")
setTimeout(() => console.log(1000) ,0)
console.log("B")
new Promise((resolve,reject) => {
    console.log("C")
    setTimeout(() => resolve(),500)
    console.log("D")
}).then(() => console.log(2000))
console.log("E")
new Promise((resolve,reject) => {
    resolve()
}).then(() => {
    console.log(3000)
    process.nextTick(() => {
        console.log("=======")
        process.nextTick(() => {
            console.log("*********")
        })    
    })
})


// function recursion(){
//     process.nextTick(() => {
//         console.log("0000000000")
//         recursion()  
//     })
// }

// recursion()


// nextTick()