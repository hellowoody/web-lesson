<script setup>
import TopBar from "@/components/topbar/TopBar.vue";
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection"

const state = useState()
const router = useRouter()

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}
</script>

<template>
    <div>
        <top-bar style="box-shadow:unset;">
            <template v-slot:left>
                <span class="iconfont icon-xiangzuojiantou" @click="back"></span>
            </template>
            <template v-slot:middle>
                <div>空白页面</div>
            </template>
        </top-bar>
    </div>
</template>
    
  