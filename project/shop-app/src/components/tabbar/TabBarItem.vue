<script setup>
import { computed } from "vue";
import {useRouter,useRoute} from "vue-router";
const router = useRouter()
const route = useRoute()
const props = defineProps({
    name:{
        type:String,
        default:"标题"
    },
    icon:{
        type:String,
        default:"iconfont icon-shangpinfenlei"
    },
    path:String
})

const doActive = () => {
    if(route.path !== props.path){
        router.replace({
            path:props.path
        })
    }
}

const actveStyle = computed(() => {
    /*
        1.拿到当前访问的这个路由地址
        2.拿到本组件要前往的目的地址
        3.判断这连个地址是否一样，如果一样，那说明本标签是被激活的
    */ 
    // return route.path.indexOf(props.path) > -1 ? {color:'#B620E0'} : null
    return route.path === props.path ? {color:'#B620E0'} : null
})

</script>

<template>
    <div @click="doActive" class="tab-bar-item" :style="actveStyle">
        <slot name="icon">
            <div :class="icon" :style="{'fontSize':'20px'}"></div>
        </slot>
        <div style="font-size:13px;">{{name}}</div>
    </div>
</template>

<style scoped>
.tab-bar-item {
    flex:1;
    display:flex;
    flex-direction: column;
    align-items:center;
}
</style>