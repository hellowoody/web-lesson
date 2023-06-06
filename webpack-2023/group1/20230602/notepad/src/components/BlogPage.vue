<template>
    <div class="layout">
        <top-bar>
            <div>logo</div>
            <router-link style="color:#fff" to="/login">登录</router-link>
        </top-bar>
        <content>
            <router-view></router-view>
        </content>
        <footer-bar>
            <div>@copyright</div>
        </footer-bar>
    </div>
</template>

<script setup>
import TopBar from "@/components/layout/TopBar.vue"
import Content from "@/components/layout/Content.vue"
import FooterBar from "@/components/layout/FooterBar.vue"
</script>

<style scoped>
.layout {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
}
</style>