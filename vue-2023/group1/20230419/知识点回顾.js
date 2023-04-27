/*

    1.vue中虚拟标签(v-dom)可以声明在哪些地方

        a. 
            <div id="app">

            </div>

        b. 
            // 组件
            const Comp = {
                data(){
                    return {
                        msg:""
                    }
                }
                template:``
            }
            // 配置对象
            const config = {
                data:{
                    msg:""
                }
                template:``
            }
        
        c.  <script type="text/x-template" id="xxx">
            
            </script>

        d.  <template id="xxx">

            </template>
        
    2.data属性中声明变量的值可以全局变量吗？

        不要这么写！
        const obj = {
            msg:"xxx"
        }

        const Comp = {
            data(){
                return obj
            }
        }
        
    3.父组件传子组件参数时，子组件如何承接/接受参数

        const Child = {
            props:["p_name1","p_name2"],
            computed(){
                show(){
                    this.p_name1
                }
            },
            setup(p){
                // this => window
                p.p_name1
            }
            
        }

        const Parent = {
            template:`
                <child p_name1="123" p_name2="hello"></child>
            `,
            compontents:{
                Child
            }
        }

*/