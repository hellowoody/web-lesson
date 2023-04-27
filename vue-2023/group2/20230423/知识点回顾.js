/*
    1.vue3的setup中，如何使用created生命周期钩子函数
    // 1.1.vue3的setup中，如何使用mounted生命周期钩子函数

        const Comp = {
            setup(){


                
                Vue.onMounted(() => {

                })

            },
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

*/