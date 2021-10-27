<script setup>
import MyContent from "@/components/content/MyContent.vue"
import {Gql} from "@/kits/HttpKit";
import {getCacheVal} from "@/kits/LocalStorageKit";
import {ref} from "vue"
import {useRouter} from "vue-router";
import {useStore} from "vuex";

const router = useRouter()
const store = useStore()
const orderList = ref([])
let start = 0 , 
    count = 5 ;

const goDetail = (item) => {
    store.commit("good/setSelectedOrder",item)
    store.commit("pageDirection/setDirection","forward")
    router.push({path:"/orderdetail"})
}

const getData = async () => {
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
        // console.log(res)
        orderList.value = res.data.userOrder
        return true
    } catch(e) {
        return false
    }
}

const refresh = () => {
    start = 0;
    return getData()
}

getData();

</script>

<template>
<my-content pull :refreshFunc="refresh">
    <div class="title">订单信息</div>
    <a-list :data-source="orderList" >
        <template #renderItem="{item}">
            <a-list-item @click="goDetail(item)">
                <div class="order">
                    <div class="first-row">{{item.status.name}}</div>
                    <div class="row">
                        <div>订单:</div>
                        <div>{{item.id}}</div>
                    </div>
                    <div class="row">
                        <div>创建时间:</div>
                        <div>{{item.orderdate}}</div>
                    </div>
                    <div class="row">
                        <div>购买了几种商品:</div>
                        <div>{{item.goodcount}}</div>
                    </div>
                    <div class="row">
                        <div>总价:</div>
                        <div>¥ {{item.price}}</div>
                    </div>
                </div>
            </a-list-item>
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

.ant-list-split .ant-list-item {
    border-bottom:unset;
}

.order {
    display:flex;
    flex-direction: column;
    width:100%;
    background-color: #fff;
    box-shadow: 0px 1px 5px #e3e3e3;
    border-radius: 12px;
    padding:12px;
    box-sizing: border-box;
}

.first-row {
    display:flex;
    justify-content: flex-end;
    color:rgb(250, 100, 0);
    margin-top:8px;
    font-size:15px;
}
.row {
    display:flex;
    justify-content: space-between;
    margin-top:8px;
    font-size:13px;
}
</style>