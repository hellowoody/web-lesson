/*

    1.vue3的setup中，如何侦听单个变量
       
        setup(){
            const a = Vue.ref(10)

            Vue.watch(a,(curr,prev) => {

            })

            const b = Vue.reactive({name:"zhang"})

            Vue.watch(() => b.name,(curr,prev) => {

            })

            const c = Vue.ref({name:"zhang"})

            Vue.watch(() => c.value.name,(curr,prev) => {

            })

            return {
                a,
                b,
                c
            }
        }
    
    2.vue3的setup中，如何批量侦听多个变量

        setup(){
            const a1 = Vue.ref(1)
            const a2 = Vue.ref(2)

            Vue.watch(() => [a1,a2],(curr,prev) => {

            })

            const b1 = Vue.reactive({v1:10,v2:3.14})
            const b3 = Vue.reactive({v3:10,v4:3.14})
            const b2 = Vue.reactive(["a","b"])

            Vue.watch(() => [b1.v1,b1.v2,b2[0],b2[1]],(curr,prev) => {

            })

            // Object.assign({},s1)

            Vue.watch(() => Object.assgin({},b1,b3),(curr,prev) => {

            })

            Vue.watch(() => Object.assgin([],b2),(curr,prev) => {

            })
        }

    3.vue3的setup中，如何深度批量侦听多个变量

        setup(){
            const o = Vue.reactive({
                v1:1,
                v2:2,
                details:{
                    v3:3,
                    v4:4,
                    details:{
                        v5:5,
                        v6:6
                    }
                }   
            })

            Vue.watch(() => Object.assgin({},o),() => {})

            Vue.watch(() => Object.assgin({},o.details),() => {})

            Vue.watch(() => Object.assgin({},o.details.details),() => {})
        }
*/