<template>
    <child 
        :count="num" 
        @add="increase"
        @sub="decrease"
        ></child>
</template>

<!-- <script>
import {ref} from "vue"
// import Child from "./Child.vue"
import Child from "@/components/Child.vue"

export default {
    setup(){
        const num = ref(0)

        const increase = () => num.value++

        const decrease = () => num.value--

        return {
            num,
            increase,
            decrease
        }
    },
    components:{
        Child
    },
}

</script> -->

<script setup>
import {ref} from "vue"
import Child from "@/components/Child.vue"

const num = ref(0)
const increase = () => num.value++
const decrease = () => num.value--

</script>