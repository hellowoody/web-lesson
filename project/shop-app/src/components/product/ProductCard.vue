<script setup>
import {computed} from "vue"
import {useRouter} from "vue-router"
import {useStore} from "vuex"

const store = useStore()
const router = useRouter()
const props = defineProps({
    product:Object 
})

const imgStyle = computed(() => props.product.imgpath && props.product.imgpath !== '' ? ({
        backgroundImage:`url(${props.product.imgpath})`,
        backgroundSize:'cover'
    }) : ""
)

const goto = () => {
    // console.log("跳转明细页面")
    store.commit("pageDirection/setDirection","forward")
    router.push({
        path:"/gooddetail/"+props.product.id+"/"+props.product.type.id
    })
}
</script>

<template>
    <div @click="goto" class="product-card">
        <div class="product-img" :style="imgStyle"></div>
        <div class="product-desc">
            <div style="color:rgb(0 0 0 / 0.5)">
                {{product.name}}
            </div>
            <div style="color:#FA6400">
                ¥{{product.price}}
            </div>
        </div>
    </div>
</template>

<style scoped>
.product-card {
    box-shadow: 0px 1px 8px #e3e3e3;
    background-color: #fff;
    height:167px;
    width:138px;
    border-radius:15px;
}

.product-img {
    height:105px;
    background-color:#e5e5e5;
    border-top-left-radius:15px;
    border-top-right-radius:15px;
}

.product-desc {
    padding:12px;
    box-sizing: border-box;
    font-size:14px;
}
</style>