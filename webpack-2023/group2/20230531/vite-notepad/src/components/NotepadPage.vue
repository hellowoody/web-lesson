<template>
    <div class="layout">
        <top-bar>
            <h2>notepad</h2>
            <router-link style="color:#fff" to="/login">登录</router-link>
        </top-bar>
        <content-bar>
            <router-view></router-view>
        </content-bar>
        <footer-bar>
            <p>copyright</p>
        </footer-bar>
    </div>
</template>

<script setup>
import TopBar from "@/components/layout/TopBar.vue"
import FooterBar from "@/components/layout/FooterBar.vue"
import ContentBar from "@/components/layout/ContentBar.vue";
</script>

<style scoped>
.layout {
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>