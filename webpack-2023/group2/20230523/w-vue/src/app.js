import {ref} from "vue"

export default {
    setup(){
        console.log(1000)
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
        <h1>{{count}}</h1>
        <button @click="decrease">-</button>
        <button @click="increase">+</button>
    
    `

    
}