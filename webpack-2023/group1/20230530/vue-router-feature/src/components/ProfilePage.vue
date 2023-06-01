<template>
    <h2>profile page</h2>


</template>

<script setup>
import {useRoute , useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()


console.log("params",route.params)




</script>