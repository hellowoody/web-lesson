/*

    1.vue2和vue3 js库文件中暴露出的Vue有什么区别

        vue2:  构造器/构造函数 需要new

        vue3:  Vue是个对象,不需要new  

        构造器/构造函数： constructor
        
        function Foo(){

        }

        实例对象
        
        const foo = new Foo()

        原型 prototype

        // const 原型对象 = Foo.prototype

        Foo.prototype.speak = () => {}
        Foo.prototype.property = "house"


    2.vue2 和 vue3 定义变量有什么区别

        vue2

        const config = {
            data:{
                msg:"hello"
            }
        }


        vue3

        const Comp = {
            data(){
                return {
                    msg:"hello"
                }
            }
        }
        

    3.template属性中的标签如<div>，是h5标签吗？

        {
            template:`
                <div>123</div>
不能按h5原生标签写 <div onclick="">123</div>
                <div v-on:click="">123</div>
                <div @click="">123</div>
            `
        }

    4.如何绑定点击事件


    5.vue2的methods中可以使用箭头函数吗？

        {
            data:{
                msg:"hello"
            }
            methods:{
                add:function(){
                    const fn = () => {
                        this
                    }
                    this.msg
                }
            }
        }

*/