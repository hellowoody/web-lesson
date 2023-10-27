<template>
    <div class="content" ref="contentRef">
        <div v-if="loading" class="loading">{{ msg }}</div>
        <slot></slot>
    </div>
</template>

<script setup>
import { ref,onMounted,getCurrentInstance } from 'vue';

const props = defineProps({
    hasTabBar:{
        type:Boolean,
        default:false 
    },
    pull:{
        type:Boolean,
        default:false
    },
    // refreshFunc 是异步的 并且用promise修饰的
    refreshFunc:{
        type:Function,
        default:()=>{}
    }
})

const msg = ref("下拉刷新")
const loading = ref(false)
const top_bar_h = 65;
const tab_bar_h = 58;
const sub_height = props.hasTabBar ? (top_bar_h+tab_bar_h)+"px" : top_bar_h+"px"
let touchStart = 0, distance = 0;

onMounted(() => {
    if(props.pull){
        const app = getCurrentInstance().refs.contentRef
        // 往下拉

        app.addEventListener('touchstart', function(e){

            // console.log(e.targetTouches)
            touchStart = e.targetTouches[0].clientY
        },{passive:true})

        app.addEventListener('touchmove', function(e){
            const scrollTop = app.scrollTop
            // console.log("scrollTop",scrollTop)
            if(scrollTop === 0 ){
                distance = e.targetTouches[0].clientY - touchStart
                // // console.log(distance)
                if(distance > 0){
                    loading.value = true
                    if(distance <= 50){
                        app.style.transform = `translateY(${distance}px)`
                    }
                }
            }
           
        },{passive:true})

        app.addEventListener('touchend', function(){
            if(distance === 0 ){
                return 
            }
            msg.value = "正在加载"
            
            props.refreshFunc().then((res) => {
                if(res.code === "ok"){
                    msg.value = "加载完成"
                }else{
                    msg.value = "加载失败"
                }
            }).catch(e => {
                console.log(e)
                msg.value = "加载异常"
            }).finally(() => {
                setTimeout(() => {
                    touchStart = 0, distance = 0;
                    loading.value = false
                    msg.value = "下拉刷新"
                    app.style.transform = "translateY(0px)"
                },1000)
            })
                        
        },{passive:true})
    }
})
</script>

<style scoped>
.content {
    padding:20px;
    box-sizing: border-box;
    height:calc(100vh - v-bind(sub_height));
    background-color: #fff;
    overflow-y: auto;
    transition: all 500ms ease;
}

.loading {
    display: flex;
    justify-content: center;
    color:#7f7f7f;
    font-size: 16px;
    margin-bottom: 18px;
}


</style>