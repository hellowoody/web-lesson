<template>
    <top-bar @handleTopBar="goto('/search')">
        <template v-slot:right>
            <span class="iconfont icon-gouwuche" style="font-size:20px;" @click="goto('/cart')"></span>
        </template>
    </top-bar>
    <content style="padding:unset;" :refreshFunc="refresh" hasTabBar pull>
        <a-list :data-source="order">
            <template #renderItem="{item}">
                <a-list-item @click="goDetail(item)">
                    <div class="order-item">
                        <div class="order-row">
                            <div>订单状态</div>
                            <div class="order-status" :style="statusStyle(item.status)">{{ item.statusName }}</div>
                        </div>
                        <div class="order-row">
                            <div>单号:{{ orderId(item.id) }}</div>
                            <div>{{ item.createTime }}</div>
                        </div>
                        <div class="order-row">
                            <div>商品种类</div>
                            <div>{{ item.list.length }} </div>
                        </div>
                        <div class="order-row">
                            <div>订单总价</div>                       
                            <div>{{ sumPrice(item) }}</div>                       
                        </div>
                    </div>
                </a-list-item>
            </template>
        </a-list>
    </content>
</template>
<script setup>
import { ref,inject,computed } from "vue"
import {useRouter} from "vue-router"
import { useState } from "@/store/pageDirection.js"
import { useState as useOrderState } from "@/store/order.js"
import { getItem } from "@/kits/localStore"
import  { gql } from "@/kits/fetch.js" 

const router = useRouter()
const state = useState()
const orderState = useOrderState()
const order = ref([])
const toast = inject("showToast")

let start = 0 , count = 5

const goto = (path) => {
    state.setDirection("forward")
    router.push({path})
}

const refresh = () => {
    start = 0
    order.value = []
    return fetchData()
}

const fetchData = async () => {
    const userId = getItem("userId")
    const token = getItem("token")

    const params = {
        token,
        userId,
        query:`
        {
            orderList(userId:"${userId}",start:${start},count:${count}){
                id
                userId
                status
                statusName
                createTime
                list {
                    id
                    price
                    count
                    name
                    imgpath
                }
            }
        }
        `
    }

    try {
        const res = await gql(params)
        if(res.errors && res.errors.length > 0){
            console.log(res.errors[0].message)
            const msg = res.errors[0].message
            const flag = "checkToken:"
            if(msg.indexOf(flag) === 0){
                const arr = msg.slice(flag.length).split(",")
                toast.warning(arr[1].slice("msg ".length))
                toast.warning("请先登陆")
            }
            return
        }
        order.value = order.value.concat(res.data.orderList)
        start += res.data.orderList.length
        return {
            code:"ok"
        }
    } catch (e) {
        toast.warning(e.message)
        return {code:"failed"}
    }
}

fetchData()

const orderId = computed(() => {
    return id => {
        return id.slice(-6)
    }
})

const statusStyle = computed(() => {
    return code => {
        const styl = {}
        switch (code) {
            case "01":
                styl.color = "#919100"
                break;
            case "02":
                styl.color = "red"
                styl.fontStyle = "italic"
                styl.textDecoration = "line-through"
                styl.opacity = "0.6"
                break;
            case "03":
                styl.color = "grey"
                styl.opacity = "0.6"
                break;
            case "04":
                styl.color = "pink"
                break;
            case "05":
                
                break;
            case "06":
                
                break;
            case "07":
                
                break;
            default:
                break;
        }
        return styl
    }
})

const sumPrice = computed(() => {
    return item => {
        return "￥" + item.list.reduce((acc,v) => acc + v.price*v.count,0)
    }
})

const goDetail = item => {
    orderState.setDetail(item)
    goto("/orderDetail")
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