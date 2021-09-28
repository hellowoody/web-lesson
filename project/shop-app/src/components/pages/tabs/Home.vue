<script setup>
import {useStore} from "vuex"
import {useRouter} from "vue-router";
import TopBar from "@/components/topbar/TopBar.vue";

const router = useRouter()
const store = useStore();

const back = () => router.go(-1)
const go = path => {
    store.commit("pageDirection/setDirection","forward")
    router.push({path})
}

</script>

<template>
<div>
    <top-bar @focusHandle="go('/search')">
        <template v-slot:right>
            <div class="iconfont icon-gouwuche1" style="font-size:24px" ></div>
        </template>
    </top-bar>
    <a-button style="margin-top:10px;" @click="back">返回</a-button>
    <a-button @click="go('/vrroom')">VR全景</a-button>
    <div>home</div>
</div>
</template>