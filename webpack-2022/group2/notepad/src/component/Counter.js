import {ref} from "vue"
export default {
    // composition
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
            <a-typography>
                <a-typography-title>step is</a-typography-title>
                <a-typography-text strong>{{count}}</a-typography-text>
            </a-typography>
            <a-button @click="increase">+</a-button>
            <a-button @click="decrease">-</a-button>
        </a-card>
    `
}