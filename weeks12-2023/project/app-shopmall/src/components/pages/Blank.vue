<template>
    <div>
        <top-bar>
            <template v-slot:left>
                <span class="iconfont icon-fanhuijiantou" style="font-size:20px;" @click="back"></span>
            </template>
            <template v-slot:middle>
                <div>空白页面</div>
            </template>
        </top-bar>
        <content></content>
    </div>
</template>
<script setup>
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection.js"

const router = useRouter()
const state = useState()

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}
</script>