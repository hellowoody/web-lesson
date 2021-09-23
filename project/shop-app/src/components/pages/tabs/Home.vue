<script setup>
import {useRouter} from "vue-router";
import TopBar from "@/components/topbar/TopBar.vue";
const router = useRouter()
const back = () => router.go(-1)
const go = () => router.push({path:"/vrroom"})
</script>

<template>
<top-bar>
    <template v-slot:right>
        <div class="iconfont icon-gouwuche1" style="font-size:24px" ></div>
    </template>
</top-bar>
<a-button style="margin-top:10px;" @click="back">返回</a-button>
<a-button @click="go">VR全景</a-button>
<div>home</div>
</template>