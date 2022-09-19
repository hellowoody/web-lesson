<script setup>
// import {ShoppingCartOutlined} from "@ant-design/icons-vue"
import TabBar from "@/components/topbar/TopBar.vue"
import {useRouter} from "vue-router"
import { useState } from "@/store/pageDirection"
// import { useStore } from "vuex"
// const store = useStore();

const router = useRouter()
const state = useState()

const goto = () => {
    // store.commit("modules中的key/module中的方法名")
    // store.commit("pageDirection/setDirection","forward")
    state.setDirection("forward")
    router.push({
        path:"/search"
    })
}
</script>

<template>
    <div>
        <tab-bar @handleTabbar="goto">
            <template v-slot:left>
                <span class="iconfont icon-saoyisao" style="font-size:20px;"></span>
            </template>
            <template v-slot:right>
                <span class="iconfont icon-gouwuche" style="font-size:20px;"></span>
                <!-- <shopping-cart-outlined style="font-size:20px;color:red;" /> -->
            </template>
        </tab-bar>
        <h1>home page</h1>
    </div>
</template>