<template>
    <div class="layout">
        <nav-bar style="flex:1;border-right:1px solid #313131;"/>
        <router-view style="flex:3"/>
    </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue"
</script>

<style scoped>
.layout {
    display: flex;
    height:100vh;
}
</style>