<script setup>
import {ref} from "vue"
import TopBar from "@/components/topbar/TopBar.vue";
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection"
import { useState as useCartState } from "@/store/cart"
import { getItem } from "@/kits/LocalStorageKit"

const cartState = useCartState()
const state = useState()
const router = useRouter()
const cart = ref([])

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}

const initData = async () => {
    const res = await cartState.getCart(getItem("userId"))
    cart.value = res.data
}

initData()
</script>

<template>
    <div>
        <top-bar style="box-shadow:unset;">
            <template v-slot:left>
                <span class="iconfont icon-xiangzuojiantou" @click="back"></span>
            </template>
            <template v-slot:middle>
                <div>购物车</div>
            </template>
        </top-bar>
        {{cart}}
    </div>
</template>
    
  