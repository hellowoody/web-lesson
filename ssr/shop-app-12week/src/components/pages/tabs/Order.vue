<script setup>
import { ref,inject,computed } from "vue"
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection"
import TopBar from "@/components/topbar/TopBar.vue"
import Content from "@/components/content/Content.vue"
import { getItem } from "@/kits/LocalStorageKit"
import { gql } from "@/kits/HttpKit"
import { useState as useOrderState } from "@/store/order"

const orderState = useOrderState()
const message = inject("$message")
const router = useRouter()
const state = useState()
const order = ref([])
let start = 0 , count = 5;

const fetchData = async () => {
    const dictId = "order_status"
    const userId = getItem("userId")
    const token = getItem("token")

    const params = {
        token,
        userId,
        query:`
            {
                orderList (userId:"${userId}",start:${start},count:${count}) {
                    id
                    userId
                    sysdate
                    status (id:"${dictId}"){
                        id
                        name
                    }
                    list {
                        id
                        name
                        price
                        count
                        imgpath
                    }
                }
            }
        `
    }
    try {
        const res = await gql(params)
        // console.log(res.data.orderList.length)
        order.value = order.value.concat(res.data.orderList)
        start += res.data.orderList.length
        return {code:"ok"}
    }catch(e){
        message.warning(e.message)
        return {code:"failed"}
    }
}

fetchData()
const goto = (path) => {
    state.setDirection("forward")
    router.push({path})
}

const goDetail = (orderDetail) => {
    orderState.setOrderDetail(orderDetail)
    goto("/orderdetail")
}

const sumPrice = computed(() => {
    return (item) => {
        return item.list.reduce((acc,v) => acc + v.price*v.count,0)
    }
})

const orderId = computed(() => {
    return (id) => {
        return id.substring(id.length-6,id.length)
    }
})

const statusStyle = computed(() => {
    return (statusId) => {
        const res = {}
        switch (statusId) {
            case "1":
                res.color = "#919100"
                break;
            case "2":
                res.color = "red"
                res.fontStyle = "italic"
                res.textDecoration = "line-through"
                res.opacity = "0.6"
                break;
            case "3":
                res.color = "grey"
                res.opacity = "0.6"
                break;
            case "4":
                res.color = "pink"
                break;
            case "5":
                res.color = "purple"
                break;
            default:
                break;
        }
        return res
    }
})

const search = () => {}

</script>

<template>
    <div>
        <top-bar style="box-shadow:unset;">
            <template v-slot:right>
                <span style="color:rgb(0 0 0 / 0.5)" @click="search">搜索</span>
            </template>
        </top-bar>
        <content :hasTabBar="true" :pull="true" :refreshFunc="fetchData">
            <a-list :data-source="order">
                <template #renderItem="{item}">
                    <a-list-item @click="goDetail(item)">
                        <div class="order-item">
                            <div class="order-row">
                                <div>订单状态</div>
                                <div class="order-status" :style="statusStyle(item.status.id)">{{item.status.name}}</div>
                            </div>
                            <div class="order-row">
                                <div>单号:{{orderId(item.id)}}</div>
                                <div>{{item.sysdate}}</div>
                            </div>
                            <div class="order-row">
                                <div>购买数量</div>
                                <div>{{item.list.length}}</div>
                            </div>
                            <div class="order-row">
                                <div>订单总价</div>
                                <div style="color:rgb(250, 100, 0)">¥ {{sumPrice(item)}}</div>
                            </div>   
                        </div>
                    </a-list-item>
                </template>
            </a-list>
        </content>
    </div>
</template>

<style scoped>
.order-item {
    width:100%;
    font-size:13px;
    color:rgb(0 0 0 / 0.5);
    padding:8px;
    box-sizing: border-box;
    box-shadow:0px 1px 8px rgb(0 0 0 / 0.1);
    border-radius:15px;
}

.order-row {
    display:flex;
    justify-content: space-between;
    margin-bottom:6px;
}

.order-status {
    font-size:16px;
    font-weight: bold;
}
</style>