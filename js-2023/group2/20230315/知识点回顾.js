/*
    1.函数声明和函数表达式分别是什么，有什么区别
        foo()
        
        function foo(){

        }

        const foo = funciton(){

        }

        foo()

    2.下面的语句打印什么

        function foo(){
            console.log(1000)
            for(let i = 0 ; i< 3 ; i++){
                console.log(2000)
                if(i>1){
                    break
                }
            }
            console.log(3000)
        }

        1000
        2000
        2000
        2000
        3000


        function foo(){
            for(let i = 0 ; i< 3 ; i++){
                console.log(1000)
                for(let j = 0 ; j < 2 ; j++){
                    if(i ==1){
                        break;
                    }
                    console.log(2000)
                }
            }
        }

        foo()

        1000 
        2000
        2000

        1000
        
        1000
        2000
        2000

        


    3.下面函数的执行结果

        function foo(a){
            return arguments[0] + a + arguments[1]
        }

        console.log(foo(1,2))  // 3 or 4

    4.下面的打印

        var name1 = "外面的名字";
        const obj1 = {
            name1:"里面的名字",
            fn:function() {
                console.log("场景一",this.name1);
            }
        }

        const fn_tmp = obj.fn
        fn_tmp()  // 外 



        var name2 = "外面的名字";
        function fn(){
            var name2 = "里面的名字"
            const innerFn = function() {
                console.log("场景二",this.name2) 
            }
            innerFn();
            
        }

        fn()   // 里 or 外

        

        let identity = "i am window";
        const object = {
            identity:"i am object",
            getId:function(){
                return function(){
                    return this.identity;
                }
            }
        }
        console.log("场景三",object.getId()())  // undefined 

        const aaa = object.getId()
        console.log("场景三",aaa())             // undefined 

*/