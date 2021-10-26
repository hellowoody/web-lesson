<script setup>
import MyContent from "@/components/content/MyContent.vue"
import {Gql} from "@/kits/HttpKit";
import {getCacheVal} from "@/kits/LocalStorageKit";
import {ref} from "vue"

const orderList = ref([])

const refresh = async () => {
    let start = 0;
    let count = 5;
    const p = {
        query:`
            {
                userOrder(userid:"${getCacheVal('userid')}",start:${start},count:${count}) {
                    id
                    price
                    orderdate
                    goodcount
                    status (id:"order_status") {
                        id
                        name
                    }
                    details {
                        id
                        name
                        price
                        imgpath
                        type (id:"goods_type") {
                            id
                            name
                        }
                        countbuy
                    }
                }
            }
        `
    }
    // 调用gql
    try {
        const res = await Gql(p)
        console.log(res)
        orderList.value = res.data.userOrder
        return true
    } catch(e) {
        return false
    }
}

</script>

<template>
<my-content pull :refreshFunc="refresh">
    <div class="title">订单信息</div>
    <a-list :data-source="orderList" >
        <template #renderItem="{item}">
            <div>{{item}}</div>
        </template>
    </a-list>
</my-content>
</template>

<style scoped>
.title {
    margin-top:36px;
    color:rgb(0 0 0 / 0.5);
    font-weight:bold;
    font-size:16px;
}
</style>