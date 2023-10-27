// ts 可以把接口理解成定义对象object的类型

interface Stu {
    name:string,
    className:string,
    score:number
}

const stu1:Stu = {
    name:"zhang",
    score:100,
    className:"1班",
}

const stu2:{} = {
    name:"li",
    score:100,
    id:"s02"
}

console.log("stu1",stu1)
console.log("stu2",stu2)
