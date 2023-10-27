<template>
    <div>
        <top-bar>
            <template v-slot:left>
                <span class="iconfont icon-fanhuijiantou" style="font-size:20px;" @click="back"></span>
            </template>
            <template v-slot:middle>
                <div>订单详情</div>
            </template>
        </top-bar>
        <content style="padding:unset;" hasTabBar>
            <div style="padding:24px 24px 0;">
                <div class="order-row">
                    <div>订单状态</div>
                    <div class="order-status" :style="orderState.statusStyle">{{ orderState.detail.statusName }}</div>
                </div>
                <div class="order-row">
                    <div>单号</div>
                    <div>{{ orderState.detail.id }}</div>
                </div>
                <div class="order-row">
                    <div>下单时间</div>
                    <div>{{ orderState.detail.createTime }}</div>
                </div>
            </div>
            <a-list :data-source="orderState.detail.list">
                <template #renderItem="{item}">
                    <a-list-item>
                        <product-card :product="item" style="width:100%;"/>
                    </a-list-item>
                </template>
            </a-list>
        </content>
        <footer-bar>
            <footer-bar-item>
                <span style="font-size:16px;margin-left:12px;">
                    总价:<span style="color:rgb(250, 100, 0);">{{orderState.totalPrice}}</span>
                </span>
            </footer-bar-item>
            <footer-bar-item>
                <a-button  size="large" type="primary" block>退款</a-button>
            </footer-bar-item>
        </footer-bar>
    </div>
</template>
<script setup>
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection.js"
import { useState as useOrderState } from "@/store/order.js"

const router = useRouter()
const state = useState()
const orderState = useOrderState()

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}
</script>

<style scoped>
.order-item {
    width:100%;
    box-shadow: 0px 1px 8px rgb(0 0 0 / 0.1);
    padding:8px;
    box-sizing: border-box;
    border-radius: 15px;
    font-size: 13px;
    color:rgb(0 0 0 / 0.5);
}

.order-row {
    display:flex;
    justify-content: space-between;
    margin-bottom: 6px;
}
</style>