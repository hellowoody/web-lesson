import {defineStore} from "pinia"
import {ref} from "vue"

// 第二个参数就相当于组件中的setup
export const useStateBySetup = defineStore("counterSetup",() => {
    const step = ref(1000)
    const increase = () => step.value++

    return {
        step,
        increase
    }
})