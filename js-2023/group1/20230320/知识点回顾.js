/*

    1.使用apply call bind 将{name:张三}绑定到o.fn()()中
    
        var name = "外面的名字";
        const o = {
            name:"里面的名字",
            fn:function(){
                console.log(this) // 张三
                return () => console.log("name",this.name)
            }
        }

        o.fn.call({name:"张三"})()
        o.fn.apply({name:"张三"})()
        o.fn.bind({name:"张三"})()()

        const f = o.fn.bind({name:"张三"})
        f()()
    

    2.箭头函数和function的区别
        function name (){

        }

        const name = function (){

        }

        const name = () => {}


        a.箭头强制绑定无效
        b.箭头函数没有内置对象 arguments super ...

        

*/
