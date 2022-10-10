<script setup>
import {ref,onMounted,getCurrentInstance} from "vue";

const props = defineProps({
    hasTabBar:{
        type:Boolean, // true 一级页面 ｜ false 非一级页面
        default:false
    },
    refreshFunc:{
        type:Function,
        default:function(){}
    },
    pull:{
        type:Boolean,
        default:false
    }
})

const loading = ref(false);
const msg = ref("下拉刷新")
let touchstart = 0,distance = 0 ;
const topbar_height = 65
const tabbar_height = 58
const sub_height = props.hasTabBar ? (topbar_height+tabbar_height)+"px" : topbar_height+"px"

onMounted(() => {
    if(props.pull){
        // console.log("v-dom已经渲染",getCurrentInstance())
        const app = getCurrentInstance().refs.contentRef
        // console.log("app:",app)
        /*
            手动控制手指移动屏幕的距离，本质上是监听touchstart，touchmove，touchend这三个事件
        
        */ 
        // touchstart 获取手指刚触碰屏幕时的事件，这个事件里有手指位于屏幕的坐标    
        app.addEventListener("touchstart",e => {
            if(loading.value){
                // 阻止冒泡操作
                e.stopPropagation()
                return
            }
            touchstart = e.targetTouches[0].clientY
        },{passive:true})

        app.addEventListener("touchmove",e => {
            if(loading.value){
                // 阻止冒泡操作
                e.stopPropagation()
                return
            }
            const scroll_top = app.scrollTop;
            // 当scrollTop大于0时，说明页面在向上滑动，所以我们不需要计算distance，让浏览器“休息”
            if(scroll_top === 0){
                distance = e.targetTouches[0].clientY - touchstart
                // console.log("distance:",distance)
                // 当distance > 0 说明搜索结果区域是向下“拽”
                if(distance > 0 ){
                    loading.value = true;
                    // 给下拉下载设置下拉的最大距离
                    if(distance <= 50){
                        app.style.transform = `translate(0,${distance}px)`;
                    }
                }
            } 
            
        },{passive:true})

        // 手指放开，目的是让计算中的变量重置 touchstart，distance = 0，translate(0,0px)
        app.addEventListener("touchend",e => {
            // 防止用户没有手指移动，直接点击后放开的场景
            if(distance === 0) {
                return 
            }

            msg.value = "正在加载"
            // 既然它是组件，那就需要复用
            props.refreshFunc().then(res => {
                // console.log("真实请求的结果：",res)
                if(res.code === "ok") {
                    msg.value = "加载成功"
                }else{
                    msg.value = "加载失败"
                }
                // 注意：这里的setTimout是为了是msg显示为“两段式”，先显示加载是否成功，然后隔几秒后再重置最初的状态
                setTimeout(() => {
                    touchstart = 0
                    distance = 0
                    app.style.transform = `translate(0,0)`;
                    loading.value = false;
                    msg.value = "下拉刷新"
                },1000)
            })
        },{passive:true})
    }
})

</script>

<template>
    <div ref="contentRef" class="content">
        <div v-if="loading" class="loading">{{msg}}</div>
        <slot></slot>
    </div>
</template>

<style scoped>
.content{
    padding:12px;
    box-sizing: border-box;
    height:calc(100vh - v-bind(sub_height));
    overflow-y: auto;
    transition: 500ms;
    /* transition: all 500ms linear; */
    /* 样式变化时的过渡效果 */
}

.loading {
    display:flex;
    justify-content: center;
    font-size:16px;
    color:#7f7f7f;
}
/* 隐藏滚动条 */
::-webkit-scrollbar {
    display:none;
}

</style>