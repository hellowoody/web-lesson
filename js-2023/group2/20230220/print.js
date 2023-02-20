/*
    %o object
    %d decimal
    %s string
    %f float
*/
console.log("%o is person object.",{name:"zhang",gender:"male"});
console.log("%d is number.",100);
console.log("%s is string.","hello world");
console.log("%f is float.",3.14);

console.log("%s人已没,%s水尤寒.","昔时","今日");
// \
console.log("%o object. \n %d decimal.\n%s str. \n %f float",{name:"zhang"},1,"hello",2.7);

/*
    在打印语句中添加css样式
    %c 
*/

console.log("this is my %cdiy msg.","color:red;padding:20px;background:blue;border-radius:20px;")

/*
    console.table(对象)
    console.table(数组)
*/

console.table({a:1,b:2,c:3})
console.table([1,2,3])
console.table([["a","b"],[1,2],[100.00,200.00]])

/*
    console.group() 分组/缩进
*/ 
console.group("一级标题")
console.log(1000)
console.log(2000)
console.group("二级标题")
console.log(3000)
console.log(4000)
console.groupEnd()
console.groupEnd()

// 断言 assert  console.assert()
// 堆栈的追踪    console.trace()