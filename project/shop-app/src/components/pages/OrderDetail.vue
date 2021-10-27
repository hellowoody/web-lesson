<script setup>
import TopBar from "@/components/topbar/TopBar.vue"
import MyContent from "@/components/content/MyContent.vue"
import FooterBar from "@/components/footerbar/FooterBar.vue"
import FooterBarButton from "@/components/footerbar/FooterBarButton.vue"
import {useRouter} from "vue-router"
import {useStore} from "vuex"
import {computed} from "vue";

const router = useRouter()
const store = useStore();

/*
    1.通过route.query 上一个页面传过来的参数(复杂的引用类型对象)，用console.log打印发现很多属性没有办法直接使用
    2.解决方案
        a，上一页面只传订单流水号，这个页面通过流水号进行订单查询，缺点：在nodejs中增加新的查询方法，增加一次“网络查询”
        b，全局状态管理vuex， 缺点：不能刷新
*/ 

// console.log(store.state.good.selectedOrder)

const back = () => {
    store.commit("pageDirection/setDirection","backward")
    router.go(-1)
}

const goGoodDetail = (item) => {
    store.commit("pageDirection/setDirection","forward")
    router.push({
        path:"/gooddetail/"+item.id+"/"+item.type.id
    })
}

const ImgStyle = computed(() => {
    return (url) => ({
        backgroundImage:`url(${url})`
    })
})

const totalPrice = computed(() => {
    return (count,price) => count*price
})

</script>

<template>
    <div>
        <top-bar style="box-shadow: unset;">
            <template v-slot:left>
                <div class="iconfont icon-fanhui1" @click="back" style="font-size:23px;"></div>
            </template>
            <template v-slot:middle>
                <div>订单明细</div>
            </template>
        </top-bar>
        <my-content>
            <a-list :data-source="store.state.good.selectedOrder.details">
                <template #renderItem="{item}">
                    <a-list-item @click="goGoodDetail(item)">
                        <div class="order">
                            <div class="pic" :style="ImgStyle(item.imgpath)"></div>
                            <div class="content">
                                <div style="font-size:16px;">{{item.name}}</div>
                                <div>数量:{{item.countbuy}} 个</div>
                                <div>单价:¥ {{item.price}}</div>
                                <div style="color:rgb(250, 100, 0)">总价:¥ {{totalPrice(item.countbuy,item.price)}}</div>
                            </div>
                        </div>    
                    </a-list-item>
                </template>
            </a-list>
        </my-content>
        <footer-bar>
            <template v-slot:left>
                <div style="font-size:13px;">
                    <div style="font-size:14px;margin-bottom:3px;">订单状态: {{store.state.good.selectedOrder.status.name}}</div>
                    <div style="color:rgb(250,100,0)">实际付款: ¥{{store.state.good.selectedOrder.price}}</div>
                </div>
            </template>
            <template v-slot:right>
                <footer-bar-button name="提醒发货"></footer-bar-button>
            </template>
        </footer-bar>
    </div>
</template>

<style scoped>

.ant-list-split .ant-list-item {
    border-bottom:unset;
}

.order {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    width:100%;
    box-shadow:0px 1px 5px #e3e3e3;
    border-radius:8px;
    padding:10px 6px;
    box-sizing: border-box;
}

.pic {
    background-color: #e5e5e5;
    border-radius: 8px;
    width:85px;
    height:85px;
    box-shadow: 0px 1px 3px rgb(30 30 30 / 0.2);
    flex:1
}

.content {
    flex:2;
    font-size:13px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-left:24px;
}
</style>