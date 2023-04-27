/*
    1.父组件向子组件传值时，如何保持参数的类型

        const Parent = {
            template:`
                <child v-bind:param_name="[1,2,3]"></child>
            `
            components:{
                Child
            }
        }

    2.父组件向子组件传值时，子组件如何承接参数，以及使用何种类型

        const Child = {
            props:["param_name"]
            props:{
                param_name:{
                    type:Array,
                    default:[]
                }
            }
        }


    3.子组件调用父组件时，如何触发父组件中的方法

        const Child = {
            methods:{
                handle(){
                    this.$emit(父调子（标签）自定义的事件名称，传给父组件中方法的参数可选的)
                }
            },
            setup(props,context){
                context.emit()
            }
        }

    4.vue的虚拟dom（v-dom） 用哪个属性代替原先的id

        

        const Comp = {
            methods:{
                getTag(){
                    this.$refs.id01
                }
            },
            setup(){
                const app = Vue.getCurrentInstance()

                const getTag = () => {
                    app.refs.id01
                }

                return {
                    getTag
                }
            }
            template:`<div ref="id01"></div>`
        }

    5.vue2语法中，父组件如何获取子组件的信息

        this.$children

    6.vue3语法中，父组件如何获取子组件的信息

        const app = Vue.getCurrentInstance() 
        app.refs   
        
*/