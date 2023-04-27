/*
    1.父组件向子组件传值时，如何保持参数的类型

        const Child = {
            props:{
                num:Number,
                arr:{
                    type:Array
                    default:[]
                }
            }
        }

        const Parent = {
            components:{
                Child
            },
            template:`
                <child :num="3.14"></child>
            `
        }

        [] instanceof Array  
        [] instanceof Object
        typeof []            "object"  

    2.父组件向子组件传值时，子组件如何承接参数，以及使用何种类型

         const Child = {
            props:{
                约束力
            },
            props:[]
        }


    3.子组件调用父组件时，如何触发父组件中的方法

        vue2: this.$emit("自定义的事件名称",传给父组件方法的参数可选的)
        vue3: 
        setup(props,context){
            context.emit("自定义的事件名称",传给父组件方法的参数可选的)
        }

    4.vue的虚拟dom（v-dom） 用哪个属性代替原先的id

        template:"<button ref='id01'></button>" 
        
        vue2: this.$refs.id01

        vue3: 
            const app = Vue.getCurrentInstance()
            app.refs.id01

    5.vue2和vue3语法中，父组件如何获取子组件的信息

        vue2
            this.$children   [{},{},{}]

        vue3
            const app = Vue.getCurrentInstance()
            app.refs.xxx

            <tag ref="xxx"></tag>

    6.vue2和vue3语法中，子组件如何获取父组件的信息

        vue2
            this.$parent.xxx
            this.$parent.xxx = "xxxxxx"  不建议


        vue3 

            const app = Vue.getCurrentInstance()
            app.parent.ctx.xxx 
            app.parent.ctx.xxx = "xxxxx"  不生效
 

*/