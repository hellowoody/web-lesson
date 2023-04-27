/*
    1.vue2和vue3 js库文件中暴露出的Vue有什么区别

        vue2: Vue 

            <script>
                const config = {
                    el:1,
                    data:{
                        msg:""
                    },
                    template:1,
                }

                new Vue(config) 

                // vue2 中Vue 构造函数 
                
            </script>

        vue3: Vue 本身已经被实例化，就是一个对象

                Vue.createApp(组件)

    2.vue2 和 vue3 定义变量有什么区别
        
        vue2:
            config 
                data

            const config = {
                data:{
                    msg:"hello"
                }
            }

        vue3:
            compoment
            
            const Comp = {
                data:function(){
                    return {
                        msg:"hello"
                    }
                }
            }

    3.template属性中的标签如<div>，是h5标签吗？
            <div onclick="fn();"></div>
            {
                template: `

                    <div v-on:click="add"></div>
                    <div @click="add"></div>
                
                `
            }           

    4.如何绑定点击事件

            vue2,
            vue3

    5.vue2的methods中可以使用箭头函数吗？

            

*/