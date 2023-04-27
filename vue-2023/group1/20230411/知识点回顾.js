/*
    1.v-if 和 v-show有什么区别

        v-if:    多条件   
        
            <div v-if="xxx"></div>
            <div v-else-if="xxx"></div>
            <div v-else ></div>



        v-show: 

            <div v-show="true">123</div>
            <a v-show="true">123</a>
            <a v-show="false">123</a>


            <div style="display:block">123</div>
            <a style="display:inline">123</a>
            <a style="display:none">123</a>

    2.vue3中的新语法组合api是什么，如何使用

        const Comp = {
            setup(){
                const num = Vue.ref(10)

                console.log(num) // {value:10}

                num.value = num.value + 1

                return {
                    num
                }
            },
            template:`
                <div>{{num}}</div>
            `
        }

    3.编程题      

        模版里有两行内容
            第一行 hello world!
            第二行 
        按钮 -》 将第一行的字符串进行反转
                   显示到第二行

        
*/

