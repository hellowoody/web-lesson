<script setup>
import { inject } from "vue"
import TopBar from "@/components/topbar/TopBar.vue";
import Content from "@/components/content/Content.vue";
import FooterBar from "@/components/footerbar/FooterBar.vue";
import FooterBarButton from "@/components/footerbar/FooterBarButton.vue";
import ProductEdit from "@/components/product/ProductEdit.vue"
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection"
import { useState as useCartState } from "@/store/cart"
import { getItem } from "@/kits/LocalStorageKit"

const message = inject("$message")
const cartState = useCartState()
const state = useState()
const router = useRouter()

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}

const initData = async () => {
    const res = await cartState.getCart(getItem("userId"))
    return res
}

const buy = async () => {
    /*
        订单的数据结构
        主表 id sysdate status userId 
        子表 subId mainId goodid price count imgpath name 
        文本型数据库

        collection order 

        {
            id,
            sysdate,
            status,
            userId,
            list:[
                {
                   goodid
                   price
                   count
                   imgpath
                   name 
                },
                {
                   goodid
                   price
                   count
                   imgpath
                   name 
                },
            ]
        }
    */
    
    try {
        const res = await cartState.createOrder()
        if(res.code === 1) {
            message.success(res.msg)
        }else{
            message.warning(res.msg)
        }
    } catch (e) {
        message.warning(e.message)
    }
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
        <content :hasTabBar="true" :pull="true" :refreshFunc="initData">
            <product-edit v-for="item in cartState.cart" :product="item"></product-edit>
        </content>
        <footer-bar>
            <footer-bar-button>
                <span style="font-size:16px;margin-left:12px;">
                    总价: <span style="color:rgb(250, 100, 0)">¥ {{cartState.totalPrice}}</span>
                </span>
            </footer-bar-button>
            <footer-bar-button>
                <a-button size="large" @click="buy" type="primary" block>结算</a-button>
            </footer-bar-button>
        </footer-bar>
    </div>
</template>
    
  