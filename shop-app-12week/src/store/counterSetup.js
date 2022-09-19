import {defineStore} from "pinia"
import {ref} from "vue"

export const useState = defineStore("counterSetup",() => {
    const step = ref(-20)

    const increase = () => step.value++
    const decrease = () => step.value--

    return {
        step,
        increase,
        decrease
    }
})