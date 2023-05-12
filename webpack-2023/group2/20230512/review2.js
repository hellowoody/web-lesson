function foo(){
    return 1000
}

foo.speak = "i saying"

console.log(foo())
console.log(foo.speak)


const o = {
    name:1
}

o.b = 2

Object.defineProperty(o,c,{
    value:"xxx",
    writtenable:true
})
