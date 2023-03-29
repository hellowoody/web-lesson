/*
    1.打印什么

        function foo2(){
            for(let i = 0 ; i< 3 ; i++){
                console.log(1000)
                for(let j = 0 ; j < 2 ; j++){
                    if(j ==1){
                        break;
                    }
                    if(i == 1){
                        return
                    }
                    console.log(2000)
                }
            }
        }
        foo2()

        1000
        2000
        1000

    2.使用apply call bind 将{name:张三}绑定到o.fn()()中
    
        var name = "外面的名字";
        const o = {
            name:"里面的名字",
            fn:function(){
                return () => console.log("name",this.name)
            }
        }
        // const func = o.fn.bind({name:"张三"})
        // func()()    

        o.fn.bind({name:"张三"})()()  // “张三” 

        o.fn.call({name:"张三"})()    //"张三"
        o.fn.apply({name:"张三"})()   //"张三"
        o.fn.bind({name:"张三"})()()

        o.fn()()
        o.fn().call({name:"张三"})    // ？ 里面
        o.fn().apply({name:"张三"})   // ？
        o.fn().bind({name:"张三"})()  // ？


    3.箭头函数和function的区别
       
        function name(){

        }
      
        const name = function(){}

        const name = () => {}

        function vs 箭头

        1.箭头不支持call apply bind
        2.arguments 

    4.正则表达时声明方式

        1. /正则语法pattern/flags  推荐
        
        2. new RegExp(string,string)
           new RegExp("正则语法字符串pattern","gi")
           new RegExp(/正则语法pattern/,"gi")
        
        const regex = /l/g

        regex.exec("hello")

*/
const regex = /l/g

regex.exec("hello")
let res ;
while(res = regex.exec("hello")){
    console.log(res)
}
