<template>
    <h2>home page</h2>
    <p>用户id:{{ userId }}</p>
    <p>用户名:{{ name }}</p>
</template>

<script setup>
import {useRoute} from "vue-router"

const route = useRoute()

const {userId,name} = route.query

</script>