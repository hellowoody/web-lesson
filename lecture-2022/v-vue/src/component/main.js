import {ref} from "vue"
export default {
    setup(){
        const count = ref(0)

        const increase = () => count.value++

        const decrease = () => count.value--

        return {
            count,
            increase,
            decrease
        }
    },
    template:`
    <a-card title="计步器">
        <div>count is {{count}}</div>
        <a-button @click="increase">+</a-button>
        <a-button @click="decrease">-</a-button>
    </a-card>
    `
}