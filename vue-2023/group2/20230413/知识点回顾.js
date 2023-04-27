/*

    1. v-text 和 v-html 的区别

        v-text: 原封不动的显示在页面上
        innerText
        outterText

        v-html: 尝试解析标签
        innerHTML
        outterHTML

    2. v-on 绑定事件时传参数需要符合哪些规则
        handle
        <button v-on:click="handle"></button>
        <button v-on:click="handle($event)"></button>

        <button v-on:click="handle(10)"></button>

        <button v-on:click="handle(10,20,$event)"></button>
       

    3. v-bind 绑定style时，支持是什么数据类型的变量

        对象类型

         const Comp = {
            data(){
                return {
                    s1:"color:red;font-size:16px",
                    s2:{
                        color:"red",
                        fontSize:"16px"
                    }
                }
            },
            methdos:{
                xxx(){
                    s1 += ";font-weight:bold"
                },
                xxxxx(){
                    s2.fontWeight = "bold"
                    s2.color = "blue"
                }

            }
            template:`
                <div v-bind:style="s1"></div>
            `
        }


    4. v-bind 绑定class时，支持是什么数据类型的变量

            数组：["className1",....]

            对象：{className1:false,className2:false,className3:false}
*/