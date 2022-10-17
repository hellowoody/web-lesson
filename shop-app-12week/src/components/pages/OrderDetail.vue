<script setup>
import TopBar from "@/components/topbar/TopBar.vue";
import Content from "@/components/content/Content.vue"
import FooterBar from "@/components/footerbar/FooterBar.vue";
import FooterBarButton from "@/components/footerbar/FooterBarButton.vue";
import ProductCard from "@/components/product/ProductCard.vue"
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection"
import { useState as useOrderState } from "@/store/order"

const orderState = useOrderState()
const state = useState()
const router = useRouter()

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}

const fetchData = async () => {
    return {code:"ok"}
}

</script>

<template>
    <div>
        <top-bar style="box-shadow:unset;">
            <template v-slot:left>
                <span class="iconfont icon-xiangzuojiantou" @click="back"></span>
            </template>
            <template v-slot:middle>
                <div>订单详情</div>
            </template>
        </top-bar>
        <content :hasTabBar="true" :pull="true" :refreshFunc="fetchData">
            <div class="order-row">
                <div>订单状态</div>
                <div class="order-status" :style="orderState.statusStyle(orderState.orderDetail.status.id)">{{orderState.orderDetail.status.name}}</div>
            </div>
            <div class="order-row">
                <div>{{orderState.orderDetail.id}}</div>
                <div>{{orderState.orderDetail.sysdate}}</div>
            </div>
            <a-list :data-source="orderState.orderDetail.list">
                <template #renderItem="{item}">
                    <a-list-item >
                        <product-card :product="item" style="width:100%;" />
                    </a-list-item>
                </template>
            </a-list>
        </content>
        <footer-bar>
            <footer-bar-button>
                <span style="font-size:16px;margin-left:12px;">
                    总价: <span style="color:rgb(250, 100, 0)">¥ {{orderState.totalPrice}}</span>
                </span>
            </footer-bar-button>
            <footer-bar-button>
                <a-button size="large" type="primary" block>退款</a-button>
            </footer-bar-button>
        </footer-bar>
    </div>
</template>

<style scoped>
.order-row {
    display:flex;
    justify-content: space-between;
    margin-bottom:6px;
    color:rgb(0 0 0 / 0.5);
}

.order-status {
    font-size:16px;
    font-weight: bold;
}
</style>
    
  