/*
    1.v-if 和 v-show有什么区别

        v-if  :

            <div v-if="false"></div>
            <div v-else-if="false"></div>
            <div v-else></div>

            多条件表达方式

        v-show:
            <div v-show="false"></div>
            <div v-show="true"></div>
            <a v-show="true"></a>


            <div style="display:none"></div>
            <div style="display:block"></div>
            <a style="display:inline"></a>

    2.vue3中的新语法组合api是什么，如何使用

        const Comp = {
            setup(){
                const num = Vue.ref(0) // {value:0}
                const num1 = 1000

                const inc = () => num.value++

                return {
                    num,
                    inc,
                    num1
                }
            }
        }

    3.编程题      

        模版里有两行内容
            第一行 hello world!
            第二行 
        按钮 -》 将第一行的字符串进行反转
                   显示到第二行


        
        a.

            const Comp = {
                data(){
                    return {
                        str:"hello world!"
                    }
                },
                methods:{
                    handle(){
                        this.str = this.str.split("").reverse().join("")

                        // Array.from(this.str)
                    }
                },
                template:`
                    <div>
                        <h1>{{str}}</h1>
                        <button @click="handle">翻转</button>
                    </div>
                
                `
            }
        b. 
        
*/

