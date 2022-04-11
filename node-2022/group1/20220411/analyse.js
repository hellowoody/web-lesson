/*
    给一个变量赋值，那赋值的类型是简单类型，基本类型，字面量

    string number boolean 可以称为简单类型，基本类型，字面量
*/
let a = 1000; 
let aa = a

a = 2000

console.log("a:",a,"aa:",aa)  // a 2000 aa 1000

/*
    给一个变量赋值，那赋值的类型是引用类型

    object {} Array [] 可以称为引用类型
*/
let b = {n:1}; 
let bb = b

// b.n = 1000
b = {}
b.n = 1000

console.log("b:",b,"bb:",bb)  // b {n:1000} bb {n:1}

console.log("====================")

 var a1 = {n: 1};

 var b1 = a1;a1.x = a1 = {n: 2};

 console.log("a1:",a1)

 console.log("b1:",b1)

 console.log("================")


 var a2 = 10;

 (function(){

     console.log(a2)   // 10

     a2 = 5;

     console.log(window.a2)  // 5

     //  var a = 20;
     a2 = 20            

     console.log(a2)     // 20

  })()