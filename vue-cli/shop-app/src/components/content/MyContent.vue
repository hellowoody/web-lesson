<template>
    <div ref="content" class="my-content">
        <div v-if="loading">下拉刷新</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"MyContent",
    props:{
        refreshFunc:Function
    },
    data(){
        return {
            loading : false,
            touchstart : 0, // 手指触摸屏幕的起点
            distance : 0.   // 手指滑动的距离
        }
    },
    mounted(){
        const content = this.$refs.content
        // const content = document.getElementById("content") // 这种方式不可以，应为vue中的dom元素是v-dom 虚拟dom元素，所以没办法增加监听事件
        content.addEventListener("touchstart",(e)=>{
            if(this.loading){
                e.preventDefault(); //阻止冒泡事件
                return 
            }
            // 获取手指第一此触碰屏幕所在的位置
            this.touchstart = e.targetTouches[0].clientY
        })

        content.addEventListener("touchmove",(e)=>{
            if (this.touchstart <= 0){
                e.preventDefault(); //阻止冒泡事件
                return
            }
            if(this.loading){
                e.preventDefault()
                return
            }
            const touch = e.targetTouches[0]
            const scrollTop = content.scrollTop

            if(scrollTop === 0){
                this.distance = touch.clientY - this.touchstart
                if (this.distance > 0) {
                    e.preventDefault()
                }
            }

        })

        content.addEventListener("touchend",(e)=>{
            if(this.distance === 0){
                e.preventDefault()
                return 
            }
            if(this.loading){
                e.preventDefault()
                return
            }
            if(this.distance > 0){
                this.loading = true
                this.refreshFunc().then(()=>{
                    this.loading = false
                })
            }
        })
    }
}
</script>

<style scoped>

.my-content {
    padding:24px;
    height: 100vh;
    overflow-x:hidden; /* 防止横向滚动条 */
    margin-bottom: 55px;
}

</style>