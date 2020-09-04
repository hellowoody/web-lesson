<template>
    <div>
        <top-bar :focusFunc="search" >
            <div slot="right" @click="goto('/cart')" class="iconfont icon-gouwuchezhengpin" style="font-size: 24px"></div>
        </top-bar>
        <my-content>
            <div >this is A Page</div>
            <div class="product-card-list">
                <product-card style="flex-shrink: 0;margin-right:12px;" v-for="item in 6" :product="productData" :key="item" />
            </div>
        </my-content>
    </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar'
import MyContent from '@/components/content/MyContent'
import ProductCard from '@/components/product/ProductCard'

export default {
    name:'A',
    data(){
        return {
            productData : {
                name:"Iphone x 64",
                price:"¥ 10000"
            }
        }
    },
    components:{
        TopBar,
        MyContent,
        ProductCard
    },
    created:()=>{

    },
    methods:{
        goto(path){
            this.$router.push({path})
        },
        search(){
            this.$router.push({path:'/search'})
        },
    }
}
</script>

<style scoped>
.product-card-list {
    display: flex;
    overflow-x: auto;
    margin-top:16px;
}
/* 隐藏滚动进度条 */
::-webkit-scrollbar {
    display: none;
}
</style>