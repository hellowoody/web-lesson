<!-- script setup  vue3.2 SFC  -->
<script setup>
import Layout from "@/components/layout/Layout.vue"
import TopBar from "@/components/layout/TopBar.vue"
import SideBar from "@/components/layout/SideBar.vue"
import Content from "@/components/layout/Content.vue"
import Header from "@/components/Header.vue"
import NavBar from "@/components/NavBar.vue"

</script>

<template>
    <layout>
        <template v-slot:TopBar>
            <top-bar>
                <Header />
            </top-bar>
        </template>
        <template v-slot:SideBar>
            <side-bar>
                <nav-bar />
            </side-bar>
        </template>
        <template v-slot:Content>
            <content>
                <!-- 二级路由占位符 -->
                <router-view></router-view>
            </content>
        </template>
    </layout>
</template>