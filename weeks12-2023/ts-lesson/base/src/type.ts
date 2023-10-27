
let t0 = "3"
let t1:any = "123"

console.log(typeof t1) // string
t1 = 3.14
console.log(typeof t1) // number
t1 = false
console.log(typeof t1) // boolean

let t2:string = "HELLO"
// t2 = 100
t2 = "100"
let t3:number = 3.14
let t4:boolean = true
let t5:Array<number> = [1,2,3]
let t6:number[] = [1,2,3]
let t9:object = {name:123}
let t10:{} = {name:123}

let t7:null = null
let t8:undefined
// 元组 
let t11:[number,string,boolean] = [1,"h",false]

console.log(t2,t3,t4,t5,t6)



let obj1 = {}
let obj2:{} = {}
let obj3:object = {}
let obj4:Object = {a:1}


console.log(obj1,obj2,obj3,obj4)

function fn_test(callback:any){
    callback()
}

function cb(){
    console.log("我是回调")
}

fn_test(cb)


const obj5:{name:string,score:number} = {name:"zhang",score:80}
obj5.name = "123"
obj5.score = 90