<script setup>
import MyContent from "@/components/content/MyContent.vue";
import { computed } from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const categorys = [
    {
        id:"01",
        name:"游戏主机",
        backgroundColor:"#F9bead",
        fontColor:"#d84933",
        iconlogo:"iconfont icon-youxi"
    },
    {
        id:"02",
        name:"生活用品",
        backgroundColor:"#fbd96d",
        fontColor:"#b68800",
        iconlogo:"iconfont icon-shenghuo"
    },
    {
        id:"03",
        name:"潮流新鞋",
        backgroundColor:"#dff8ea",
        fontColor:"#08a963",
        iconlogo:"iconfont icon-xie"
    },
    {
        id:"04",
        name:"潮流服装",
        backgroundColor:"#b1eafd",
        fontColor:"#185162",
        iconlogo:"iconfont icon-shenghuoyongpin"
    },
]

const cardStyle = computed(() => item => ({backgroundColor:item.backgroundColor}))
// 上面的语法等同与下面的语法
// const cardStyle = computed(() => {
//     return (item) => {
//         return {
//             backgroundColor:item.backgroundColor
//         }
//     }
// })
const fontStyle = computed(() => (item) => ({
    fontSize:"28px",
    color:item.fontColor,
    marginLeft:"72px",
}))

const gotoGoodsCategory = (type) => {
    router.push({path:"/goodscategory",query:{ type }})
}

</script>

<template>
    <my-content>
        <div class="title">商品类别</div>
        <div @click="gotoGoodsCategory(item.id)" class="card" :style="cardStyle(item)" v-for="(item,index) in categorys" :key="index">
            <div class="card-left" :class="item.iconlogo"></div>
            <div :style="fontStyle(item)">{{item.name}}</div>
        </div>
    </my-content>
</template>

<style scoped>
.title {
    margin-top:60px;
    color:rgb(0 0 0 / 0.5);
    font-size:18px;
    font-weight: bold;
}

.card {
    height:133px;
    border-radius: 21px;
    margin-top:20px;
    display:flex;
    align-items: center;
    padding-left:35px;
}

.card-left {
    font-size:60px;
    opacity:0.5;
}

</style>