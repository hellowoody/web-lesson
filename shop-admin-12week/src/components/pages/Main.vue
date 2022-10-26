<script setup>
import Layout from "@/components/layout/Layout.vue"
import TopBar from "@/components/layout/TopBar.vue";
import SideBar from "@/components/layout/SideBar.vue";
import Content from "@/components/layout/Content.vue";
import NavBar from "@/components/NavBar.vue"
import HeadBar from "@/components/HeadBar.vue"
</script>

<template>
    <layout>
        <template v-slot:header>
            <top-bar>
                <head-bar />
            </top-bar>
        </template>
        <template v-slot:sider>
            <side-bar>
                <nav-bar />
            </side-bar>
        </template>
        <template v-slot:container>
            <content>
                <!-- 二级路由的占位符 -->
                <router-view></router-view>
            </content>
        </template>
    </layout>
</template>