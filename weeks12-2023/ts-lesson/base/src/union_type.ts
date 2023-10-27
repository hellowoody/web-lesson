let union_t1:string|number|boolean 

union_t1 = "hello"
console.log(union_t1)
union_t1 = 3.14
console.log(union_t1)
union_t1 = false
console.log(union_t1)

function mul(p1:number,p2:number){
    return p1*p2
}
let union_t2:string|number = 10
let normal_t3:number = 20

console.log(mul(union_t2 ,normal_t3))
