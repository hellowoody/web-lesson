const fn = (x,x,x,x,x,x,x) => {
    return new Promise((resolve,reject) => {
        // setTimeout(() => {
        //     resolve()
        // },1000)

        wx.requset({
            success(res){
                resolve(res)
            },
            fail(e){
                reject(e)
            }
        })
    })

}

fn()
    .then(res => console.log(res))
    .catch(e => console.log(e))

    
fn()
    .then(res => console.log(res),e => console.log(e))

console.log(1000)
async function fn3(){
    try {
        const res = await fn()
    } catch (e) {
        console.log(e)
    }
}
console.log(2000)

