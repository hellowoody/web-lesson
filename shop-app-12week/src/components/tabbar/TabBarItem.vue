<script setup>
import {computed} from "vue"
import {useRouter,useRoute} from "vue-router"

/*
    route : 当前激活或者当前正访问的这个路由
    router: 项目路由的全局对象
*/ 
const route = useRoute()
const router = useRouter()
// if(route.path === props.path){
//     console.log("route:",route)
//     console.log("router:",router)
// }

const props = defineProps({
    name:{
        type:String,
        default:"标题"
    },
    path:String
})

const doActive = () => {
    // 改变router 路由的路径
    if(route.path !== props.path){
        router.replace({
            path:props.path
        })
    }
}


const activeStyle = computed(() => {
    /*
        1.拿到当前这个item代表的路由地址 props.path
        2.拿到当前正在访问的地址        route.path
        3.判断两个地址是否一样，如果一样的那么将样式编程激活
    */
   return route.path === props.path ? {color:"#b620e0"} : null
})
</script>

<template>
    <div class="tab-bar-item" @click="doActive" :style="activeStyle">
        <slot name="icon">
            <div class="iconfont icon-Homehomepagemenu"></div>
        </slot>
        <div style="font-size:13px;">{{name}}</div>
    </div>
</template>

<style>
.tab-bar-item {
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>