function async1() {
    console.log("async1 start");
    // await async2();
    new Promise((resolve,reject) => {
        resolve(async2())
    }).then(() => {
        console.log("async1 end");
    })
    
}
function async2() {
    setTimeout(() => {
        console.log('timer')
    }, 0)
    console.log("async2");
}
async1();
console.log("start")

