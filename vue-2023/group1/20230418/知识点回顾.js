/*
    1.计算属性和methods方法的区别
        const Comp = {
            data(){
                return {
                    txt:""
                }
            },
            methods:{
                textHandle(){
                    return this.txt
                }
            },
            computed:{
                text(){
                    return this.txt
                }
            }
        }
        a.调用方式不同
            computed:  
                {{text}}   
                <div v-text="text"></div>
            methods: 
                {{textHandle()}}

        b.运行策略不同

            1.计算属性无论在页面上使用几次，计算属性的方法只执行一次
            2.如果data中的属性变化，methods和computed都会重新执行，
              不同点是computed只会执行一次


    2.计算属性可以传参吗？如何解决用一个计算属性处理不同“情况问题”

        不可以传参数

    3.VUE2和VUE3如何“正式”定义一个组件
        
        VUE2:
            Vue.extend({
                data(){
                    return {
                        txt:""
                    }
                },
                methods:{
                    textHandle(){
                        return this.txt
                    }
                },
                computed:{
                    text(){
                        return this.txt
                    }
                }
            })
        
        VUE3:
        const C1 = Vue.defineComponent({
                data(){
                    return {
                        txt:""
                    }
                },
                methods:{
                    textHandle(){
                        return this.txt
                    }
                },
                computed:{
                    text(){
                        return this.txt
                    }
                }
            })


        {
            components:{
                // "c1":C1
                C1,
            }
        }


*/