/*

    1.vue3的setup中，如何使用created生命周期钩子函数

        {
            setup(){
                console.log("this is setup hook func")
                console.log("this is beforeCreate hook func")
                console.log("this is created hook func")

                Vue.onMounted(() => {

                })
            }
        }

    2.vue2和vue3的生命周期区别

        1.
            vue2:8个  beforeDestroy destroyed
            vue3:9个  beforeUnmount unmounted

        2.vue3 setup 
            a. Vue.onXXX
            b. setup 中没有 beforeCreate created

        3. nextTick

            vue2:this.$nextTick()

            vue3:setup 
                    Vue.nextTick()

    3.vue3的侦听方法，如何使用？

        1. 
        const Comp = {
            watch:{
                xxx(){

                }
            },
            setup(){
                // a ref
                const a = Vue.ref(100)
                const a2 = Vue.ref(200)
                const a3 = Vue.ref(300)
                Vue.watch(a,(curr,prev) => {

                })

                Vue.watch([a,a2,a3],(curr,prev) => {
                    console.log(curr)  // [101,200,300]
                })


                // b reactive
                const b = Vue.reactive({name:"张"})
                const b2 = Vue.reactive({name:"李"})
                const b3 = Vue.reactive({name:"王"})

                Vue.watch(() => b.name , (curr,prev) => {

                })

                Vue.watch(() => [b.name,b2.name,b3.name] , (curr,prev) => {
                    console.log(curr)  // ["zhang","李","王"]
                })
                
            }
        }


*/