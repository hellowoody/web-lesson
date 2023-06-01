<template>
    <h2>order list include {{ name }}</h2>
    <ul>
        <li v-for="item in parseInt(limit,10)">{{ item }}</li>
    </ul>

</template>

<script setup>
import {useRoute} from "vue-router"

const route = useRoute()

// console.log(route)

const {limit,name} = route.query

</script>