/*
const promise1 = new Promise((resolve, reject) => {
console.log('promise1')
resolve('resolve1')
})
const promise2 = promise1.then(res => {
    console.log(res)
    // return "ok"
    // return Promise.resolve("ok")
    return "ok1"
})
const promise3 = promise2.then(data => {
    console.log(data,promise2) // ok1 Promise<fullfill>
})
console.log('1', promise1);
console.log('2', promise2); 
console.log('3', promise3); 

*/


// const promise1 = new Promise((resolve, reject) => {

// })
// const promise2 = promise1.then(() => {
//     throw new Error('error!!!')
// })

// console.log('promise1', promise1)
// console.log('promise2', promise2)
// setTimeout(() => {
//     console.log('promise1', promise1)
//     console.log('promise2', promise2)
// }, 2000)

// function sum(){
//     return 1+2
// }


Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });


  Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    return 3;
  })


  
  Promise.resolve()
  .then(function success (res) {
    throw new Error('error!!!')
  }, function fail1 (err) {
    console.log('fail1', err)
  }).catch(function fail2 (err) {
    console.log('fail2', err)
  })

/*
fail2

*/
/*
紧跟着await后面的语句相当于放到了new Promise中，下一行及之后的语句相当于放在Promise.then中
*/
async function async1() {
  console.log("async1 start");
  await async2();  // Promise.resolve(async2())
  /*
  new Prmoise((resolve,reject) => {
    resolve(async2())
  }).then(() => {
    console.log("async1 end");
  })
  */
  console.log("async1 end");
}
// async function async2() {
//   console.log("async2");
// }
function async2() {
  console.log("async2");
}

async1();
console.log('start')



