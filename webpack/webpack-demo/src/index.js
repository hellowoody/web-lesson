import "@/assets/css/common.css";
import "@/assets/css/a.css";

const add = (a,b) => {
    return a+b
}

const a = 100
const b =200


console.log(add(10,200))
console.log(b)

import(/* webpackChunkName:'test' */"./test.js").then(({fn})=>{
    fn()
}).catch((e)=>{
    console.log(e)
})
