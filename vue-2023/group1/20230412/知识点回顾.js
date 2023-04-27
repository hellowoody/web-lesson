/*

    1. v-text 和 v-html 的区别

        v-text: 
        innerText

            <div>123</div>

        v-html: 


    2. v-on 绑定事件时传参数需要符合哪些规则

        if(事件句柄){
            <div @click="handle"></div>
            or
            <div @click="handle($event,10,20)"></div>
        }else{
            <div @click="handle"></div>
            or
            <div @click="handle(10)"></div>
        }

        <div @click="handle"></div>
        <div @click="handle($event)"></div>

    3. v-bind 绑定style时，支持是什么数据类型的变量

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
                    s1 += "font-weight:bold"
                },
                xxxxx(){
                    s2.fontWeight = "bold"
                    s2.color = "blue"
                }
            }
            template:`
                <div :style="s1"></div>
            `
        }

    4. v-bind 绑定class时，支持是什么数据类型的变量

        key -> className
        val -> true / false
        <div :class="{key:val}"></div>
*/