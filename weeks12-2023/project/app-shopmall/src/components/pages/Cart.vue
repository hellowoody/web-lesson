<template>
    <div>
        <top-bar>
            <template v-slot:left>
                <span class="iconfont icon-fanhuijiantou" style="font-size:20px;" @click="back"></span>
            </template>
            <template v-slot:middle>
                <div>购物车</div>
            </template>
        </top-bar>
        <content :refreshFunc="initData" hasTabBar pull>
            <product-edit v-for="item in cartState.cart" :good="item"></product-edit>
        </content>
        <footer-bar>
            <footer-bar-item>
                <span style="font-size:16px;margin-left:12px;">
                    总价:
                    <span style="color:rgb(250, 100, 0);">￥ {{cartState.totalPrice}}</span>
                </span>
            </footer-bar-item>
            <footer-bar-item>
                <a-button  size="large" type="primary" @click="createOrder" block>结算</a-button>
            </footer-bar-item>
        </footer-bar>
    </div>
</template>
<script setup>
import { inject } from "vue"
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection.js"
import { useState as useCartState } from "@/store/cart.js"
import { getItem } from "@/kits/localStore"

const router = useRouter()
const state = useState()
const cartState = useCartState()
const toast = inject("showToast")

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}

const initData = () => cartState.getCart(getItem("userId"),getItem("token")).then(res => {
    if(res.errors && res.errors.length > 0){
        console.log(res.errors[0].message)
        const msg = res.errors[0].message
        const flag = "checkToken:"
        if(msg.indexOf(flag) === 0){
            const arr = msg.slice(flag.length).split(",")
            toast.warning(arr[1].slice("msg ".length))
            state.setDirection("forward")
            router.push("/login")
        }
    }
    return {
        code:"ok"
    }
}).catch(e => {
    return {
        code:"failed"
    }
})
        

initData()


const createOrder = async () => {
    const checkedCart = cartState.cart.filter(item => item.checked)
    if(checkedCart.length === 0){
        toast.warning("请选择要下单的商品")
        return 
    }
    try {
        const res = await cartState.createOrder(getItem("userId"),getItem("token"),checkedCart)
        if(res.code === 1){
            toast.success(res.msg)
        }else{
            toast.warning(res.msg)
        }
    } catch (e) {
        toast.error(e.message)
    }
}
</script>