<script setup>
import {ref,onMounted} from "vue";
const props = defineProps({
    hasTabBar:Boolean // true 一级页面 | false 非一级页面
})

const loading = ref(false);
const contentRef = ref(null);  // proxy { value:<div class="my-content"></div> }
const topbar_height = 60;
const tabbar_height = 58;
// sub_xxx 待减数
const sub_height = props.hasTabBar ? topbar_height + tabbar_height + "px" : topbar_height + "px"

let touchstart = 0,  // 记录手指第一次碰屏幕时的y轴距离
    distance = 0;    // 手指y轴滑动距离

// 保证钩子函数中的代码能拿到页面的中渲染好的标签/节点
onMounted(() => {
    // 这里就是钩子函数中的代码
    const content = contentRef.value;
    /*
        分析1:任何一个标签都有一个属性scrollTop，这个属性可读可写
             使用content这个标签的scrollTop作为一个标识位
             这个标识位作用是，通过是否大于0来判断 下拉刷新的监听事件是否执行或是是否继续
    */ 
    /*
        分析2:通过以往的基础知识的掌握，我们可以通过监听touchstart，touchmove，touchend
              这一组事件来控制content的纵向移动
    */
    //  touchstart 监听手指刚触碰content标签时的那一瞬间事件 
    content.addEventListener("touchstart",function(e){
        // console.log(e)
        touchstart = e.targetTouches[0].clientY;       // 存下来手指第一次碰content标签的y轴高度
    },{passive:false})
    //  touchmove 计算手指在屏幕移动的纵向距离
    content.addEventListener("touchmove",function(e){
        if(touchstart <= 0) { return }
        const touch = e.targetTouches[0];
        const scrollTop = content.scrollTop;
        // 通过分析1得出的结论， 只有当scrollTop === 0 时，下拉刷新才会生效
        if(scrollTop === 0){
            distance = touch.clientY - touchstart ; // 手指在y轴的滑动距离
            if(distance > 0){
                if(distance <= 50){
                    // 通过js 让class=“content”的div在y轴中进行向下移动
                    content.style.transform = `translate3d(0,${distance}px,0)`
                }
            }
        }
    },{passive:false})
    content.addEventListener("touchend",function(e){
        if(distance === 0) { return }
        if(distance > 0) {
            setTimeout(() => {
                content.style.transform = `translate3d(0,0,0)`;
                distance = 0 ;
                touchstart =0 ;
            },800)
        }
    },{passive:false})
})
</script>

<template>
    <div ref="contentRef" class="my-content">
        <div v-if="loading" class="loading">正在加载</div>
        <slot></slot>
    </div>
</template>

<style scoped>
.my-content {
    padding:24px;
    box-sizing:border-box;
    overflow-x: hidden;
    overflow-y: auto;
    height: calc(100vh - v-bind(sub_height));
    --webkit-overflow-scrolling:touch;
}

.loading {
    display:flex;
    justify-content: center;
    font-size:16px;
    color:rgba(0,0,0,0.5)
}
</style>