<template>
    <div class="tab-bar-item" @click="doActive" :style="activeStyle">
        <slot name="icon">
            <div  class="iconfont icon-shouye" style="font-size:28px"></div>
        </slot>
        <div style="font-size: 13px;margin-top: 2px;">{{ name }}</div>
    </div>
</template>
<script setup>
import {computed} from "vue"
import {useRouter,useRoute} from "vue-router"
const router = useRouter();
const route = useRoute();


const props = defineProps({
    name:{
        type:String,
        default:"标题"
    },
    path:String
})

const activeStyle = computed(()=>{
    return props.path === route.path ? {
        color: '#B620E0'
    } : {}
})

const doActive = ()=>{
    if(route.path !== props.path){
        // console.log(route.path , props.path)
        router.replace({
            path:props.path
        })
    }
}

</script>
<style scoped>
.tab-bar-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex:1;
}
</style>