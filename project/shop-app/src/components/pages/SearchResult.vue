<script setup>
import {useRoute,useRouter} from "vue-router"
import TopBar from "@/components/topbar/TopBar.vue";
const route = useRoute();
const router = useRouter()
const back = () => router.go(-1)
const go = path => router.push({path})

console.log(route.query)
</script>

<template>
    <top-bar>
        <template v-slot:left>
            <div class="iconfont icon-fanhui1" @click="back" style="font-size:23px;"></div>
        </template>
        <template v-slot:right>
            <div class="iconfont icon-sousuo" @click="goSearch" style="font-size:23px;"></div>
        </template>
    </top-bar>
    search result
</template>
