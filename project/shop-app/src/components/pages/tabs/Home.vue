<script setup>
import {ref,onMounted,nextTick,computed} from "vue"
import {useStore} from "vuex"
import {useRouter} from "vue-router";
import BScroll from '@better-scroll/core';
import TopBar from "@/components/topbar/TopBar.vue";
import MyContent from "@/components/content/MyContent.vue";
import ProductCard from "@/components/product/ProductCard.vue";

const router = useRouter()
const store = useStore();
const homeImgs = ref([
    "src/assets/imgs/home01.png",
    "src/assets/imgs/home02.png",
    "src/assets/imgs/home03.png",
])

const products = ref([
    {
        id:1,
        name:"鞋1",
        price:"1000",
        imgpath:"src/assets/imgs/shoe01.png",
        type:{
            id:"1"
        }
    },
    {
        id:2,
        name:"鞋2",
        price:"2000",
        imgpath:"src/assets/imgs/shoe02.png",
        type:{
            id:"1"
        }
    },
    {
        id:3,
        name:"鞋3",
        price:"3000",
        imgpath:"src/assets/imgs/shoe03.png",
        type:{
            id:"1"
        }
    },
])

const moreContent = [
    {
        name:"爆款",
        backgroundColor:"#F9bead",
        fontColor:"#d84933",
    },
    {
        name:"特价",
        backgroundColor:"#fbd96d",
        fontColor:"#b68800",
    },
    {
        name:"二手",
        backgroundColor:"#dff8ea",
        fontColor:"#08a963",
    },
    {
        name:"拼一拼",
        backgroundColor:"#b1eafd",
        fontColor:"#18 51 62",
    },
]

const back = () => router.go(-1)
const go = path => {
    store.commit("pageDirection/setDirection","forward")
    router.push({path})
}

const moreContentStyle = computed(() => {
    return (item) => {
        return {
            backgroundColor:item.backgroundColor,
            color:item.fontColor
        }
    }
})

const count = ref(0)      // proxy { {value:0} }
const wrapper = ref(null) // proxy { {value:<div ref="wrapper"></div>}  }
const list = ref(null)
const wrapper_bs = ref(null)
const list_bs = ref(null)
let bs
let bs_bs
// 这里使用onMounted 是为了保证dom已经渲染完毕，好让我们调整ref=list 标签的宽度
onMounted(() => {
        const wrapper_div = wrapper.value // <div ref="wrapper"></div>
        // console.log(wrapper_div)
        const list_div = list.value // <div ref="list"></div>
        let itemWidth = 138; // 设置一个变量，让这个变量的值等于productcard组件的宽度
        let margin = 15 ;
        let width = (itemWidth + margin) * products.value.length - margin;
        // console.log(width)
        list_div.style.width = width + "px"  // ！！！ 加单位px
        //  nextTick保证ref=list dom的width更新完毕
        nextTick(() => {
            if (!bs) {
                bs = new BScroll(wrapper_div, {
                    scrollX: true,
                    eventPassthrough: 'vertical' // 忽略竖直方向的滚动
                })
            } else {
                bs.refresh()
            }
        })

        const wrapper_bs_div = wrapper_bs.value;
        const list_bs_div = list_bs.value;
        const itemWidth_bs = 120
        const margin_bs = 12
        const width_bs = (itemWidth_bs + margin_bs) * moreContent.length - margin_bs
        list_bs_div.style.width = width_bs + "px" // !!!
        nextTick(() => {
            if(!bs_bs){
                bs_bs = new BScroll(wrapper_bs_div,{
                    scrollX:true,
                    eventPassthrough:'vertical'
                })
            }else{
                bs_bs.refresh()
            }
        })

})

// const refId = ref(null)

// onMounted(() => {
//     const carousel_div = refId.value
//     // console.log(carousel_div.$el) // <div></div>
//     const t = carousel_div.$el
//     // console.log(t.childNodes[0])
//     const tt = t.childNodes[0]
//     console.log(tt.childNodes[1])
//     const ttt = tt.childNodes[1] 
//     const tttt = ttt.childNodes[0]
//     tttt.addEventListener("touchmove",function(e){
//         // e.preventDefault() ;  // 阻止捕获事件
//         e.stopPropagation() ; // 阻止冒泡事件
//         // console.log(1000)
//     },{
//         passive:false
//     })
// })
</script>

<template>
<div>
    <top-bar @focusHandle="go('/search')">
        <template v-slot:right>
            <div class="iconfont icon-gouwuche1" style="font-size:24px" ></div>
        </template>
    </top-bar>
    <my-content hasTabBar>
        <a-carousel ref="refId">
            <div v-for="(item,index) in homeImgs" :key="index+item">
                <h3 class="carousel-title">{{index+1}}</h3>
                <img class="carousel-img" :src="item" />
            </div>
        </a-carousel>
        <div class="title">
            <div class="title-left">类别1</div>
            <div class="title-right">查看全部</div>
        </div>
        <div class="product-list">
            <product-card v-for="(item,index) in products" :key="index" class="product-item" :product="item"></product-card>
        </div>
        <div class="title">
            <div class="title-left">类别2</div>
            <div class="title-right">查看全部</div>
        </div>
        <div ref="wrapper" class="product-list-bs">
            <!-- 这里我们增加了一个<div ref="list"></div>标签，原因如下 -->
            <!-- 这里要注意的是，BetterScroll 默认处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略。 -->
            <div ref="list" class="list">
                <product-card v-for="(item,index) in products" :key="index" style="margin-right:15px;" :product="item"></product-card>
            </div>
        </div>
        <div ref="wrapper_bs" class="wrapper_bs_class">
            <div ref="list_bs" class="list_bs_class">
                <div class="card_bs" :style="moreContentStyle(item)" v-for="(item,index) in moreContent" :key="index+item.name">
                    {{item.name}}
                </div>
            </div>
        </div>
    </my-content>
</div>
</template>

<style scoped>
/* >>> to :deep() */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  overflow: hidden;
  position: relative;
  border-radius:15px;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

.carousel-title {
    z-index: 1;
    position: absolute;
    top: 0px;
    left: 50%;
}

.carousel-img {
    position: absolute;
    top:0px;
    left:0px;
    object-fit: cover;
    width:100%;
    height:160px;
}

.title {
    display:flex;
    justify-content: space-between;
    margin-top:24px;
}

.title-left {
    font-size:14px;
    font-weight: bold;
    color:rgb(0 0 0 / 0.5);
}

.title-right {
    color:#B620E0;
    font-size:13px;
    align-self: baseline;
}

.product-item {
    flex-shrink:0;
    margin-right:15px;
}

.product-list {
    display:flex;
    overflow-x: auto;
    margin-top:18px;
    padding:2px;
    box-sizing: border-box;
}

.product-list-bs {
    margin-top:18px;
    overflow: hidden;
    touch-action: none;
}

.wrapper_bs_class {
    margin-top:32px;
    overflow:hidden;
}

.list {
    display: flex;
}

.list_bs_class {
    display:flex;
}

.card_bs {
    margin-right:12px;
    flex-shrink: 0;
    width:120px;
    height:90px;
    border-radius:15px;
    background-color: #e5e5e5;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:20px;
    font-weight:bold;
}

::-webkit-scrollbar {
    display:none;
}

</style>