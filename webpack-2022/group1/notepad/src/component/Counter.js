import {ref} from "vue";
console.log(3227)
// 计步器组件
export default {
    // vue3.x
    // composition 组合api
    // 组合api中 不能使用this，因为在这里this永远是undefined
    setup(){
        const title = "计步器"  // 直接定义一个普通（没有双向绑定）的变量
        const count = ref(0)   // count 就具有双向绑定了
        // console.log("count:",count)
        // console.log("count.value:",count.value)

        const increase = () => {
            count.value++
        }
        const decrease = () => {
            count.value--
        }
        return {
            title,
            count,
            increase,
            decrease
        }
    },
    // vue2.x
    // data(){
    //     return {
    //         title:"计步器",
    //         count:0
    //     }
    // },
    // methods:{
    //     increase(){
    //         this.count++
    //     },
    //     decrease(){
    //         this.count--
    //     },
    // },
    template:`
        <div>
            <h2>{{title}}</h2>
            <div>count:{{count}}</div>
            <button v-on:click="increase">+</button>
            <button @click="decrease">-</button>
        </div>
    `
}